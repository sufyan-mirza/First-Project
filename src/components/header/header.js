import './header.css';
import './responsive.css'
import image from '/new react/test-project/src/assets/Logo 1.png'
import './images.png'
export default function Header(){
    return(
        <header className="header-nav">
        <div className="header-container">
            <div className="nav-bar">
                <img src={image} alt="img"/>
                <nav>
                    <div className="list">
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Service</li>
                            <li>Portfolio</li>
                        </ul>

                    </div>

                </nav>
                <button id="contact-btn">contact</button>
               

            </div>

            
           
        </div>
            <div className="menu-container">
                <div className="bars">
                <input type="checkbox" id="openMenu"/>
                <label for="openMenu" id="toogle-icon">
                <i class="fa-solid fa-bars" id="open"></i>
                <i class="fa-solid fa-xmark" id="close"></i>
                </label>
                    
                
                <div className="slidebar">
                    <h1>My app</h1>
                    <ul>
                        <li><a href="1">Home</a></li>
                        <li><a href="1">About</a></li>
                        <li><a href="1">Service</a></li>
                        <li><a href="1">Portfolio</a></li>
                        <li><a href="1">contact</a></li>
                        
                    </ul>
                </div>
                
                </div>
            </div>
        </header>
    );
}