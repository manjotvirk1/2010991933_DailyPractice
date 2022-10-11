import './Header.css'
import { Button } from './Button';
// const Header=(props)=>{
//     return (
//         <header>
//             <h1>Hello {props.title}</h1>
//         </header>
//     )
// }
const Header=({title})=>{
    const onClick=(e)=>{
        console.log('Click',e);
    }
    return (
        <header>
            <h1 style={headingStyle}>Hello {title}</h1>
            {/* <h2 className="h2Head">H2 Heading</h2> */}
            {/* <h3 id="h3Head">H3 Heading</h3> */}
            <Button onClick={onClick} color='green' text='Hello' />
            <Button onClick={onClick} color='blue' text='Hello1' />
            <Button onClick={onClick} color='red' text='Hello2' />
            <Button onClick={onClick} />
        </header>
    )
}
const headingStyle={
    color:'darkcyan',
    backgroundColor:'lightblue',
    textAlign:'center'
}

export default Header;
Header.defaultProps={
    title:"Task Tracker"
}