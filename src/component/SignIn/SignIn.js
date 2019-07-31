import React, { Component } from 'react'
import './Sign.css';
import { Route, Link } from 'react-router-dom'

class Signin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            password: '',
        }
    }
    handlechange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    submitLogin = (e) => {
        e.preventDefault();
        // this.props();
        const { name, password } = this.state;
        var userList = [];
        var user = {
            name, password
        }
        userList.push(user);
    }
    goBack = () => {
        this.props.history.goBack();
    }
    render() {
        console.log("RENDERED [SIGNIN]");
        console.log("props of sign_in", this.props)
        return (
            <div className=''>
                <h3> SIGN IN </h3>
                <hr />
                <label for='username'>Name</label>
                <input type="text" name="username" autofocus value={this.state.name} onChange={this.handlechange} />
                <br />
                <label for='pwd'>Password</label>
                <input type="password" name="password" value={this.state.password} onChange={this.handlechange} />
                <br />
                <button className="navigateBtn" onClick={this.submitLogin}>Sign In</button>
                <br />
                <div className="Footer_link">
                    New!!<Link to="/signIn" className="link">LOG IN</Link>
                </div>
                <button onClick={this.goBack}>back</button>
            </div>
        )
    }
}

export default Signin;