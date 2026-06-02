import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export function EmailTemplate({ name, email, message }: EmailTemplateProps) {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      <h2 style={{ color: "#333", marginBottom: "20px" }}>
        New Contact Form Submission
      </h2>
      <div
        style={{
          marginBottom: "20px",
          padding: "10px",
          backgroundColor: "#f5f5f5",
          borderRadius: "5px",
        }}
      >
        <p style={{ margin: "10px 0" }}>
          <strong>Name:</strong> {name}
        </p>
        <p style={{ margin: "10px 0" }}>
          <strong>Email:</strong> {email}
        </p>
      </div>
      <div style={{ marginBottom: "20px" }}>
        <p style={{ fontWeight: "bold", marginBottom: "10px" }}>Message:</p>
        <p style={{ whiteSpace: "pre-wrap", margin: "0" }}>{message}</p>
      </div>
    </div>
  );
}
