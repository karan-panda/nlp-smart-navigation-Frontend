"use client";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

export default function RiaChatbot() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! I'm RIA 🤖. How can I assist you today?" },
  ]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim() === "") return;

    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    setInput("");

    // Simulate bot response
    setTimeout(() => {
      setMessages([...newMessages, { sender: "bot", text: "I’m still learning! Please contact support if needed. 😊" }]);
    }, 1000);
  };

  return (
    <div className="container-fluid min-vh-100 d-flex flex-column p-4 bg-light">
      <header className="p-3 bg-white shadow-sm rounded text-center">
        <h1 className="h4 fw-bold">🤖 Ask RIA</h1>
        <p className="text-muted">Your AI chatbot assistant</p>
      </header>

      <div className="flex-grow-1 my-4 p-3 bg-white rounded shadow d-flex flex-column" style={{ maxHeight: "60vh", overflowY: "auto" }}>
        {messages.map((msg, index) => (
          <div key={index} className={`d-flex ${msg.sender === "user" ? "justify-content-end" : "justify-content-start"}`}>
            <div className={`p-2 my-1 rounded ${msg.sender === "user" ? "bg-warning text-white" : "bg-light text-dark"}`} style={{ maxWidth: "75%" }}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
        />
        <button className="btn btn-warning" onClick={handleSendMessage}>Send</button>
      </div>

      
    </div>
  );
}
