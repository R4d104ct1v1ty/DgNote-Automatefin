import hero from './Resources/Personal\ Loan/main.jpg'
import {useState} from 'react'

const PlHero = () => {
    const [val1, setVal1] = useState(100000);
    const [val2, setVal2] = useState(10);
    const [val3, setVal3] = useState(1);
    const [emi, setEmi] = useState(Math.floor(100000*10/1200*(Math.pow((1+10/1200),1*12))/((Math.pow((1+10/1200),1*12))-1)));

    const changeVal1 = (event)=>{
        setVal1(event.target.value*100000);
        const p = val1;
        const r = val2/1200;
        const n = val3*12;
        const installment = (p*r*(Math.pow((1+r),n)))/((Math.pow((1+r),n))-1)
        setEmi(Math.floor(installment));
    }
    const changeVal2 = (event)=>{
        setVal2(event.target.value);
        const p = val1;
        const r = val2/1200;
        const n = val3*12;
        const installment = (p*r*(Math.pow((1+r),n)))/((Math.pow((1+r),n))-1)
        setEmi(Math.floor(installment));
    }
    const changeVal3 = (event)=>{
        setVal3(event.target.value);
        const p = val1;
        const r = val2/1200;
        const n = val3*12;
        const installment = (p*r*(Math.pow((1+r),n)))/((Math.pow((1+r),n))-1)
        setEmi(Math.floor(installment));
    }

    
    return ( 
        <div className="pl-hero" style={{backgroundColor: '#EEF2F4', padding:'40px'}}>
                <h3>Personal Loan upto Rs. 40 Lakhs with Instant Disbursal</h3>
                <div className='pl-in' style={{display:'flex', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
                    <div  style={{width:'100%', backgroundColor: '#fff', padding: '25px'}}>
                        <div style={{display: 'flex', width: '80%'}}>
                            <label for="customRange2" class="form-label" >Loan amount Required</label>
                            <input type="range" class="form-range" min="1" max="5" step="0.5" id="customRange1" style={{width: '100%'}} defaultValue="1" onChange={changeVal1}></input>
                            <div style={{backgroundColor: '#EAEDEC', padding:'5px', height: '50%', width: '20%', marginLeft: '5px'}}>Rs. {val1}</div>
                        </div>
                        <div style={{display: 'flex', width: '80%'}}>
                            <label for="customRange2" class="form-label">Interest Rate (% P.A)</label>
                            <input type="range" class="form-range" min="5" max="12" step="0.5" id="customRange2" defaultValue='10' style={{width: '100%'}} onChange={changeVal2}></input>
                            <div style={{backgroundColor: '#EAEDEC', padding:'5px', height: '50%', width: '20%', marginLeft: '5px'}}>{val2}%</div>
                        </div>
                        <div style={{display: 'flex', width: '80%'}}>
                            <label for="customRange3" class="form-label">Tenure (Years)</label>
                            <input type="range" class="form-range" min="1" max="5" step="0.5" id="customRange3" style={{width: '100%'}} defaultValue='1' onChange={changeVal3}></input>
                            <div style={{backgroundColor: '#EAEDEC', padding:'5px', height: '50%', width: '20%', marginLeft: '5px'}}>{val3} years</div>
                        </div>
                        <h5 style={{marginTop:"30px"}}>Rs. {emi} is your monthly EMI</h5>
                    </div>
                    <div>
                        <img src={hero} alt="" style={{width: '80%', height: '100%'}}/>
                    </div>
                </div>
        </div>
     );
}
 
export default PlHero;