import { useState } from "react"

function Counter() {
    const [count, setCount] = useState(0);

    function incHandler() {
        setCount((prev) => prev + 1)
    }

    function decHandler() {
        setCount(count - 1)
    }

    console.log("Component Return")
    return (
        <div className="count">
            <button onClick={incHandler}>+</button>
            <h2>{count}</h2>
            <button onClick={decHandler}>-</button>
        </div>

    )
}

export default Counter