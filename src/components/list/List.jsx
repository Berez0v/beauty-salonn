import React from 'react'

export const List = ({ title, items }) => {
    return (
        <div className='goodsBody'>
            <div className='title'><h4>{title}</h4><img className='arrow' src='/img/arrow.png' alt='arrow' /></div>
            <div className='list'>{
                items.map(element =>
                    <div key={element.id}><img src={element.url} alt={element.title} />
                        <p>{element.title}</p>
                        </div>
                )
            }</div>
        </div>
    )
}
