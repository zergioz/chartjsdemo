import React, { Component } from 'react';
import classes from "./Bar.module.css";
import BarGraph from "../../components/Bar/BarGraph";
import chartIcon from "../../assets/chart-icon.svg";
import Dashboard from "../../views/Dashboard/Dashboard";
import  { 
            managerData, 
            nationalAverageData, 
            dirLabels, 
            managerQuarterData, 
            nationalAverageQuarterData, 
            trainingLabels 
        } from "../../Data";
import App from '../../App';

export default class Bar extends Component {
    state = {
        data: managerData,
        average: nationalAverageData,
        labels: dirLabels
    }

    handleReturn = e =>{
        this.handleReturn.value = e;
        console.log( this.handleReturn.value);
        console.log('BAR');
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
            labels: newLabels,
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
                <BarGraph data={data} average={average} labels={labels} handleReturn={this.handleReturn}/>
            </div>
        )
    }
}
