import hero from './Resources/Vendor\ Finance/hero.png'

const VendorFinance = () => {
    return ( 
        <div>
            <div>
                <h3 style={{color: '#02A650'}}>Vendor Finance</h3>
                <img src={hero} alt="" />
            </div>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '60px'}}>
                <h3 style={{color: '#02A650'}}>Vendor Finance Transaction Flow with AutomateFin</h3>
                <ol style={{textAlign: 'left', fontSize: '20px'}}>
                    <li style={{marginTop: '15px', marginBottom: '15px'}}>Business places an order for goods or services.</li>
                    <li style={{marginTop: '15px', marginBottom: '15px'}}>AutomateFin Customer Delivers Goods or Services.</li>
                    <li style={{marginTop: '15px', marginBottom: '15px'}}>AutomateFin Customer Invoices Buyer for the delivered goods or services. </li>
                    <li style={{marginTop: '15px', marginBottom: '15px'}}>Buyer approves the invoice for payment and notifies AutomateFin.
</li>
                    <li style={{marginTop: '15px', marginBottom: '15px'}}>AutomateFin offers early payment options to the customer.
</li>
                    <li style={{marginTop: '15px', marginBottom: '15px'}}>AutomateFin Customer accepts the early payment offer.
</li>
                    <li style={{marginTop: '15px', marginBottom: '15px'}}>AutomateFin funds the early payment to the supplier.
</li>
                    <li style={{marginTop: '15px', marginBottom: '15px'}}>Buyer makes payment to AutomateFin on the original due date or extends payment terms as agreed</li>
                </ol>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '60px'}}>
                <h3 style={{color: '#02A650'}}>Benefits Corporate</h3>
                <ol style={{textAlign: 'left', fontSize: '20px'}}>
                    <li style={{marginTop: '15px', marginBottom: '15px'}}>Supplier Trade Payables, Not Bank Debt.</li>
                    <li style={{marginTop: '15px', marginBottom: '15px'}}>No Credit Documentation Required</li>
                    <li style={{marginTop: '15px', marginBottom: '15px'}}>Zero Financing Costs</li>
                    <li style={{marginTop: '15px', marginBottom: '15px'}}>Promotes Dialogue with Suppliers for Commercial Term Negotiation
                    </li>
                    <li style={{marginTop: '15px', marginBottom: '15px'}}>Strengthens Strategic Supplier Relationships
                    </li>
                    <li style={{marginTop: '15px', marginBottom: '15px'}}>Scalable Solution Supporting Supplier Growth and Long-Term Transactional Needs.</li>
                </ol>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '60px', marginBottom: '100px'}}>
                <h3 style={{color: '#02A650'}}>Supplier</h3>
                <ol style={{textAlign: 'left', fontSize: '20px'}}>
                    <li style={{marginTop: '15px', marginBottom: '15px'}}>Enhances Cash Flow and Liquidity
</li>
                    <li style={{marginTop: '15px', marginBottom: '15px'}}>Unlock Receivables for Immediate Funds
</li>
                    <li style={{marginTop: '15px', marginBottom: '15px'}}>Lessens Reliance on Local Banks
 </li>
                    <li style={{marginTop: '15px', marginBottom: '15px'}}>No Need for Collateral

</li>
                    <li style={{marginTop: '15px', marginBottom: '15px'}}>Competitive Pricing Utilizing Corporate Credit Rating

</li>
                    <li style={{marginTop: '15px', marginBottom: '15px'}}>Straightforward Documentation Process

</li>
                    <li style={{marginTop: '15px', marginBottom: '15px'}}>Encourages Vendors to Pursue New Business Opportunities Without Delay</li>
                    <li style={{marginTop: '15px', marginBottom: '15px'}}>Facilitates Access to Additional Working Capital Funds</li>
                </ol>
            </div>
        </div>
     );
}
 
export default VendorFinance;