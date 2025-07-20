"use client";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaPaperPlane, FaRobot, FaUser, FaClock, FaCheck, FaCheckDouble } from "react-icons/fa";

export default function RiaChatbot() {
  const [messages, setMessages] = useState([
    { 
      sender: "bot", 
      text: "Hello! I'm RIA 🤖. How can I assist you today with your insurance needs?",
      time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  
  // Sample quick suggestions
  const quickSuggestions = [
    "How do I file a claim?",
    "Check my policy status",
    "Update my contact details",
    "Get a quote for car insurance"
  ];

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = () => {
    if (input.trim() === "") return;

    const newMessages = [...messages, { 
      sender: "user", 
      text: input,
      time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
      status: "sent" 
    }];
    
    setMessages(newMessages);
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

    // Simulate bot response
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prevMessages => [
        ...prevMessages, 
        { 
          sender: "bot", 
          text: getBotResponse(input),
          time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
        }
      ]);
    }, 1500);
  };
  
  // Simple response logic based on keywords
  const getBotResponse = (input) => {
    const lowercaseInput = input.toLowerCase();
    
    if (lowercaseInput.includes("claim") || lowercaseInput.includes("file")) {
      return "To file a claim, please visit the Claims section in our app or call our 24/7 claims hotline at 1-800-555-1234. You'll need your policy number and details about the incident.";
    } else if (lowercaseInput.includes("policy") || lowercaseInput.includes("status")) {
      return "I can help you check your policy status. In a real implementation, I would ask for your policy number and provide real-time information about your coverage and payments.";
    } else if (lowercaseInput.includes("contact") || lowercaseInput.includes("update")) {
      return "You can update your contact details in the Profile section. We'll make sure all your policy documents and notifications go to the right place!";
    } else if (lowercaseInput.includes("quote") || lowercaseInput.includes("car") || lowercaseInput.includes("insurance")) {
      return "I'd be happy to help you get a quote for car insurance! Normally I would ask for details about your vehicle, driving history, and coverage preferences to provide an accurate estimate.";
    }
    
    return "I understand you're asking about \"" + input + "\". As a specialized insurance assistant, I'm still learning about specific topics. Would you like me to connect you with a human agent for more detailed assistance?";
  };

  // Handle clicking on a suggestion
  const handleSuggestionClick = (suggestion) => {
    setInput(suggestion);
    setTimeout(() => {
      handleSendMessage();
    }, 100);
  };

  return (
    <div className="container-fluid min-vh-100 d-flex flex-column p-0 bg-light">
      {/* Header */}
      <header className="p-3 d-flex align-items-center" style={{
        background: 'linear-gradient(135deg, #FF6600 0%, #FF8C42 100%)',
        color: 'white'
      }}>
        <Link href="/help">
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
            <h1 className="h5 fw-bold mb-0">RIA Assistant</h1>
            <small>Responsive Insurance Advisor</small>
          </div>
        </div>
      </header>

      {/* Chat Container */}
      <div className="chat-container flex-grow-1 p-3 d-flex flex-column" style={{
        backgroundImage: "url('/insurance1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        position: "relative",
        overflowY: "auto",
        maxHeight: "calc(100vh - 160px)"
      }}>
        {/* Background Overlay */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(248, 249, 250, 0.85)",
          backdropFilter: "blur(10px)"
        }}></div>
        
        {/* Messages */}
        <div className="messages position-relative">
          {messages.map((msg, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`d-flex ${msg.sender === "user" ? "justify-content-end" : "justify-content-start"} mb-3`}
            >
              {msg.sender === "bot" && (
                <div className="rounded-circle d-flex align-items-center justify-content-center me-2" style={{
                  width: '30px',
                  height: '30px',
                  minWidth: '30px',
                  backgroundColor: '#FF6600',
                  color: 'white',
                  marginTop: 'auto'
                }}>
                  <FaRobot size={16} />
                </div>
              )}
              
              <div style={{ maxWidth: '75%' }}>
                <div className={`p-3 rounded-3 ${msg.sender === "user" ? "bg-white text-dark" : "shadow-sm"}`} style={{
                  backgroundColor: msg.sender === "user" ? "rgba(255, 102, 0, 0.1)" : "white",
                  borderBottomRightRadius: msg.sender === "user" ? '4px' : '16px',
                  borderBottomLeftRadius: msg.sender === "bot" ? '4px' : '16px',
                }}>
                  {msg.text}
                </div>
                
                <div className="d-flex align-items-center mt-1" style={{ 
                  fontSize: '0.7rem', 
                  color: '#999',
                  justifyContent: msg.sender === "user" ? "flex-end" : "flex-start"
                }}>
                  <span>{msg.time}</span>
                  
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
                <div className="rounded-circle d-flex align-items-center justify-content-center ms-2" style={{
                  width: '30px',
                  height: '30px',
                  minWidth: '30px',
                  backgroundColor: '#FF6600',
                  color: 'white',
                  marginTop: 'auto'
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
              <div className="rounded-circle d-flex align-items-center justify-content-center me-2" style={{
                width: '30px',
                height: '30px',
                minWidth: '30px',
                backgroundColor: '#FF6600',
                color: 'white',
                marginTop: 'auto'
              }}>
                <FaRobot size={16} />
              </div>
              
              <div className="bg-white p-3 rounded-3 shadow-sm" style={{
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
          
          <div ref={messagesEndRef} />
        </div>
        
        {/* Quick Suggestions */}
        {messages.length < 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            className="quick-suggestions mt-3 position-relative"
          >
            <p className="text-muted mb-2 small">Popular questions:</p>
            <div className="d-flex flex-wrap gap-2">
              {quickSuggestions.map((suggestion, idx) => (
                <motion.button
                  key={idx}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="btn btn-sm rounded-pill"
                  style={{
                    backgroundColor: 'white',
                    border: '1px solid #FF6600',
                    color: '#FF6600',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                  }}
                >
                  {suggestion}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* Input Area */}
      <div className="input-area p-2 bg-white shadow-lg" style={{borderTop: '1px solid #eee'}}>
        <div className="container">
          <div className="input-group">
            <input
              type="text"
              className="form-control border-0 bg-light"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              style={{
                borderRadius: '25px',
                padding: '12px 20px',
                backgroundColor: '#f8f9fa',
                boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.05)'
              }}
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn ms-2 d-flex align-items-center justify-content-center"
              onClick={handleSendMessage}
              style={{
                width: '45px',
                height: '45px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #FF6600 0%, #FF8C42 100%)',
                color: 'white',
                boxShadow: '0 4px 10px rgba(255, 102, 0, 0.3)'
              }}
            >
              <FaPaperPlane size={16} />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <motion.nav 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2 }}
        className="navbar fixed-bottom bg-white shadow"
        style={{backdropFilter: 'blur(10px)', backgroundColor: 'rgba(255,255,255,0.9)'}}
      >
        <div className="container d-flex justify-content-around">
          <Link href="/" className="nav-link text-center d-flex flex-column align-items-center">
            <i className="bi bi-house mb-1" style={{color: '#666'}}></i>
            <small style={{fontSize: '0.7rem', color: '#666'}}>Home</small>
          </Link>
          <Link href="/policies" className="nav-link text-center d-flex flex-column align-items-center">
            <i className="bi bi-file-text mb-1" style={{color: '#666'}}></i>
            <small style={{fontSize: '0.7rem', color: '#666'}}>Policies</small>
          </Link>
          <Link href="/benefits" className="nav-link text-center d-flex flex-column align-items-center">
            <i className="bi bi-gift mb-1" style={{color: '#666'}}></i>
            <small style={{fontSize: '0.7rem', color: '#666'}}>Benefits</small>
          </Link>
          <Link href="/buy-policy" className="nav-link text-center d-flex flex-column align-items-center">
            <i className="bi bi-cart mb-1" style={{color: '#666'}}></i>
            <small style={{fontSize: '0.7rem', color: '#666'}}>Buy</small>
          </Link>
          <Link href="/help" className="nav-link text-center d-flex flex-column align-items-center">
            <i className="bi bi-life-preserver mb-1" style={{color: '#FF6600'}}></i>
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
      `}</style>
    </div>
  );
}
