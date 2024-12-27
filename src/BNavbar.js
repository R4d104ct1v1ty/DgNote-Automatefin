import logo from './Resources/Logo.png'

const Navbar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <img className="navbar-brand " src ={logo} style={{display:'inline-block', width: '25%', minWidth: '150px', marginLeft:'10px'}} alt="logo"/>
    {/* <a className="navbar-brand " href="#">Navbar</a> */}
    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */}
    {/* <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown" >
      <ul className="navbar-nav justify-content-end">
        <li className="nav-item">
          <Link to="/" className="nav-link" style={{color:'#02A650', fontSize: '18px'}}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/aboutus" style={{color:'#02A650', fontSize: '18px'}}>About Us</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:'#02A650', fontSize: '18px'}}>
            Our Services
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="nav-link" to="/personalloan" style={{color:'#02A650', fontSize: '18px'}}>Personal Loan</Link></li>
            <li><Link className="nav-link" to="/wcl" style={{color:'#02A650', fontSize: '18px'}}>Working Capital Loan</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/faq" style={{color:'#02A650', fontSize: '18px'}}>FAQs</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/cu" style={{color:'#02A650', fontSize: '18px'}}>Contact Us</Link>
        </li>
      </ul>
    </div> */}
  </div>
</nav>
    );
}
 
export default Navbar;