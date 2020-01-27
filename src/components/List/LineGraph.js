import React, { Component } from 'react'
import Chart from "chart.js";
import classes from "./LineGraph.module.css";
let myLineChart;
let chartValue;

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
        const { data, labels } = this.props;

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
                    }
                ]
            },
            options: {
                onClick: (e,x) => {
                    if(x.length > 0){
                        chartValue = x[0]._model.label;
                        this.props.handleReturn(chartValue);
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