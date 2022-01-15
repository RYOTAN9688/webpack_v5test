import React, { useState } from "react"
import { render } from "react-dom"
export const App = ()=> {
    const [count,setCount] = useState(0)

    const handleClick = ()=> {
        setCount(count + 1)
    }

    return (
        <div>
            <h1>Hello World</h1>
            <h2>こんにちは</h2>
            <div>{count}</div>
            <button onClick={handleClick}>追加</button>
        </div>
    )
}

render(<App/>,document.getElementById("app"))
