import React, { useState } from 'react'

function Comp() {
    let [toggle, setToggle] = useState(true);
    const [users, setusers] = useState([]);
    const [day, setDay] = useState("mon");
    const [data, setData] = useState({ name: "rohit", age: 23 })

    console.log('hello')
    return (
        <div>
            <button onClick={() => setToggle(!toggle)}>Toggle</button>
            <button onClick={() => setusers(["a", "b"])}>Array</button>
        </div>
    )
}

export default Comp
