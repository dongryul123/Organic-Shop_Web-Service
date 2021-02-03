import React, { Component } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import queryString from 'query-string'
 
class AllProducts extends Component {
    constructor(props) {
        super(props);
        console.log('in constructor');
    }
 
    state = {
        data : [],
        temp : 1
    };

    detailPage(){
      alert("클릭되었습니다.");
    }
 
    // getMyData = async () => {
    //     let data = await axios.get('http://localhost:8080/products');
    //     data = data.data.myDeviceData;
    //     console.log('data is ' + JSON.stringify(data));
    //     this.setState({data});
    // };
 
    componentDidMount() {
        // const {params} = this.props.match;
        // console.log("params : ")
        // console.log(params.id)
        const values = this.props.match.params.id;
        console.log(values);

        axios.get(`http://localhost:8080/products/${values}`).then(res => {
            this.setState({data: res.data});
        });

    }

    TempPrint(value){
        console.log(value);
        // axios.get('http://localhost:8080/products/'+value).then(res => {
        //     this.setState({data: res.data});
        // });
    }
 
    componentDidUpdate() {
        console.log('in componentDidUpdate');
    }
 
    componentWillUnmount() {
        console.log('in componentWillUnmount');
    }
 
    render() {
        const {params} = this.props.match;
        //this.TempPrint(params.id);
        return (
            <div style={{marginTop:100}}>
                <ul>
                    <li>{this.state.data.name}</li>
                    <li>{this.state.data.price}</li>
                </ul>
            </div>
        );
    }
}
export default AllProducts
;