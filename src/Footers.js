import React from 'react'

export default function Footers() {
    const year = new Date();


    return (
        <footer>
            copy rights &copy; {year.getFullYear()}
        </footer>
    )
}
