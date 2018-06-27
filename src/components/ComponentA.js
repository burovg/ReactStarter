import React,{Component} from 'react';
import {connect} from 'react-redux';
import {performAction} from '../actions';

class ComponentA extends Component{

    constructor(props){
        super(props);
        this.state = {txt : ''};
        this.handleTextChange = this.handleTextChange.bind(this);
        this.performAction = this.performAction.bind(this);
    }

    handleTextChange(e){
        //console.log(e.target.value);
        this.setState({txt : e.target.value});
    }

    performAction(value){
        this.props.performAction(this.state.txt);
    }

    render(){
        return(
            <div>
                <input type="button" value="click" onClick={this.performAction}/>
                <input type="text" value={this.state.txt}  onChange={this.handleTextChange}/>
            </div>
        );
    }
}

function mapstateToProps(state){
    console.log(state);
    return {val : state.compa};
}

export default connect(mapstateToProps,{performAction})(ComponentA);