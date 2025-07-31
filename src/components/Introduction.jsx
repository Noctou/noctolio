import TypingEffect from "./TypingEffect";
import SocialIcons from "./SocialsIcons";

export default function Introduction() {
  return (
    <div className="about-me">
      <div className="message-section">
        <TypingEffect text={[
            "Hi, my name is Noctou!",
            "I'm an average at programming and gaming."
          ]} delay={50} />

        <SocialIcons />
      </div>
    </div>
  );
}