import VerticalCard from './VerticalCard';
import wcu from './Resources/Aankerr_Website Image/Why choose us.png'
import solutions from './Resources/Aankerr_Website Image/Solution for your every requirement.png'
import ContactUs from './ContactUs';
import groupHealth from './Resources/Homepage/group-health.png'
import businessLoan from './Resources/Homepage/business-loan.png'
import treasury from "./Resources/Homepage/treasury.png"
import businessIntelligence from "./Resources/Homepage/business-intelligence.png"
import database from "./Resources/Homepage/database.png"
import payroll from "./Resources/Homepage/payroll-management.png"
import performanceManagement from "./Resources/Homepage/payroll-management.png"
import expenseTracker from "./Resources/Homepage/expense-management.png"
import recruitment from "./Resources/Homepage/recruitment.png"
import plan from "./Resources/Homepage/plan.png"
import healthInsurace from "./Resources/Homepage/health-insurance.png"
import cyberInsurance from "./Resources/Homepage/cyber-insurance.png"
import personalLoan from "./Resources/Homepage/personal-loan.png"
import creditCard from "./Resources/Homepage/credit-card.png"
import wealth from "./Resources/Homepage/wealth.png"
import seamlessIntegration from "./Resources/Homepage/Seamless-integration.png"
import comprehensiveOffering from "./Resources/Homepage/comprehensive-offering.png"
import innovation from "./Resources/About Us/innovation-laptop.png"
import employeeCentric from "./Resources/Homepage/employee-centric.png"

