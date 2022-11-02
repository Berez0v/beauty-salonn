import { React } from 'react'
import { Navbar } from '../components/navbar/Navbar'
import { First } from '../components/steps/First';
import { Second } from '../components/steps/Second'
import { Routes, Route, useParams } from 'react-router-dom';

export const OrderServicePage = ({ isAuthenticated }) => {
  // const [step,setStep] = useState(1);
  const { stepId } = useParams();
  const steps = [<First />, <Second />];
  const page = steps.find((step, index) => index + 1 === Number(stepId));

  return (
    <>

      <Navbar />
      {isAuthenticated ? <div>
        {
          <>
            <div>This is Form page</div>
          </>
        }

      </div> : <div className='notLoginned'>Please Log In app!</div>}
    </>
  )
}
