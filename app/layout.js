"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import InputForm from "./components/InputForm";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Main Content */}
        {children}

        {/* Floating Widget */}
        <div
          style={{
            position: "fixed",
            right: "20px",
            bottom: "20px",
            width: isOpen ? "360px" : "50px",
            height: isOpen ? "520px" : "50px",
            backgroundColor: "white",
            borderRadius: "15px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
            border: "1px solid #ddd",
            overflow: "hidden",
            transition: "width 0.3s ease-in-out, height 0.3s ease-in-out",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <div style={{ width: "100%", padding: "15px" }}>
              {/* Close Button */}
              <button
                className="btn btn-sm btn-outline-dark"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpen(false);
                }}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "10px",
                }}
              >
                ✖
              </button>

              <h5 className="text-center mb-3">🔍 Smart Navigator</h5>
              <InputForm />
            </div>
          ) : (
            <Image
              src="/icici.jpg"
              alt="ICICI Logo"
              width={40}
              height={40}
              style={{ borderRadius: "50%" }}
            />
          )}
        </div>
      </body>
    </html>
  );
}