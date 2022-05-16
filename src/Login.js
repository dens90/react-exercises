import React from "react";

export class Login extends React.Component{
    state = {
        username: '',
        password: '',
        remember: false
    }
    controlValue = (e) => {
        const value = e.target.value;
        const name = e.target.name
        const checked = e.target.value
        console.log(name,value,e)
        this.setState({
           [name]: value,
            checked:value
        })     
    }
    
    controlCheck = (e) => {
        const name = e.target.name;
        const checked = e.target.checked
        this.setState({
            remember: checked,
        })
        console.log(checked)
    }
    render(){
        return(
            <div>
                <input  type="text" onChange={this.controlValue} name="username" value={this.state.username}/>
                 <input type="password" name="password"  onChange={this.controlValue} value={this.state.value}/> 
                <input type="checkbox" name="remember" checked={this.state.remember} onClick={this.controlCheck} />
                
            </div>
        )
    }
}