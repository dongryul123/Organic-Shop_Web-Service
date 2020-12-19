import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from 'react-router-dom'

class AddUser extends Component {
        constructor(props){
            super(props);

            this.state = {
                id: '',
                password: '',
                firstName: '',
                lastName: '',
                age: '',
                tel: '',
                address: '',
                message: null,
            }
        }

        onChange = (e) =>{
            this.setState({
                [e.target.name] : e.target.value
            })
        }

        saveUser = (e) =>{
            e.preventDefault();
            
            let user = {
                id: this.state.id,
                password: this.state.password,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                age: this.state.age,
                tel: this.state.tel,
                address: this.state.address,
            }
    
           
        }

        render(){
            return (
                <React.Fragment>
                    프로덕트 주입
                
                </React.Fragment>
            );
        }
    }

    export default AddUser;

