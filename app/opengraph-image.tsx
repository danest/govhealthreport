import { ImageResponse } from "next/og";
import { SITE_NAME, SITE_TAGLINE, BRAND_PRIMARY_COLOR } from "@/lib/site-config";

export const runtime = "edge";

export const alt = `${SITE_NAME} - ${SITE_TAGLINE}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: `linear-gradient(135deg, ${BRAND_PRIMARY_COLOR} 0%, #047857 100%)`,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
        }}
      >
        {/* Logo circle */}
        <div
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "60px",
            backgroundColor: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "40px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
          }}
        >
          <span
            style={{
              fontSize: "48px",
              fontWeight: 700,
              color: BRAND_PRIMARY_COLOR,
            }}
          >
            Rx
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
            textShadow: "0 2px 10px rgba(0,0,0,0.2)",
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

        {/* Bottom decorative pills */}
        <div
          style={{
            display: "flex",
            gap: "20px",
            marginTop: "50px",
          }}
        >
          <div
            style={{
              width: "80px",
              height: "30px",
              borderRadius: "15px",
              backgroundColor: "rgba(255,255,255,0.3)",
            }}
          />
          <div
            style={{
              width: "80px",
              height: "30px",
              borderRadius: "15px",
              backgroundColor: "rgba(255,255,255,0.4)",
            }}
          />
          <div
            style={{
              width: "80px",
              height: "30px",
              borderRadius: "15px",
              backgroundColor: "rgba(255,255,255,0.3)",
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
