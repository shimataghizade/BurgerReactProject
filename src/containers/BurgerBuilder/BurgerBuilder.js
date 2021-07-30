import React , {Component} from 'react'
import Auxilary from '../../components/hoc/Auxilary/Auxilary'
import Burger from './../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from './../../components/UI/Modal/Modal'
import OrderSummery from '../../components/Burger/OrderSummery/OrderSummery'

const INGREDIENT_PRICES = {
    salad : 0.5 ,
    cheese : 0.4 , 
    meat : 1.3 , 
    bacon : 0.7
}

class BurgerBuilder extends Component{

    state ={
        ingredients : {
            salad : 0,
            bacon : 0,
            cheese : 0,
            meat : 0
        } ,
        totalPrice : 4 , 
        purchaseable : false ,
        purchasing : false
    }

    purchaseHandler = () =>{
        this.setState({purchasing : true})
    }

    updatePurchaseableState (ingredients){
      
        const sum = Object.keys(ingredients).map(igkey =>{
            return ingredients[igkey]
        }).reduce((sum , el)=>{
            return sum + el
        } , 0) ; 
        this.setState({purchaseable : sum > 0})
    }
    addIngredientHander =(type) =>{
       const oldCount = this.state.ingredients[type]
       const updatedCount = oldCount + 1
       const updatedIngredirnts = {...this.state.ingredients} ;
       updatedIngredirnts[type] = updatedCount ;

       const priceAddition = INGREDIENT_PRICES[type]
       const oldPrice = this.state.totalPrice
       const newPrice = oldPrice + priceAddition
       this.setState({
           ingredients : updatedIngredirnts , totalPrice : newPrice
       })
       this.updatePurchaseableState(updatedIngredirnts)

    }

    removreIngredientHandler = (type) =>{
        const oldCount = this.state.ingredients[type]
        if(oldCount <= 0){
            return;
        }
        const updatedCount = oldCount - 1
        const updatedIngredirnts = {...this.state.ingredients}
        updatedIngredirnts[type] = updatedCount

        const priceDeduction = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice - priceDeduction

        this.setState({ingredients : updatedIngredirnts , totalPrice : newPrice})
        this.updatePurchaseableState(updatedIngredirnts);

    }

    purchaseCancelHandler = () => {
         this.setState({purchasing : false})
       
    }

    purchaseContinueHandler = () =>{
        alert("You continue!")
    }
    

    render(){

        const disabledInfo = {
            ...this.state.ingredients
        };
       
        for (let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0 //{salad : true , bacon : false ...}
        } 
        
        return(
            <Auxilary>
                <Modal show = {this.state.purchasing} modalClosed = {this.purchaseCancelHandler} >
                    <OrderSummery ingredients = {this.state.ingredients}
                        purchasedCanceled={this.purchaseCancelHandler}
                        purchasedContinued={this.purchaseContinueHandler}
                        price = {this.state.totalPrice}/>
                </Modal>
                <Burger ingredients = {this.state.ingredients}/>
                <BuildControls ingredientAdded = {this.addIngredientHander}
                 ingredientRemoved = {this.removreIngredientHandler}
                 disabled = {disabledInfo}
                 purchaseable = {this.state.purchaseable}
                 ordered = {this.purchaseHandler}
                 price = {this.state.totalPrice}
                />
            </Auxilary>
            
        )
    }

};

export default BurgerBuilder