import React, { useState } from 'react'

function Registration() {
    const [userName, setUserName] = useState('');
    const [roll, setRoll] = useState();
    const[text,setText]=useState();
    let str="Hello, "+userName +"\n Roll No. = "+ roll;
    const submitform = (event) => {
        event.preventDefault();
        console.log(str);
        setText(str);
        //alert(`Name = ${user_name}\nRoll = ${roll}`);
    }
    const handleOnChange = (e) => {
        let newName = e.target.value;
        setUserName(newName);
        console.log("Name = ", newName);
        setText(str);
    }
    const handleRoll = (e) => {
        let newRoll=e.target.value;
        setRoll(newRoll);
        console.log("Roll No. = ",newRoll);
        setText(str);
    }
    const resetform = () => {
        setUserName('');
        setRoll('');
        setText('');
    }

    return (
        <div>
            <form onSubmit={submitform}>
                <label for="name" className="form-label">Name</label>
                <input type="text" placeholder='Enter name' id="name" className="form-control" value={userName} onChange={handleOnChange} /><br />
                <label for="id" className="form-label">Id</label>
                <input type="number" id="id" className="form-control" value={roll} onChange={handleRoll}/><br />
                <button className='btn btn-primary' type="submit" >Submit</button>
                <button className='btn btn-primary' type="reset" onClick={resetform}>Reset</button>
            </form>
            <textarea id="res" value={text}></textarea>
        </div>
    )
}

export default Registration;

