import './Footer.css';
export const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="box">
                    Designed and Developed by Pawar Jay
                </div>

                <div className="box">
                    <p>Copyright &copy; 2025. All rights reserved.</p>
                </div>

                <div className="box">
                    <a href="https://github.com/pawarjay1">
                        <ion-icon name="logo-github" className="logo-btn"></ion-icon>
                    </a>

                    <a href="https://www.linkedin.com/in/pawar-jay-353571200/">
                        <ion-icon name="logo-linkedin" className="logo-btn"></ion-icon>
                    </a>
                    
                    <a href="https://www.instagram.com/pawarjay1">
                        <ion-icon name="logo-instagram" className="logo-btn"></ion-icon>
                    </a>
                    
                    
                </div>
                
            </div>
        </>
    )
}
