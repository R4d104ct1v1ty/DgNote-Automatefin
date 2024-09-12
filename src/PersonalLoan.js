import hero from './Resources/Personal\ Loan/main.jpg'
import agreement from './Resources/Personal\ Loan/agreement-laptop.png';
import application from './Resources/Personal\ Loan/application-laptop.png';
import approval from './Resources/Personal\ Loan/approval-laptop.png';
import collateral from './Resources/Personal\ Loan/collateral-laptop.png';
import interest from './Resources/Personal\ Loan/competitive-interest-laptop.png';
import flexible from './Resources/Personal\ Loan/flexible-loan-laptop.png';
import funds from './Resources/Personal\ Loan/funds-laptop.png';
import partner from './Resources/Personal\ Loan/partner-laptop.png';
import repayment from './Resources/Personal\ Loan/repayment-laptop.png';
import review from './Resources/Personal\ Loan/review-laptop.png';
import solution from './Resources/Personal\ Loan/solution-laptop.png';
import support from './Resources/Personal\ Loan/support-laptop.png';
import transparency from './Resources/Personal\ Loan/transparency-laptop.png';
import {Link} from 'react-router-dom'
import docs from './Resources/Homepage/document-laptop.png'
import Accordion from './Accordion'
import PlHero from './PlHero';


