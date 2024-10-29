import {useCounterStore} from "./store.ts";
import "./app.css"


const App = () => {
    const {count,increment,decrement,reset} = useCounterStore((state) => state)

    return (
        <div className="counter-container">
            <h1 className="counter-title">React Counter</h1>
            <div className="counter-display">{count}</div>
            <div className="button-container">
                <button onClick={decrement}  className="counter-button" aria-label="Decrement">
                    -
                </button>
                <button onClick={increment}  className="counter-button" aria-label="Increment">
                    +
                </button>
            </div>
            <button onClick={reset}  className="reset-button" aria-label="Reset counter">
                Reset
            </button>
        </div>
    )
}
export default App
