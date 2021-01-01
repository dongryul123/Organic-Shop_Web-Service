import React, { Component } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
 
class AllProducts extends Component {
    constructor(props) {
        super(props);
        console.log('in constructor');
    }
 
    state = {
        data : [],
        idx : 100
    };

    detailPage(value){
      // console.log(value);
      // alert("클릭되었습니다.");
      window.location.href = '/'+value;
    }
 
    // getMyData = async () => {
    //     let data = await axios.get('http://localhost:8080/products');
    //     data = data.data.myDeviceData;
    //     console.log('data is ' + JSON.stringify(data));
    //     this.setState({data});
    // };
 
    componentDidMount() {
        console.log('in componentDidMount');
        //this.getMyData();
        axios.get('http://localhost:8080/products').then(res => {
            this.setState({data: res.data});
        });

        console.log("@@@");
        console.log(this.state.data);
    }
 
    componentDidUpdate() {
        console.log('in componentDidUpdate');
    }
 
    componentWillUnmount() {
        console.log('in componentWillUnmount');
    }
 
    render() {
        const classes = {
            root: {
              flexGrow: 1,
              marginTop: 100
            },
            paper: {
              //padding: theme.spacing(2),
              padding: 30,
              margin: 50,
              maxWidth: 500,
              cursor:'pointer'
            },
            image: {
              width: 128,
              height: 128,
            },
            img: {
              margin: 'auto',
              display: 'block',
              maxWidth: '100%',
              maxHeight: '100%',
            },
          }

        return (
            <div style={classes.root}>
                {
                this.state.data.map((myProductData) => {
                    //return <p key={ myDeviceData.key }>name : { myDeviceData.name }</p>;
                    //return <p>name : { myDeviceData.name }</p>;
                    //return <Paper style={{padding:30, margin:50}}>
                    return <Paper style={classes.paper} onClick={this.detailPage.bind(this, myProductData.id)}>
                    <Grid container spacing={2}>
                      <Grid item>
                        <ButtonBase style={classes.image}>
                          <img style={classes.img} alt="complex" src="/static/images/grid/complex.jpg" />
                        </ButtonBase>
                      </Grid>
                      <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                          <Grid item xs>
                            <Typography gutterBottom variant="subtitle1">
                                { myProductData.name }
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                              간단 설명
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                              재고
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Typography variant="body2" style={{ cursor: 'pointer' }}>
                              구매하기
                            </Typography>
                          </Grid>
                        </Grid>
                        <Grid item>
                          <Typography variant="subtitle1">$ {myProductData.price} (원)</Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Paper>;
                })
                }
            </div>


        );
    }
}
export default AllProducts
;