const PersonalLoan = () => {
    return ( 
        <div className="pl">
            <PlHero />
            <div style={{display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center', marginTop: '60px'}}>
                <h3 style={{color: '#02A650'}}>What is Personal Loan</h3>
                <p style={{textAlign: 'left', width: '70%', marginTop: '30px'}}>
                Personal loans are funds borrowed from a financial institution, like a bank or online lender, for personal expenses. They're versatile and can be used for various purposes, such as consolidating debt or covering unexpected costs.Unlike loans tied to specific assets, personal loans are typically unsecured, relying on factors like creditworthiness and
income for approval. They're repaid in fixed monthly installments over a set period, with interest rates varying based on factors like credit score and loan amount. Comparing offers from different lenders is crucial to find the best terms for your needs.
                </p>
            </div>
            <div style={{marginTop: '60px', marginBottom: '30px'}}>
                <h3 style={{color: '#02A650'}}>Features and Benefits</h3>
                <div style={{marginTop: '30px'}}>
                    <div className='icons' style={{display: 'flex', margin: 'auto', justifyContent: 'center'}}>
                        <div style={{width: '250px', margin: '30px'}}>
                            <img src={flexible} alt="" />
                            <h5>Integrity</h5>
                            <span style={{textAlign:'left'}}>We believe in honesty and transparency in all our interactions.</span>
                        </div>
                        <div style={{width: '250px', margin: '30px'}}>
                            <img src={interest} alt="" />
                            <h5>Empowerment</h5>
                            <span>We strive to empower individuals and businesses to take control of their financial futures.</span>
                        </div>
                        <div style={{width: '250px', margin: '30px'}}>
                            <img src={approval} alt="" />
                            <h5>Innovation</h5>
                            <span>We continuously seek new ways to simplify and enhance the financial experience for our
customers.</span>
                        </div>
                    </div>
                    <div className='icons' style={{display: 'flex', margin: 'auto', justifyContent: 'center'}}>
                        <div style={{width: '250px', margin: '30px'}}>
                            <img src={repayment} alt="" />
                            <h5>Adaptability</h5>
                            <span>We embrace change and adapt to evolving needs, ensuring that we remain responsive and
flexible in our approach to serving our customers and communities.</span>
                        </div>
                        <div style={{width: '250px', margin: '30px'}}>
                            <img src={collateral} alt="" />
                            <h5>Excellence</h5>
                            <span>We are committed to delivering exceptional service and results, setting high standards for
ourselves.</span>
                        </div>
                        <div style={{width: '250px', margin: '30px'}}>
                            <img src={support} alt="" />
                            <h5>Community</h5>
                            <span>We are dedicated to giving back and making a positive impact in the communities we serve.</span>
                        </div>
                    </div>
                </div>
                <Link to=''><button style={{border: 'none', backgroundColor: '#0270A7', color:'#fff', padding: '10px', borderRadius: '3px'}}>Apply Now</button></Link>
            </div>
            <div style={{display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center', marginTop: '60px'}}>
                <h3 style={{color: '#02A650'}}>Eligibility Criteria</h3>
                <p style={{textAlign: 'left', width: '70%', marginTop: '30px'}}>To qualify for a personal loan with AutomateFin, applicants must meet the following eligibility criteria:</p>
                <ol style={{textAlign: 'left', fontSize: '20px'}}>
                    <li style={{marginTop: '15px', marginBottom: '15px'}}>Must be a legal resident of the country where the loan is being offered</li>
                    <li style={{marginTop: '15px', marginBottom: '15px'}}>Must be at least 18 years of age (or the age of majority in your jurisdiction)</li>
                    <li style={{marginTop: '15px', marginBottom: '15px'}}>Must have a steady source of income</li>
                    <li style={{marginTop: '15px', marginBottom: '15px'}}>Must have a valid identification document (e.g., driver's license, passport)</li>
                    <li style={{marginTop: '15px', marginBottom: '15px'}}>Must have a good credit history (credit score requirements may vary)</li>
                </ol>
            </div>
            <div  style={{display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center', marginTop: '60px'}}>
                <h3 style={{color: '#02A650'}}>Application Process</h3>
                <div className='icons' style={{display: 'flex', margin: 'auto', justifyContent: 'center'}}>
                    <div style={{width: '250px', margin: '30px'}}>
                        <img src={application} alt="" />
                        <h5>1.Submit an Online Application</h5>
                        <span style={{textAlign:'left'}}>Fill out our secure online application form with your personal and financial
information.</span>
                    </div>
                    <div style={{width: '250px', margin: '30px'}}>
                        <img src={docs} alt="" />
                        <h5>2.Upload Required Documents</h5>
                        <span>Upload necessary documents such as proof of identity, proof of income, and any additional documentation as requested.</span>
                    </div>
                    <div style={{width: '250px', margin: '30px'}}>
                        <img src={review} alt="" />
                        <h5>3.Review and Approval</h5>
                        <span>Once your application and documents are submitted, our team will review them and notify you of the loan decision.</span>
                    </div>
                    <div style={{width: '250px', margin: '30px'}}>
                        <img src={agreement} alt="" />
                        <h5>4.Sign the Loan Agreement</h5>
                        <span>If approved, review and sign the loan agreement outlining the terms and
conditions of the loan.</span>
                    </div>
                    <div style={{width: '250px', margin: '30px'}}>
                        <img src={funds} alt="" />
                        <h5>5.Receive Funds</h5>
                        <span>Upon acceptance of the loan agreement, the funds will be deposited directly into your designated bank account.</span>
                    </div>
                    </div>
            </div>
            <div style={{display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center', marginTop: '60px'}}>
                <h3 style={{color: '#02A650'}}>Documents Required</h3>
                <p style={{textAlign: 'left', width: '70%', marginTop: '30px'}}>Applying for a personal loan in AutomateFin? Here's a handy checklist of documents you'll need:</p>
                <ol style={{textAlign: 'left', fontSize: '20px'}}>
                    <li style={{marginTop: '15px', marginBottom: '15px'}}>ID Proof: Aadhaar card, Passport, Voter ID, or Driver's License.</li>
                    <li style={{marginTop: '15px', marginBottom: '15px'}}>Address Proof: Aadhaar card, Passport, Voter ID, Utility bills, Rental agreement, or Bank statements.</li>
                    <li style={{marginTop: '15px', marginBottom: '15px'}}>Income Proof: Salary slips, Form 16, Bank statements, or Income Tax Returns.</li>
                    <li style={{marginTop: '15px', marginBottom: '15px'}}>Employment Confirmation: Employment certificate or offer letter.</li>
                    <li style={{marginTop: '15px', marginBottom: '15px'}}>Credit History: Authorization for credit report access.</li>
                    <li style={{marginTop: '15px', marginBottom: '15px'}}>Financial Records: Business financial statements if self-employed.</li>
                    <li style={{marginTop: '15px', marginBottom: '15px'}}>Existing Debts: Statements for loans or credit cards.</li>
                </ol>
                <Link to=''><button style={{border: 'none', backgroundColor: '#0270A7', color:'#fff', padding: '10px', borderRadius: '3px'}}>Apply Now</button></Link>
            </div>
            <div style={{display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center', marginTop: '60px', marginBottom: '60px'}}>
                <h3 style={{color: '#02A650'}}>Why Choose AutomateFin for Your Personal Loan Needs?</h3>
                <div className='icons' style={{display: 'flex', margin: 'auto', justifyContent: 'center'}}>
                    <div style={{width: '250px', margin: '30px'}}>
                        <img src={application} alt="" />
                        <h5>Trusted Partner</h5>
                        <span style={{textAlign:'left'}}>With years of experience in the financial industry, AutomateFin is a trusted partner you can rely on.</span>
                    </div>
                    <div style={{width: '250px', margin: '30px'}}>
                        <img src={docs} alt="" />
                        <h5>Customized Solutions</h5>
                        <span>We understand that every borrower is unique, which is why we offer personalized
solutions tailored to your specific needs.</span>
                    </div>
                    <div style={{width: '250px', margin: '30px'}}>
                        <img src={review} alt="" />
                        <h5>Transparent Process</h5>
                        <span>We believe in transparency and integrity, ensuring that you fully understand the terms
and conditions of your personal loan before signing.</span>
                    </div>
                    <div style={{width: '250px', margin: '30px'}}>
                        <img src={agreement} alt="" />
                        <h5>Exceptional Customer Service</h5>
                        <span>Our dedicated team of customer service representatives is available to
assist you with any questions or concerns you may have throughout the loan process.</span>
                    </div>
                </div>
            </div>
            <div style={{marginBottom: '100px'}}>
                <h3 style={{color: '#02A650'}}>Frequently Asked Questions</h3>
                <Accordion />
            </div>
        </div>
     );
}
 
export default PersonalLoan;