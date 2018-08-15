import React, { Component } from 'react';
import './app.css';
import {getSymbols} from './fixer/FixerApi';

class App extends Component{

    hola(){
        getSymbols((response)=>console.log(response), (error)=>console.log(error));
    }

    render(){
        return(
            <div>
             <h1>FX Rates</h1>
               <button type="button" onClick={this.hola}>Click me</button>     
            </div>
        )
    }

}


export default App;