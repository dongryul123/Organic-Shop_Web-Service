import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import UserListComponent from "../user/UserListComponent";
import LoginComponent from "../user/LoginComponent";
import MainComponent from "../user/MainComponent";
import Form from "../user/Add/Form";
import AddProduct from "../product/AddProduct";

const AppRouter = () =>{
    return(
        <div>
            <BrowserRouter>
            <div style={style}>
                <Switch>
                    <Route exact path="/" component={MainComponent} />
                    <Route path="/users" component={UserListComponent} />
                    <Route path="/add-user" component={Form} />
                    <Route path="/login" component={LoginComponent} />

                    <Route path="/add-product" component={AddProduct} />
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
                    