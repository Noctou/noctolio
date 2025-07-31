import myGif from "../assets/bocchi-samba.gif";

export default function GifDisplay() {
  return (
    <div className="gif-wrapper">
      <img src={myGif} alt="bocchi-dancing" />
      <span className="tooltip">it's low quality i know</span>
    </div>
  );
}