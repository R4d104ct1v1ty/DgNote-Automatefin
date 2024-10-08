import Accordion from './Accordion'

const Faqs = () => {
    return ( 
        <div className="Faqs" style={{marginBottom: '60px', height:'100%'}}>
            <h3 style={{marginTop: '40px', color: "#02A650"}}>Frequently Asked Questions</h3>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <button className="nav-link active" aria-current="page">General</button>
                </li>
                <li className="nav-item">
                    <button className="nav-link">Personal Loan</button>
                </li>
                <li className="nav-item">
                    <button className="nav-link">Working Capital Loan</button>
                </li>
            </ul>
            <div>
                <Accordion />
            </div>
            
        </div>
     );
}
 
export default Faqs;