import React, { Component } from 'react';
import './app.css';
import {getSymbols, getHistorical} from './fixer/FixerApi';
import {BuildChart} from './c3/HistoricalChart';

import Calendar from 'react-calendar';

class App extends Component{


    state = {
        date: new Date(),
      }
     
    onChange = date =>{
        console.log(date);
        this.setState({ date });
        this.getFxRatesHistorical(date);
    } 

    getFxRatesSymbols(){
        let symbolsRequest = {
            onSuccess: (response)=>console.log(response),
            onError: (error)=>console.log(error)
        };
        getSymbols(symbolsRequest);
    }

    getFxRatesHistorical(date) {
        console.log("*********",date);
        let historicalRequest ={
            date : new Date(date),
            base : 'EUR',
            symbols : ['USD', 'MXN', 'AED', 'ARS','AUD','BTC', 'BRL', 'CNY', 'CZK'],
            onSuccess: (response)=>{
                console.log(response);
                BuildChart(response.data);
            },
            onError: (error)=>console.log(error)
        };
        getHistorical(historicalRequest);
    }

    render(){
        return(

            <div>

                <div>
                    <Calendar
                    onChange={this.onChange}
                    value={this.state.date}
                    />
                    
                </div>

                <div>
                    <h1>FX Rates</h1>
                    <button type="button" onClick={this.getFxRatesSymbols}>Get Fx Rates Symbols</button>
                    <button type="button" onClick={this.getFxRatesHistorical}>Get Historical Fx Rates</button>         
                </div>
                <div id="chart"></div>
                
             
            </div>
        )
    }

}


export default App;