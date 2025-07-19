"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import LoadingButton from "./LoadingButton";
import ResponseDisplay from "./ResponseDisplay";

export default function InputForm() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);
  const router = useRouter();

  // Auto-focus input field when component mounts
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleQuery = async () => {
    if (!query.trim()) return;
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/analyze", { query });
      setResponse(res.data);

      // If API provides a valid route, navigate automatically
      if (res.data?.route) {
        router.push(res.data.route);
      }

    } catch (error) {
      setResponse({ error: "Failed to fetch response." });
    }
    setLoading(false);
  };

  // Trigger search on Enter key press
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleQuery();
    }
  };

  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{
        width: "100%",
        maxWidth: "380px",
        padding: "20px",
        borderRadius: "16px",
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#ffffff",
        fontFamily: "'Segoe UI', sans-serif",
        color: "#212529",
        transition: "transform 0.3s ease, box-shadow 0.3s ease"
      }}
    >
      {/* Header */}
      <div className="d-flex align-items-center mb-3">
        <div style={{ 
          backgroundColor: "#FF6600", 
          width: "32px", 
          height: "32px", 
          borderRadius: "50%", 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center",
          marginRight: "10px"
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg>
        </div>
        <h5
          style={{
            fontWeight: "600",
            fontSize: "1.1rem",
            color: "#212529",
            margin: 0
          }}
        >
          Smart Navigation
        </h5>
      </div>

      {/* Input Box Container */}
      <div
        style={{
          width: "100%",
          position: "relative",
          marginBottom: "16px"
        }}
      >
        <div
          style={{
            width: "100%",
            borderRadius: "12px",
            border: "1px solid #e0e0e0",
            backgroundColor: "#f9f9f9",
            transition: "all 0.3s ease",
            boxShadow: "0 2px 6px rgba(0, 0, 0, 0.05)",
            display: "flex",
            alignItems: "center",
            padding: "6px 12px"
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#888" className="bi bi-chat-dots me-2" viewBox="0 0 16 16">
            <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
            <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2"/>
          </svg>
          <input
            type="text"
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            className="form-control"
            style={{
              width: "100%",
              padding: "10px 0",
              fontSize: "0.95rem",
              border: "none",
              outline: "none",
              backgroundColor: "transparent",
              color: "#212529",
              boxShadow: "none"
            }}
            placeholder="What would you like to do?"
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="w-100 d-flex justify-content-center">
        <LoadingButton loading={loading} onClick={handleQuery} disabled={!query.trim()} />
      </div>

      {/* Response Box */}
      {response && (
        <div
          style={{
            marginTop: "12px",
            width: "100%",
            padding: "10px",
            borderRadius: "10px",
            border: "1px solid #b0bec5",
            backgroundColor: "#e3f2fd",
            color: "#0d47a1",
            textAlign: "center",
          }}
        >
          <ResponseDisplay response={response} />
        </div>
      )}
    </div>
  );
}