import fb from './Resources/Contact US/facebook.png'
import google from './Resources/Contact US/google.png'
import twitter from './Resources/Contact US/twitter.png'

const ContactUs = () => {
    return ( 
        <div>
            <div className="cu-hero" style={{height:'50vh'}}>
            </div>
            <div style={{marginTop: '40px'}}>
                <h3 style={{color:'#02A650'}}>Get In Touch With Us</h3>
                <p>Thanks for reaching out. Contact our support team via phone or email for any queries or assistance regarding personal loans. We look forward to hearing from you.</p>
            </div>
            <form>
      <div className="text-center mb-3">
        <p>Connect With Us on:</p>
        <button data-mdb-ripple-init type="button" className="btn btn-secondary btn-floating mx-1">
          <img src={fb} alt="" />
        </button>

        <button data-mdb-ripple-init type="button" className="btn btn-secondary btn-floating mx-1">
          <img src={google} alt="" />
        </button>

        <button data-mdb-ripple-init type="button" className="btn btn-secondary btn-floating mx-1">
            <img src={twitter} alt="" />
        </button>

      </div>
      <div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
      <div data-mdb-input-init className="form-outline mb-4" style={{width: '70%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <input type="email" id="fname" className="form-control" />
        <label className="form-label" htmlFor="fname">First Name</label>
      </div>

      <div data-mdb-input-init className="form-outline mb-4" style={{width: '70%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <input type="email" id="lastName" className="form-control" />
        <label className="form-label" htmlFor="lastName">Last Name</label>
      </div>

      <div data-mdb-input-init className="form-outline mb-4" style={{width: '70%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <input type="email" id="emailid" className="form-control" />
        <label className="form-label" htmlFor="emailid">Email</label>
      </div>
      <div data-mdb-input-init className="form-outline mb-4" style={{width: '70%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <input type="email" id="cnum" className="form-control" />
        <label className="form-label" htmlFor="cnum">Contact Number</label>
      </div>
      <div data-mdb-input-init className="form-outline mb-4" style={{width: '70%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <textarea id="msg" className="form-control" />
        <label className="form-label" htmlFor="msg">Message</label>
      </div>
      <button type="submit" className="btn btn-primary btn-block mb-4" style={{backgroundColor: '#0270A7'}}>Submit</button>
      </div>
      
    </form>
        </div>
     );
}
 
export default ContactUs;