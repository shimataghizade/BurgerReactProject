import React from 'react'
 import BuildControl from './BuildControl/BuildControl'
 import classes from './BuildControls.module.css'

 const controls = [{label : 'Salad' , type : 'salad'},
                    {label : 'Meat' , type : 'meat'},
                    {label : 'Cheeses' , type : 'cheeses'},
                    {label : 'Bacon' , type : 'bacon'}]

const buildControls = () =>(
    <div className={classes.BuildControls}>
        {controls.map(ctrl =>(<BuildControl key={ctrl.label} label={ctrl.label}/>))}
        
    </div>
)

export default buildControls