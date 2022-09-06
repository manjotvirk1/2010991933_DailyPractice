import './App.css';
import Header from './component/Header'
import Registration from './component/Registration';
import Welcome from './component/Welcome';
import EvenOdd from './component/EvenOdd';

function App() {
  return (
    <div class="container">
      {/*  <Header title='React Tutorial' /> */ }
      <Header/>
      {/* <Registration />  
      <Welcome /> 
      <EvenOdd num="12"/> */}
    </div>
  );
}

export default App;
