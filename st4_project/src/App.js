import './App.css';
import About from './components/About.js';
import Header from './components/Header.js';
import Contact from './components/Contact';
import Home from './components/Home.js';
import Register from './components/Register.js';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import UserData from './components/UserData';
import Footer from './components/Footer'


function App() {
  return (
    <>
    <Router>
    <Header/>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='about' element={<About />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/userdata' element={<UserData />}/>
      <Route path='/register' element={<Register />}/>
    </Routes>
    </Router>
    <Footer />
    </>
  );
}

export default App;
