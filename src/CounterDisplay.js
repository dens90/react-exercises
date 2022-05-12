import React from "react";
import { Counter } from "./Counter";

export class CounterDisplay extends React.Component{
    render(){
        return <Counter initialValue={100} updateByInterval={1000} />
    }
}