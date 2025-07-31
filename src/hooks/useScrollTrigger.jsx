import { useEffect, useState } from "react";

export default function useScrollTrigger() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = window.innerHeight  / 1.5;
      const introBottom = document.querySelector(".introduction-wrapper")?.getBoundingClientRect().bottom;

      if (introBottom < triggerPoint) {
        setShowContent(true);
      } else {
        setShowContent(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return showContent;
}