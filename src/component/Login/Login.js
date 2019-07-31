import React, { Component } from 'react'
import './Login.css'
import { Route, Link } from 'react-router-dom'

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            password: '',
            cnfmpassword: '',
            userList: []
        }
    }
    handlechange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    submitLogin = e => {
        e.preventDefault();
        // this.props();
        const { name, password, userList, cnfmpassword } = this.state;
        var user = {
            name, password, cnfmpassword
        }
        userList.push(user);

        this.setState({ name: '', password: '' })
        console.log("UserList on SUBMIT", userList)
    }
    goBack = () => {
        this.props.history.goBack();
    }
    render() {
        console.log("RENDERED [LOGIN]");
        console.log("props of LOGINin", this.props)
        return (
            <div className=''>
                <h3>Login</h3>
                <label htmlFor='username'>Name</label>
                <input type="text" name="name" autofocus value={this.state.name} onChange={this.handlechange} />
                <br />
                <label htmlFor='pwd'>Password</label>
                <input type="password" name="password" value={this.state.password} onChange={this.handlechange} />
                <br />
                <label htmlFor='pwd'>ConfirmPassword</label>
                <input type="confirm_password" name="confirm_password" value={this.state.cnfmpassword} onChange={this.handlechange} />
                <br />
                <button onClick={this.submitLogin} className='navigateBtn'>Submit</button>
                <hr />
                <div className="Footer_link">
                    Already Logged !!<Link to="/signIn" className="link">SIGN IN</Link>
                </div>
                <button onClick={this.goBack}>back</button>
            </div>
        )
    }
}
export default Login;