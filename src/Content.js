import React, { useState } from 'react'

const Content = () => {
    const [letter, setLetter] = useState("hey");
    function handleNameChange() {
        const name = ["hey", "hello", "hii"];
        const int = Math.floor(Math.random() * 3);

        setLetter(name[int])

    }





    // const handleClick = (name) => {
    //     console.log(`clicked ${name}`)

    // }

    // const [count, setCount] = useState(0)

    // function countDecrese() {
    //     setCount(preCount => preCount - 1)

    // }
    // function countIncrese() {
    //     setCount(preCount => preCount + 1)

    // }


    return (
        <div>
            <h1>{letter} Gang</h1>
            <button onClick={handleNameChange}> Subscribe</button> <br />

            {/* <button onClick={countDecrese}>-</button>
            <h3 >{count}</h3>
            <button onClick={countIncrese}>+</button> */}
        </div>

    )
}

export default Content