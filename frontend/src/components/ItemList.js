import React from 'react'

const ItemList = (item) => {
    const { title, description, referenceIdentifier
    } = item.item
    return (
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
            <img src={referenceIdentifier
            } alt="NoImage" width="400" height="500" />
        </div>
    )
}

export default ItemList