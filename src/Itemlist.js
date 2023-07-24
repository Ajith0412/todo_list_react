import React from 'react'

import Liitem from './Liitem';


function Itemlist({ item, handleChecked, handleDelete }) {
    return (
        <ul>
            {
                item.map((item) => (
                    <Liitem item={item}
                        key={item.id}
                        handleChecked={handleChecked}
                        handleDelete={handleDelete} />))
            }
        </ul>)

}

export default Itemlist