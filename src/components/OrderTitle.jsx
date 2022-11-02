import React from 'react'

export const OrderTitle = ({id,title}) => {
  return (
    <div className='orderTitle'><p>Register new order</p><p>Step {id}/3 - {title}</p></div>
  )
}
