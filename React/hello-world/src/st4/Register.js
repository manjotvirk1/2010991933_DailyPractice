import axios from 'axios';
import { useState } from 'react';
import './Register.css'
const Register=()=>{
    const[registerData,setRegisterData]=useState({
        name:"",
        mobile:"",
        email:"",
        password:""
    });
    const handleFormSubmit=async (e) => {
        let response=await axios.post("http://localhost:4000/posts",registerData);
        if(response){
            alert("Data submitted successfully");
        }
        else{
            alert("Something went wrong");
        }
        setRegisterData({
            name:"",
            mobile:"",
            email:"",
            password:""
        });
    };
    return (
        <div className="container-div">
            <div className="row">
                <div>
                    <h1>Register</h1>
                </div>
                {/* <form> */}
                <div className="form-group">
                    <label for="inputName">Name</label>
                    <input type="text" required className="form-control" id="inputName" aria-describedby="nameHelp" placeholder="Enter the Name" 
                    value={registerData.name}
                    onChange={(e)=>setRegisterData({ ...
                        registerData,name:e.target.value
                    })}/>
                </div>
                <div className="form-group">
                    <label for="inputMobile">Mobile Number</label>
                    <input type="number" required className="form-control" id="inputMobile" aria-describedby="nameHelp" placeholder="Enter the Mobile Number" 
                    value={registerData.mobile}
                    onChange={(e)=>setRegisterData({ ...
                        registerData,mobile:e.target.value
                    })}/>
                </div>
                <div className="form-group">
                    <label for="inputEmail">Email address</label>
                    <input type="email" required className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email" 
                    value={registerData.email}
                    onChange={(e)=>setRegisterData({ ...
                        registerData,email:e.target.value
                    })}/>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" required className="form-control" id="exampleInputPassword1" placeholder="Password" 
                    value={registerData.password}
                    onChange={(e)=>setRegisterData({ ...
                        registerData,password:e.target.value
                    })}/>
                </div>
                {/* <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div> */}
                <button className="btn btn-primary"
                onClick={handleFormSubmit}>Register</button>
                {/* </form> */}
            </div>
        </div>
    )
}

export default Register;