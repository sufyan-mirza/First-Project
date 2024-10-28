import Header from "../../components/header/header";
import Banner from "../../components/banner/banner";
import './home.css'
import './responsive.css'
import vector from './vector.png'
import image from './img.png'
import div from './div.png'
import group from './group.png'
import logo1 from './logo1.png'
import web from './web.png'
import app from './app.png'
import mail from './mail.png'
import location from './location.png'
import phone from'./phone.png'
import Footer from "../../components/footer/footer"


import './bg1.png'
import './waves.png'
import './shape.png'
import './dots.png'
import './waves2.png'
export default function Home(){
    return(
        <div>
        <Header/>
        <Banner/>
        <section className="about">
            <div className="about-container">
                <div className="about-content">
                    <div className="about-img">
                        <img src={image} alt="1"/>
                    </div>
                    <div className="about-text">
                        <h4>ABOUT US</h4>
                        <h1>What we do?</h1>
                        <p>Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible margaret suitable he followed speedily. Indeed vanity excuse or mr lovers of on. By offer scale an stuff. Blush be sorry no sight sang lose at the reachpoint.
                        <br/><br/>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
                        <div className="stats-list">
                            <ul>
                                <li>
                                    <h1>665+</h1>
                                    <p>Global Presence</p>
                                </li>
                                <img src={vector} alt="2"/>
                                <li className="stats">
                                    <h1>58%</h1>
                                    <p>Satisfaction</p>
                                </li>
                                <img src={vector} alt="2"/>
                                <li className="stats">
                                    <h1>250+</h1>
                                    <p>Global Clients</p>
                                </li>
                            </ul>
                        </div>
                        <button>READ MORE</button>
                    </div>
                </div>
            </div>


        </section>
        <section className="service">
            <div className="title-container">
                <div className="service-title">
                    <h4>OUR SERVICES</h4>
                    <h1>We provide IT & Business <br/>solutions</h1>
                    <img src={div} alt="3"/>
                    <p>Outlived no dwelling denoting in peculiar as he believed. Behaviour excellent middleton be as it curiosity departure ourselves very extreme future.</p>
                </div>
            </div>
            <div className="service-container">
                <div className="service-content">
                    <div className="service-box">
                        <img src={group} alt=""/>
                        <h1>Business Process Outsourcing</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className="service-box">
                        <img src={group} alt=""/> 
                        <h1>Back Office Solutions</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className="service-box">
                        <img src={group} alt=""/>
                        <h1>Sales outsourcing</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className="service-box">
                        <img src={group} alt=""/>
                        <h1>Technical Resource for Hire</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className="service-box">
                        <img src={group} alt=""/>
                        <h1>Appointment Scheduler</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className="service-box">
                        <img src={group} alt=""/>
                        <h1>Data Cleaning / Lead Generation</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
                <div className="service-content2">
                <div className="service-box">
                        <img src={group} alt=""/>
                        <h1>Sales outsourcing</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className="service-box">
                        <img src={group} alt=""/>
                        <h1>Technical Resource for Hire</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>

                </div>
            </div>
        </section>
        <section className="portfolio">
           
                <div className="title-container">
                    <div className="portfolio-title">
                        <h4>PORTFOLIO</h4>
                        <h1>Actionable insights.<br/>Real-worldexperience</h1>
                        <img src={div} alt="3"/>
                        <p>Outlived no dwelling denoting in peculiar as he believed. Behaviour excellent middleton be as it curiosity departure ourselves very extreme future.</p>
                    </div>
                </div>
                
                <div className="portfolio-container">
                    <div className="portfolio-content">
                        <div className="portfolio-box">
                            <img src={logo1} alt=""/>
                            <div className="portfolio-text">
                                <h4>Web Designing</h4>
                            </div>
                        </div>
                        <div className="portfolio-box">
                            <img src={app} alt=""/>
                            <div className="portfolio-text1">
                                <h4>App Development</h4>
                            </div>
                        </div>
                        <div className="portfolio-box">
                            <img src={web} alt=""/>
                            <div className="portfolio-text">
                                <h4>Web Designing</h4>
                            </div>
                        </div>
                        <div className="portfolio-box">
                            <img src={logo1} alt=""/>
                            <div className="portfolio-text">
                                <h4>Web Designing</h4>
                            </div>
                        </div>
                        <div className="portfolio-box">
                            <img src={app} alt=""/>
                            <div className="portfolio-text1">
                                <h4>App Development</h4>
                            </div>
                        </div>
                        <div className="portfolio-box">
                            <img src={web} alt=""/>
                            <div className="portfolio-text">
                                <h4>Web Designing</h4>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-btn">
                    <button>VIEW ALL</button>
                    </div>
                    
                </div>
        </section>
        <section className="contact">
            <div className="contact-container">
                <div className="contact-content">
                    <div className="contact-info">
                        <div className="contact-title">
                        <h4>CONTACT US</h4>
                        <h1>You can connect with us when need help!</h1>
                        </div>
                        <div className="contact-box">
                        <img src={location}alt="1"/>
                            <div className="contact-text">
                                <h4>Office Location</h4>
                                <p>22 Baker Street, London,<br/>
                                United Kingdom, W1U 3BW</p>
                            </div>
                        </div>
                        <div className="contact-box">
                            <img src={phone}alt="1"/>
                            <div className="contact-text"> 
                                <h4>Phone</h4>
                                <p>+92-302-2758453</p>
                            </div>
                        </div>
                        <div className="contact-box">
                        <img src={mail}alt="1"/>
                            <div className="contact-text">
                                <h4>Email</h4>
                                <p>info@gmail.com</p>
                           </div> 
                        </div>
                    </div>
                    <div className="contact-form">
                    <form>
                            <h1>Lorem Ispusm</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Contrary to popular belief.</p>
                            <input type="text" placeholder="Name" className="form-name" required/>
                            <input type="text" placeholder="Email" className="form-name" required/>
                            <input type="text" placeholder="Service" className="form-name" required/>
                            <textarea rows="5" name="message" placeholder="Messaage" className="form-name" required/>
                            <button>SUBMIT</button>
                        </form>
                    </div>
                </div>
            </div>
            
        </section>
        <Footer/>
        </div>
    );
}