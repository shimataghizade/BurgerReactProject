import React from "react";
import  Layout from './components/hoc/Layout/Layout'
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";


function App() {
  return (
    <div className='app' >
      <Layout >
        <BurgerBuilder/>
      </Layout>
      
    </div>
  );
}

export default App;
