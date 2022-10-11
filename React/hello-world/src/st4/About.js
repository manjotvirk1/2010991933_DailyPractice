import HeroSection from "./HeroSection";

const About=()=>{
    const data={
        name:"Manjot Virk",
        image:"./images/2.png",
        btnValue:"Get started"
    };
    return(
        <>
            <HeroSection {...data}/>
        </>
    )
}

export default About;

