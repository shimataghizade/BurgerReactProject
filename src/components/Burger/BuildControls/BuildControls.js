import React from 'react'
 import BuildControl from './BuildControl/BuildControl'
 import classes from './BuildControls.css'

 const controls = [{label : 'Salad' , type : 'salad'},
                    {label : 'Meat' , type : 'meat'},
                    {label : 'Cheese' , type : 'cheese'},
                    {label : 'Bacon' , type : 'bacon'}]

const buildControls = (props) =>(
    <div className={classes.BuildControls}>
        <p>Curront Price :<strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl =>(<BuildControl added = { ()=>{props.ingredientAdded(ctrl.type)}} 
        removed = {() =>{props.ingredientRemoved(ctrl.type)}} 
         key={ctrl.label} 
         label={ctrl.label}
         disabled={props.disabled[ctrl.type]}

         
         />))}
        
        <button className={classes.OrderButton} disabled={!props.purchaseable} onClick = {props.ordered}>ORDER NOW</button> 
        
    </div>
)

export default buildControls