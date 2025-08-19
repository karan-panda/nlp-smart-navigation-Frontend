"use client";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { 
  FaArrowLeft,
  FaPaperPlane,
  FaRobot,
  FaUser, 
  FaHome,
  FaFileAlt,
  FaGift,
  FaShoppingCart,
  FaLifeRing,
  FaCheck,
  FaCheckDouble,
  FaSpinner,
  FaArrowRight,
  FaExternalLinkAlt
} from "react-icons/fa";
import axios from "axios";

export default function Help() {
  // Log development information about API connection
  useEffect(() => {
    console.info(
      "%cICICI Lombard Chatbot MCP API Integration",
      "color: #FF6600; font-weight: bold; font-size: 14px;"
    );
    console.info(
      "To connect to the backend API, make sure your server is running at: http://localhost:8001/mcp/query"
    );
    console.info(
      "API should accept POST requests with format: { question: string, temperature: number }"
    );
  }, []);
  
  // Client-side only: Update welcome message time after hydration is complete
  useEffect(() => {
    // This runs only on client-side after hydration
    if (typeof window !== 'undefined') {
      setMessages(prevMessages => {
        // If the first message is the welcome message with placeholder time, update it
        if (prevMessages.length > 0 && prevMessages[0].time === "--:--") {
          const updatedMessages = [...prevMessages];
          updatedMessages[0] = {
            ...updatedMessages[0],
            time: formatTime()
          };
          return updatedMessages;
        }
        return prevMessages;
      });
    }
  }, []);

  // Function to format time consistently across server and client
  const formatTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };
  
  // Fixed welcome message with static time to avoid hydration mismatch
  const WELCOME_MESSAGE = {
    sender: "bot", 
    text: "Hello! 👋 I'm your AI Insurance Assistant. How can I help you today?",
    time: "--:--", // Static placeholder time that won't cause hydration errors
    sources: []
  };
  
  // Chat state
  const [messages, setMessages] = useState(() => {
    // Try to load messages from localStorage
    if (typeof window !== 'undefined') {
      const savedMessages = localStorage.getItem('iciciChatMessages');
      return savedMessages ? JSON.parse(savedMessages) : [WELCOME_MESSAGE];
    }
    return [WELCOME_MESSAGE];
  });
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [chatHistory, setChatHistory] = useState(() => {
    // Try to load chat history from localStorage
    if (typeof window !== 'undefined') {
      const savedHistory = localStorage.getItem('iciciChatHistory');
      return savedHistory ? JSON.parse(savedHistory) : [];
    }
    return [];
  });
  const [showClearButton, setShowClearButton] = useState(false);
  const messagesEndRef = useRef(null);
  const messagesContainerRef = useRef(null);
  
  // Sample quick suggestions
  const quickSuggestions = [
    "What is TripSecure+?",
    "How to file a claim?",
    "Health insurance coverage",
    "Car insurance quote",
    "How does this chatbot work?"
  ];

  useEffect(() => {
    scrollToBottom();
    // Save messages to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('iciciChatMessages', JSON.stringify(messages));
    }
    
    // Show clear button if there are messages from the user
    setShowClearButton(messages.some(msg => msg.sender === 'user'));
  }, [messages]);
  
  // Save chat history to localStorage
  useEffect(() => {
    if (typeof window !== 'undefined' && chatHistory.length > 0) {
      localStorage.setItem('iciciChatHistory', JSON.stringify(chatHistory));
    }
  }, [chatHistory]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = async () => {
    if (input.trim() === "") return;

    // All queries now handled by MCP API - removed hardcoded responses

    // Add user message
    const userMessage = { 
      sender: "user", 
      text: input,
      time: formatTime(),
      status: "sent" 
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Update message status to "delivered"
    setTimeout(() => {
      setMessages(prevMessages => 
        prevMessages.map((msg, idx) => 
          idx === prevMessages.length - 1 ? {...msg, status: "delivered"} : msg
        )
      );
    }, 500);

    // Update message status to "read"
    setTimeout(() => {
      setMessages(prevMessages => 
        prevMessages.map((msg, idx) => 
          idx === prevMessages.length - 1 ? {...msg, status: "read"} : msg
        )
      );
    }, 1000);

    try {
      // Show MCP loading message after a delay if response takes long
      let mcpLoadingTimeout = setTimeout(() => {
        setMessages(prev => [
          ...prev,
          {
            sender: "bot",
            text: "Using MCP tool to find the best answer for you...",
            time: formatTime(),
            sources: [],
            isMcpLoading: true
          }
        ]);
      }, 3000); // Show loading message after 3 seconds
      
      // Using the new MCP endpoint
      const response = await axios.post('http://localhost:8001/mcp/query', {
        question: input,
        temperature: 0.3
      }, {
        // Increase timeout to 60 seconds for MCP processing
        timeout: 60000
      });
      
      // Clear the loading message timeout
      clearTimeout(mcpLoadingTimeout);

      // Update chat history
      setChatHistory(prev => [...prev, {
        human: input,
        ai: response.data.answer
      }]);
      
      // Remove the MCP loading message if it exists
      setMessages(prev => prev.filter(msg => !msg.isMcpLoading));
      
      // Process detected intents - filter out any invalid ones
      const validDetectedIntents = Array.isArray(response.data.detected_intent) 
        ? response.data.detected_intent.filter(intent => intent && intent.intent && intent.route)
        : [];
        
      // After a short delay (1.5 seconds), add the bot's response
      setTimeout(() => {
        setIsTyping(false);
        setMessages(prev => [
          ...prev.filter(msg => !msg.isMcpLoading), // Remove any loading message
          { 
            sender: "bot", 
            text: response.data.answer,
            time: formatTime(),
            sources: response.data.sources || [],
            detectedIntents: validDetectedIntents.length > 0 ? validDetectedIntents : null,
            toolResults: response.data.tool_results || []
          }
        ]);
      }, 1500);
    } catch (error) {
      console.error("Error fetching response:", error);
      // Clear any MCP loading timeout
      if (mcpLoadingTimeout) clearTimeout(mcpLoadingTimeout);
      
      // Remove any loading messages
      setMessages(prev => prev.filter(msg => !msg.isMcpLoading));
      
      let errorMessage = "I'm sorry, I'm having trouble connecting right now. Please try again later.";
      
      // Provide more specific error messages based on the error type
      if (error.code === 'ECONNREFUSED') {
        errorMessage = "Unable to connect to the knowledge base. Please make sure the backend server is running at localhost:8001.";
      } else if (error.response && error.response.status >= 500) {
        errorMessage = "Our server is experiencing issues. The team has been notified and is working on it.";
      } else if (error.code === 'ECONNABORTED') {
        errorMessage = "The request took too long to process. Please try a simpler query or try again later.";
      }
      
      setTimeout(() => {
        setIsTyping(false);
        setMessages(prev => [
          ...prev, 
          { 
            sender: "bot", 
            text: errorMessage,
            time: formatTime(),
            sources: []
          }
        ]);
      }, 1000);
    }
  };

  // Handle clicking on a suggestion
  const handleSuggestionClick = (suggestion) => {
    setInput(suggestion);
    setTimeout(() => {
      handleSendMessage();
    }, 100);
  };
  
  // Clear chat history
  const clearChat = () => {
    setMessages([WELCOME_MESSAGE]);
    setChatHistory([]);
    if (typeof window !== 'undefined') {
      localStorage.removeItem('iciciChatMessages');
      localStorage.removeItem('iciciChatHistory');
    }
    setShowClearButton(false);
  };

  return (
    <div className="chat-app d-flex flex-column vh-100">
      {/* Header */}
      <header className="chat-header p-3 d-flex align-items-center justify-content-between" style={{
        background: 'linear-gradient(135deg, #FF6600 0%, #FF8C42 100%)',
        color: 'white',
        boxShadow: '0 4px 20px rgba(255, 102, 0, 0.15)',
        position: 'sticky',
        top: 0,
        zIndex: 1000
      }}>
        <div className="d-flex align-items-center">
          <Link href="/">
            <motion.button
              whileHover={{ x: -5 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-sm me-3 d-flex align-items-center"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                border: 'none',
                borderRadius: '50px',
                color: 'white',
                padding: '8px 12px'
              }}
            >
              <FaArrowLeft className="me-1" /> Back
            </motion.button>
          </Link>
          <div className="d-flex align-items-center">
            <div className="rounded-circle d-flex align-items-center justify-content-center me-3" style={{
              width: '40px',
              height: '40px',
              backgroundColor: 'rgba(255, 255, 255, 0.2)'
            }}>
              <FaRobot size={22} />
            </div>
            <div>
              <h1 className="h5 fw-bold mb-0">ICICI Lombard Assistant</h1>
              <small>Ask me anything about insurance</small>
            </div>
          </div>
        </div>
        
        {/* Clear Chat Button */}
        {showClearButton && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={clearChat}
            className="btn btn-sm"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              border: 'none',
              borderRadius: '50px',
              color: 'white',
              padding: '8px 12px',
              fontSize: '0.8rem'
            }}
          >
            Clear Chat
          </motion.button>
        )}
      </header>

      {/* Chat Body - Fixed height with modern design */}
      <div className="chat-body position-relative flex-grow-1" style={{
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100% - 134px - 60px)' // Minus header, input area, and navbar
      }}>
        {/* Modern Background Pattern */}
        <div className="pattern-bg position-absolute w-100 h-100" style={{
          top: 0,
          left: 0,
          opacity: 0.4,
          pointerEvents: 'none',
          background: 'linear-gradient(120deg, #f8f9fa 0%, #e9ecef 100%)',
          backgroundImage: `
            radial-gradient(circle at 25px 25px, #FF8C42 2px, transparent 0),
            radial-gradient(circle at 75px 75px, #FF6600 2px, transparent 0),
            radial-gradient(circle at 100px 40px, #FFAC6B 2px, transparent 0),
            radial-gradient(circle at 150px 115px, #FF6600 1px, transparent 0)
          `,
          backgroundSize: '150px 150px',
          zIndex: 0
        }}></div>
        
        {/* Scrollable Messages Container */}
        <div 
          ref={messagesContainerRef}
          className="messages-container p-3 position-relative"
          style={{
            overflowY: 'auto',
            flexGrow: 1,
            zIndex: 1,
            scrollbarWidth: 'thin',
            paddingBottom: '20px' // Extra padding at bottom to ensure visibility
          }}
        >
          {/* Messages */}
          {messages.map((msg, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`d-flex ${msg.sender === "user" ? "justify-content-end" : "justify-content-start"} mb-3`}
            >
              {msg.sender === "bot" && (
                <div className="rounded-circle d-flex align-items-center justify-content-center me-2 align-self-end" style={{
                  width: '32px',
                  height: '32px',
                  minWidth: '32px',
                  backgroundColor: '#FF6600',
                  color: 'white'
                }}>
                  <FaRobot size={16} />
                </div>
              )}
              
              <div style={{ maxWidth: '75%' }}>
                <div className={`p-3 rounded-4 shadow-sm ${msg.sender === "user" ? "bg-white text-dark" : "shadow-sm"}`} style={{
                  backgroundColor: msg.sender === "user" ? "rgba(255, 102, 0, 0.1)" : "white",
                  borderBottomRightRadius: msg.sender === "user" ? '4px' : '16px',
                  borderBottomLeftRadius: msg.sender === "bot" ? '4px' : '16px',
                  boxShadow: msg.sender === "user" ? '0 2px 8px rgba(255, 102, 0, 0.08)' : '0 2px 10px rgba(0, 0, 0, 0.05)'
                }}>
                  {/* Format the text with line breaks and basic formatting */}
                  <div className="message-content">
                    {msg.text.split('\n').map((line, i) => {
                      // Check if this line might be a heading (starts with # or ##)
                      if (line.startsWith('# ')) {
                        return <h5 key={i} style={{fontWeight: '600', color: msg.sender === 'bot' ? '#FF6600' : '#333', marginTop: i > 0 ? '10px' : '0'}}>{line.substring(2)}</h5>;
                      }
                      else if (line.startsWith('## ')) {
                        return <h6 key={i} style={{fontWeight: '600', color: msg.sender === 'bot' ? '#FF6600' : '#333', marginTop: i > 0 ? '10px' : '0'}}>{line.substring(3)}</h6>;
                      }
                      // Check for bullet points
                      else if (line.startsWith('- ')) {
                        return (
                          <div key={i} className="d-flex" style={{marginTop: '5px'}}>
                            <span style={{marginRight: '5px'}}>•</span>
                            <span>{line.substring(2)}</span>
                          </div>
                        );
                      }
                      // Regular line with automatic link detection
                      else {
                        // Very simple URL detection regex
                        const urlRegex = /(https?:\/\/[^\s]+)/g;
                        const parts = line.split(urlRegex);
                        
                        return (
                          <p key={i} style={{marginBottom: i === msg.text.split('\n').length - 1 ? '0' : '0.5rem'}}>
                            {parts.map((part, j) => {
                              if (part.match(urlRegex)) {
                                return <a key={j} href={part} target="_blank" rel="noopener noreferrer" style={{color: '#FF6600'}}>{part}</a>;
                              }
                              return <span key={j}>{part}</span>;
                            })}
                          </p>
                        );
                      }
                    })}
                  </div>
                  
                  {/* MCP Loading indicator */}
                  {msg.sender === "bot" && msg.isMcpLoading && (
                    <div className="d-flex align-items-center mt-2">
                      <div className="spinner-border spinner-border-sm text-warning me-2" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                      <span className="text-muted" style={{ fontSize: '0.85rem' }}>
                        Processing your query with advanced AI...
                      </span>
                    </div>
                  )}
                  
                  {/* Detected Intents section - only show if intents array exists, is not empty, and contains valid entries */}
                  {msg.sender === "bot" && msg.detectedIntents && Array.isArray(msg.detectedIntents) && msg.detectedIntents.length > 0 && msg.detectedIntents.some(intent => intent.intent && intent.route) && (
                    <div className="mt-3 pt-2 border-top" style={{borderColor: 'rgba(0,0,0,0.1)'}}>
                      <small className="d-block text-muted mb-2" style={{fontSize: '0.7rem'}}>YOU MIGHT BE INTERESTED IN:</small>
                      <div className="d-flex flex-column gap-2">
                        {msg.detectedIntents.filter(intent => intent.intent && intent.route).slice(0, 3).map((intent, idx) => (
                          <div 
                            key={idx} 
                            className="d-flex align-items-center p-2 rounded-3" 
                            style={{
                              backgroundColor: 'rgba(255, 102, 0, 0.06)',
                              border: '1px solid rgba(255, 102, 0, 0.12)',
                              cursor: 'pointer',
                              transition: 'all 0.2s ease'
                            }}
                            onClick={() => window.location.href = intent.route}
                            onMouseOver={(e) => {
                              e.currentTarget.style.backgroundColor = 'rgba(255, 102, 0, 0.12)';
                              e.currentTarget.style.transform = 'translateX(3px)';
                            }}
                            onMouseOut={(e) => {
                              e.currentTarget.style.backgroundColor = 'rgba(255, 102, 0, 0.06)';
                              e.currentTarget.style.transform = 'translateX(0)';
                            }}
                          >
                            <div className="me-auto">
                              <div style={{ fontWeight: '500', fontSize: '0.9rem', color: '#333' }}>
                                {intent.intent}
                              </div>
                              <div className="text-muted" style={{ fontSize: '0.75rem' }}>
                                {intent.route}
                              </div>
                            </div>
                            <div className="ms-2 d-flex flex-column align-items-end">
                              <div className="badge rounded-pill" style={{ 
                                background: 'rgba(255, 102, 0, 0.15)', 
                                color: '#FF6600', 
                                fontSize: '0.7rem' 
                              }}>
                                {Math.round(intent.score * 100)}%
                              </div>
                              <div className="d-flex align-items-center mt-1">
                                <FaArrowRight size={12} color="#FF6600" />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Sources section for bot messages */}
                  {msg.sender === "bot" && msg.sources && msg.sources.length > 0 && (
                    <div className="mt-3 pt-2 border-top" style={{borderColor: 'rgba(0,0,0,0.1)'}}>
                      <small className="d-block text-muted mb-1" style={{fontSize: '0.7rem'}}>SOURCES:</small>
                      <div className="d-flex flex-wrap gap-1">
                        {msg.sources.map((source, idx) => (
                          <span key={idx} className="badge" style={{
                            backgroundColor: 'rgba(255, 102, 0, 0.1)',
                            color: '#FF6600',
                            fontSize: '0.7rem',
                            fontWeight: '500',
                            padding: '5px 8px'
                          }}>
                            {source.name || source.type}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="d-flex align-items-center mt-1" style={{ 
                  fontSize: '0.7rem', 
                  color: '#999',
                  justifyContent: msg.sender === "user" ? "flex-end" : "flex-start"
                }}>
                  {/* Only show time if it's not the welcome message with placeholder time */}
                  {msg.time !== "--:--" && <span>{msg.time}</span>}
                  
                  {msg.sender === "user" && msg.status && (
                    <span className="ms-1">
                      {msg.status === "sent" && <FaCheck size={10} />}
                      {msg.status === "delivered" && <FaCheckDouble size={10} />}
                      {msg.status === "read" && <FaCheckDouble size={10} style={{color: '#FF6600'}} />}
                    </span>
                  )}
                </div>
              </div>
              
              {msg.sender === "user" && (
                <div className="rounded-circle d-flex align-items-center justify-content-center ms-2 align-self-end" style={{
                  width: '32px',
                  height: '32px',
                  minWidth: '32px',
                  backgroundColor: '#FF6600',
                  color: 'white'
                }}>
                  <FaUser size={14} />
                </div>
              )}
            </motion.div>
          ))}
          
          {/* Typing indicator */}
          {isTyping && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="d-flex justify-content-start mb-3"
            >
              <div className="rounded-circle d-flex align-items-center justify-content-center me-2 align-self-end" style={{
                width: '32px',
                height: '32px',
                minWidth: '32px',
                backgroundColor: '#FF6600',
                color: 'white'
              }}>
                <FaRobot size={16} />
              </div>
              
              <div className="bg-white p-3 rounded-4 shadow-sm" style={{
                borderBottomLeftRadius: '4px',
                maxWidth: '75%'
              }}>
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </motion.div>
          )}
          
          {/* Quick Suggestions */}
          {messages.length < 3 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.3 }}
              className="quick-suggestions mt-4 position-relative p-3 rounded-4"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(5px)',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)',
                border: '1px solid rgba(255, 102, 0, 0.1)'
              }}
            >
              <p className="fw-medium mb-2 small" style={{ color: '#555' }}>
                <span style={{ borderBottom: '2px solid #FF6600', paddingBottom: '2px' }}>Popular questions</span>
              </p>
              <div className="d-flex flex-wrap gap-2">
                {quickSuggestions.map((suggestion, idx) => (
                  <motion.button
                    key={idx}
                    whileHover={{ y: -2, boxShadow: '0 4px 8px rgba(255, 102, 0, 0.2)' }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="btn btn-sm rounded-pill"
                    style={{
                      backgroundColor: idx % 2 === 0 ? 'white' : 'rgba(255, 102, 0, 0.05)',
                      border: '1px solid rgba(255, 102, 0, 0.3)',
                      color: '#FF6600',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                      fontWeight: '500',
                      fontSize: '0.85rem',
                      padding: '6px 12px'
                    }}
                  >
                    {suggestion}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
          
          <div ref={messagesEndRef} />
          {/* Extra space at the bottom */}
          <div style={{ height: '70px' }}></div>
        </div>
      </div>

      {/* Input Area - Fixed at bottom */}
      <div className="chat-input-area p-3 bg-white border-top" style={{
        boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.05)',
        position: 'relative',
        zIndex: 10,
        marginBottom: '60px' // Add margin to account for the fixed navbar height
      }}>
        <div className="container">
          <div className="input-group">
            <div className="position-relative w-100">
              <input
                type="text"
                className="form-control border-0"
                placeholder="Ask anything about insurance..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                style={{
                  borderRadius: '25px',
                  padding: '14px 20px',
                  paddingRight: '60px', // Make room for the send button
                  backgroundColor: '#f5f7fa',
                  boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.1)',
                  fontSize: '0.95rem'
                }}
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn d-flex align-items-center justify-content-center position-absolute"
                onClick={handleSendMessage}
                disabled={!input.trim() || isTyping}
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: !input.trim() || isTyping ? 
                    'linear-gradient(135deg, #cccccc 0%, #dddddd 100%)' : 
                    'linear-gradient(135deg, #FF6600 0%, #FF8C42 100%)',
                  color: 'white',
                  boxShadow: !input.trim() || isTyping ? 
                    '0 2px 5px rgba(0, 0, 0, 0.1)' :
                    '0 4px 10px rgba(255, 102, 0, 0.3)',
                  cursor: !input.trim() || isTyping ? 'not-allowed' : 'pointer',
                  right: '5px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  transition: 'all 0.2s ease'
                }}
              >
                {isTyping ? (
                  <FaSpinner className="fa-spin" size={16} />
                ) : (
                  <FaPaperPlane size={16} />
                )}
              </motion.button>
            </div>
          </div>
          
          {/* Powered by line */}
          <div className="text-center mt-2">
            <small className="text-muted" style={{fontSize: '0.7rem'}}>
              Powered by <span style={{color: '#FF6600', fontWeight: '600'}}>ICICI Lombard AI</span>
            </small>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <motion.nav 
        className="navbar fixed-bottom bg-white shadow"
        style={{
          backdropFilter: 'blur(10px)', 
          backgroundColor: 'rgba(255,255,255,0.9)',
          borderTop: '1px solid #eee',
          height: '60px',
          zIndex: 10
        }}
      >
        <div className="container d-flex justify-content-around">
          <Link href="/" className="nav-link text-center d-flex flex-column align-items-center">
            <FaHome className="mb-1" style={{color: '#666'}} />
            <small style={{fontSize: '0.7rem', color: '#666'}}>Home</small>
          </Link>
          <Link href="/policies" className="nav-link text-center d-flex flex-column align-items-center">
            <FaFileAlt className="mb-1" style={{color: '#666'}} />
            <small style={{fontSize: '0.7rem', color: '#666'}}>Policies</small>
          </Link>
          <Link href="/benefits" className="nav-link text-center d-flex flex-column align-items-center">
            <FaGift className="mb-1" style={{color: '#666'}} />
            <small style={{fontSize: '0.7rem', color: '#666'}}>Benefits</small>
          </Link>
          <Link href="/buy-policy" className="nav-link text-center d-flex flex-column align-items-center">
            <FaShoppingCart className="mb-1" style={{color: '#666'}} />
            <small style={{fontSize: '0.7rem', color: '#666'}}>Buy</small>
          </Link>
          <Link href="/help" className="nav-link text-center d-flex flex-column align-items-center">
            <FaLifeRing className="mb-1" style={{color: '#FF6600'}} />
            <small style={{fontSize: '0.7rem', color: '#FF6600', fontWeight: '600'}}>Help</small>
          </Link>
        </div>
      </motion.nav>

      <style jsx global>{`
        .typing-indicator {
          display: flex;
          align-items: center;
          height: 17px;
        }
        
        .typing-indicator span {
          display: block;
          width: 8px;
          height: 8px;
          background-color: #FF6600;
          border-radius: 50%;
          margin-right: 5px;
          animation: typing 1.5s infinite ease-in-out;
        }
        
        .typing-indicator span:nth-child(1) {
          animation-delay: 0s;
        }
        
        .typing-indicator span:nth-child(2) {
          animation-delay: 0.2s;
        }
        
        .typing-indicator span:nth-child(3) {
          animation-delay: 0.4s;
          margin-right: 0;
        }
        
        @keyframes typing {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        
        .nav-link {
          transition: all 0.3s ease;
        }
        
        .nav-link:hover {
          transform: translateY(-2px);
        }
        
        .form-control:focus {
          box-shadow: 0 0 0 3px rgba(255, 102, 0, 0.2);
          border-color: #FF6600;
        }
        
        ::-webkit-scrollbar {
          width: 5px;
        }
        
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        
        ::-webkit-scrollbar-thumb {
          background-color: rgba(0, 0, 0, 0.2);
          border-radius: 20px;
        }
        
        .badge {
          transition: all 0.2s ease;
        }
        
        .badge:hover {
          transform: translateY(-1px);
        }
        
        .fa-spin {
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .chat-app {
          overscroll-behavior: none;
        }
        
        .messages-container::-webkit-scrollbar {
          width: 4px;
        }
      `}</style>
    </div>
  );
}