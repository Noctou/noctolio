import useTypingEffect from "../hooks/useTypingEffect";

const TypingEffect = ({ text, delay }) => {
  const { displayText, currentLine } = useTypingEffect(text, delay);

  return (
    <div className="typing-wrapper">
      {displayText.map((line, li) => (
        <p key={li} className="typing-line">
          {line}
          {li === currentLine && <span className="cursor">|</span>}
        </p>
      ))}
    </div>
  );
};

export default TypingEffect;