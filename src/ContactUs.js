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
      <div class="text-center mb-3">
        <p>Connect With Us on:</p>
        <button data-mdb-ripple-init type="button" class="btn btn-secondary btn-floating mx-1">
          <img src={fb} alt="" />
        </button>

        <button data-mdb-ripple-init type="button" class="btn btn-secondary btn-floating mx-1">
          <img src={google} alt="" />
        </button>

        <button data-mdb-ripple-init type="button" class="btn btn-secondary btn-floating mx-1">
            <img src={twitter} alt="" />
        </button>

      </div>
      <div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
      <div data-mdb-input-init class="form-outline mb-4" style={{width: '70%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <input type="email" id="loginName" class="form-control" />
        <label class="form-label" for="loginName">First Name</label>
      </div>

      <div data-mdb-input-init class="form-outline mb-4" style={{width: '70%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <input type="email" id="loginName" class="form-control" />
        <label class="form-label" for="loginName">Last Name</label>
      </div>

      <div data-mdb-input-init class="form-outline mb-4" style={{width: '70%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <input type="email" id="emailid" class="form-control" />
        <label class="form-label" for="loginPassword">Email</label>
      </div>
      <div data-mdb-input-init class="form-outline mb-4" style={{width: '70%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <input type="email" id="loginName" class="form-control" />
        <label class="form-label" for="loginName">Contact Number</label>
      </div>
      <div data-mdb-input-init class="form-outline mb-4" style={{width: '70%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <textarea id="loginName" class="form-control" />
        <label class="form-label" for="loginName">Message</label>
      </div>
      <button type="submit" class="btn btn-primary btn-block mb-4" style={{backgroundColor: '#0270A7'}}>Submit</button>
      </div>
      
    </form>
        </div>
     );
}
 
export default ContactUs;