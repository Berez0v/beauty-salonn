import React from 'react'
import { Navbar } from '../components/navbar/Navbar'

export const MainPage = ({isAuthenticated}) => {
 console.log(isAuthenticated);
  return (
    <>
     
      <Navbar />
      { isAuthenticated ?  <div>MainPage</div> : <div>PleaseLogin</div>  }
    </>
  )
}
