import c3 from 'c3';

const singleton = {chart:null};

export function InitChart() {
    if( null === singleton.chart) {
        CreateInstance();
    }
}

export function LoadDataChart(data) {
    InitChart();
    singleton.chart.load({
        columns: data
    });
}

function CreateInstance() {
    singleton.chart = c3.generate({
        bindto: '#chart',
        data: {
            columns: [],
            type: 'bar'
        },
        bar: {
            width: {
                ratio: 1
            }
        }
    });
}