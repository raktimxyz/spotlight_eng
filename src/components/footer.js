import React from "react";

const Footer = () => {
  return (
    <footer>
        <div className="container">
            <div className="row">
                <div className="col-md-4 footer-col">
                    {/*<h2 className="footer-title mb-2"> 

                        <span className="text-danger">Acting Editor:</span> Morshed Noman
                    </h2>*/}
                    <p>Email: editor.spotlightnews@gmail.com</p>
                    <p>Phone: 01971897452</p>
                    <p>Address: 10/2, Gausia Kashem Center, 8th Floor, Fakirapul Calvert Road, Motijheel, Dhaka-1000</p>
                    
                </div>
                
                <div className="col-md-4 footer-col text-center d-none d-lg-block">
                    <ul className="footer-links">
                        <li><a href="{{ url('/') }}">Home</a></li>
                        <li><a href={`/privacy-policy`}>Privacy Policy</a></li>
                        <li><a href={`/contact-us`}>Contact</a></li>
                        <li><a href={`/about-us`}>About Us</a></li> 
                    </ul>
                </div>
                
                
                <div className="col-md-4 footer-col">
                    
                    <h2 className="footer-title mb-2">
                        Stay Connected
                    </h2>
                    <div className="social-links mt-4">
                        <a target="_blank" href="https://facebook.com/spotlightnews24"><i className="bi bi-facebook"></i></a>
                        <a target="_blank" href="https://x.com/Spotlightbd24"><i className="bi bi-twitter-x"></i></a>
                        <a target="_blank" href="https://www.linkedin.com/company/spotlight-%E0%A6%B8%E0%A7%8D%E0%A6%AA%E0%A6%9F%E0%A6%B2%E0%A6%BE%E0%A6%87%E0%A6%9F/?viewAsMember=true"><i className="bi bi-linkedin"></i></a>
                        <a target="_blank" href="https://www.youtube.com/@SpotlightNewsbd24"><i className="bi bi-youtube"></i></a>
                        <a target="_blank" href="https://www.instagram.com/spot_lightbd?igsh=MWVicnMwaWlyNDJmcQ=="><i className="bi bi-instagram"></i></a>
                    
                    </div>
                </div>
            </div>
            
            <div className="copyright">
                <div className="row">
                    <div className="col-md-6 text-center text-md-start">
                        <p>&copy; 2025 All rights reserved.</p>
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                        
                    </div>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
