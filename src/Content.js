

import Itemlist from './Itemlist';

const Content = ({ item, handleChecked, handleDelete }) => {



    return (
        <main>
            {(item.length) ? (
                <Itemlist item={item}
                    handleChecked={handleChecked}
                    handleDelete={handleDelete} />) :
                <p>Your List Is Empty </p>
            }
        </main >

    )
}

export default Content