import {useState} from "react"

export function Counter() {
    // let count = 0
    const [count, setCount] = useState(0)

    function increase() {
        let tempCount = count + 1
        setCount(tempCount)
        // console.log("Page rendered")
        // count++
        // setCount((c) => c + 1)
        console.log(tempCount)
    }

    return (
        <div>
            <div style={{fontSize: "50px", color: "green"}}>Test</div>
            <div style={{fontSize: "30px", color: "blue"}}>{count}</div>
            <button onClick={increase}>Count up!</button>
        </div>
    )
}