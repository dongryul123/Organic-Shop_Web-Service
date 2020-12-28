import React, { Component } from 'react';
import axios from 'axios';
 
class temp extends Component {
    constructor(props) {
        super(props);
        console.log('in constructor');
    }
 
    state = {
        data : [],
    };
 
    getMyData = async () => {
        let data = await axios.get('http://localhost:8080/products');
        //data = data.data.myTempData;
        data = data.data.myDeviceData;
        console.log('data is ' + JSON.stringify(data));
        this.setState = ({data});
    };
 
    componentDidMount() {
        console.log('in componentDidMount');
        this.getMyData();
    }
 
    componentDidUpdate() {
        console.log('in componentDidUpdate');
    }
 
    componentWillUnmount() {
        console.log('in componentWillUnmount');
    }
 
    render() {
        console.log('@@ ' + JSON.stringify(this.state.data));
        return <div style={{marginTop:70}}>Here is Device Component</div>;
    }
}
 
export default temp;