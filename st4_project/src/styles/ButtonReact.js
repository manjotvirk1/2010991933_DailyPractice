import React from "react";
import './Button.css'

const ButtonReact = (props) =>{
    return(
        <>
        <input type="button" className="btn btn-primary" value={props.val}/>
        {/* <Button className="btn"></Button> */}
        </>
    )
}

export default ButtonReact;