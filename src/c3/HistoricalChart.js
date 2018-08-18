import {InitChart, LoadDataChart, ResetChart} from './Chart.js';

export function BuildChart(data) {
    InitChart();
    LoadDataChart(FixerModelToC3Model(data.rates));
}

export function ResetHistoricalChart(){
    ResetChart();
}

function FixerModelToC3Model(jsonObject) {

    let dataColumns = [];
    
    for (var prop in jsonObject) {
        let row = [];
        row.push(prop);
        row.push(jsonObject[prop]);
        dataColumns.push(row);
    }

    return dataColumns;
}

