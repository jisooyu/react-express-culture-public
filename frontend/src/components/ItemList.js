import React from 'react'

const ItemList = (item) => {
    const { title, description, referenceIdentifier, url
    } = item.item
    return (
        <div className='card'>
            <div className='container'>
                <h3>{title}</h3>
                <p>{description}</p>
                {referenceIdentifier.match(/\(/) ? null : <img src={referenceIdentifier
                } alt="NoImage" width="300" height="400" />}
                <p></p>
                <a href={url} target="_blank" rel="noopener noreferrer">관련 사이트</a>
            </div>
        </div>
    )
}

export default ItemList