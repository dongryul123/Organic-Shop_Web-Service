import React from 'react';
import { Component } from 'react';
import AuthenticationService from '../JWT/AuthenticationService';
//import 'bootstrap/dist/css/bootstrap.min.css';

class NavBar extends Component{

    addUser = () =>{
        window.localStorage.removeItem("userID");
        this.props.history.push('/add-user');
    } 

    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();

        return(
            <div>
                <div>
                    <header id="header" className="fixed-top">
                        <div className="container d-flex align-items-center">
                            <h1 className="logo mr-auto"><a href="/">NaNum</a></h1>
                            <nav className="nav-menu d-none d-lg-block">
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li className="drop-down"><a href="#about">식품</a>
                                <ul>
                                    <li><a href="/AllProducts">전체</a></li>
                                    <li><a href="#">유기농</a></li>
                                    <li><a href="#">매실청</a></li>
                                </ul>
                                </li>
                                <li><a href="/add-product">등록</a></li>
                                <li><a href="#portfolio">장바구니</a></li>
                                <li className="drop-down"><a href="">Drop Down</a>
                                <ul>
                                    <li><a href="#">Drop Down 1</a></li>
                                    <li className="drop-down"><a href="#">Deep Drop Down</a>
                                    <ul>
                                        <li><a href="#">Deep Drop Down 1</a></li>
                                        <li><a href="#">Deep Drop Down 2</a></li>
                                        <li><a href="#">Deep Drop Down 3</a></li>
                                        <li><a href="#">Deep Drop Down 4</a></li>
                                        <li><a href="#">Deep Drop Down 5</a></li>
                                    </ul>
                                    </li>
                                    <li><a href="#">Drop Down 2</a></li>
                                    <li><a href="#">Drop Down 3</a></li>
                                    <li><a href="#">Drop Down 4</a></li>
                                </ul>
                                </li>
                                <li><a href="#contact">문의</a></li>
                                {isUserLoggedIn && <li><a href="#contact">나의 페이지</a></li>}
                            </ul>
                            </nav>
                            {!isUserLoggedIn && <a href="/login" className="get-started-btn scrollto">로그인</a>}
                            {isUserLoggedIn && <a href="/login" className="get-started-btn scrollto" onClick={AuthenticationService.logout}>로그아웃</a>}
                        </div>
                    </header>
                    </div>
                </div>       
        );
    }
}
export default NavBar;
