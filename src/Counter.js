import { useSelector, useDispatch } from "react-redux"
import { increment,decrement, reset } from "./reducers/counterReducer";
import { stateCounter } from "./reducers/counterReducer";
const Counter = () => {

    const counter = useSelector( stateCounter)
    const dispatch = useDispatch()

    return(
        <div>
            <div>
                <h1>{counter}</h1>
            </div>
            
        <button onClick={() => dispatch(increment(1))}>Increment</button>
        <button onClick={() => dispatch(decrement(1))}>Decrement</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
         
        </div>
       
    )
} 

export default Counter