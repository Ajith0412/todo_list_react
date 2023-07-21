import React from 'react'
import { FaTrash } from 'react-icons/fa';


function Itemlist({ item, handleChecked, handleDelete }) {
    return (
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
                    </li>))
            }
        </ul>)

}

export default Itemlist