import './App.css';
import About from './st4/About.js';
import Header from './st4/Header.js';
import Contact from './st4/Contact';
import Home from './st4/Home.js';
import Register from './st4/Register.js';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import UserData from './st4/UserData';
import Footer from './st4/Footer'


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
