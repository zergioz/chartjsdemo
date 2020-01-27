import React, { Component } from 'react';
import classes from "./Bar.module.css";
import BarGraph from "../../components/Bar/BarGraph";
import chartIcon from "../../assets/chart-icon.svg";
import  { 
            managerData, 
            nationalAverageData, 
            dirLabels, 
            managerQuarterData, 
            trainingLabels 
        } from "../../Data";

export default class Bar extends Component {
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
        
        
        this.setState({
            data: newData,
            labels: newLabels,
        })
    }

    render() {
        const { data, labels } = this.state;
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
                <BarGraph handleReturn={this.props.handleReturn} data={data} labels={labels}/>
            </div>
        )
    }
}
