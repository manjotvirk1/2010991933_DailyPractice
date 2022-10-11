import './Home.css';
import HeroSection from './HeroSection';

const Home=()=>{
    const data={
        name:"Lorem Ipsum",
        image:"./images/1.jpg",
        btnValue:"Hire me"
    };
    return(
        <>
            <HeroSection {...data}/>
        </>
    )
}

export default Home;