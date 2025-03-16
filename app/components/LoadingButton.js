"use client";
export default function LoadingButton({ loading, onClick }) {
  return (
    <button 
      className={`btn ${loading ? "btn-secondary" : "btn-primary"}`} 
      onClick={onClick} 
      disabled={loading}
    >
      {loading ? "Processing..." : "Analyze"}
    </button>
  );
}