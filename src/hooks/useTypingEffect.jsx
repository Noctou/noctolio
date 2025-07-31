import { useEffect, useState, useRef } from "react";

const useTypingEffect = (textArray, delay = 100) => {
  const [displayText, setDisplayText] = useState(new Array(textArray.length).fill(""));
  const [currentLine, setCurrentLine] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const hasStarted = useRef(false);

  useEffect(() => {
    if (hasStarted.current) return;
    hasStarted.current = true;

    let totalDelay = 0;

    textArray.forEach((line, lineIndex) => {
      for (let i = 0; i <= line.length; i++) {
        setTimeout(() => {
          setDisplayText((prev) => prev.with(lineIndex, line.slice(0, i)));
          setCurrentLine(lineIndex);
          if (lineIndex === textArray.length - 1 && i === line.length) {
            setIsTypingComplete(true);
          }
        }, totalDelay + i * delay);
      }
      totalDelay += line.length * delay;
    });
  }, []);

  return { displayText, currentLine, isTypingComplete };
};

export default useTypingEffect;