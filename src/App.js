import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './container/HomePage/HomePage'
import Login from './component/Login/Login';
import SignIn from './component/SignIn/SignIn';
import NotFound from './component/NotFound/Notfound';
import { Route, Link, Switch } from 'react-router-dom';

class App extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     text: '',
        //     count: 0,
        // };
    }


    render() {
        console.log("RENDERED [APP]");
        return (
            <div className="App">

                <Switch>
                    <Route path='/' component={HomePage} />
                    <Route path='/login' component={Login} />
                    <Route path='/signIn' component={SignIn} />
                    {/* <Route component={NotFound} /> */}
                </Switch>

            </div>
        );
    }
}

export default App;
