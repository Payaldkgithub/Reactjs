import React, { useCallback, useEffect, useState } from 'react'

function Callback() {
    const [count, setCount] = useState(0)
    const [color, setColor] = useState("red")
    function handelColor() {
        setColor(`rgb(${Math.trunc(Math.random() * 255)},
        ${Math.trunc(Math.random() * 255)},${Math.trunc(Math.random() * 255)})`)
    }
    // const printMsg = () => {
    //     return color
    // }
    const printMsg = useCallback(() => {
        return color
    }, [color])
    return (
        <>
            <h1>useCallback()hook</h1>
            <div style={{
                height: "200px", width: "500px", alignContent: "center",
                textAlign: "center", background: color
            }}>
                <h1>{count}</h1>
                <button onClick={() => setCount(count + 1)}>ChangeCount</button>
                <button onClick={handelColor}>ChangeColor</button>
            </div>
            <ShowColor printMsg={printMsg} />
        </>
    )
}
function ShowColor({ printMsg }) {
    useEffect(() => {
        console.log("Function is changed");
    }, [printMsg])
    return (
        <>
            <h1>Child Componet</h1>
            <h2>{printMsg()}</h2>
        </>
    )
}

export default Callback