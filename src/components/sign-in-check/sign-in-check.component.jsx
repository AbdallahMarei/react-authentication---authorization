import React from 'react';
import "./sign-in-check.styles.scss";

class SignInCheck extends React.Component{
    constructor(props) {
        super(props);

        this.state={
            firstName: "",
            email: "",
            password: ""
        }
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]:value})
    }

    handleSubmit = (e,firstName,email,password) => {
        e.preventDefault();
        this.props.check(firstName,email,password)
        this.setState({
            firstName: "",
            email: "",
            password: ""
        })
    }


    render() {
        const {firstName,email,password} = this.state;
        return(
            <div className="form-container">
            <form onSubmit={(e) => this.handleSubmit(e,firstName,email,password)}>
                <input onChange={this.handleChange} value={firstName} placeholder="First Name" name="firstName" type="text" />
                <input onChange={this.handleChange} value={email} placeholder="Email" type="email" name="email" />
                <input onChange={this.handleChange} value={password} placeholder="Password" type="password" name="password" />
                <button type="submit">Login</button>
            </form>
        </div>
        )
    }
}

export default SignInCheck