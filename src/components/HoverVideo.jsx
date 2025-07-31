import useVideo from "../hooks/useVideo";
import { useState } from "react";

export default function HoverVideo({ src, thumbnail, name, width = 320, height = 180, style = {} }) {
  const { videoRef, handleMouseEnter, handleMouseLeave } = useVideo();
  const [isHovered, setIsHovered] = useState(false);

  const onEnter = () => {
    setIsHovered(true);
    handleMouseEnter();
  };

  const onLeave = () => {
    setIsHovered(false);
    handleMouseLeave();
  };

  return (
    <div style={{ width, textAlign: "center", ...style }}>
      <div
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        style={{
          width: "100%",
          height,
          position: "relative",
          overflow: "hidden",
          borderRadius: "12px",
        }}
      >
        <img
          src={thumbnail}
          alt="Thumbnail"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 2,
            opacity: isHovered ? 0 : 1,
            transform: isHovered ? "scale(1.2)" : "scale(1)",
            transformOrigin: "center center",
            transition:
              "opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
            willChange: "opacity, transform",
            pointerEvents: "none",
          }}
        />

        <video
          ref={videoRef}
          src={src}
          muted
          loop
          playsInline
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
          }}
        />
      </div>

      <p
        style={{
          marginTop: "0.5rem",
          fontSize: "1rem",
          fontWeight: "500",
          color: "#fff",
          opacity: isHovered ? 1 : 0,
          transform: isHovered ? "translateY(0)" : "translateY(10px)",
          transition: "opacity 0.5s ease, transform 0.5s ease",
          pointerEvents: "none",
        }}
      >
        {name}
      </p>
    </div>
  );
}