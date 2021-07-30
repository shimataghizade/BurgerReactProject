import React, { Component } from 'react'
import Auxilary  from '../../hoc/Auxilary/Auxilary';
import Button from './../../UI/Button/Button';

class OrderSummery extends Component{
    componentDidUpdate(){
        console.log("[OrederSummery] willUpate")
    }

    render(){
        const ingredientSummery = Object.keys(this.props.ingredients).map(igkey=>{
            return (<li key = {igkey}>
                        <span style ={{textTransform : 'capitalize'}}>
                            {igkey}
                        </span> : {this.props.ingredients[igkey]}
                    </li>)})

        return(
            <Auxilary>
            <h3>Your Order</h3>
            <p> a delicious burger with the following ingredients: </p>
            <ul>
                {ingredientSummery}
            </ul>
            <p><strong>Total Price :</strong> {this.props.price}</p>
            <p>Continue to checkout ?</p>
            <Button clicked={this.props.purchasedCanceled} btnType='Danger'>Cancel</Button>
            <Button clicked={this.props.purchasedContinued} btnType='Success'>Continue</Button>
        </Auxilary>

        )
    }
}
    
export default OrderSummery