import React from "react"
import { ClickCounter } from "./ClickCounter"
import { ClickTracker } from "./ClickTracker"
import { Counter } from "./Counter"
import { CounterDisplay } from "./CounterDisplay"
import { Hello } from "./Hello"
import { Welcome } from "./Welcome"


export class App extends React.Component{
    render(){
        return(
            <div>
                <Hello name={<strong>React</strong>} />
                <Welcome name='john' age={16}/>
                <Counter />
                <CounterDisplay  />
                <ClickCounter />
                <ClickTracker />
            </div>
        )
    }
}