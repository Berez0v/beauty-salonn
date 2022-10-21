import React from 'react'
import { Navbar } from '../components/navbar/Navbar'

export const OrderServicePage = ({ isAuthenticated }) => {
    console.log(isAuthenticated);
    return (
      <>
       
        <Navbar />
        { isAuthenticated ?  <div>MainPedage</div> : <div className='isAuth'>PleaseLogin</div>  }
      </>
    )
}
