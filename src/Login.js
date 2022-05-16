import React from "react";

export class Login extends React.Component{
    state = {
        username: '',
        password: '',
        remember: ''
    }

    render(){
        return(
            <div>
                <input  type="text" name="username"/>
                {/* <input type="password" name="password" onChange={}/> */}
                <input type="checkbox" name="remember"/>
            </div>
        )
    }
}