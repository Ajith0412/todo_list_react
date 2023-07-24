import React from 'react'
import { FaTrash } from 'react-icons/fa';

function Liitem({ item, handleChecked, handleDelete }) {
    return (
        <li className='item'>
            <input type="checkbox"
                checked={item.checked}
                onChange={() => { handleChecked(item.id) }} />
            <label style={(item.checked) ? { textDecoration: "line-through" } : null}
                onDoubleClick={() => { handleChecked(item.id) }}>{item.items}</label>
            <FaTrash
                role='button'
                tabIndex={0}
                onClick={() => { handleDelete(item.id) }}
            />
        </li>
    )
}

export default Liitem