import logo from './Resources/Logo.png'
import phone from './Resources/Homepage/contact-laptop.png'
import location from './Resources/Homepage/location-laptop.png'
import mail from './Resources/Homepage/mail-laptop.png'

const Footer = () => {
    return ( 
        <div className="footer" style={{backgroundColor: '#B6BFC4'}}>
            <img src={logo} alt=""  style={{width: '150px'}}/>
            <h5>Your one-stop shop for all your financial needs!</h5>
            <div style={{display: 'flex', justifyContent: 'center', margin: 'auto', marginTop: '30px'}}>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <h5>Quick Links</h5>
                    <h5 style={{color: '#02A650'}}>Home</h5>
                    <h5 style={{color: '#02A650'}}>About Us</h5>
                    <h5 style={{color: '#02A650'}}>Our Services</h5>
                    <h5 style={{color: '#02A650'}}>Resources</h5>
                    <h5 style={{color: '#02A650'}}>Contact Us</h5>
                </div>
                <div style={{marginLeft: "10%"}}>
                    <h5 style={{textAlign: 'left'}}>Contact Us</h5>
                    <div style={{display: 'flex', margin: '5%'}}>
                        <img src={phone} alt="" />
                        <span style={{marginLeft: '10px'}}>+91 22 2265 2123</span>
                    </div>
                    <div style={{display: 'flex', margin: '5%'}}>
                        <img src={location} alt="" />
                        <span style={{marginLeft: '10px'}}>Jay Antariksh, 10th Floor, #1004, Makwana Road, Marol, Mumbai – 400 059</span>
                    </div>
                    <div style={{display: 'flex', margin: '5%'}}>
                        <img src={mail} alt="" />
                        <span style={{marginLeft: '10px'}}>info@automatefin.com</span>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;