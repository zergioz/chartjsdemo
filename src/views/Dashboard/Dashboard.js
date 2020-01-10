import React, { Component } from 'react';
import Bar from "../Bar/Bar";
import List from "../List/List";
import  { 
            managerData, 
            nationalAverageData, 
            dirLabels, 
            managerQuarterData, 
            nationalAverageQuarterData, 
            trainingLabels 
        } from "../../Data";
import App from '../../App';

export default class Dashboard extends Component {

    returnedValue = e =>{
        console.log(e);
        
    }
    
    ChangeView = e =>{
        if (true){
            return <Bar />;
        }else{
            return <List />;
        }
    }

    render(){
        return <this.ChangeView onclick={this.returnedValue}/>
    }
}