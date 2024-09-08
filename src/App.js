import logo from './logo.svg';
import './App.css';
import Navbar from './BNavbar';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from './Home'
import AboutUs from './AboutUs'
import Footer from './Footer'


function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/"  element={<Home />} />
            <Route path="aboutus"  element={<AboutUs />} />
            {/*<Route path="personalloan"  element={<PersonalLoan />} />
            <Route path="wcl"  element={<WorkingCapitalLoan />} />
            <Route path="faq"  element={<FAQ />} /> */}
          </Routes>
        </main>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
