const PlHero = () => {
    return ( 
        <div className="pl-hero">
                <h3>Personal Loan upto Rs. 40 Lakhs with Instant Disbursal</h3>
                <div style={{display:'flex', width: '50%'}}>
                    <div style={{width:'100%', backgroundColor: '#fff', padding: '15px'}}>
                        <div style={{display: 'flex'}}>
                            <div>
                                <label for="customRange3" class="form-label">Example range</label>
                                <input type="range" class="form-range" min="0" max="5" step="0.5" id="customRange3" style={{width: '100%'}}></input>
                            </div>
                        </div>
                        <div style={{display: 'flex'}}>
                            <label for="customRange3" class="form-label">Example range</label>
                            <input type="range" class="form-range" min="0" max="5" step="0.5" id="customRange3" style={{width: '100%'}}></input>
                        </div>
                        <div style={{display: 'flex'}}>
                            <label for="customRange3" class="form-label">Example range</label>
                            <input type="range" class="form-range" min="0" max="5" step="0.5" id="customRange3" style={{width: '100%'}}></input>
                        </div>
                    </div>
                    <div>
                        <img src={hero} alt="" style={{width: '80%', height: '100%'}}/>
                    </div>
                </div>
        </div>
     );
}
 
export default PlHero;