import React, { Component } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import queryString from 'query-string'
 
class OrderProduct extends Component {
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
        // const values = this.props.match.params.id;
        // console.log(values);

        // axios.get(`http://localhost:8080/products/${values}`).then(res => {
        //     this.setState({data: res.data});
        // });
        axios.get(`http://localhost:8080/products/1`).then(res => {
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
            // <div style={{marginTop:100}}>
            //     <ul>
            //         <li>{this.state.data.name}</li>
            //         <li>{this.state.data.price}</li>
            //     </ul>
            // </div>
            <div class="container">
    <div class="row" style={{marginTop:100}}>
      <div class="col-lg-9">
        <div class="card mt-2">
          <img class="card-img-top img-fluid" src="http://placehold.it/900x400" alt=""/>
          <div class="card-body">
            <h3 class="card-title">{this.state.data.name}</h3>
            <h4>{this.state.data.price}원</h4>
            <span class="text-warning">&#9733; &#9733; &#9733; &#9733; &#9734;</span>
            3.0 stars
          </div>
        </div>

        <div class="card card-outline-secondary my-4">
          <div class="card-header">
            구매자 정보
          </div>
          <div class="card-body">
            <p>이름</p>

            
            <p>이메일</p>


            <p>휴대폰 번호</p>
            
          </div>
        </div>

        <div class="card card-outline-secondary my-4">
          <div class="card-header">
            받는사람 정보
          </div>
          <div class="card-body">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>
            <small class="text-muted">Posted by Anonymous on 3/1/17</small>
            
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>
            <small class="text-muted">Posted by Anonymous on 3/1/17</small>
            
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>
          </div>
        </div>

      </div>

    </div>

  </div>
    
        );
    }
}
export default OrderProduct
;