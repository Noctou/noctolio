import "./App.css";
import useTheme from './hooks/useThemeToggle';
import useScrollTrigger from './hooks/useScrollTrigger';

import ThemeToggle from "./components/ThemeToggle";
import Introduction from "./components/Introduction";
import GifDisplay from "./components/GifDisplay";
import ContentWrapper from "./components/ContentWrapper";
import ScrollArrow from "./components/ScrollArrow"

function App() {
  const [darkMode, setDarkMode] = useTheme();
  const showContent = useScrollTrigger();
    return (
    <div className="container">
      <ThemeToggle darkMode={darkMode} toggleTheme={() => setDarkMode(!darkMode)} />
      <div className="introduction-wrapper">
          <Introduction />
          <GifDisplay />
      </div>
      
      <ScrollArrow />

      <ContentWrapper show={showContent} />
      
      {/* for scrollTrigger hook  */}
      <div style={{ height: '12vh' }}></div> 
    </div>
  );
}

export default App;