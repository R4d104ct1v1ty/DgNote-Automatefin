import Accordion from './Accordion'

const Faqs = () => {

    const switchTab = (id1, id2) => {
        const arrayTabs = document.getElementsByClassName('nav-link');
        const arrayContent = document.getElementsByClassName('faq-content');
        Array.prototype.forEach.call(arrayTabs, element => {
            element.classList.remove("active");
        });
        Array.prototype.forEach.call(arrayContent, element => {
            element.classList.add("content-inactive");
        })
        document.getElementById(id2).classList.remove("content-inactive");
        document.getElementById(id1).classList.add("active");
    }


    return ( 
        <div className="Faqs" style={{marginBottom: '60px', height:'100%'}}>
            <h3 style={{marginTop: '40px', color: "#02A650"}}>Frequently Asked Questions</h3>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <button className="nav-link active" aria-current="page" id="general" onClick={e => switchTab("general","general-faq")}>General</button>
                </li>
                <li className="nav-item">
                    <button className="nav-link" id="pl" onClick={e => switchTab("pl", "pl-faq")}>Personal Loan</button>
                </li>
                <li className="nav-item">
                    <button className="nav-link" id="wcl" onClick={e => switchTab("wcl", "wcl-faq")}>Working Capital Loan</button>
                </li>
            </ul>
            <div className='faq-content-parent'>
                <div className='faq-content' id='general-faq'>
                    <Accordion />
                </div>
                <div className='faq-content content-inactive' id='pl-faq'>
                    <Accordion />
                </div>
                <div className='faq-content content-inactive' id='wcl-faq'>
                    <Accordion />
                </div>    
            </div>
            
        </div>
     );
}
 
export default Faqs;