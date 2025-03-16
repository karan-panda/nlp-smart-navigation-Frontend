"use client";
export default function ResponseDisplay({ response }) {
  if (!response) return null;

  return (
    <div
      className="mt-3 p-4 border rounded shadow"
      style={{
        backgroundColor: "#f8f9fa", // Light gray for contrast
        color: "#212529", // Dark text for readability
        fontFamily: "Arial, sans-serif", // Better font
      }}
    >
      {response.error ? (
        <p style={{ color: "#dc3545", fontWeight: "bold" }}>
          ❌ {response.error}
        </p>
      ) : (
        <>
          <p style={{ fontSize: "1.1rem", fontWeight: "bold" }}>
            🔍 <span style={{ color: "#007bff" }}>Detected Intent:</span> {response.intent}
          </p>
          <p style={{ fontSize: "1.1rem" }}>
            🚀 <b>Navigate to:</b>{" "}
            <a
              href={response.route}
              style={{
                color: "#007bff",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              {response.route}
            </a>
          </p>
        </>
      )}
    </div>
  );
}