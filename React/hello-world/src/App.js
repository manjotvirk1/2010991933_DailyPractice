import './App.css';
import About from './component/About';
import Navbar from './component/Navbar.js'
import TextForm from './component/TextForm';

function App() {
  return (
    <>
    <Navbar title="TextUtils" aboutText="About TextUtils" /> 
    <div className="container my-3">
      {
      // <Navbar/>
      //<TextForm heading = "Enter the text to analyze" />
      <About/>
      }
    </div>
    </>
  );
}

export default App;
