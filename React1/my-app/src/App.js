import './App.css';
import Header from './component/Header'
import Registration from './component/Registration';
import Registration2 from './component/Registration2';
import Welcome from './component/Welcome';
import EvenOdd from './component/EvenOdd';
import Planet from './component/Project/Planet'

function App() {
  return (
    // <div className="container">
      /*  <Header title='React Tutorial' /> */ 
      /* <Header/> */
      /* <Registration2 />   */
      /*<Welcome /> 
      <EvenOdd num="12"/> */
    // </div>
    <>
    <Planet/>
    </>
  );
}

export default App;



// import React, {Component} from  'react';


// import {BrowserRouter as Router, Route} from 'react-router-dom';
// import './App.css';
// import Home from './pages/Home.js';
// import About from './pages/About.js';
// import Form from './components/Form.js';


// function App() {
//   return (
//     <Router>
//    <div>
// <Route exact path="/" component = {Home} />
// <Route exact path="/About" component = {About} />
// <Route exact path="/Form" component = {Form} />

//    </div>
//    </Router>
//   );
// }

// export default App;
