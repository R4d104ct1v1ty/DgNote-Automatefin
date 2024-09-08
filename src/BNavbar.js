import logo from './Resources/Logo.png'

const Navbar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand " href="#" style={{display:'inline-block', width: '25%', minWidth: '150px', marginLeft:'10px'}}><img src ={logo} style={{width: '50%', position: 'relative', right: '20%', display: 'inline-block', minWidth: '150px',marginLeft:'10px'}}/></a>
    {/* <a className="navbar-brand " href="#">Navbar</a> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav" style={{position:'relative', left:'25%'}}>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#" style={{color:'#02A650'}}>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" style={{color:'#02A650'}}>Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" style={{color:'#02A650'}}>Pricing</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:'#02A650'}}>
            Dropdown link
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    );
}
 
export default Navbar;