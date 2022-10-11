import axios from "axios";
import { useEffect, useState } from "react"
import './UserData.css'

const UserData=()=>{
    const[data,setData]=useState([{}]);
    useEffect(()=>{
        getUser();
        console.log(data);
    },[]);
    const getUser = async()=>{
        await axios
        .get('http://localhost:4000/posts')
        .then((res)=>setData(res.data));
    }
    return(
        <div className="cont">
            <h1>Users Data</h1>
            <table class="table table-hover table-dark">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Mobile Number</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
    {
        data && data.map((user)=>(
            <tr>
                <th scope="row">{user.id}</th>
                <td>{user.name}</td>
                <td>{user.mobile}</td>
                <td>{user.email}</td>
            </tr>
        ))
    }
  </tbody>
</table>
        </div>
    )
}

export default UserData;