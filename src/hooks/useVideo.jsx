import { useRef } from "react";

export default function useVideo() {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    videoRef.current?.pause();
  };

  return { videoRef, handleMouseEnter, handleMouseLeave };
}