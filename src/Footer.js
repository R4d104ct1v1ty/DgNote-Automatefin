import logo from './Resources/Logo.png'
import phone from './Resources/Homepage/contact-laptop.png'
import location from './Resources/Homepage/location-laptop.png'
import mail from './Resources/Homepage/mail-laptop.png'

const Footer = () => {
    return ( 
        <div className="footer" style={{ backgroundColor: '#B6BFC4', padding: '20px 0' }}>
            {/* Logo and Tagline */}
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <img src={logo} alt="" style={{ width: '150px' }} />
                <h5>Your one-stop shop for all your financial needs!</h5>
            </div>

            {/* Content Section: Contact Info */}
            <div className="footer-content">
                <div className="footer-section">
                    <h5 style={{ textAlign: 'center', marginBottom: '20px' }}>Contact Us</h5>
                    <div className="contact-container">
                        <div className="contact-item">
                            <img src={phone} alt="Phone" />
                            <span>+91 22 2265 2123</span>
                        </div>
                        <div className="contact-item">
                            <img src={location} alt="Location" />
                            <span>Jay Antariksh, 10th Floor, #1004, Makwana Road, Marol, Mumbai – 400 059</span>
                        </div>
                        <div className="contact-item">
                            <img src={mail} alt="Email" />
                            <span>info@automatefin.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Footer;