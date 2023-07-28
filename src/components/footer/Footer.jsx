import styles from './footer.css'

import facebook from './../../img/fashion-images/socials/fb.svg'
import instagram from './../../img/fashion-images/socials/inst.svg'
import twitter from './../../img/fashion-images/socials/tw.svg'
import iN from './../../img/fashion-images/socials/in.svg'

function Footer () {
    return (
        <section className="footer">
            <div className="container">
                <div className="footer-wrapper">
                    <div className="fashion">
                        <h3 className='fashion-title'>FASHION</h3>
                        <p className="fashion-description">Complete your style with awesome clothes from&nbsp;us.</p>
                        <ul className="social-wrapper">
                            <li><a href="#!" className="social-links"><img src={facebook} alt="facebook logo" /></a></li>
                            <li><a href="#!" className="social-links"><img src={instagram} alt="instagram logo" /></a></li>
                            <li><a href="#!" className="social-links"><img src={twitter} alt="twitter logo" /></a></li>
                            <li><a href="#!" className="social-links"><img src={iN} alt="iN logo" /></a></li>
                        </ul>
                    </div>

                    <div className="company">
                        <h4 className="footer-section-title">Company</h4>
                        <ul className="section-list">
                            <li><a href="#!" className="links">About</a></li>
                            <li><a href="#!" className="links">Contact&nbsp;us</a></li>
                            <li><a href="#!" className="links">Support</a></li>
                            <li><a href="#!" className="links">Careers</a></li>
                        </ul>
                    </div>

                    <div className="company">
                        <h4 className="footer-section-title">Quick Link</h4>
                        <ul className="section-list">
                            <li><a href="#!" className="links">Share Location</a></li>
                            <li><a href="#!" className="links">Contact&nbsp;us</a></li>
                            <li><a href="#!" className="links">Orders Tracking</a></li>
                            <li><a href="#!" className="links">Size Guide</a></li>
                            <li><a href="#!" className="links">FAQs</a></li>
                        </ul>
                    </div>

                    <div className="company">
                        <h4 className="footer-section-title">Legal</h4>
                        <ul className="section-list">
                            <li><a href="#!" className="links">Terms &amp;&nbsp;conditions</a></li>
                            <li><a href="#!" className="links">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;