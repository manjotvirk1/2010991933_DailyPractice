import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("Uppercase was clicked: " + text);
        let newText=text.toUpperCase();
        setText(newText);
    }

    const handleLoClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (event) =>{
        // console.log("On change");
        setText(event.target.value);
    }

    const handleClear = ()=>{
        setText('');
    }

    const [text,setText]=useState('Enter Text here');
    return (
        <>
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                {/* <label for="myBox" className="form-label">Example textarea</label> */}
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to Uppercase</button>
            <button className='btn btn-primary mx-1' onClick={handleLoClick}>Convert to Lowercase</button>
            <button className='btn btn-primary mx-1' onClick={handleClear}>Clear</button>
        </div>
        <div className="container my-3">
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    );
}