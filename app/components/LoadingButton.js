"use client";
export default function LoadingButton({ loading, onClick, disabled }) {
  return (
    <button 
      className="btn"
      onClick={onClick} 
      disabled={loading || disabled}
      style={{
        backgroundColor: loading || disabled ? "#cccccc" : "#FF6600",
        color: "white",
        borderRadius: "8px",
        padding: "8px 16px",
        fontWeight: "500",
        transition: "all 0.3s ease",
        border: "none",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minWidth: "120px"
      }}
    >
      {loading ? (
        <>
          <div className="spinner-border spinner-border-sm me-2" role="status" style={{ width: "16px", height: "16px" }}></div>
          Processing...
        </>
      ) : (
        "Analyze"
      )}
    </button>
  );
}