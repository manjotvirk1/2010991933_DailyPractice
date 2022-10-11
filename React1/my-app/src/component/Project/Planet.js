import React,{useState} from "react";
import PlanetWeight from './PlanetWeight'
import moonImage from './moonImage.jpg'
import sunImage from './sunImage.jpeg'
import mercuryImage from './mercuryImage.jpg'
import venusImage from './venusImage.jpg'
import earthImage from './earthImage.jpg'
import marsImage from './marsImage.jpg'
import jupiterImage from './jupiterImage.jpg'
import saturnImage from './saturnImage.jpg'
import uranusImage from './uranusImage.jpg'
import neptuneImage from './neptuneImage.jpg'
import plutoImage from './plutoImage.jpg'
import FinalWeight from './FinalWeight'


function Planet(){
    const [weight,setWeight]=useState();
    const [SunWeight,setSunWeight]=useState();
    const [MercuryWeight,setMercuryWeight]=useState();
    const [VenusWeight,setVenusWeight]=useState();
    const [MoonWeight,setMoonWeight]=useState();
    const [MarsWeight,setMarsWeight]=useState();
    const [JupiterWeight,setJupiterWeight]=useState();
    const [SaturnWeight,setSaturnWeight]=useState();
    const [UranusWeight,setUranusWeight]=useState();
    const [NeptuneWeight,setNeptuneWeight]=useState();
    const [PlutoWeight,setPlutoWeight]=useState();
    const displayWeight = (e) => {
        let newWeight=e.target.value;
        setWeight(newWeight);
        setSunWeight(27.07*newWeight);
        // console.log("Weight = ",newWeight);
        setMercuryWeight(0.38*newWeight);
        setVenusWeight(0.91*newWeight);
        setMoonWeight(0.166*newWeight);
        setMarsWeight(0.38*newWeight);
        setJupiterWeight(2.34*newWeight);
        setSaturnWeight(1.06*newWeight);
        setUranusWeight(0.92*newWeight);
        setNeptuneWeight(1.19*newWeight);
        setPlutoWeight(0.06*newWeight);
    }
    const submitWeight=(e)=>{
        e.preventDefault();
        console.log(weight);
    }
    const resetWeight=()=>{
        setWeight(0);
        displayWeight();
    }
    const wt=weight;
    let answer=wt;
    const calculateSunWeight=()=>{
        console.log("Clicked");
        // let x=e.planetName+"Weight";
        // console.log(x);
        answer=SunWeight;
    }
    return(
        <div style={{backgroundColor : 'black',color:'white'}}>
            <div className="inputDiv">
            <input type="number" value={weight} onChange={displayWeight} className="inputWeight" placeholder="Enter the weight"/>
            <button type="reset" className="btn btn-dark resetbutton" onClick={resetWeight}>Reset</button>
            </div>
            {/* <input type="submit" onClick={submitWeight} class="form-control" /> */}
            <div className="planetsImages">
                <PlanetWeight planetName="Sun" wt={SunWeight} im={sunImage} onClick={calculateSunWeight}/>
                <PlanetWeight planetName="Mercury" wt={MercuryWeight} im={mercuryImage}/>
                <PlanetWeight planetName="Venus" wt={VenusWeight} im={venusImage} />
                <PlanetWeight planetName="Earth" wt={weight} im={earthImage} alt="Earth"/>
                <PlanetWeight planetName="Moon" wt={MoonWeight} im={moonImage} />
                <PlanetWeight planetName="Mars" wt={MarsWeight} im={marsImage}/>
                <PlanetWeight planetName="Jupiter" wt={JupiterWeight} im={jupiterImage}/>
                <PlanetWeight planetName="Saturn" wt={SaturnWeight} im={saturnImage}/>
                <PlanetWeight planetName="Uranus" wt={UranusWeight}  im={uranusImage}/>
                <PlanetWeight planetName="Neptune" wt={NeptuneWeight} im={neptuneImage}/>
                <PlanetWeight planetName="Pluto" wt={PlutoWeight} im={plutoImage}/>
            </div>
            <FinalWeight weight={answer}/>
        </div>
    )
}
export default Planet;