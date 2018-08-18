import React, { Component } from 'react';
import './app.css';
import {getSymbols, getHistorical} from './fixer/FixerApi';
import {BuildChart, ResetHistoricalChart} from './c3/HistoricalChart';
import MultiSelect from "@kenshooui/react-multi-select";
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

class App extends Component{

    constructor(props){
        
        super(props);

        this.state = {
            items: [],
            selectedItems: [],
            items2: [],
            selectedItems2: [],
            startDate: moment()
          }

        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.getFxRatesHistorical = this.getFxRatesHistorical.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.getSelectedSymbols = this.getSelectedSymbols.bind(this);
        this.getBaseSelected = this.getBaseSelected.bind(this);
    }

    getFxRatesSymbols(){
        let symbolsRequest = {
            onSuccess: (response)=>console.log(response),
            onError: (error)=>console.log(error)
        };
        getSymbols(symbolsRequest);
    }

    getFxRatesHistorical() {

        let _this = this;
        let historicalRequest ={
            date : this.state.startDate.toDate(),
            base : _this.getBaseSelected(),
            symbols : _this.getSelectedSymbols(),
            onSuccess: (response)=>{
                if(response.data.error !== undefined) {
                    _this.processError(response.data.error, _this.getBaseSelected());
                }else {
                    BuildChart(response.data);    
                }
            },
            onError: (error)=>console.log(error)
        };
        getHistorical(historicalRequest);
    }

    getSelectedSymbols() {

        let symbolsToSend = [];
        for (const symbol in this.state.selectedItems) {
            symbolsToSend.push(this.state.selectedItems[symbol].id);
        }

        return symbolsToSend;
    }

    getBaseSelected() {
        return this.state.selectedItems2[0].id;
    }

    processError(error, baseSelected) {
        if(error.code == 105) {
            alert("Fixer.io Your current license does not allow you to recover the currency  [ " + baseSelected+" ]");
        } else {
            alert("Fixer.io response with code :" + error);
        }
        ResetHistoricalChart();
    }

    handleDateChange(date) {
        this.setState({
            startDate: date
        });
    }

    handleChange2(items2) {
        if(items2.length == 0) {
            ResetHistoricalChart();
        }
        this.setState({ selectedItems2: items2 });
    } 

    handleChange(items) {
        if(items.length == 0) {
            ResetHistoricalChart();
        }
        this.setState({ selectedItems:items });
    }

    componentDidMount() {

        let _this = this;
        let onSuccess =  function(response){

            let single = [];
            let multi = [];

            let symbols = response.data.symbols;

            for (var prop in symbols) {
                single.push({ id:prop, label: prop.concat(" - ").concat(symbols[prop]) });
            }

            for (var prop in symbols) {
                multi.push({ id:prop, label: prop.concat(" - ").concat(symbols[prop])  });
            }

            _this.setState({items:multi, items2: single });
        };

        this.getFxRatesSymbolsX(onSuccess, (error)=>console.log(error));
        
        ResetHistoricalChart();
    }

    getFxRatesSymbolsX(onSuccess, onError){
        let symbolsRequest = {
            onSuccess: onSuccess,
            onError: onError
        };
        getSymbols(symbolsRequest);
    }

    render(){
        return(
            <div className="main">
                <div className= "content">  <h4>FX Rates</h4>  </div>
                <div className="separator" ></div>
                <div className= "searchBox">
                    <MultiSelect
                        items={this.state.items2}
                        selectedItems={this.state.selectedItems2}
                        onChange={this.handleChange2}
                        showSelectAll={false}
                        height={120}
                        messages = {{searchPlaceholder: "Search one currency"}}
                        maxSelectedItems = {1}
                    />
                </div>
                <div className="separator" ></div>
                <div className= "searchBox">
                    <MultiSelect
                        items={this.state.items}
                        selectedItems={this.state.selectedItems}
                        onChange={this.handleChange}
                        showSelectAll={false}
                        height={150}
                        messages = {{searchPlaceholder: "Search currencies to compare"}}
                    />
                </div>
                <div className="separator" ></div>
                <div className= "searchButtonBox">
                    <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleDateChange}
                    dateFormat={"YYYY-MM-DD"}
                    maxDate={new Date()}
                    disabled={this.state.selectedItems.length == 0 || this.state.selectedItems2.length == 0 }
                    />          
                </div>
                <div className="separator" ></div>
                <div className= "searchButtonBox">
                    <button 
                        id="searchButtonId" 
                        type="button" 
                        onClick={this.getFxRatesHistorical}
                        disabled={this.state.selectedItems.length == 0 || this.state.selectedItems2.length == 0 }
                        >Show Historical</button>         
                </div>
                <div className="separator" ></div>
                <div id="chart" className="chartBox"></div>
            </div>
        )
    }
}

export default App;