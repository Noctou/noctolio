import c from '../assets/c-icon.png';
import python from '../assets/python-icon.png';
import java from '../assets/java-icon.png';
import html from '../assets/html-icon.png';
import css from '../assets/css-icon.png';
import javaScript from '../assets/js-icon.png';
import react from '../assets/react-icon.png';
import mySQL from '../assets/mysql-icon.png';
import php from '../assets/php-icon.png';

export default function Skills() {
    return (
        <div className="skills-container">
            <div className="tooltip-wrapper">
                <img src={c} alt="C" className='skills-icon' />
                <span className='tooltip-text'>C</span>
            </div>
            
            <div className="tooltip-wrapper">
                <img src={python} alt="Python" className='skills-icon' />
                <span className='tooltip-text'>Python</span>
            </div>
            
            <div className="tooltip-wrapper">
                <img src={java} alt="Java" className='skills-icon' />
                <span className='tooltip-text'>Java</span>
            </div>
            
            <div className="tooltip-wrapper">
                <img src={html} alt="HTML" className='skills-icon' />
                <span className='tooltip-text'>HTML</span>
            </div>

            <div className="tooltip-wrapper">
                <img src={css} alt="CSS" className='skills-icon' />
                <span className='tooltip-text'>CSS</span>
            </div>

            <div className="tooltip-wrapper">
                <img src={javaScript} alt="JavaScript" className='skills-icon' />
                <span className='tooltip-text'>JavaScript</span>
            </div>
            
            <div className="tooltip-wrapper">
                <img src={react} alt="React" className='skills-icon' />
                <span className='tooltip-text'>React</span>
            </div>

            <div className="tooltip-wrapper">
                <img src={mySQL} alt="MySQL" className='skills-icon' />
                <span className='tooltip-text'>MySQL</span>
            </div>

            <div className="tooltip-wrapper">
                <img src={php} alt="php" className='skills-icon' />
                <span className='tooltip-text'>php</span>
            </div>
        </div>
    );
}