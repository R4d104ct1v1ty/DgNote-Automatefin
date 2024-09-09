

const Faqs = () => {
    return ( 
        <div className="Faqs" style={{marginBottom: '60px', height:'100%'}}>
            <h3 style={{marginTop: '40px', color: "#02A650"}}>Frequently Asked Questions</h3>
            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <button class="nav-link active" aria-current="page">General</button>
                </li>
                <li class="nav-item">
                    <button class="nav-link">Personal Loan</button>
                </li>
                <li class="nav-item">
                    <button class="nav-link">Working Capital Loan</button>
                </li>
            </ul>
            <div>
                {/* <Accordion /> */}
            </div>
            
        </div>
     );
}
 
export default Faqs;