import scf from './Resources/Working Capital Loan/supply-chain-finance.png'
import vf from './Resources/Working Capital Loan/vendor-finance.png'
import VerticalCard from './VerticalCard'
import cf from './Resources/Working Capital Loan/customized-finance.png';
import ff from './Resources/Working Capital Loan/flexible-fund-laptop.png';
import flexible from './Resources/Personal Loan/flexible-loan-laptop.png';
import interest from './Resources/Personal Loan/competitive-interest-laptop.png';
import collateral from './Resources/Personal Loan/collateral-laptop.png';
import support from './Resources/Personal Loan/support-laptop.png';
import agreement from './Resources/Personal Loan/agreement-laptop.png';
import application from './Resources/Personal Loan/application-laptop.png';
import approval from './Resources/Personal Loan/approval-laptop.png';
import funds from './Resources/Personal Loan/funds-laptop.png';
import repayment from './Resources/Personal Loan/repayment-laptop.png';
import review from './Resources/Personal Loan/review-laptop.png';
import docs from './Resources/Homepage/document-laptop.png'
import flexibility from './Resources/Working Capital Loan/flexibility.png'
import expertise from './Resources/Working Capital Loan/expertise.png'
import innovation from './Resources/About Us/innovation-laptop.png'

const WCL = () => {
    return ( 
        <div className="WCL">
            <div className='WCL-hero' style={{height: '60vh'}}></div>
            <div className='WCL-intro' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '60px'}}>
                <p style={{textAlign: 'left', width: '70%'}}>At AutomateFin, we understand that maintaining healthy cash flow is essential for the success of any business. That&#39;s why we offer tailored working capital finance solutions designed to provide businesses with the liquidity they need to cover day-to-day operating expenses and fuel growth opportunities.</p>
            </div>
            <div className='WCL-info' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '60px', flexDirection: 'column'}}>
                <h3 style={{color: '#02A650'}}>What is Working Capital Loan?</h3>
                <p style={{textAlign: 'left', width: '70%'}}>Working capital loan provides businesses with the necessary funds to cover day-to-day operational expenses and short-term financial needs. It ensures that companies have enough liquidity to manage their cash flow effectively, pay suppliers, cover payroll, and handle other operational costs. This type of financing is essential for maintaining smooth
business operations, seizing growth opportunities, and navigating through periods of economic fluctuation or unexpected expenses. With options like revolving lines of credit, invoice financing, and short-term loans, working capital finance provides businesses with the flexibility and support they need to thrive in today&#39;s dynamic business environment.</p>
            </div>
            <div className='hp-explore-services' style={{display: 'flex', flexDirection: 'column', marginTop: '60px'}}>
                <h3 style={{color: '#02A650'}}>Explore Our Services</h3>
                <div className='services' style={{display:'flex', margin:'auto', marginTop: '40px'}}>
                    <VerticalCard image={scf} title='Channel Finance / Supply Chain Finance' content="
            Optimizes supply chain financing for distributors and dealers, ensuring smooth operations and cash flow" button='true' mg='5'/>
                    <VerticalCard image={vf} title='Vendor Finance' content="
                    Empowers suppliers to offer financing solutions to their buyers, enhancing business relationships and facilitating
                    transactions" button='true' mg='5'/>
                </div>
            </div>
            <div style={{marginTop: '60px', marginBottom: '30px'}}>
                <h3 style={{color: '#02A650'}}>Features and Benefits</h3>
                <div className='pl-icons' style={{marginTop: '30px'}}>
                    <div style={{display: 'flex', margin: 'auto', justifyContent: 'center'}}>
                        <div style={{width: '250px', margin: '30px'}}>
                            <img src={ff} alt="" />
                            <h5>Flexible Funding Options</h5>
                            <span style={{textAlign:'left'}}>Our working capital finance solutions offer flexible funding options to suit the unique needs of your business, whether you need to cover short-term expenses or finance long-term growth initiatives.</span>
                        </div>
                        <div style={{width: '250px', margin: '30px'}}>
                            <img src={flexible} alt="" />
                            <h5>Quick Access to Funds</h5>
                            <span style={{textAlign:'left'}}>With our streamlined application process and efficient approval times, you can access the funds you need quickly, allowing you to seize opportunities and overcome financial challenges
