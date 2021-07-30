import React from 'react'
import NavigationItems from '../NavigationItems/NavigationItems'
import Logo from './../../Logo/Logo'
import classes from './SideDrawer.css'
import Backdrop from '../../UI/Backdrop/Backdrop'
import Auxilary from '../../hoc/Auxilary/Auxilary'

const sideDrawer = (props) =>{
    let attachedClasses = [classes.SideDrawer , classes.Close] //"Close" means sideDrawer and backdrop are not in the page. it is CSS
    if (props.open){
        attachedClasses = [classes.SideDrawer , classes.Open] //"Open" means sideDrawer and backDrope are in the page. it is CSS
    }

    return(
    <Auxilary>
        <Backdrop show = {props.open/* open is defrent from Open */} clicked={props.closed}/>
        <div className={attachedClasses.join(' ')}>
            <div className={classes.Logo}> 
                <Logo/>
            </div>
        
            <nav>
                <NavigationItems/>
            </nav>
        </div>
    </Auxilary>
    )
}

export default sideDrawer