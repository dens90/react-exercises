import React from "react"
import { Hello } from "./Hello"
import { Welcome } from "./Welcome"


export class App extends React.Component{
    render(){
        return(
            <div>
                <Hello name={<strong>React</strong>} />
                <Welcome name='john' age={19}/>
            </div>
        )
    }
}