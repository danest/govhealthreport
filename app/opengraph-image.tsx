import { ImageResponse } from "next/og";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/site-config";

export const runtime = "edge";

export const alt = `${SITE_NAME} - ${SITE_TAGLINE}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

// Government theme colors
const NAVY = "#003366";
const GOLD = "#ffc72c";
const RED = "#a31621";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: NAVY,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
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
            height: "16px",
            background: GOLD,
          }}
        />

        {/* Red disclaimer bar */}
        <div
          style={{
            position: "absolute",
            top: "16px",
            left: 0,
            right: 0,
            height: "40px",
            background: RED,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ color: "white", fontSize: "18px", fontWeight: 600 }}>
            NOT A GOVERNMENT WEBSITE - Independent Health Review Site
          </span>
        </div>

        {/* Logo square */}
        <div
          style={{
            width: "140px",
            height: "140px",
            borderRadius: "16px",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "40px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Gold bar on logo */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "20px",
              background: GOLD,
            }}
          />
          <span
            style={{
              fontSize: "52px",
              fontWeight: 800,
              color: NAVY,
              marginTop: "10px",
            }}
          >
            GOV
          </span>
        </div>

        {/* Site name */}
        <h1
          style={{
            fontSize: "72px",
            fontWeight: 700,
            color: "white",
            margin: 0,
            textAlign: "center",
            textShadow: "0 2px 10px rgba(0,0,0,0.3)",
          }}
        >
          {SITE_NAME}
        </h1>

        {/* Tagline */}
        <p
          style={{
            fontSize: "32px",
            color: "rgba(255,255,255,0.9)",
            margin: "20px 0 0 0",
            textAlign: "center",
          }}
        >
          {SITE_TAGLINE}
        </p>

        {/* Bottom gold accent */}
        <div
          style={{
            display: "flex",
            gap: "20px",
            marginTop: "50px",
          }}
        >
          <div
            style={{
              width: "120px",
              height: "6px",
              backgroundColor: GOLD,
            }}
          />
          <div
            style={{
              width: "80px",
              height: "6px",
              backgroundColor: GOLD,
              opacity: 0.7,
            }}
          />
          <div
            style={{
              width: "40px",
              height: "6px",
              backgroundColor: GOLD,
              opacity: 0.5,
            }}
          />
        </div>

        {/* Gold accent bar at bottom */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "8px",
            background: GOLD,
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
