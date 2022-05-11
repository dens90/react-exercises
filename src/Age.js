import React from "react";


export class Age extends React.Component{
    render(){
        return(
            <div>
                <p>You're name is {this.props.name}</p>
             <p>Your age is {this.props.age || 30} </p>  
            </div>
            
        )
    }
}