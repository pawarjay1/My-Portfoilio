import './Home.css'
import { NavLink } from 'react-router-dom';
import profile from '/images/profile.jpeg';
import about_img from '/images/about.jpeg'; 

export const Home = () => {
    return (
        <>
            <div className="container">
                <div className="profile">
                    <img src={profile} alt="profile photo" />
                    <h2>Hi, I'm Jay 👋</h2>
                    <h1> <b> FULL STACK <br />WEB DEVLOPER. </b></h1>
                    <p>A passionate Frontend / Fullstack web developer enthusiast <br />
                        specialized in building stunning pixel-perfect interactive websites/applications.<br />
                        I design and build complete web solutions,
                        from elegant frontends to powerful backends.</p>
                    <NavLink to="/Projects" className="work_btn">My Work</NavLink>
                </div>

                <br/><br/>

                <h3>LET ME INTRODUCE MYSELF</h3>

                <div className="about">
                    <div className="left-about">
                        <p> Hi, My name is Jay. currently studing in Government Engineering College,Gandhinagar.</p>
                        <p>I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️</p>
                        <p>My field of Interest's are building new  Web Technologies and Products</p>
                        <p>Whenever possible, I also apply my passion for developing products with PHP MySQL and Node.js with Modern Javascript Library and Frameworks  like React.js</p>
                    </div>

                    <div className="right-about">
                        <img src={about_img} alt="programming setup img" />
                    </div>

                </div>



            </div>
        </>
    )
}