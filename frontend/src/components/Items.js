import React from 'react'
import ItemList from './ItemList'
const Items = (items) => {
    console.log('items from Items.js', items)
    return (
        <div>
            <h1>Item List</h1>
            {
                items.items.map(item => (
                    <ItemList item={item} key={item.title} />
                ))
            }
        </div>
    )
}

export default Items