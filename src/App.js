import './App.css';
import Navbar from './BNavbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home'
import AboutUs from './AboutUs'
import Footer from './Footer'
import Faqs from './Faqs'
import PersonalLoan from './PersonalLoan';
import WCL from './WCL'
import Cf from './ChannelFinance'
import Vf from './VendorFinance'
import Cu from './ContactUs'
import ScrollToTop from './ScrollToTop';


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="App">
        <Navbar />
      
        <main>
          <Routes>
            <Route path="/"  element={<Home />} />
            <Route path="aboutus"  element={<AboutUs />} />
            <Route path="personalloan"  element={<PersonalLoan />} />
            <Route path="wcl"  element={<WCL />} />
            <Route path="faq"  element={<Faqs/>} />
            <Route path="cf" element={<Cf />} /> 
            <Route path="vf" element={<Vf />} />
            <Route path="cu" element={<Cu />} />
          </Routes>
        </main>
      
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
