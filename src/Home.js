import VerticalCard from './VerticalCard';
import PersonalLoan from './Resources/Homepage/Personal-Loan.jpeg'
import WCL from './Resources/Homepage/Working-Capital-Loan.jpg'
import HO from './Resources/Homepage/Home-ownership.jpeg'
import Ed from './Resources/Homepage/Education.jpg'
import Car from './Resources/Homepage/Car.jpeg'
import POM from './Resources/Homepage/Peace-of-mind.jpg'
import MF from './Resources/Homepage/Managing-Finances.jpg'
import WCU from './Resources/Homepage/Why\ Choose\ Us.jpeg'
import dl from './Resources/Homepage/document-laptop.png'
import qa from './Resources/Homepage/quick-approval-laptop.png'
import loan from './Resources/Homepage/loan\ for\ every\ need-laptop.png'
import emi from './Resources/Homepage/EMI-laptop.png'

const Home = () => {
    return ( 
        <div>
            <div className='hp-hero'>
                <h1 style={{color:'#fff'}}>Bridging Finance with Automation</h1>
                <h3 style={{color:'#fff', marginTop: '3%'}}>Your one-stop shop for all your financial needs!From planning to investing, we've got you covered.Let's make your financial goals a reality!</h3>
                <button style={{padding: '10px', borderRadius: '3px', backgroundColor:'#02A650', border: 'none', color: '#fff', marginTop: '3%', fontSize: '20px', paddingLeft:'15px', paddingRight: '15px'}}>Explore</button>
            </div>
            <div className='hp-explore-services' style={{display: 'flex', flexDirection: 'column'}}>
                <h3 style={{color: '#02A650', marginTop: '40px', marginLeft: '2%', float:'left', display: 'inline', width:'50%', maxWidth:"300px"}}>Explore Our Services</h3>
                <div className='services' style={{display:'flex', margin:'auto'}}>
                <VerticalCard image={PersonalLoan} title='Personal Loan' content="
        Share your personal needs with us and we'll customize a Personal Loan to fulfill them" button='true' mg='5'/>
                <VerticalCard image={WCL} title='Working Capital Loan' content="
                Manage your businesses day-to-day expenses and covers inventory, cash, accounts
                payable / receivable, and short-term debt with us" button='true' mg='5'/>
                </div>
            </div>
            <div className='hp-solutions' style={{display: 'flex', flexDirection: 'column'}}>
                <h3 style={{color: '#02A650', marginTop: '40px', marginLeft: '2%', float:'left', display: 'inline', width:'50%', maxWidth:"450px"}}>Loan Solutions for Your Every Need</h3>
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
            <div className='hp-wcu' style={{display: 'flex', flexDirection: 'column'}}>
                <h3 style={{color: '#02A650', marginTop: '40px', marginLeft: '2%', float:'left', display: 'inline', width:'50%', maxWidth:"450px"}}>Why Choose Us</h3>
                <div className='para-image' style={{display: 'flex', alignItems: 'center'}}>
                <div className='para-text' style={{flexBasis: '50%', textAlign:'left', position: 'relative', left:"5%", marginTop: '2%',marginRight: '5%'}}>
                    <span style={{maxWidth: "100%", textAlign: 'left', fontSize: "24px"}}>
                    At AutomateFin, we’re all about helping you reach your goals, no matter how big or small. Our goal is to give you the
        confidence to plan for a better tomorrow while enjoying today to the fullest. We make it happen with our range of easy-to-use financial products, backed by friendly service and user-friendly technology.
                    </span>
                </div>
                <div className='image-para' style={{width: '50%', marginTop: '5%', alignItems: 'center', justifyContent:'center'}}>
                    <img src={WCU} alt=""  style={{width: '70%', minWidth: '350px'}}/>
                </div>
                </div>
                <div className='wcu-icons' style={{marginTop: '7%'}}>
                <div className='it-pair' style={{display: 'flex', margin: 'auto', alignItems: 'center', justifyContent: 'center', position: 'relative', right: '10%'}}>
                    <div className='it-icon' style={{margin:'5%'}}>
                    <img src={dl} alt="" />
                    </div>
                    <div className='it-text'>
                        <h5 style={{fontSize:'24px', textAlign: 'left'}}>Easy Documentation</h5>
                        <span style={{fontSize: '24px', textAlign: 'left'}}>Wave goodbye to lengthy paperwork with easy documentation</span>
                    </div>
                </div>
                <div className='it-pair' style={{display: 'flex', margin: 'auto', alignItems: 'center', justifyContent: 'center', position: 'relative', right: '10%'}}>
                    <div className='it-icon' style={{margin:'5%'}}>
                    <img src={emi} alt="" />
                    </div>
                    <div className='it-text'>
                        <h5 style={{fontSize:'24px', textAlign: 'left'}}>Flexible EMIs</h5>
                        <span style={{fontSize: '24px', textAlign: 'left'}}>Customized your repayment schedule to manage your budget with our flexible EMI options.</span>
                    </div>
                </div>
                <div className='it-pair' style={{display: 'flex', margin: 'auto', alignItems: 'center', justifyContent: 'center', position: 'relative', right: '10%'}}>
                    <div className='it-icon' style={{margin:'5%'}}>
                    <img src={qa} alt="" />
                    </div>
                    <div className='it-text'>
                        <h5 style={{fontSize:'24px', textAlign: 'left'}}>Quick Approvals</h5>
                        <span style={{fontSize: '24px', textAlign: 'left'}}>Welcome fast approvals! Your loan application can be approved in no time</span>
                    </div>
                </div>
                <div className='it-pair' style={{display: 'flex', margin: 'auto', alignItems: 'center', justifyContent: 'center', position: 'relative', right: '10%'}}>
                    <div className='it-icon' style={{margin:'5%'}}>
                    <img src={loan} alt="" />
                    </div>
                    <div className='it-text'>
                        <h5 style={{fontSize:'24px', textAlign: 'left'}}>Loans for Every Need</h5>
                        <span style={{fontSize: '24px', textAlign: 'left'}}>One-stop financial solution for all your needs.</span>
                    </div>
                </div>
                </div>
            </div>
        </div>
     );
}
 
export default Home;