
import { AuthHeaders } from '../../components'
import { Logo } from '../../assets'
import { DemandEnail,DemandPassword,DemandName,DemandAddress } from '.'
import {useState,useEffect}  from "react"
import { formValToHeaderTextInfo } from '../../lib'


type detailsType = {
  email:string,
  password:string,
  firstName: string,
  lastName: string,
  phoneNumber: string,
  address:string,
  additionalInfo: string,
  city:"",
  region:"",
  additionalPhoneNumber:""

}



const SignUp = () => {
  const [step, setStep] = useState<1|2|3|4>(1)
  const [details, setDetails] = useState<detailsType>(
    {
      email:"",
      password:"",
      firstName:"",
      lastName:"",
      phoneNumber:"",
      address:"",
      additionalInfo:"",
      city:"",
      region:"",
      additionalPhoneNumber:""

    }

  )

  useEffect(()=>{
    console.log(details)
  },[details])

  let preferdComponents;

  const setEmailVal = (emailVal:string)=>{
    setDetails({...details, email:emailVal})
    setStep(2)
    console.log(formValToHeaderTextInfo[1].header )
  }

  const storePassword = (passwd:string)=>{
     setDetails({...details, password:passwd})
     setStep(3)
     
  }

  const saveNames=(val:PersonType)=>{
     setDetails({...details,...val})
     setStep(4)
  }


  const saveAddress=(addressInfo:AddressType)=>{
    //@ts-ignore
    setDetails({...details, ...addressInfo})
    const fullDetails = {...details, ...addressInfo}
    console.log("aa",fullDetails)
  }
  

  const goBack = ()=>{
    setStep(1)
  }

  if (step == 1){

    preferdComponents =  <DemandEnail updateVal= {setEmailVal}  defaultValue={details.email}/>
    // preferdComponents =  <DemandAddress />


  }
  else if (step == 2){

    preferdComponents =  <DemandPassword handlePassword={storePassword}  email={details.email} goBack={goBack}/>

  }
  else if (step == 3){

    preferdComponents =  <DemandName handleNames={saveNames}/>

  }
  else if (step == 4){

    preferdComponents =  <DemandAddress handleAddress={saveAddress}/>

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

export default SignUp

