import discordIcon from "../assets/discord-icon.png";
import githubIcon from "../assets/github-icon.png";
import steamIcon from "../assets/steam-icon.png";

export default function SocialIcons() {
  return (
    <div className="socials-wrapper">
      <a href="https://discord.com/users/561056418480783371" target="_blank" rel="noopener noreferrer">
        <img className="socials-icon" src={discordIcon} alt="" />
        <span className="tooltip">Discord</span>
      </a>
      <a href="https://github.com/Noctou" target="_blank" rel="noopener noreferrer">
        <img className="socials-icon" src={githubIcon} alt="" />
        <span className="tooltip">GitHub</span>
      </a>
      <a href="https://steamcommunity.com/profiles/76561198994312306/" target="_blank" rel="noopener noreferrer">
        <img className="socials-icon" src={steamIcon} alt="" />
        <span className="tooltip">Steam</span>
      </a>
    </div>
  );
}