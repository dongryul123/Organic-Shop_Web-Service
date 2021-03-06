import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import UserListComponent from "../user/UserListComponent";
import LoginComponent from "../user/LoginComponent";
import MainComponent from "../user/MainComponent";
import Form from "../user/Add/Form";
import ProductForm from "../product/ProductForm";
// import AllProducts from "../product/AllProducts";
import AllProducts from "../product/AllProducts";
import DetailProduct from "../product/DetailProduct";

import LoginApp from "../JWT/LoginApp";
import Login from "../user/Login";

import NavBar from "./NavBar"
// import { withRouter } from 'react-router'

const AppRouter = () =>{

    return(
        <div>
            <BrowserRouter>
            <div style={{margin: 20}}>
                <NavBar />
                <Switch>
                    <Route exact path="/" component={MainComponent} />
                    <Route path="/users" component={UserListComponent} />
                    <Route path="/add-user" component={Form} />
                    {/* <Route path="/login" component={LoginComponent} /> */}
                    <Route exact path="/login" component={Login} />

                    <Route path="/add-product" component={ProductForm} />
                    <Route exact path="/AllProducts" component={AllProducts} />
                    <Route exact path="/:id" component={DetailProduct} />
                </Switch>
            </div>
            </BrowserRouter>
        </div>
    );
}
export default AppRouter;


                    