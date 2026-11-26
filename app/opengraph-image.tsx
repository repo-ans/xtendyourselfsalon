import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Xtend Yourself Salon — Cave Creek, AZ";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f4e8db",
          color: "#2b2b2a",
        }}
      >
        <div style={{ fontSize: 76, fontWeight: 600, letterSpacing: -1 }}>
          Xtend Yourself
        </div>
        <div style={{ fontSize: 34, color: "#c97a52", marginTop: 20 }}>
          Hair Restoration &amp; Extensions — Cave Creek, AZ
        </div>
      </div>
    ),
    { ...size },
  );
}
