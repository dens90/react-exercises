import React from "react";

export class Login extends React.Component{
    state = {
        username: '',
        password: '',
        remember: false
    }
    controlValue = (e) => {
        this.setState({
            username: ''
        })
    }
    setState
    render(){
        return(
            <div>
                <input  type="text" name="username"/>
                 <input type="password" name="password"/> 
                <input type="checkbox" name="remember"/>
            </div>
        )
    }
}