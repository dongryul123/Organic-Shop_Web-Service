import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import UserListComponent from "../user/UserListComponent";
import LoginComponent from "../user/LoginComponent";
import MainComponent from "../user/MainComponent";
import Form from "../user/Add/Form";
import ProductForm from "../product/ProductForm";
// import AllProducts from "../product/AllProducts";
import AllProducts from "../product/AllProducts";

import LoginApp from "../JWT/LoginApp";
import Login from "../user/Login";

import NavBar from "./NavBar"
// import { withRouter } from 'react-router'

const AppRouter = () =>{

    return(
        <div>
            <BrowserRouter>
            <div style={style}>
                <NavBar />
                <Switch>
                    <Route exact path="/" component={MainComponent} />

                    <Route path="/users" component={UserListComponent} />
                    <Route path="/add-user" component={Form} />
                    {/* <Route path="/login" component={LoginComponent} /> */}
                    <Route path="/login" component={Login} />

                    <Route path="/add-product" component={ProductForm} />
                    <Route path="/AllProducts" component={AllProducts} />
                    
                    <Route path="/jwt" component={LoginApp} />
                </Switch>
            </div>
            </BrowserRouter>
        </div>
    );
}

const style = {
    margin: '20px',
}

export default AppRouter;
                    