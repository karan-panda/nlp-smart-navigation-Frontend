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
        padding: "15px",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
        backgroundColor: "#ffffff",
        fontFamily: "'Segoe UI', sans-serif",
        color: "#212529",
      }}
    >
      {/* Header */}
      <h5
        style={{
          fontWeight: "bold",
          fontSize: "1rem",
          color: "#212529",
          textAlign: "center",
          marginBottom: "10px",
        }}
      >
        🔍 Smart Navigation
      </h5>

      {/* Input Box Container */}
      <div
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "10px",
          border: "1px solid #dee2e6",
          backgroundColor: "#f8f9fa",
        }}
      >
        <input
          type="text"
          ref={inputRef}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          className="form-control"
          style={{
            width: "100%",
            padding: "8px",
            fontSize: "0.9rem",
            border: "none",
            outline: "none",
            backgroundColor: "transparent",
            color: "#212529",
          }}
          placeholder="Type your query..."
        />
      </div>

      {/* Submit Button */}
      <div className="mt-3">
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