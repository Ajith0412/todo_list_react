import React, { useState } from 'react'
import { FaTrash } from 'react-icons/fa';

const Content = () => {

    const [item, setItem] = useState([
        {
            id: 1,
            checked: true,
            items: "lets play",
        }, {
            id: 2,
            checked: true,
            items: "eat",
        }, {
            id: 3,
            checked: false,
            items: "sleep"
        }
    ])

    const handleChecked = (id) => {
        const letitems = item.map((item) =>
            item.id === id ? { ...item, checked: !item.checked } :
                item
        )
        setItem(letitems)

    }

    const handleDelete = (id) => {
        const listdelete = item.filter((item) =>
            item.id !== id)

        setItem(listdelete)
    }

    return (
        <main>
            {(item.length) ? (
                <ul>
                    {
                        item.map((ref) => (
                            <li className='item' key={ref.id}>
                                <input type="checkbox"
                                    checked={ref.checked}
                                    onChange={() => { handleChecked(ref.id) }} />
                                <label style={(ref.checked) ? { textDecoration: "line-through" } : null}
                                    onDoubleClick={() => { handleChecked(ref.id) }}>{ref.items}</label>
                                <FaTrash
                                    role='button'
                                    tabIndex={0}
                                    onClick={() => { handleDelete(ref.id) }}
                                />
                            </li>
                        ))
                    }
                </ul>) :
                <p>Your List Is Empty </p>
            }
        </main >

    )
}

export default Content