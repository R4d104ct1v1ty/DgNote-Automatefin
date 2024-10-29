import logo from './Resources/Logo.png'
import phone from './Resources/Homepage/contact-laptop.png'
import location from './Resources/Homepage/location-laptop.png'
import mail from './Resources/Homepage/mail-laptop.png'
import {Link} from 'react-router-dom'

const Footer = () => {
    return ( 
        <div className="footer" style={{ backgroundColor: '#B6BFC4', padding: '20px 0' }}>
            {/* Logo and Tagline */}
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <img src={logo} alt="" style={{ width: '150px' }} />
                <h5>Your one-stop shop for all your financial needs!</h5>
            </div>

            {/* Content Section: Contact Info & Quick Links */}
            <div className="footer-content">
                {/* Contact Info */}
                <div className="footer-section">
                    <div style={{ textAlign: 'left' }}>
                        <h5>Contact Us</h5>
                        <div className="contact-item">
                            <img src={phone} alt="Phone" />
                            <span style={{ fontSize: '14px' }}>+91 22 2265 2123</span>
                        </div>
                        <div className="contact-item">
                            <img src={location} alt="Location" />
                            <span style={{ fontSize: '14px', maxWidth: '250px', wordWrap: 'break-word' }}>Jay Antariksh, 10th Floor, #1004, Makwana Road, Marol, Mumbai – 400 059</span>
                        </div>
                        <div className="contact-item">
                            <img src={mail} alt="Email" />
                            <span style={{ fontSize: '14px' }}>info@automatefin.com</span>
                        </div>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="footer-section">
                    <div style={{ textAlign: 'left' }}>
                        <h5>Quick Links</h5>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <Link to="/" style={{ color: '#02A650', marginBottom: '5px' }}>Home</Link>
                            <Link to="/aboutus" style={{ color: '#02A650', marginBottom: '5px' }}>About Us</Link>
                            <Link to="/personalloan" style={{ color: '#02A650', marginBottom: '5px' }}>Personal Loan</Link>
                            <Link to="/wcl" style={{ color: '#02A650', marginBottom: '5px' }}>Working Capital Loan</Link>
                            <Link to="/faq" style={{ color: '#02A650', marginBottom: '5px' }}>FAQs</Link>
                            <Link to="/cu" style={{ color: '#02A650', marginBottom: '5px' }}>Contact Us</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
 
export default Footer;