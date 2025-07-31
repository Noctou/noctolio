import MainContent from "./MainContent";

export default function ContentWrapper({ show }) {
  return (
    <div className={`content-wrapper ${ show ? "visible" : "" }`}>
      <MainContent isVisible={show} />
    </div>
  );
}