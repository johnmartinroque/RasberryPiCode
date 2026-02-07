import React, { useState } from "react";

const CameraFeed = () => {
  const [hasError, setHasError] = useState(false);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Live Camera Feed</h2>

      {!hasError ? (
        <img
          src="http://localhost:5000/video_feed"
          alt="Live Camera"
          onError={() => setHasError(true)}
          style={{
            width: "100%",
            maxWidth: "640px",
            borderRadius: "10px",
            border: "2px solid #333",
          }}
        />
      ) : (
        <div
          style={{
            width: "100%",
            maxWidth: "640px",
            height: "360px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "10px",
            border: "2px dashed #999",
            color: "#666",
            margin: "0 auto",
          }}
        >
          🚫 No camera feed available
        </div>
      )}
    </div>
  );
};

export default CameraFeed;
