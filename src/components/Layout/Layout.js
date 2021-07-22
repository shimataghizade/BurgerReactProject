import React from 'react'
import Auxilary from './../hoc/Auxilary'
import classes from './Layout.module.css'

const layout = (props) => (
    <Auxilary>
        <div className='layout'>Toolbar , sidedrawer , backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Auxilary>
) ;

export default layout