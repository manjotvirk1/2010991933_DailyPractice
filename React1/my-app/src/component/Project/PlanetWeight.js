import React from "react";
import './PlanetWeight.css';

function PlanetWeight(props){
    // const[planetName,setPlanetName]=usestate();
    const getWeight = () =>{
        
    }
    return(
        <div>
            <div className="imageDiv">
                <img src={props.im} onClick={getWeight} className="planetImage"/>
                <label>{props.planetName}</label><br/>
                <input id="pWeight" value={props.wt}/>
            </div>
        </div>
    )
}

export default PlanetWeight;