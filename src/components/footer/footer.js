import './footer.css';
import './responsive.css'
import image2 from '/new react/test-project/src/assets/logo2.png';
import location1 from './location1.png'
import mail1 from './mail1.png'
import phone1 from './phone1.png'

export default function Footer(){
    return(
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-top">
                    <div className="footer-text">
                    <img src={image2} alt="img"/>
                    <p>Required honoured trifling eat pleasure man relation. Assurance yet bed was improving furniture man. Distrusts delighted Excuse few the remain highly feebly add people manner say. It high at my mind by roof.</p>
                    <div className="footer-icon">
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-linkedin"></i>
                    </div>
                    </div>
                    <div className="footer-service">
                        <h1>OUR SERVICES</h1>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Service</li>
                            <li>Portfolio</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="footer-contact">
                        <h1>CONTACT</h1>
                    <div className="footer-box">
                        <img src={location1}alt="1"/>
                            <div className="footer-info">
                                
                                <p>22 Baker Street, London,<br/>
                                United Kingdom, W1U 3BW</p>
                            </div>
                        </div>
                        <div className="footer-box">
                            <img src={phone1}alt="1"/>
                            <div className="footer-info"> 
                                
                                <p>+92-302-2758453</p>
                            </div>
                        </div>
                        <div className="footer-box">
                        <img src={mail1}alt="1"/>
                            <div className="footer-info">
                                
                                <p>info@gmail.com</p>
                           </div> 
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                    <p>Copyright 2022 © Design & Development by Geeks Root. All right reserved</p>
            </div>

        </footer>
    );
}