const Home = () => {

    const scrollToContact = () => {
        const contactForm = document.querySelector('.contact-form');  // Add a class to your ContactUs component
        if (contactForm) {
            contactForm.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollsec = () =>{
        const target = document.getElementById('target');
        window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
        })
    }

    return ( 
        <div>
            <div className='hp-hero'>
                <h1 style={{color:'#fff'}}>A Complete HR Solution with Integrated Financial and Insurance Services</h1>
                <h3 style={{color:'#fff', marginTop: '3%', fontSize: '17px'}}>Aankerr is designed to streamline and elevate the HR experience by combining core HR functionalities with advancedfinancial and insurance products. We empower companies to focus on growth and productivity, while enablingemployees to access tools that support their personal financial goals and wellness—all on one unified platform.</h3>
                <button id="btn" onClick={scrollsec} style={{padding: '10px', borderRadius: '3px', backgroundColor:'#02A650', border: 'none', color: '#fff', marginTop: '3%', fontSize: '20px', paddingLeft:'15px', paddingRight: '15px'}}>Explore</button>
            </div>
            <div className='hp-explore-services' id="target" style={{display: 'flex', flexDirection: 'column', marginTop: '60px'}}>
                <h3 style={{color: '#02A650'}}>Explore Our Services</h3>
                <span style={{margin: '20px', fontSize: "20px"}}>
                    Aankerr is built to address the wide-ranging needs of HR departments, company leadership, and employees alike. We offer solutions for health, finance, and risk management, all designed to be easily accessible and beneficial for everyone involved. Whether it’s a company-wide insurance policy or an individual’s loan request, Aankerr has a solution for you.
                </span>
                <div className='services' style={{
                    display: 'flex', 
                    margin: 'auto',
                    justifyContent: 'center',  // Add this
                    gap: '20px',              // Add this for consistent spacing
                    width: '100%',            // Add this
                    maxWidth: '1200px',       // Add this to limit width on very large screens
                    padding: '0 20px'         // Add this for some breathing room on the sides
                }}>
                    <VerticalCard title='HRMS Solutions' icons={[{icon: businessIntelligence, title: "Dashboard and Business Intelligence", size: "32px"},{icon: database, title: "Database Managent System (DMS)" , size: "32px"},{icon: payroll, title: "Leave and Payroll Management", size: "32px"},{icon: payroll, title: "Payroll Management System (PMS)", size: "32px"},{icon: expenseTracker, title: "Expense Tracking & Management", size: "32px"},{icon: recruitment, title: "Recruitment and Compliance Support", size: "32px"}]} button='true' onButtonClick={scrollToContact}/>
                    <VerticalCard title='Corporate Solutions' icons={[{icon: groupHealth, title: "Group Health OPD", size: '32px'}, {icon: businessLoan, title: 'Business Loan', size: "32px"}, {icon: treasury, title: "Treasury/Investments", size: "32px"}]} button='true' onButtonClick={scrollToContact}/>
                    <VerticalCard title='Employee Solutions' icons={[{icon: plan, title: "OPD Plan", size: "32px"}, {icon: healthInsurace, title: "Health Insurance", size: "32px"}, {icon: cyberInsurance, title: "Cyber Insurance", size: "32px"}, {icon: personalLoan, title: "Personal Loan", size: "32px"}, {icon: creditCard, title: "Credit/Debit Card", size: "32px"}, {icon: wealth, title: "Wealth Management", size: "32px"}]} button="true" onButtonClick={scrollToContact}/>
                </div>
            </div>
            <div className='hp-solutions' style={{display: 'flex', 
                flexDirection: 'column', 
                marginTop: '60px', 
                marginBottom: '100px', 
                justifyContent: 'center', 
                alignItems:'center'}}>
                <h3 style={{color: '#02A650'}}>Solutions for Your Every Requirement</h3>
                <div className='para-image' style={{
                    display: 'flex', 
                    alignItems: 'center',
                    width: '100%',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                    <div className='para-text' style={{
                        flexBasis: '50%',
                        padding: '20px',
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <span style={{
                            fontSize: "20px",
                            lineHeight: '1.5'
                        }}>
                            At Aankerr, we understand that no two organizations are the same, which is why our platform is built to be flexible and scalable. Whether you need customized health insurance options, employee financial assistance, or a streamlined onboarding process, our solutions can be tailored to fit the exact needs of your business. Aankerr simplifies complex tasks, enabling you to manage every HR, financial, and insurance requirement with ease.
                        </span>
                        
                    </div>
                    <div className='image-para' style={{
                        flexBasis: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '400px' // Fixed height for the container
                    }}>
                        <img src={solutions} alt="Solutions"  style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'contain',
                                maxWidth: '600px'
                            }}/>
                    </div>
                </div>
            </div>
            <div className='hp-wcu' style={{
                display: 'flex', 
                flexDirection: 'column', 
                marginTop: '60px', 
                marginBottom: '100px', 
                justifyContent: 'center', 
                alignItems:'center'
            }}>
                <h3 style={{color: '#02A650'}}>Why Choose Us</h3>
                <div className='para-image' style={{
                    display: 'flex', 
                    alignItems: 'center',
                    width: '100%',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                    <div className='para-text' style={{
                        flexBasis: '50%',
                        padding: '20px',
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <span style={{
                            fontSize: "20px",
                            lineHeight: '1.5'
                        }}>
                            At Aankerr, we redefine employee benefits and corporate solutions by merging HR, finance, and insurance into a single, powerful platform. Our mission is to simplify operations, empower employees, and drive organizational growth through innovative, technology-driven services tailored to modern business needs.
                        </span>
                    </div>
                    <div className='image-para' style={{
                        flexBasis: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '300px' // Fixed height for the container
                    }}>
                        <img 
                            src={wcu} 
                            alt="Why Choose Us"  
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'contain',
                                maxWidth: '500px'
                            }}
                        />
                    </div>
                </div>
                <div className='icons' style={{display: 'flex', margin: 'auto', justifyContent: 'center', marginTop: '60px'}}>
                    <div style={{width: '250px', margin: '30px'}}>
                        <img src={seamlessIntegration} alt="" />
                        <h5>Seamless Integration</h5>
                        <span style={{textAlign:'left'}}>Aankerr bridges essential HR operations with financial and insurance solutions, giving companies a centralized hub that simplifies management and reduces administrative load. Say goodbye to juggling multiple platforms and hello to an all-in-one solution.</span>
                    </div>
                    <div style={{width: '250px', margin: '30px'}}>
                        <img src={comprehensiveOffering} alt="" />
                        <h5>Comprehensive Offerings</h5>
                        <span>From corporate health benefits and employee loans to cybersecurity and wealth management, our platform provides a vast array of services designed to meet the specific needs of each business and individual employee. With Aankerr, every requirement is met under one roof.</span>
                    </div>
                    <div style={{width: '250px', margin: '30px'}}>
                        <img src={innovation} alt="" />
                        <h5>Empowerment Through Technology and Innovation</h5>
                        <span>Our platform is designed to enhance the HR experience with user-friendly technology and a deep understanding of the needs of modern businesses. We’re focused on creating intuitive, efficient solutions that foster growth and security.</span>
                    </div>
                    <div style={{width: '250px', margin: '30px'}}>
                        <img src={employeeCentric} alt="" />
                        <h5>Employee-Centric Approach</h5>
                        <span>We know that happy, financially secure employees are the backbone of successful companies. Aankerr offers a variety of services that prioritize employee well-being and personal growth, enhancing productivity and satisfaction across the organization.</span>
                    </div>
                </div>
                <button onClick={scrollToContact} style={{width: '200px', padding: '15px', border: 'none', backgroundColor: '#0270A7', color: '#fff', marginTop: '70px'}}>Apply Now</button>
            </div>
            {/* <div style={{width: '100%', marginBottom: '100px'}}>
                <h3 style={{color: '#02A650'}}>Frequently Asked Questions</h3>
                <Accordion />
            </div> */}
            <div className="contact-form">
                <ContactUs />
            </div>
        </div>
     );
}
 
export default Home;