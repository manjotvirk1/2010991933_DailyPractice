import axios from "axios";
import { useEffect, useState } from "react"
import '../styles/UserData.css'

const UserData = () => {
    const [data, setData] = useState([{}]);
    useEffect(() => {
        getUser();
    }, []);

    const [updateData, setUpdatedData] = useState({
        name: "",
        mobile: "",
        email: "",
        password: "",
        id:""
    });

    const getUser = async () => {
        await axios
            .get('http://localhost:4000/posts')
            .then((res) => setData(res.data));
    };

    const handleDelete = async (id) => {
        await axios
            .delete("http://localhost:4000/posts/" +
                id)
            .then((res) => alert("Deleted Successfully"));
        getUser();
    };
    const handleUpdate=async()=>{
        await axios
        .put(`http://localhost:4000/posts/${updateData.id}`,updateData)
        .then(res=>alert("User updated successfully"));
        getUser();
    }

    return (
        <div>
            <div className="cont">
                <h1>Users Data</h1>
                <table className="table table-hover table-dark">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Mobile Number</th>
                            <th scope="col">Email</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data && data.map((user) => (
                                <tr key={user.id}>
                                    <th scope="row">{user.id}</th>
                                    <td>{user.name}</td>
                                    <td>{user.mobile}</td>
                                    <td>{user.email}</td>
                                    <td
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between"
                                        }}>
                                        <button className="btn btn-info" data-toggle="modal" data-target="#exampleModal"
                                        onClick={()=>setUpdatedData({
                                            name:user.name,
                                            email:user.email,
                                            mobile:user.mobile,
                                            password:user.password,
                                            id:user.id
                                        })}>Edit</button>
                                        <button className="btn btn-danger" onClick={() => handleDelete(user.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

            <div className="modal-body">
                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label for="inputName">Name</label>
                                    <input type="text" required className="form-control" id="inputName" aria-describedby="nameHelp" placeholder="Enter the Name"
                                        value={updateData.name}
                                        onChange={(e) => setUpdatedData({
                                            ...
                                            updateData, name: e.target.value
                                        })} />
                                </div>
                                <div className="form-group">
                                    <label for="inputMobile">Mobile Number</label>
                                    <input type="number" required className="form-control" id="inputMobile" aria-describedby="nameHelp" placeholder="Enter the Mobile Number"
                                        value={updateData.mobile}
                                        onChange={(e) => setUpdatedData({
                                            ...
                                            updateData, mobile: e.target.value
                                        })} />
                                </div>
                                <div className="form-group">
                                    <label for="inputEmail">Email address</label>
                                    <input type="email" required className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email"
                                        value={updateData.email}
                                        onChange={(e) => setUpdatedData({
                                            ...
                                            updateData, email: e.target.value
                                        })} />
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input type="password" required className="form-control" id="exampleInputPassword1" placeholder="Password"
                                        value={updateData.password}
                                        onChange={(e) => setUpdatedData({
                                            ...
                                            updateData, password: e.target.value
                                        })} />
                                </div>


                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" onClick={handleUpdate}>Update user</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default UserData;