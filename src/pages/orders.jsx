import { React } from 'react'
import { Navbar } from '../components/navbar/Navbar'
import { First } from '../components/steps/First';
import { Second } from '../components/steps/Second'
import { Routes, Route, useParams } from 'react-router-dom';
import { Finish } from '../components/steps/Finish';
export const OrderServicePage = ({ isAuthenticated }) => {
  
  const { stepId } = useParams();
  const steps = [<First />, <Second />,<Finish/>];
  const page = steps.find((step, index) => index + 1 === Number(stepId));

  return (
    <>

      <Navbar />
      {isAuthenticated ? <div>
        {
          <>
            <section>{page}</section>
          </>
        }

      </div> : <div className='notLoginned'>Please Log In app!</div>}
    </>
  )
}
