import React from 'react'
import { DemandEnail } from '../SignUp'
import { formValToHeaderTextInfo } from '../../lib'
import { useState } from 'react'
import { AuthHeaders } from '../../components'
import { Logo } from '../../assets'
import { GetPassword } from '.'

const Login = () => {
    const [step, setStep] = useState<1|2|3|4>(1)
    const [details, setDetails] = useState<LoginType>(
      {
        email:"",
        password:"",
        
      }
  
    )


    let preferdComponents;

    
    const handlEmail =(emailVal:string)=>{
          setDetails({...details, email:emailVal})
          setStep(2)

    }

    const setPassword = (passVal:string)=>{
      console.log(passVal)
      const det = {...details, password:passVal}
      setDetails({...details,password:passVal})
     
      
    }
 


    if(step == 1){
      preferdComponents =  <DemandEnail updateVal={handlEmail}/>

    }else if(step == 2){
      preferdComponents =  <GetPassword email={details.email} goBack={()=>setStep(1)} 
      handlePassword={setPassword}/>

    }

  return (
    <div className='flex flex-col  w-full h-screen justify-center items-center  '>
       <div className='flex w-full md:w-[500px] flex-col gap-3 cardShadow px-[10px] pb-[80px] justify-center items-center'>
           
            <AuthHeaders 
            header={formValToHeaderTextInfo[step].header}
            body={formValToHeaderTextInfo[step].body}/>



            {
              preferdComponents
            }


            


            



           
            



            

            

            
            <p className="text-md text-center font-normal">For support, you can reach out to our customer agent</p>
            <img src={Logo} alt="" className="w-[100px]"  />

            </div>
            </div>


  )
}

export default Login