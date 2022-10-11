import './App.css';
import { useState } from 'react';

function App() {
  const initialValues={username:"",email:"",address:"",password:""};
 const[formValues,setFormvalues]=useState(initialValues)
 
 const handleChange=(e)=>{
  // console.log(e.target);
  const{name,value}=e.target;
  setFormvalues({...formValues,[name]:value});
  // console.log(formValues);
 };
 const handleSubmit=(e)=>{
  e.preventDefault();
  
 };
 return (
    <div className="container">
      <pre>{JSON.stringify(formValues,undefined,2)}</pre>
      <form onsubmit={handleSubmit}>
        <h1>REGISTRATION FORM</h1>
        <div className='div1'></div>
        <div className='uiform'>
          <div className='field'>
            <label>username</label>
            <input type="text" name="username" placeholder="username" value={formValues.username}
            onChange={handleChange}
            ></input>
          </div>
          <div className='field'>
            <label>email</label>
            <input type="text" name="email" placeholder="email"value={formValues.email} onChange={handleChange}></input>
          </div>
          <div className='field'>
            <label>address</label>
            <input type="text" name="address" placeholder="address"value={formValues.address} onChange={handleChange}></input>
          </div>
          <div className='field'>
            <label>password</label>
            <input type="text" name="password" placeholder="password"value={formValues.password} onChange={handleChange}></input>
          </div>
         <button className='uibutton'>submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;