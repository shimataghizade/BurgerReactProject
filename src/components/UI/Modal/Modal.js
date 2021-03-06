import React, { Component } from 'react'
import classes from './Modal.css'
import Auxilary from '../../hoc/Auxilary/Auxilary'
import Backdrop from './../Backdrop/Backdrop'

class Modal extends Component{
    shouldComponentUpdate(nextProps , nextState){
        if (nextProps.show !== this.props.show){
            return true
        }else{
            return false
        }
    }

    componentDidUpdate(){
        console.log('[Modal : DidUpdate]')
    }

    render(){
        return (
            <Auxilary>
     <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
    <div 
    style = {{transform : this.props.show ? 'translateY(0vh)' : 'translateY(-100vh)' , 
              opacity : this.props.show ? 1 : 0}}
              className = {classes.Modal}>
        {this.props.children}
    </div>
 </Auxilary>

        )
    }
} 

export default Modal 