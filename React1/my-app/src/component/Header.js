import './Header.css'
// const Header=(props)=>{
//     return (
//         <header>
//             <h1>Hello {props.title}</h1>
//         </header>
//     )
// }
const Header=({title})=>{
    return (
        <header>
            <h1 style={headingStyle}>Hello {title}</h1>
            {/* <h2 className="h2Head">H2 Heading</h2> */}
            {/* <h3 id="h3Head">H3 Heading</h3> */}
            <button>Add</button>
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