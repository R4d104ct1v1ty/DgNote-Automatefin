import fb from './Resources/Contact US/facebook.png'
import google from './Resources/Contact US/google.png'
import twitter from './Resources/Contact US/twitter.png'
import { useState } from 'react'

const ContactUs = () => {
    const [formError, setFormError] = useState(false);
    const [fnameval, setFnameval] = useState(false); // boolean for error in First name 

    const [lnameval, setLnameval] = useState(false); // boolean for error in Last name

    const [emailval, setEmailval] = useState(false); // boolean for email validation
    const [emailmsg, setEmailmsg] = useState(""); // message to be disolayed when there is an error in email id

    const [contactval, setContactval] = useState(false); // boolean for contact number validation 
    const [contactmsg, setContactmsg] = useState("");


    const regexName = /[^A-Za-z]/;
    const regexContact = /[^0-9]/;    

    const validateFname = (e) =>{
      if(regexName.test(e.target.value)){
        setFnameval(true);
        setFormError(true);
      }else{
        setFnameval(false);
        setFormError(false);
      }
    }

    const validateLname = (e) => {
      if(regexName.test(e.target.value)){
        setLnameval(true);
        setFormError(true);
      }else{
        setLnameval(false);
        setFormError(false);
      }
    }

    const validateEmail = (e) => {
      const str= e.target.value;
      if(!(str.includes("@") && str.includes(".", str.indexOf("@") + 2))){
        setEmailval(true);
        setFormError(true);
        setEmailmsg("Email must contain '@' and '.' in this order");
      }else if(str.indexOf("@") == 0){
        setEmailval(true);
        setFormError(true);
        setEmailmsg("Email must have a part before '@'");
      }else if(str.indexOf(".") == str.length-1){
        setEmailval(true);
        setFormError(true);
        setEmailmsg("Email must have a part after '.'");
      }
      else{
        setEmailval(false);
        setFormError(false);
        setEmailmsg("");
      }
    }

    const validateContact = (e) => {
      const num = e.target.value;
      if(regexContact.test(num)){
        setContactval(true);
        setFormError(true);
        setContactmsg("Contact Number should only contain digits from 0-9");
      }else if(num.length !== 10){
        setContactval(true);
        setFormError(true);
        setContactmsg("Contact Number length must be equal to 10");
      }else{
        setContactval(false);
        setFormError(false);
        setContactmsg("");
      }
    }

    return ( 
        <div>
            <div className="cu-hero" style={{height:'50vh'}}>
            </div>
            <div style={{marginTop: '40px'}}>
                <h3 style={{color:'#02A650'}}>Get In Touch With Us</h3>
                <p>Thanks for reaching out. Contact our support team via phone or email for any queries or assistance regarding personal loans. We look forward to hearing from you.</p>
            </div>
            <form className='needs-validation'>

            <div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <div className="row g-2" style={{width: '70%'}}>
              <div className="col-md form-floating">
                <input type="text" className="form-control" placeholder="First name" aria-label="First name" id="fname" onChange={e => validateFname(e)} required/>
                <label htmlFor="fname">First Name</label>
                {fnameval === true?<div className="invalid-field" style={{color: 'red', float: 'left'}}>
                  First name can contain only lowercase and uppercase letters
                </div>:<></>}
              </div>
              <div className="col-md form-floating">
                <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" id="lname" onChange={e => validateLname(e)} required/>
                <label htmlFor="lname">Last Name</label>
                {lnameval === true?<div className="invalid-field" style={{color: 'red', float: 'left'}}>
                  Last name can contain only lowercase and uppercase letters
                </div>:<></>}
              </div>
            </div>

            <div className="row g-2" style={{width: '70%', marginTop:'20px'}}>
              <div className="col-md form-floating">
                <input type="email" className="form-control" placeholder="Email ID" aria-label="Email ID" id="email" onBlur={e => validateEmail(e)} required/>
                <label htmlFor="email">Email ID</label>
                {emailval === true?<div className="invalid-field" style={{color: 'red', float: 'left'}}>
                  {emailmsg}
                </div>:<></>}
              </div>
              <div className="col-md form-floating">
                <input type="text" className="form-control" placeholder="Contact" aria-label="Contact" id="contact" onBlur={e => validateContact(e)} required/>
                <label htmlFor="contact">Contact Number</label>
                {contactval === true?<div className="invalid-field" style={{color: 'red', float: 'left'}}>
                  {contactmsg}
                </div>:<></>}
              </div>
            </div>

            <div className="form-floating" style={{width: '70%', marginTop:'20px', marginBottom: '30px'}}>
              <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "100px"}}></textarea>
              <label htmlFor="floatingTextarea2">Message</label>
            </div>
            <button type="submit" className="btn btn-primary btn-block mb-4" style={{backgroundColor: '#0270A7'}}>Submit</button>
            </div>
            
          </form>
        </div>
     );
}
 
export default ContactUs;