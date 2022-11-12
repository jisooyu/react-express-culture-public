import React from 'react'

const ItemList = (item) => {
    const { title, description, referenceIdentifier, url
    } = item.item
    return (
        <div className='grid-item'>
            <div className='card'>
                {referenceIdentifier.match(/[()%]/) ? null : <img className='card-img' src={referenceIdentifier
                } alt="NoImage" width="300" height="400" />}
                <div className='card-content'>
                    <h4 className='card-header'>{title}</h4>
                    <p className='card-text'>{description}</p>
                    <button className='card-btn'> <a href={url} target="_blank" rel="noopener noreferrer" >관련 사이트</a> <span>&rarr;</span></button>
                </div>
            </div>
        </div>
    )
}

export default ItemList