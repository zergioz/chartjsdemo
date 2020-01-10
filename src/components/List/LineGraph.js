import React, { Component } from 'react'
import Chart from "chart.js";
import classes from "./LineGraph.module.css";
let myLineChart;

//--Chart Style Options--//
Chart.defaults.global.defaultFontFamily = "'PT Sans', sans-serif"
Chart.defaults.global.legend.display = false;
//--Chart Style Options--//

export default class LineGraph extends Component {
    chartRef = React.createRef();

    componentDidMount() {
        this.buildChart();
    }

    componentDidUpdate() {
        this.buildChart();
    }

    buildChart = () => {
        const myChartRef = this.chartRef.current.getContext("2d");
        const { data, average, labels } = this.props;

        if (typeof myLineChart !== "undefined") myLineChart.destroy();

        myLineChart = new Chart(myChartRef, {
            type: "horizontalBar",
            data: {
                //Bring in data
                labels: labels,
                datasets: [
                    {
                        label: "Training",
                        data: data,
                        fill: false,
                        borderColor: "#6610f2"
                    },
                    {
                        label: "National Average",
                        data: average,
                        fill: false,
                        borderColor: "#E0E0E0"
                    }
                ]
            },
            options: {
                onClick: (e,x) => {
                    if(x.length > 0){
                        console.log('LINE');
                        this.props.handleReturn(x[0]._model.label);
                    }
                }
            }
        });

    }

    render() {
        return (
            <div className={classes.graphContainer}>
                <canvas id="myChart" ref={this.chartRef} />
            </div>
        )
    }
}