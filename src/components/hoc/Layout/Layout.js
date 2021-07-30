import React, { Component } from 'react'
import Auxilary from './../Auxilary/Auxilary'
import classes from './Layout.module.css'
import Toolbar from './../../Navagation/Toolbar/Toolbar'
import SideDrawer from '../../Navagation/SideDrawer/SideDrawer'

class Layout extends Component{



    state = {
        showSideDrawer : false
    }

    sideDrawerClosedHandler = ()=>{
        this.setState({
            showSideDrawer : false 
        })

    }

    sideDrawerToggleHandler =()=>{
        this.setState((preState) =>{
            return {showSideDrawer : !preState.SideDrawer}} //we put {} after 'return' because on default we use jsx after 'return'
            
        )
    }
    
    render(){
        return(
            <Auxilary>
            <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
            <SideDrawer open={this.state.showSideDrawer} closed = {this.sideDrawerClosedHandler}/>
            <main className={classes.Content}>
                {this.props.children}
            </main>
        </Auxilary>
        )
    }
} 
   


export default Layout