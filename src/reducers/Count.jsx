import { useReducer } from "react";
import countReducer, {initialState} from "./countReducer";
// import countReducer, { initialState } from "./todoListReducer";

const CountOfNumberCalculation = () => {

    // const [ calculate, dispatch] = useReducer(countReducer, initialState)
    const [ countState, dispatch ] = useReducer(countReducer, initialState)

    const handleClickIncreaseBtn = () => {
        dispatch({type:'INCREASE' })
    }

        const handleClickDecreaseBtn = () => {
            dispatch({type: 'DECREASE' })
        }

    return <div>
        <h1>Counter List: </h1>
        <p>{countState.count}</p>
        <button type="button" onClick={handleClickIncreaseBtn} className="btn btn-success me-2">Increase(+)</button>
        <button type="button" onClick={handleClickDecreaseBtn} className="btn btn-info">Decrease(-)</button>
    </div>
}

export default CountOfNumberCalculation;