// import styles from './Skills.module.css';

import './Skills.css';

import GitHubCalendar from 'react-github-calendar';

export const Skills = () => {
    return (
        <>
            <h3> Professional Skillset</h3>

            <div className="skills-section">

                <div className="skills-cards">
                    <div className="skill-card">
                        <h3>HTML</h3>
                        <img src="https://cdn.worldvectorlogo.com/logos/html-1.svg" alt="HTML logo" className="logo" />
                    </div>
                    <div className="skill-card">
                        <h3>CSS</h3>
                        <img src="https://cdn.worldvectorlogo.com/logos/css-3.svg" alt="HTML logo" className="logo" />
                    </div>
                    <div className="skill-card">
                        <h3>JavaScript</h3>
                        <img src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg" alt="HTML logo" className="logo" />
                    </div>
                    <div className="skill-card">
                        <h3>React</h3>
                        <img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" alt="HTML logo" className="logo" />
                    </div>
                    <div className="skill-card">
                        <h3>Git</h3>
                        <img src="https://cdn.worldvectorlogo.com/logos/git-icon.svg" alt="HTML logo" className="logo" />
                    </div>
                    <div className="skill-card">
                        <h3>Node JS</h3>
                        <img src="https://res.cloudinary.com/dwvppu30v/image/upload/v1744969831/portfolio/uudtyicmykdnakasfxsf.png" alt="HTML logo" className="logo" />
                    </div>
                    <div className="skill-card">
                        <h3>Express</h3>
                        <img src="https://res.cloudinary.com/dwvppu30v/image/upload/v1744969829/portfolio/f8n7rkm6kxwhes693ens.png" alt="HTML logo" className="logo" />
                    </div>
                    <div className="skill-card">
                        <h3>MongoDB</h3>
                        <img src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" alt="HTML logo" className="logo" />
                    </div>
                    <div className="skill-card">
                        <h3>MySQL</h3>
                        <img src="https://res.cloudinary.com/dwvppu30v/image/upload/v1744969862/portfolio/xzzwfkalqvs8d4urclnn.png" alt="HTML logo" className="logo" />
                    </div>
                    <div className="skill-card">
                        <h3>PHP</h3>
                        <img src="https://cdn.worldvectorlogo.com/logos/php-6.svg" alt="HTML logo" className="logo" />
                    </div>
                    <div className="skill-card">
                        <h3>JAVA</h3>
                        <img src="https://res.cloudinary.com/dwvppu30v/image/upload/v1744969826/portfolio/ylrlbkiiwt2xxuiebylx.webp" alt="HTML logo" className="logo" />
                    </div>
                    <div className="skill-card">
                        <h3>Opps</h3>
                        <img src="https://res.cloudinary.com/dwvppu30v/image/upload/v1744969832/portfolio/uis0ccp0qu3yyy86lwb3.jpg" alt="HTML logo" className="logo" />
                    </div>

                </div>
            </div>
            <h1> Days I Code</h1>

            <div className="github_calendar_wrapper">
                <GitHubCalendar
                username="pawarjay1"
                colorScheme="dark"
                theme={{
                    light: ['#fbf2ff', '#dd92fc', '#d36ffc', '#c648f7', '#b905ff'],
                    dark: ['#1c1c1c', '#39dd4a', '#26a641', '#006d32', '#003d19']
                }}
                blockSize={15}
                blockMargin={5}
                fontSize={16}
                />
            </div>
            <center>
                
                
            </center>
            
        </>
    )
}