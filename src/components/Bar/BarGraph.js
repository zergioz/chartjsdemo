import React, { Component } from 'react'
import Chart from "chart.js";
import classes from "./BarGraph.module.css";
let myBarChart;
let chartValue;

//--Chart Style Options--//
Chart.defaults.global.defaultFontFamily = "'PT Sans', sans-serif"
Chart.defaults.global.legend.display = false;
//--Chart Style Options--//

export default class BarGraph extends Component {
    
    chartRef = React.createRef();

    componentDidMount() {
        this.buildChart();
    }

    componentDidUpdate() {
        this.buildChart();
    }
    
    handleReturn = chartValue =>{
        console.log(chartValue);
    }
    
    buildChart = () => {
        const myChartRef = this.chartRef.current.getContext("2d");
        const { 
                data, 
                average, 
                labels 
               }  = this.props;

        if (typeof myBarChart !== "undefined") myBarChart.destroy();

        myBarChart = new Chart(myChartRef, {
            type: "bar",
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
                },
                responsive: true,
                maintainAspectRatio: false,
                tooltips: {
                    backgroundColor: "rgba(0,0,0,0.8)",
                    bodyAlign: "left",
                    bodyFontColor: "#fff",
                    bodySpacing: 2,
                    borderColor: "rgba(0,0,0,0)",
                    borderWidth: 0, 
                    caretPadding: 2,
                    caretSize: 5,
                    cornerRadius: 6,
                    custom: null,
                    displayColors: true,
                    enabled: true,
                    footerAlign: "left",
                    footerFontColor: "#fff",
                    footerFontStyle: "bold",
                    footerMarginTop: 6,
                    footerSpacing: 2,
                    intersect: true,
                    mode: "nearest",
                    multiKeyBackground: "#fff",
                    position: "average",
                    titleAlign: "left",
                    titleFontColor: "#fff",
                    titleFontStyle: "bold",
                    titleMarginBottom: 6,
                    titleSpacing: 2,
                    xPadding: 6,
                    yPadding: 6,
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