import React from 'react'
import classes from './Backdrop.css'

const backdrop = (props) =>(
    props.show ? (<div className = {classes.Backdrop} onClick={props.clicked}></div>) : null

);
//backdrop is a component that show a dark background behiend the modal
export default backdrop