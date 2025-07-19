"use client";
export default function ResponseDisplay({ response }) {
  if (!response) return null;

  return (
    <div
      className="mt-3 p-4 border rounded shadow-sm"
      style={{
        backgroundColor: "#f8f9fa", 
        color: "#212529",
        fontFamily: "Arial, sans-serif",
        borderRadius: "12px",
        borderColor: "#e0e0e0",
        transition: "all 0.3s ease"
      }}
    >
      {response.error ? (
        <div className="alert alert-danger" role="alert">
          <div className="d-flex align-items-center">
            <i className="bi bi-exclamation-triangle-fill me-2"></i>
            <span style={{ fontWeight: "500" }}>{response.error}</span>
          </div>
        </div>
      ) : (
        <div className="animate__animated animate__fadeIn">
          <div className="mb-3 pb-2 border-bottom">
            <p className="mb-1" style={{ fontSize: "0.9rem", color: "#6c757d" }}>DETECTED INTENT</p>
            <p style={{ fontSize: "1.1rem", fontWeight: "600", color: "#FF6600" }}>
              {response.intent}
            </p>
          </div>
          
          <div>
            <p className="mb-1" style={{ fontSize: "0.9rem", color: "#6c757d" }}>NAVIGATION</p>
            <a
              href={response.route}
              className="btn btn-sm d-flex align-items-center"
              style={{
                backgroundColor: "#FF6600",
                color: "white",
                borderRadius: "8px",
                padding: "8px 16px",
                textDecoration: "none",
                fontWeight: "500",
                display: "inline-flex"
              }}
            >
              <span className="me-2">Navigate</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
              </svg>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}