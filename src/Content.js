import React from 'react'

const Content = () => {

    function handleNameChange() {
        const name = ["hey", "hello", "hii"];
        const int = Math.floor(Math.random() * 3);

        return name[int]

    }
    return (
        <div><h1>{handleNameChange()} Gang</h1>


        </div>

    )
}

export default Content