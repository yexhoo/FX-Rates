import React, { Component } from 'react';
import './app.css';
import {getSymbols, getHistorical} from './fixer/FixerApi';

class App extends Component{

    getFxRatesSymbols(){
        let symbolsRequest = {
            onSuccess: (response)=>console.log(response),
            onError: (error)=>console.log(error)
        };
        getSymbols(symbolsRequest);
    }

    getFxRatesHistorical() {

        let historicalRequest ={
            date : new Date(),
            base : 'EUR',
            symbols : ['USD', 'MXN'],
            onSuccess: (response)=>console.log(response),
            onError: (error)=>console.log(error)
        };
        
        getHistorical(historicalRequest);
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