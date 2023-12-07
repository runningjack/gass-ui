import { TextInput,AuthButton } from "../../components"
import {useState} from "react"
import { validatePersonInfo } from "../../lib"
import { ToastContainer,toast} from "react-toastify"

import 'react-toastify/dist/ReactToastify.css'


interface DemandNameProps{
  handleNames:(value:PersonType)=>void
}


const DemandName = ({handleNames}:DemandNameProps) => {
  const [info , setInfo] = useState(
    {
      firstName:"",
      lastName:"",
      phoneNumber:"",
    }

  )

  const handleClick = ()=>{
    const error = validatePersonInfo(info)
    if(error){
      toast.error(error)
    }else{

      handleNames(info)

    }

  }
  return (
    <div className="flex flex-col w-full gap-3">
      <TextInput label="First Name*" placeholder="John" value={info.firstName} onChange={(e)=>setInfo({...info,firstName:e.target.value})} />
      <TextInput label="Last Name*"  placeholder="Doe"value={info.lastName} onChange={(e)=>setInfo({...info,lastName:e.target.value})}/>
      <TextInput  placeholder="08123456789" label="Phone Number*" value={info.phoneNumber} onChange={(e)=>setInfo({...info,phoneNumber:e.target.value})}/>
      <AuthButton value="Continue" onClick={handleClick}/>
      <ToastContainer/>

    </div>
  )
}

export default DemandName