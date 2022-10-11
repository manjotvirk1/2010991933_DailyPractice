import PropTypes from 'prop-types'

export const Button=({color,text,onClick})=>{
    return(
        <button className="btn" onClick={onClick} style={{backgroundColor:color}}>{text}</button>
    )
}

Button.defaultProps={
    color:'steelblue',
    text:'Button'
}

Button.propTypes={
    text:PropTypes.string,
    color:PropTypes.string,
    clickFn:PropTypes.func
}