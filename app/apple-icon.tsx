import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: "#003366",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 32,
          position: "relative",
        }}
      >
        {/* Gold accent bar at top */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 32,
            background: "#ffc72c",
            borderTopLeftRadius: 32,
            borderTopRightRadius: 32,
          }}
        />
        {/* Health cross watermark */}
        <div
          style={{
            position: "absolute",
            top: 50,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            opacity: 0.2,
          }}
        >
          <div style={{ width: 24, height: 48, background: "white" }} />
        </div>
        <div
          style={{
            position: "absolute",
            top: 62,
            display: "flex",
            opacity: 0.2,
          }}
        >
          <div style={{ width: 48, height: 24, background: "white" }} />
        </div>
        {/* GOV text */}
        <div
          style={{
            color: "white",
            fontWeight: 800,
            fontSize: 56,
            marginTop: 20,
            letterSpacing: 2,
          }}
        >
          GOV
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
