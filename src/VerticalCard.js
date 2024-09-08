
const VerticalCard = (props) => {
    const imgsrc = props.image;
    const title = props.title;
    const content = props.content;
    const button = props.button;
    const mg = props.mg;
    return ( 
        <div className={`card mt-3 mx-${mg} mb-3`} style={{maxWidth: '25rem', width: '60%'}}>
            {imgsrc!='none'?<img src={imgsrc} className="card-img-top" alt="..." style={{height: '250px'}}/>:<></>}
            <div className="card-body">
                <h5 className="card-title" style={{color: '#02A650'}}>{title}</h5>
                <p className="card-text">{content}</p>
                {button == 'true'?<a href="#" className="btn btn-primary">Explore</a>:<></>}
            </div>
        </div>
     );
}
 
export default VerticalCard;