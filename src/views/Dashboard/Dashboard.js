import React, { Component } from 'react';
import classes from "./Dashboard.module.css";
import LineGraph from "../../components/Dashboard/LineGraph";
import chartIcon from "../../assets/chart-icon.svg";
import  { 
            managerData, 
            nationalAverageData, 
            dirLabels, 
            managerQuarterData, 
            nationalAverageQuarterData, 
            trainingLabels 
        } from "../../Data";

export default class Dashboard extends Component {
    state = {
        data: managerData,
        average: nationalAverageData,
        labels: dirLabels
    }

    handleButtonClick = e => {
        const { value } = e.target;
        const isAnnual = value === "annual";

        const newData = isAnnual ? managerData : managerQuarterData;
        const newLabels = isAnnual ? dirLabels : trainingLabels;
        const newAverage = isAnnual ? nationalAverageData : nationalAverageQuarterData;

        this.setState({
            data: newData,
            average: newAverage,
            labels: newLabels
        })
    }

    render() {
        const { data, average, labels } = this.state;
        return (
            <div className={classes.container}>
                <header>
                    <img src={chartIcon} alt="bar chart icon" />
                    <h1>Defense Ready Reporting Dash</h1>
                </header>

                <div className={classes.buttonContainer}>
                    <button  value="annual" onClick={this.handleButtonClick} >
                        Per Director
                    </button>

                    <button value="lastquarter" onClick={this.handleButtonClick} >
                        Per Training
                    </button>
                </div>
                <LineGraph data={data} average={average} labels={labels} />
            </div>
        )
    }
}
