"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from "next/navigation";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./components/Nav";

export default function Layout({ children }) {
  const [search, setSearch] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [results, setResults] = useState([]);
  const router = useRouter();

  const handleSearch = async (value) => {
    setSearch(value);
    if (value.trim() === "") {
      setResults([]);
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:8000/predict/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: value }),
      });

      if (response.ok) {
        const data = await response.json();
        setResults(data);
      } else {
        setResults([]);
      }
    } catch (error) {
      console.error("Error fetching search results:", error);
      setResults([]);
    }
  };

  const handleRedirect = (route) => {
    router.push(route);
    setIsFocused(false);
  };

  return (
    <html lang="en">
      <body>
        <div className={`position-relative min-vh-100 overflow-hidden ${isFocused ? 'blur-background' : ''}`}>
          <Router>
            {children}
          </Router>

          {isFocused && <div className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50" style={{ zIndex: 9998 }} onClick={() => setIsFocused(false)}></div>}

          <motion.div
            className="position-fixed start-50 translate-middle-x w-100 max-w-50 px-3 mb-5"
            animate={{ bottom: isFocused ? "50%" : "40px", scale: isFocused ? 1.2 : 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            style={{ zIndex: 9999 }}
          >
            <div className="bg-white shadow-lg rounded-pill d-flex align-items-center m-8 p-2 border border-secondary position-relative">
              <Search className="ms-3 text-secondary" />
              <input
                className="form-control border-0 bg-transparent mb-6 px-3 py-2 fs-5 flex-grow-1"
                placeholder="IL QuickSearch..."
                value={search}
                onChange={(e) => handleSearch(e.target.value)}
                onFocus={() => setIsFocused(true)}
              />
            </div>

            {isFocused && results.length > 0 && (
              <div className="position-absolute top-100 start-0 w-100 mt-2 bg-white shadow-lg rounded p-2 border border-secondary" onMouseDown={(e) => e.preventDefault()}>
                {results.map((item, index) => (
                  <div
                    key={index}
                    className="p-2 rounded text-dark bg-light hover-bg-secondary cursor-pointer"
                    onMouseDown={() => handleRedirect(item.route)}
                  >
                    <strong>{item.intent}</strong> <br />
                    <small className="text-muted">{item.route}</small>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
        <Nav />
      </body>
    </html>
  );
}
