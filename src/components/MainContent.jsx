import Skills from './SkillsContainer';
import Projects from './ProjectsContainer';
import Games from './GamesContainer';

export default function MainContent() {
    return (
        <div className="main-content-container">
            <div className="skills-wrapper">
                <div className="tooltip-wrapper">
                    <h1>Skills</h1>
                    <div className="tooltip-header">Can't guarantee that i'm good at any of these :p</div>
                </div>

                <Skills />
            </div>

            {/* <div className="projects-wrapper">
                <h1>Projects</h1>

                <Projects />
            </div> */}

            <div className="games-wrapper">
                <div className="tooltip-wrapper">
                    <h1>Games I play</h1>
                    <div className="tooltip-header">Hint: Hover :D</div>
                </div>

                <Games />
            </div>
        </div>
    );
}