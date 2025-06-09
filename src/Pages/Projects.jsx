
import bus from '/images/bus.png';
import medguide from '/images/medguide.png';
import todo from '/images/todo.png';
export const Projects = () => {
    return (
        <>
            <h3>My Recent <strong>Work</strong></h3>

            <div className="skills-section">

                <div className="skills-cards">
                    <div className="skill-card">
                        <img src={bus} alt="HTML logo" className="logo" />
                        <h3>Bus Managment system</h3>
                        <p style={{ color: "white" }}>Designed and developed a web application with separate portals for Admin, Driver, and Parents. <br />
                            Implemented real-time bus tracking (Geolocation API), fee payments, and user profile management.
                        </p>
                        <p style={{ color: "white" }}>Tech used : HTML,CSS,JavaScript,PHP,MySQL</p>
                        <a href="https://github.com/pawarjay1/Bus-managment-system">GitHub</a>
                    </div>
                    <div className="skill-card">
                        <img src={medguide} alt="HTML logo" className="logo" />
                        <h3>medguide</h3>
                        <p style={{ color: "white" }}>Med Guide is designed to make accessing medicines and medical information quick and simple. <br />It features a Prescription Scanner that scans prescriptions using OCR technology, identifies the medicines, and locates nearby pharmacies with stock.</p>
                        <p style={{ color: "white" }}>Tech used : HTML,CSS,JavaScript,PHP,MySQL</p>
                        <a href="https://github.com/pawarjay1/medguide">GitHub</a>
                    </div>
                    <div className="skill-card">
                        <img src={todo} alt="HTML logo" className="logo" />
                        <h3>ToDo App</h3>
                        <p style={{ color: "white" }}>A lightweight Todo App with add, edit, and double-tap delete features. <br />
                            Tasks are saved locally using Local Storage, ensuring data persistence without the need for a server. <br />
                            The app is designed with a clean and responsive UI.</p>
                        <p style={{ color: "white" }}>Tech used : HTML,CSS,JavaScript,LocalStorage</p>
                        <a href="https://github.com/pawarjay1/todo-in-js.github.io">GitHub</a>
                    </div>
                </div>
            </div>
        </>
    )
}