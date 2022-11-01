import {React} from 'react'
import { Navbar } from '../components/navbar/Navbar'
import { First } from '../components/steps/First';
export const OrderServicePage = ({ isAuthenticated }) => {
  // const [step,setStep] = useState(1);
    return (
      <>
       
        <Navbar />
        { isAuthenticated ?  <div>
          <div className='orderTitle'><p>Register new order</p><p>Step 1/3 - firsdfdsfdsst</p></div>
          
          
          {
          <First />
          
          }




        </div> : <div className='notLoginned'>Please Log In app!</div>  }
      </>
    )
}
