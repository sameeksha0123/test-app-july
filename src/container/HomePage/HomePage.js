import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../../App.css';

import Login from '../../component/Login/Login';
import SignIn from '../../component/SignIn/SignIn';
import NotFound from '../../component/NotFound/Notfound';
import { Route, Link, Switch } from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     text: '',
        //     count: 0,
        // };
    }


    render() {
        console.log("RENDERED [HOME]");
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <div className="btn-div">
                        <button className="navigateBtn">
                            <Link to='/login'>LOGIN</Link>
                        </button>
                        <button className="navigateBtn">
                            <Link to='/signIn'>SIGNIN</Link>
                        </button>
                    </div>

                    <Switch>
                        {/* <Route path='/' component={Home} /> */}
                        <Route path='/login' component={Login} />
                        <Route path='/signIn' component={SignIn} />
                        <Route component={NotFound} />
                    </Switch>

                </header>
            </div>
        );
    }
}

export default Home;
