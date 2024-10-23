import VerticalCard from './VerticalCard';
import PersonalLoan from './Resources/Homepage/Personal-Loan.jpeg'
import WCL from './Resources/Homepage/Working-Capital-Loan.jpg'
import HO from './Resources/Homepage/Home-ownership.jpeg'
import Ed from './Resources/Homepage/Education.jpg'
import Car from './Resources/Homepage/Car.jpeg'
import POM from './Resources/Homepage/Peace-of-mind.jpg'
import MF from './Resources/Homepage/Managing-Finances.jpg'
import WCU from './Resources/Homepage/Why Choose Us.jpeg'
import dl from './Resources/Homepage/document-laptop.png'
import qa from './Resources/Homepage/quick-approval-laptop.png'
import loan from './Resources/Homepage/loan for every need-laptop.png'
import emi from './Resources/Homepage/EMI-laptop.png'
import Accordion from './Accordion'

const Home = () => {

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
                <h1 style={{color:'#fff'}}>Bridging Finance with Automation</h1>
                <h3 style={{color:'#fff', marginTop: '3%'}}>Your one-stop shop for all your financial needs! From planning to investing, we've got you covered. Let's make your financial goals a reality!</h3>
                <button id="btn" onClick={scrollsec} style={{padding: '10px', borderRadius: '3px', backgroundColor:'#02A650', border: 'none', color: '#fff', marginTop: '3%', fontSize: '20px', paddingLeft:'15px', paddingRight: '15px'}}>Explore</button>
            </div>
            <div className='hp-explore-services' id="target" style={{display: 'flex', flexDirection: 'column', marginTop: '60px'}}>
                <h3 style={{color: '#02A650'}}>Explore Our Services</h3>
                <div className='services' style={{display:'flex', margin:'auto'}}>
                <VerticalCard image={PersonalLoan} title='Personal Loan' content="
        Share your personal needs with us and we'll customize a Personal Loan to fulfill them" button='true' link="personalloan" mg='5'/>
                <VerticalCard image={WCL} title='Working Capital Loan' content="
                Manage your businesses day-to-day expenses and covers inventory, cash, accounts
                payable / receivable, and short-term debt with us" button='true' link="wcl" mg='5'/>
                </div>
            </div>
            <div className='hp-solutions' style={{display: 'flex', flexDirection: 'column', marginTop: '60px'}}>
                <h3 style={{color: '#02A650'}}>Loan Solutions for Your Every Need</h3>
                <div className='hp-cards' style={{display: 'flex'}}>
                <VerticalCard image={HO} title='Home Ownership Made Possible' content="Share your personal needs with us and we'll customize a Personal Loan to fulfill them" mg='auto'/>
                <VerticalCard image={Ed} title='Invest in Your Future with Education Loans' content="
                Share your personal needs with us and we'll customize a Personal Loan to fulfill them" mg='auto'/>
                <VerticalCard image={Car} title='Drive Away with Ease' content="
                Quick and hassle-free auto loans for your next vehicle" mg='auto'/>
                <VerticalCard image={MF} title='Simplify Your Finances' content="
                Consolidation loans to streamline multiple debts into one manageable payment" mg='auto'/>
                <VerticalCard image={POM} title="Peace of Mind for Life's Unexpected Turns:" content="
                Fast personal loans for unforeseen expenses" mg='auto'/>
                </div>
            </div>
            <div className='hp-wcu' style={{display: 'flex', flexDirection: 'column', marginTop: '60px', marginBottom: '100px', justifyContent: 'center', alignItems:'center'}}>
                <h3 style={{color: '#02A650'}}>Why Choose Us</h3>
                <div className='para-image' style={{display: 'flex', alignItems: 'center'}}>
                <div className='para-text' style={{flexBasis: '50%', textAlign:'left', position: 'relative', left:"5%", marginTop: '2%',marginRight: '5%'}}>
                    <span style={{maxWidth: "100%", textAlign: 'left', fontSize: "24px"}}>
                    At AutomateFin, we’re all about helping you reach your goals, no matter how big or small. Our goal is to give you the
        confidence to plan for a better tomorrow while enjoying today to the fullest. We make it happen with our range of easy-to-use financial products, backed by friendly service and user-friendly technology.
                    </span>
                </div>
                <div className='image-para' style={{marginTop: '5%', alignItems: 'center', justifyContent:'center'}}>
                    <img src={WCU} alt=""  style={{width: '100%', minWidth: '350px'}}/>
                </div>
                </div>
                <div className='icons' style={{display: 'flex', margin: 'auto', justifyContent: 'center', marginTop: '60px'}}>
                    <div style={{width: '250px', margin: '30px'}}>
                        <img src={dl} alt="" />
                        <h5>Easy Documentation</h5>
                        <span style={{textAlign:'left'}}>Wave goodbye to lengthy paperwork with easy documentation</span>
                    </div>
                    <div style={{width: '250px', margin: '30px'}}>
                        <img src={qa} alt="" />
                        <h5>Flexible EMIs</h5>
                        <span>Customized your repayment schedule to manage your budget with our flexible EMI options.</span>
                    </div>
                    <div style={{width: '250px', margin: '30px'}}>
                        <img src={loan} alt="" />
                        <h5>Quick Approvals</h5>
                        <span>Welcome fast approvals! Your loan application can be approved in no time</span>
                    </div>
                    <div style={{width: '250px', margin: '30px'}}>
                        <img src={emi} alt="" />
                        <h5>Loans for Every Need</h5>
                        <span>One-stop financial solution for all your needs.</span>
                    </div>
                </div>
                <button style={{width: '200px', padding: '15px', border: 'none', backgroundColor: '#0270A7', color: '#fff', marginTop: '70px'}}>Apply Now</button>
            </div>
            <div style={{width: '100%', marginBottom: '100px'}}>
                <h3 style={{color: '#02A650'}}>Frequently Asked Questions</h3>
                <Accordion />
            </div>
        </div>
     );
}
 
export default Home;