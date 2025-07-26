"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ArrowRight, Sparkles } from "lucide-react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from "next/navigation";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./components/Nav";

export default function Layout({ children }) {
  const [search, setSearch] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [results, setResults] = useState([]);
  const [searchHistory, setSearchHistory] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const router = useRouter();

  // Default predefined searches based on functionality_map.py
  const defaultSearches = [
    { intent: "Buy Elevate", route: "/buy-policy/health/elevate", icon: "Elevate" },
    { intent: "Buy Policy", route: "/buy-policy/retailNcorporate", icon: "Policy" },
    { intent: "IL DriveSmart", route: "/benefits/motor", icon: "DriveSmart" },
    { intent: "Health Records", route: "/benefits/health", icon: "Records" },
    { intent: "RIA", route: "/help/ria", icon: "RIA" },
    { intent: "Face Scan", route: "/face-scan", icon: "Scan" }
  ];
  
  // Functionality map based on processor.py and functionality_map.py
  const functionalityMap = {
    "Add Policy": { route: "/add-policy", category: "Policy" },
    "Add Health Policy": { route: "/add-policy/health", category: "Health" },
    "Add Vehicle Policy": { route: "/add-policy/vehicle", category: "Vehicle" },
    "Add Travel Policy": { route: "/add-policy/travel", category: "Travel" },
    "Add Home Policy": { route: "/add-policy/home", category: "Home" },
    "Buy Health Insurance": { route: "/buy-policy/health", category: "Health" },
    "Buy Elevate": { route: "/buy-policy/health/elevate", category: "Elevate" },
    "Buy MaxProtect": { route: "/buy-policy/health/maxprotect", category: "MaxProtect" },
    "Buy Car Insurance": { route: "/buy-policy/car", category: "Car" },
    "Buy Bike Insurance": { route: "/buy-policy/bike", category: "Bike" },
    "Buy Travel Insurance": { route: "/buy-policy/travel", category: "Travel" },
    "Buy Home Insurance": { route: "/buy-policy/home", category: "Home" },
    "Face Scan": { route: "/face-scan", category: "Scan" },
    "Driving Score": { route: "/driving-score", category: "Score" },
    "View Challans": { route: "/benefits/motor", category: "Challans" },
    "IL DriveSmart": { route: "/benefits/motor", category: "DriveSmart" },
    "Health Records": { route: "/benefits/health", category: "Records" },
    "View Health Quotient": { route: "/benefits/health", category: "Health" },
    "ABHA Id": { route: "/benefits/health", category: "ABHA" },
    "Blogs": { route: "/blogs", category: "Blogs" },
    "Ayurveda Blogs": { route: "/blogs/ayurveda-hub", category: "Ayurveda" },
    "Wellness Blogs": { route: "/blogs/wellness-blogs", category: "Wellness" },
    "FAQs": { route: "/help/faqs", category: "FAQs" },
    "RIA": { route: "/help/ria", category: "RIA" }
  };

  // Load search history from localStorage on component mount
  useEffect(() => {
    const storedHistory = localStorage.getItem('searchHistory');
    if (storedHistory) {
      setSearchHistory(JSON.parse(storedHistory));
    } else {
      setSearchHistory(defaultSearches);
    }
  }, []);

  // Handle input change and generate suggestions
  const handleInputChange = (value) => {
    setSearch(value);
    
    if (value.trim() === "") {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }
    
    // Generate suggestions from search history
    const historyMatches = searchHistory.filter(item => 
      item.intent.toLowerCase().includes(value.toLowerCase())
    );
    
    // Generate suggestions from functionality map
    const functionalityMatches = Object.entries(functionalityMap)
      .filter(([intent]) => intent.toLowerCase().includes(value.toLowerCase()))
      .map(([intent, { route, category }]) => ({
        intent,
        route,
        icon: category
      }));
    
    // Combine and deduplicate suggestions
    const allSuggestions = [...historyMatches];
    
    // Add functionality matches that aren't already in history matches
    functionalityMatches.forEach(funcMatch => {
      if (!allSuggestions.some(item => item.intent === funcMatch.intent)) {
        allSuggestions.push(funcMatch);
      }
    });
    
    setSuggestions(allSuggestions.slice(0, 6)); // Limit to 6 suggestions
    setShowSuggestions(allSuggestions.length > 0);
  };

  // Search function that's called when user hits enter
  const handleSearch = async (value) => {
    if (value.trim() === "") return;

    try {
      // Show loading state
      setResults([{ intent: "Searching...", route: "", icon: "Search" }]);
      
      const response = await fetch("http://127.0.0.1:8000/predict/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: value }),
      });

      if (response.ok) {
        let data = await response.json();
        
        // Check if we got actual results or an error message
        if (Array.isArray(data) && data.length > 0) {
          // Enhance the data with icon information
          data = data.map(item => ({
            ...item,
            icon: functionalityMap[item.intent]?.category || getIconTypeFromIntent(item.intent)
          }));
          
          setResults(data);
          
          // Update search history with the top result
          if (data.length > 0) {
            // Add the top result to history
            const newItem = { ...data[0] };
            
            // Create new history array without the item if it already exists
            const filteredHistory = searchHistory.filter(item => 
              item.intent.toLowerCase() !== newItem.intent.toLowerCase()
            );
            
            // Add the new item at the beginning and keep only the last 6
            const newHistory = [newItem, ...filteredHistory].slice(0, 6);
            setSearchHistory(newHistory);
            
            // Save to localStorage
            localStorage.setItem('searchHistory', JSON.stringify(newHistory));
          }
        } else if (data.message) {
          // Handle "no matching intents" message
          // Try to find matching intents in functionality map
          const searchLower = value.toLowerCase();
          const fallbackResults = Object.entries(functionalityMap)
            .filter(([intent]) => intent.toLowerCase().includes(searchLower))
            .map(([intent, { route, category }]) => ({
              intent,
              route,
              icon: category,
              score: 0.85 // Default score for fallback results
            }));
          
          if (fallbackResults.length > 0) {
            setResults(fallbackResults);
            
            // Update history with top fallback result
            const newItem = { ...fallbackResults[0] };
            const filteredHistory = searchHistory.filter(item => 
              item.intent.toLowerCase() !== newItem.intent.toLowerCase()
            );
            const newHistory = [newItem, ...filteredHistory].slice(0, 6);
            setSearchHistory(newHistory);
            localStorage.setItem('searchHistory', JSON.stringify(newHistory));
          } else {
            // No results found anywhere
            setResults([{
              intent: `No results for "${value}"`,
              route: "/help",
              icon: "Help",
              score: 0
            }]);
          }
        }
      } else {
        // API error, try to provide fallback results
        const searchLower = value.toLowerCase();
        const fallbackResults = Object.entries(functionalityMap)
          .filter(([intent]) => intent.toLowerCase().includes(searchLower))
          .map(([intent, { route, category }]) => ({
            intent,
            route,
            icon: category,
            score: 0.85
          }));
        
        if (fallbackResults.length > 0) {
          setResults(fallbackResults);
        } else {
          setResults([{
            intent: `Error fetching results for "${value}"`,
            route: "/help",
            icon: "Help",
            score: 0
          }]);
        }
      }
    } catch (error) {
      console.error("Error fetching search results:", error);
      setResults([{
        intent: `Error fetching results for "${value}"`,
        route: "/help",
        icon: "Help",
        score: 0
      }]);
    }
  };

  const handleRedirect = (route) => {
    router.push(route);
    setIsSearchOpen(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSearch(search);
    }
  };
  
  // Helper function to extract icon type from intent
  const getIconTypeFromIntent = (intent) => {
    const keywords = [
      "Health", "Elevate", "MaxProtect", "Active", "Booster", "AdvantEdge",
      "Vehicle", "Bike", "Car", "Travel", "Home", "Face", "Scan", "Driving",
      "Score", "Challans", "Licence", "PUC", "DriveSmart", "Self", "Steps",
      "Records", "Quotient", "ABHA", "Track", "Documents", "Blogs", "Ayurveda",
      "Wellness", "Motor", "FAQs", "RIA", "Policy", "Corporate", "Retail"
    ];
    
    for (const keyword of keywords) {
      if (intent.includes(keyword)) {
        return keyword;
      }
    }
    
    return "General";
  };

  // Function to determine which icon to render based on icon name or intent
  const renderIcon = (iconName, intent = "") => {
    // Map intents/keywords to icons and colors
    const iconMapping = {
      // Icon names
      'HeartPulse': { icon: '❤️', bgColor: 'bg-soft-red', textColor: 'text-danger' },
      'ShoppingBag': { icon: '🛍️', bgColor: 'bg-soft-blue', textColor: 'text-primary' },
      'Car': { icon: '🚗', bgColor: 'bg-soft-green', textColor: 'text-success' },
      'Stethoscope': { icon: '🩺', bgColor: 'bg-soft-teal', textColor: 'text-info' },
      'MessageCircle': { icon: '💬', bgColor: 'bg-soft-orange', textColor: 'text-warning' },
      
      // Intent-based mapping from functionality_map
      'Health': { icon: '🏥', bgColor: 'bg-soft-red', textColor: 'text-danger' },
      'Elevate': { icon: '⬆️', bgColor: 'bg-soft-purple', textColor: 'text-purple' },
      'MaxProtect': { icon: '🛡️', bgColor: 'bg-soft-blue', textColor: 'text-primary' },
      'Active': { icon: '🏃', bgColor: 'bg-soft-green', textColor: 'text-success' },
      'Booster': { icon: '🚀', bgColor: 'bg-soft-indigo', textColor: 'text-indigo' },
      'AdvantEdge': { icon: '✨', bgColor: 'bg-soft-cyan', textColor: 'text-info' },
      'Vehicle': { icon: '🚙', bgColor: 'bg-soft-green', textColor: 'text-success' },
      'Bike': { icon: '🏍️', bgColor: 'bg-soft-green', textColor: 'text-success' },
      'Travel': { icon: '✈️', bgColor: 'bg-soft-blue', textColor: 'text-primary' },
      'Home': { icon: '🏠', bgColor: 'bg-soft-brown', textColor: 'text-brown' },
      'Face': { icon: '👤', bgColor: 'bg-soft-indigo', textColor: 'text-indigo' },
      'Scan': { icon: '📱', bgColor: 'bg-soft-purple', textColor: 'text-purple' },
      'Driving': { icon: '🚦', bgColor: 'bg-soft-green', textColor: 'text-success' },
      'Score': { icon: '📊', bgColor: 'bg-soft-orange', textColor: 'text-warning' },
      'Challans': { icon: '📑', bgColor: 'bg-soft-red', textColor: 'text-danger' },
      'Licence': { icon: '🪪', bgColor: 'bg-soft-blue', textColor: 'text-primary' },
      'PUC': { icon: '♻️', bgColor: 'bg-soft-teal', textColor: 'text-success' },
      'DriveSmart': { icon: '🚘', bgColor: 'bg-soft-green', textColor: 'text-success' },
      'Self': { icon: '🔍', bgColor: 'bg-soft-purple', textColor: 'text-purple' },
      'Steps': { icon: '👣', bgColor: 'bg-soft-teal', textColor: 'text-teal' },
      'Records': { icon: '📋', bgColor: 'bg-soft-cyan', textColor: 'text-info' },
      'Quotient': { icon: '📈', bgColor: 'bg-soft-indigo', textColor: 'text-indigo' },
      'ABHA': { icon: '🏥', bgColor: 'bg-soft-red', textColor: 'text-danger' },
      'Track': { icon: '⏱️', bgColor: 'bg-soft-orange', textColor: 'text-warning' },
      'Documents': { icon: '📄', bgColor: 'bg-soft-blue', textColor: 'text-primary' },
      'Blogs': { icon: '📝', bgColor: 'bg-soft-indigo', textColor: 'text-indigo' },
      'Ayurveda': { icon: '🌿', bgColor: 'bg-soft-teal', textColor: 'text-success' },
      'Wellness': { icon: '🧘', bgColor: 'bg-soft-teal', textColor: 'text-teal' },
      'Motor': { icon: '🔧', bgColor: 'bg-soft-blue', textColor: 'text-primary' },
      'FAQs': { icon: '❓', bgColor: 'bg-soft-purple', textColor: 'text-purple' },
      'RIA': { icon: '🤖', bgColor: 'bg-soft-orange', textColor: 'text-warning' },
      'Policy': { icon: '📜', bgColor: 'bg-soft-blue', textColor: 'text-primary' },
      'Corporate': { icon: '🏢', bgColor: 'bg-soft-blue', textColor: 'text-primary' },
      'Retail': { icon: '🛒', bgColor: 'bg-soft-green', textColor: 'text-success' }
    };

    // First try direct match with iconName
    if (iconName && iconMapping[iconName]) {
      return (
        <div className={`icon-circle ${iconMapping[iconName].bgColor} ${iconMapping[iconName].textColor}`}>
          {iconMapping[iconName].icon}
        </div>
      );
    }

    // If we have an intent, try to match keywords in the intent
    if (intent) {
      const words = intent.split(' ');
      for (const word of words) {
        if (iconMapping[word]) {
          return (
            <div className={`icon-circle ${iconMapping[word].bgColor} ${iconMapping[word].textColor}`}>
              {iconMapping[word].icon}
            </div>
          );
        }
      }
    }

    // Default icon if no match
    return (
      <div className="icon-circle bg-soft-gray text-secondary">
        IL
      </div>
    );
  };

  return (
    <html lang="en">
      <head>
        <style jsx global>{`
          @keyframes gentle-shake {
            0% { transform: translateY(-50%) translateX(0); }
            25% { transform: translateY(-50%) translateX(-1px); }
            50% { transform: translateY(-50%) translateX(0); }
            75% { transform: translateY(-50%) translateX(1px); }
            100% { transform: translateY(-50%) translateX(0); }
          }
          
          @keyframes bookmark-shine {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          
          .search-trigger {
            position: fixed;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 50px;
            height: 60px;
            background: linear-gradient(135deg, #FF6600, #FF9A00);
            border-radius: 15px 0 0 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            box-shadow: -3px 0 15px rgba(0, 0, 0, 0.1);
            z-index: 999;
            transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            overflow: hidden;
          }
          
          .search-trigger::before {
            content: '';
            position: absolute;
            top: -5px;
            left: 0;
            right: 0;
            height: 10px;
            background: rgba(0, 0, 0, 0.1);
            z-index: -1;
          }
          
          .bookmark-ribbon {
            position: absolute;
            top: 0;
            left: 10px;
            width: 30px;
            height: 10px;
            background: #FF9A00;
            z-index: -1;
          }
          
          .bookmark-ribbon::before {
            content: '';
            position: absolute;
            top: 0;
            left: -10px;
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 0 10px 10px 0;
            border-color: transparent #FF9A00 transparent transparent;
          }
          
          .bookmark-ribbon::after {
            content: '';
            position: absolute;
            top: 0;
            right: -10px;
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 10px 10px 0 0;
            border-color: #FF9A00 transparent transparent transparent;
          }
          
          .search-trigger:hover {
            width: 60px;
            background: linear-gradient(135deg, #FF6600, #FF9A00, #FF6600);
            background-size: 200% 200%;
            animation: bookmark-shine 3s ease infinite;
            box-shadow: -5px 0 20px rgba(255, 102, 0, 0.3);
            transform: translateY(-5px);
            transition: transform 0.1s ease, width 0.1s ease, background 0.1s ease, box-shadow 0.1s ease;
          }
          
          /* Combined hover styles above */
          
          .search-icon-container {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
            /* Remove individual animation from container */
          }
          
          .sparkle-icon {
            position: absolute;
            top: -7px;
            right: -7px;
            transform: scale(0.7);
            filter: drop-shadow(0 0 2px rgba(255, 255, 255, 0.7));
          }
          
          @keyframes sparkle-animation {
            0% { transform: scale(0.7) rotate(0deg); opacity: 0.8; }
            50% { transform: scale(0.9) rotate(10deg); opacity: 1; }
            100% { transform: scale(0.7) rotate(0deg); opacity: 0.8; }
          }
          
          .search-trigger:hover .sparkle-icon {
            animation: sparkle-animation 2s ease-in-out infinite;
          }
          
          .search-modal {
            background: rgba(255, 255, 255, 0.95);
            border-radius: 12px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
          }
          
          .search-input {
            border: none;
            border-bottom: 2px solid #FF6600;
            border-radius: 0;
            font-size: 1.2rem;
            padding: 0.75rem 0.5rem;
            transition: all 0.2s ease;
            background: transparent;
            width: 100%;
          }
          
          .search-input:focus {
            outline: none;
            box-shadow: none;
            border-bottom-width: 3px;
          }
          
          .result-item {
            transition: all 0.2s ease;
            border-left: 3px solid transparent;
          }
          
          .result-item:hover {
            background: #f8f9fa;
            border-left: 3px solid #FF6600;
            transform: translateX(5px);
          }
          
          .suggestion-item {
            cursor: pointer;
            padding: 8px 12px;
            border-radius: 6px;
            transition: all 0.2s ease;
          }
          
          .suggestion-item:hover {
            background: #f0f0f0;
          }
          
          .icon-circle {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 12px;
            font-weight: bold;
            font-size: 18px;
            box-shadow: 0 2px 6px rgba(0,0,0,0.08);
            transition: all 0.2s ease;
          }
          
          .recent-grid-item {
            transition: all 0.2s ease;
            cursor: pointer;
            border-radius: 10px;
            overflow: hidden;
            background: #f8f9fa;
            border: 1px solid #f0f0f0;
            position: relative;
            z-index: 1;
          }
          
          .recent-grid-item:hover {
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.05);
            border-color: #FF6600;
          }
          
          .recent-grid-item:hover::after {
            opacity: 1;
          }
          
          .recent-grid-item::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 3px;
            background: linear-gradient(90deg, #FF6600, #FF9A00);
            opacity: 0;
            transition: opacity 0.2s ease;
            z-index: -1;
          }
          
          .recent-grid-item .icon-circle {
            margin: 0 auto 8px auto;
            width: 45px;
            height: 45px;
            font-size: 20px;
          }
          
          /* Soft background colors for icons */
          .bg-soft-red { background-color: rgba(255, 92, 92, 0.15); }
          .bg-soft-blue { background-color: rgba(76, 124, 255, 0.15); }
          .bg-soft-green { background-color: rgba(29, 201, 122, 0.15); }
          .bg-soft-teal { background-color: rgba(32, 201, 151, 0.15); }
          .bg-soft-orange { background-color: rgba(252, 152, 54, 0.15); }
          .bg-soft-purple { background-color: rgba(165, 94, 234, 0.15); }
          .bg-soft-indigo { background-color: rgba(102, 16, 242, 0.15); }
          .bg-soft-cyan { background-color: rgba(23, 162, 184, 0.15); }
          .bg-soft-gray { background-color: rgba(108, 117, 125, 0.15); }
          .bg-soft-brown { background-color: rgba(165, 101, 42, 0.15); }
          
          /* Text colors to match soft backgrounds */
          .text-purple { color: rgb(128, 47, 202); }
          .text-indigo { color: rgb(79, 12, 201); }
          .text-teal { color: rgb(21, 143, 107); }
          .text-brown { color: rgb(130, 80, 33); }
          
          .history-title {
            font-size: 0.8rem;
            color: #6c757d;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-top: 12px;
            margin-bottom: 8px;
          }
          
          .blur-background {
            filter: blur(4px);
          }
          
          .modal-overlay {
            background: rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(5px);
          }
          
          .search-modal {
            background: rgba(255, 255, 255, 0.98);
            border-radius: 12px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
          }
        `}</style>
      </head>
      <body>
        <div className="position-relative min-vh-100 overflow-hidden">
          <Router>
            {children}
          </Router>

          {/* Search trigger button on right side */}
          <motion.div 
            className="search-trigger" 
            onClick={() => setIsSearchOpen(true)}
            whileHover={{ width: 60 }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 15
            }}
          >
            <div className="search-icon-container">
              <Search color="white" size={24} />
              <Sparkles className="sparkle-icon" color="white" size={16} />
            </div>
            <div className="bookmark-ribbon"></div>
          </motion.div>

          {/* Modal overlay */}
          <AnimatePresence>
            {isSearchOpen && (
              <motion.div 
                className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center modal-overlay"
                style={{ zIndex: 9999 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsSearchOpen(false)}
              >
                {/* Blurred background div - only affects content behind the modal */}
                <div className="position-absolute w-100 h-100 blur-background" style={{ zIndex: -1 }}></div>
                
                {/* Search Modal */}
                <motion.div 
                  className="search-modal w-75 max-w-lg p-4"
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 300, opacity: 0 }}
                  transition={{ type: "spring", damping: 25 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Close button */}
                  <div className="d-flex justify-content-end mb-2">
                    <X 
                      size={24} 
                      className="cursor-pointer text-secondary" 
                      onClick={() => setIsSearchOpen(false)}
                    />
                  </div>
                  
                  {/* Search input */}
                  <div className="mb-4 position-relative">
                    <div className="d-flex align-items-center">
                      <div className="search-icon-container me-2">
                        <Search className="text-primary" color="#FF6600" size={20} />
                        <Sparkles className="sparkle-icon" color="#FF6600" size={16} />
                      </div>
                      <input
                        className="search-input"
                        placeholder="IL QuickSearch..."
                        value={search}
                        onChange={(e) => handleInputChange(e.target.value)}
                        onKeyPress={handleKeyPress}
                        autoFocus
                      />
                    </div>
                    
                    {/* Auto-complete suggestions */}
                    {showSuggestions && search.trim() !== "" && (
                      <div className="position-absolute w-100 bg-white shadow-lg rounded-3 mt-1 p-2 border" style={{ zIndex: 10000 }}>
                        {suggestions.map((item, index) => (
                          <div
                            key={index}
                            className="suggestion-item d-flex align-items-center justify-content-between"
                            onClick={() => {
                              setSearch(item.intent);
                              handleSearch(item.intent);
                              setShowSuggestions(false);
                            }}
                          >
                            <div className="d-flex align-items-center">
                              {renderIcon(item.icon, item.intent)}
                              <div>
                                <span className="fw-medium">{item.intent}</span>
                                <div className="small text-muted text-truncate" style={{ maxWidth: '180px' }}>{item.route}</div>
                              </div>
                            </div>
                            <div>
                              <span className="badge rounded-pill" style={{ 
                                background: 'rgba(255, 102, 0, 0.1)', 
                                color: '#FF6600',
                                fontSize: '0.7rem'
                              }}>
                                {item.icon || getIconTypeFromIntent(item.intent)}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Search results */}
                  {results.length > 0 && (
                    <motion.div 
                      className="mt-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="d-flex align-items-center mb-3">
                        <div className="me-2" style={{ color: '#FF6600' }}>
                          <Search size={18} />
                        </div>
                        <p className="history-title m-0 flex-grow-1" style={{ fontSize: '0.9rem', color: '#FF6600' }}>Search Results</p>
                        <div className="badge" style={{ background: 'rgba(255, 102, 0, 0.15)', color: '#FF6600' }}>{results.length} found</div>
                      </div>
                      <div className="results-list p-1" style={{ maxHeight: '40vh', overflowY: 'auto' }}>
                        {results.map((item, index) => {
                          const iconType = item.icon || getIconTypeFromIntent(item.intent);
                          return (
                            <motion.div
                              key={index}
                              className="result-item p-3 mb-2 rounded-3 d-flex align-items-center justify-content-between bg-white shadow-sm border"
                              style={{ 
                                borderLeft: '3px solid #FF9A00',
                                background: 'linear-gradient(to right, rgba(255, 154, 0, 0.03), transparent)'
                              }}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              onClick={() => handleRedirect(item.route)}
                              whileHover={{ 
                                x: 5, 
                                boxShadow: "0 5px 15px rgba(0,0,0,0.1)", 
                                borderColor: "#FF6600"
                              }}
                            >
                              <div className="d-flex align-items-center">
                                {renderIcon(iconType, item.intent)}
                                <div>
                                  <div className="fw-medium">{item.intent}</div>
                                  <small className="text-muted">{item.route}</small>
                                  {item.score && (
                                    <div className="mt-1">
                                      <div className="progress" style={{ height: "4px", width: "100px" }}>
                                        <div 
                                          className="progress-bar bg-success" 
                                          style={{ width: `${Math.round(item.score * 100)}%` }}
                                        ></div>
                                      </div>
                                      <span className="text-muted" style={{ fontSize: "0.7rem" }}>
                                        Match: {Math.round(item.score * 100)}%
                                      </span>
                                    </div>
                                  )}
                                </div>
                              </div>
                              <div className="d-flex align-items-center">
                                <span className="badge rounded-pill me-2" style={{ 
                                  background: 'rgba(255, 102, 0, 0.1)', 
                                  color: '#FF6600',
                                  fontSize: '0.7rem'
                                }}>
                                  {iconType}
                                </span>
                                <ArrowRight size={16} className="text-primary" />
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}

                  {/* Recent searches section */}
                  <div className={`mt-4 mb-3 ${results.length > 0 ? 'pt-3 border-top' : ''}`}>
                    <div className="d-flex align-items-center mb-3">
                      <div className="me-2" style={{ color: '#6c757d' }}>
                        <ArrowRight size={18} />
                      </div>
                      <p className="history-title m-0">Recent Searches</p>
                    </div>
                    <div className="row row-cols-3 g-2">
                      {searchHistory.slice(0, 6).map((item, index) => (
                        <div key={index} className="col">
                          <div 
                            className="recent-grid-item p-2 h-100 d-flex flex-column align-items-center"
                            onClick={() => handleRedirect(item.route)}
                          >
                            {renderIcon(item.icon, item.intent)}
                            <div className="text-center mt-1">
                              <div className="fw-medium text-truncate" style={{ fontSize: '0.85rem', maxWidth: '100%' }}>
                                {item.intent}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <Nav />
      </body>
    </html>
  );
}
