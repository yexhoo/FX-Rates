import {InitChart, LoadDataChart} from './Chart.js';

export function BuildChart(data) {
    InitChart();
    LoadDataChart(FixerModelToC3Model(data.rates));
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