without delay.</span>
                        </div>
                        <div style={{width: '250px', margin: '30px'}}>
                            <img src={cf} alt="" />
                            <h5>Customized Financing Solutions</h5>
                            <span>We work closely with you to understand your business’s specific cash flow requirements and tailor financing solutions to meet your needs. Whether you require a revolving line of credit, invoice financing, or inventory financing, we have you covered.</span>
                        </div>
                    </div>
                    <div style={{display: 'flex', margin: 'auto', justifyContent: 'center'}}>
                        <div style={{width: '250px', margin: '30px'}}>
                            <img src={interest} alt="" />
                            <h5>Competitive Interest Rates</h5>
                            <span>Our working capital finance solutions offer competitive interest rates, helping you minimize financing costs and maximize profitability.</span>
                        </div>
                        <div style={{width: '250px', margin: '30px'}}>
                            <img src={collateral} alt="" />
                            <h5>No Collateral Required</h5>
                            <span>Depending on the type of financing you choose, collateral may not be required, making our working capital finance solutions accessible to businesses of all sizes and industries.</span>
                        </div>
                        <div style={{width: '250px', margin: '30px'}}>
                            <img src={support} alt="" />
                            <h5>Dedicated Support</h5>
                            <span>Our team of financial experts is committed to providing personalized support and
