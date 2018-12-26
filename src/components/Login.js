import React, { Component } from 'react';
import {withRouter} from 'react-router';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { username: "", password: "", login: false, error: "" };
        this.handlechange = this.handlechange.bind(this);
        this.handlesubmit = this.handlesubmit.bind(this);
    }

    handlechange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    handlesubmit(e) {
        let valuser = "lifyse";
        let valpass = "1234";
        if (this.state.password === "") {
            this.setState({ error: "Invalid Username or password" });

        } else {
            this.props.history.push("/customer");
            //  axios.post("./login", { username: this.state.username, password: this.state.password }, function (error, resp) { })

            //  if (resp.status == 200) {
            //     this.setState({ login: true });
            // }
        }
    }

    render() {
        if (this.state.login) {
            return (
                <div>
                    <link to="" />
                </div>)
        }
        else {
            return (
                <div className="username">
                    <div className="error">
                        {this.state.error}
                    </div>
                    <div>
                        <label>Username</label>
                        <input name="username" placeholder="Username" onChange={this.handlechange}></input>
                    </div>
                    <div className="password">
                        <label>Password</label>
                        <input name="password" placeholder="password" type="password" onChange={this.handlechange} />
                    </div>
                    <div className="password">
                        <button type='submit' name="submit" onClick={this.handlesubmit} >Submit</button>
                    </div>
                </div>
            )
        }
    }
}


export default withRouter(Login);