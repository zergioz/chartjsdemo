import React, { Component } from 'react';
import Bar from "../Bar/Bar";
import List from "../List/List";

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.handleReturn = this.handleReturn.bind(this);
        this.state = {isDirectorate: 'root', jsonResult: null};
    }

    handleReturn = e =>{
        console.log("handleReturn", e);
        this.setState({isDirectorate : e});
        console.log(this.state);
    }
        
    ChangeView = () =>{
        if (this.state.isDirectorate === 'root'){
            return <Bar handleReturn={this.handleReturn} onclick={this.ChangeView} />;
        }else{
            return <List handleReturn={this.handleReturn} onclick={this.ChangeView} />;
        }
    }

    componentDidMount() {
        fetch('http://localhost/json-api.php')
        .then(res => res.json())
        .then((data) => {
          this.setState({ jsonResult: data.value })
          console.log(this.state.jsonResult)
        })
        .catch(console.log)
    }
        

    render(){
        return <this.ChangeView/>
    }
}