guidance throughout the financing process, ensuring that you have the resources and assistance you need to succeed.</span>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center', marginTop: '60px'}}>
                <h3 style={{color: '#02A650'}}>Eligibility Criteria</h3>
                <p style={{marginTop: '40px'}}>
                    Applying for working capital finance with AutomateFin is straightforward. Here&#39;s how it works:
                </p>
                <p>
                    To qualify for working capital finance with AutomateFin, businesses must meet the following eligibility criteria:
                </p>
                <ol style={{textAlign: 'left', fontSize: '20px'}}> 
                    <li style={{marginTop: '15px', marginBottom: '15px'}}>Must be a registered business entity in the country where the financing is being offered</li>
                    <li style={{marginTop: '15px', marginBottom: '15px'}}>Must have a demonstrated track record of profitability and positive cash flow</li>
                    <li style={{marginTop: '15px', marginBottom: '15px'}}>Must have a viable business plan or strategy for utilizing the financing to achieve business objectives</li>
                    <li style={{marginTop: '15px', marginBottom: '15px'}}>Must have satisfactory creditworthiness and financial stability</li>
                </ol>
            </div>
            <div style={{display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center', marginTop: '60px'}}>
                <h3 style={{color: '#02A650'}}>Application Process</h3>
                <div style={{display: 'flex', margin: 'auto', justifyContent: 'center'}}>
                    <div style={{width: '250px', margin: '30px'}}>
                        <img src={application} alt="" />
                        <h5>1.Submit an Online Application</h5>
                        <span style={{textAlign:'left'}}>Fill out our secure online application form with your business information,
including financial statements, cash flow projections, and other relevant documentation.</span>
                    </div>
                    <div style={{width: '250px', margin: '30px'}}>
                        <img src={review} alt="" />
                        <h5>2.Review and Approval</h5>
                        <span>Our team will review your application and financial documents to assess your
eligibility and determine the appropriate financing solution for your business.</span>
                    </div>
                    <div style={{width: '250px', margin: '30px'}}>
                        <img src={docs} alt="" />
                        <h5>3.Negotiate Terms</h5>
                        <span>Once approved, we&#39;ll work with you to negotiate the terms of the financing agreement,
including loan amount, interest rate, repayment terms, and any other relevant details.</span>
                    </div>
                    <div style={{width: '250px', margin: '30px'}}>
                        <img src={agreement} alt="" />
                        <h5>4.Sign the Loan Agreement</h5>
                        <span>Review and sign the financing agreement outlining the terms and conditions of the
loan.</span>
                    </div>
                    <div style={{width: '250px', margin: '30px'}}>
                        <img src={funds} alt="" />
                        <h5>5.Receive Funds</h5>
                        <span>Upon acceptance of the agreement, the funds will be disbursed to your business account,
providing you with the working capital you need to support your operations and growth initiatives.</span>
                    </div>
                    </div>
            </div>
            <div style={{display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center', marginTop: '60px'}}>
                <h3 style={{color: '#02A650'}}>Documents Required</h3>
                <p style={{marginTop: '40px'}}>
                    When applying for working capital loan with AutomateFin, businesses typically need to provide:
                </p>
                <ol style={{textAlign: 'left', fontSize: '20px'}}> 
                    <li style={{marginTop: '15px', marginBottom: '15px'}}>Business registration documents</li>
                    <li style={{marginTop: '15px', marginBottom: '15px'}}>Financial statements (balance sheets, profit and loss statements)</li>
                    <li style={{marginTop: '15px', marginBottom: '15px'}}>Bank statements</li>
                    <li style={{marginTop: '15px', marginBottom: '15px'}}>Accounts receivable and payable reports</li>
                    <li style={{marginTop: '15px', marginBottom: '15px'}}>Inventory records</li>
                    <li style={{marginTop: '15px', marginBottom: '15px'}}>Sales projections</li>
                    <li style={{marginTop: '15px', marginBottom: '15px'}}>Business plan</li>
                    <li style={{marginTop: '15px', marginBottom: '15px'}}>Collateral documents (if applicable)</li>
                    <li style={{marginTop: '15px', marginBottom: '15px'}}>Personal identification documents of business owners or partners.</li>
                </ol>
            </div>
            <div style={{display: 'flex', flexDirection: 'column',justifyContent: 'center', alignItems: 'center', marginTop: '60px', marginBottom: '60px'}}>
                <h3 style={{color: '#02A650'}}>Why Choose AutomateFIn for Your Working Capital Finance Needs?</h3>
                <div style={{display: 'flex', margin: 'auto', justifyContent: 'center'}}>
                <div style={{width: '250px', margin: '30px'}}>
                        <img src={expertise} alt="" />
                        <h5>Expertise</h5>
                        <span style={{textAlign:'left'}}>With years of experience in the financial industry, AutomateFin has the expertise and knowledge to understand your business&#39;s unique financing needs and provide tailored solutions.</span>
                </div>
                <div style={{width: '250px', margin: '30px'}}>
                    <img src={flexibility} alt="" />
                    <h5>Flexibility</h5>
                    <span>We offer a variety of working capital finance options to accommodate businesses of all sizes and industries, ensuring that you have access to the funding you need, when you need it.</span>
                </div>
                <div style={{width: '250px', margin: '30px'}}>
                    <img src={support} alt="" />
                    <h5>Customer Service</h5>
                    <span>Our dedicated team of financial experts is committed to providing exceptional customer
service and support, guiding you through the financing process and helping you achieve your business goals.</span>
                </div>
                <div style={{width: '250px', margin: '30px'}}>
                    <img src={innovation} alt="" />
                    <h5>Innovation</h5>
                    <span>We continuously strive to innovate and improve our products and services, leveraging technology
and data analytics to deliver better outcomes for our customers.</span>
                </div>
                </div>
                
            </div>
            <div style={{display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center', marginTop: '60px', marginBottom: '100px'}}>
                <h3 style={{color: '#02A650'}}>Apply For Working Capital Loan Today</h3>
                <p style={{textAlign: 'left', width:'70%'}}>Don&#39;t let cash flow constraints hold your business back. Apply for working capital finance with AutomateFin today and unlock the liquidity you need to drive success and achieve your business objectives.</p>
            </div>
            
        </div>
     );
}
 
export default WCL;