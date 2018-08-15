import React, { Component } from 'react';
import './app.css';
import {getSymbols, getHistorical} from './fixer/FixerApi';

class App extends Component{

    getFxRatesSymbols(){
        getSymbols((response)=>console.log(response), (error)=>console.log(error));
    }

    getFxRatesHistorical() {
        let date = new Date();
        let base = 'EUR';
        let symbols = ['USD', 'MXN'];
        getHistorical(date, base, symbols, (response)=>console.log(response), (error)=>console.log(error));
    }

    render(){
        return(
            <div>
             <h1>FX Rates</h1>
               <button type="button" onClick={this.getFxRatesSymbols}>Get Fx Rates Symbols</button>
               <button type="button" onClick={this.getFxRatesHistorical}>Get Historical Fx Rates</button>         
            </div>
        )
    }

}


export default App;