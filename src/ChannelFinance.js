import hero from './Resources/Channel Finance/hero.png'

const ChannelFinance = () => {
    return ( 
        <div>
            <div className='cf-hero'>
                <h3 style={{color: '#02A650'}}>Channel Finance/Supply Chain Finance</h3>
                <img src={hero} alt="" style={{width: '40%'}} />
            </div>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '60px'}}>
                <h3 style={{color: '#02A650'}}>Channel Finnace / Supply Chain Finance Transaction Flow with AutomateFin</h3>
                <ol style={{textAlign: 'left', fontSize: '20px'}}>
                    <li style={{marginTop: '15px', marginBottom: '15px'}}>Supply Chain finance facility agreement is established between the buyer (AutomateFin customer) and financer</li>
                    <li style={{marginTop: '15px', marginBottom: '15px'}}>Goods are shipped, and a sales invoice is issued to the buyer (AutomateFin customer) by the corporate seller.</li>
                    <li style={{marginTop: '15px', marginBottom: '15px'}}>Corporate submits the invoice to AutomateFin&#39;s Platform.</li>
                    <li style={{marginTop: '15px', marginBottom: '15px'}}>Buyer (AutomateFin customer) approves the invoice on AutomateFin&#39;s platform.</li>
                    <li style={{marginTop: '15px', marginBottom: '15px'}}>AutomateFin pays the corporate seller upon approval of the invoice.</li>
                    <li style={{marginTop: '15px', marginBottom: '15px'}}>Buyer (AutomateFin customer) pays AutomateFin on the agreed-upon due date.</li>
                </ol>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '60px'}}>
                <h3 style={{color: '#02A650'}}>Benefits Corporate</h3>
                <ol style={{textAlign: 'left', fontSize: '20px'}}>
                    <li style={{marginTop: '15px', marginBottom: '15px'}}>Enhanced Working Capital Management</li>
                    <li style={{marginTop: '15px', marginBottom: '15px'}}>Encourages Payment Discipline Among SME Customers, Distributors, and Dealers</li>
                    <li style={{marginTop: '15px', marginBottom: '15px'}}>Enhances Efficiency in Corporate Receivable Management, Minimizing Collection Costs</li>
                    <li style={{marginTop: '15px', marginBottom: '15px'}}>Drives Disciplined Growth, Boosting Top Line Performance</li>
                    <li style={{marginTop: '15px', marginBottom: '15px'}}>Enables Effective Communication and Negotiation of Commercial Terms with Customers, Dealers, and Distributors</li>
                    <li style={{marginTop: '15px', marginBottom: '15px'}}>Fosters Strategic Supplier Relationships</li>
                    <li style={{marginTop: '15px', marginBottom: '15px'}}>Scalable Solution Supporting Long-Term Growth and Transactional Needs</li>
                    <li style={{marginTop: '15px', marginBottom: '15px'}}>Improves Financial Ratios such as Return on Capital Employed (ROCE), Economic Value Added (EVA), and more.</li>
                </ol>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '60px', marginBottom: '100px'}}>
                <h3 style={{color: '#02A650'}}>Customer / Distributor</h3>
                <ol style={{textAlign: 'left', fontSize: '20px'}}>
                    <li style={{marginTop: '15px', marginBottom: '15px'}}>Competitive Pricing – Utilizing Anchor&#39;s credit rating and bank relationships.</li>
                    <li style={{marginTop: '15px', marginBottom: '15px'}}>Decreases Reliance on Local Banks</li>
                    <li style={{marginTop: '15px', marginBottom: '15px'}}>Streamlined Documentation Process</li>
                    <li style={{marginTop: '15px', marginBottom: '15px'}}>No Need for Collateral</li>
                    <li style={{marginTop: '15px', marginBottom: '15px'}}>Straightforward Documentation Process</li>
                    <li style={{marginTop: '15px', marginBottom: '15px'}}>Efficient Handling of Seasonal Ad hoc Requirements with Quick Turnaround Times</li>
                </ol>
            </div>
        </div>
     );
}
 
export default ChannelFinance;