import {Link} from 'react-router-dom'

const VerticalCard = (props) => {
    const imgsrc = props.image;
    const title = props.title;
    const content = props.content;
    const button = props.button;
    const link = props.link;
    const mg = props.mg;
    return ( 
        <div className={`card mt-3 mx-${mg} mb-3`} style={{maxWidth: '25rem', width: '60%'}}>
            {imgsrc!=='none'?<img src={imgsrc} className="card-img-top" alt="..." style={{height: '250px'}}/>:<></>}
            <div className="card-body d-flex flex-column">
                <h5 className="card-title" style={{color: '#02A650'}}>{title}</h5>
                <p className="card-text" style={{fontSize: '15px', marginTop: '5%'}}>{content}</p>
                {button === 'true'?<Link to={`/${link}`} className="btn btn-primary mt-auto" style={{backgroundColor: '#0270A7'}}>Explore</Link>:<></>}
            </div>
        </div>
     );
}
 
export default VerticalCard;