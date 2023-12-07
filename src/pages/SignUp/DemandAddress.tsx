import { AuthButton, TextInput } from "../../components"
import React, {useEffect, useState} from "react"
import { validateAddressInfo,phoneNumberError } from "../../lib"
import { ToastContainer,toast} from "react-toastify"

import 'react-toastify/dist/ReactToastify.css'

interface DemandAddressProps{
  handleAddress:(value:AddressType)=>void
}

const DemandAddress = ({handleAddress}:DemandAddressProps) => {

  const [disabled, setDisabled] = useState(true)

  const [info, setInfo]  = useState<AddressType>({
    address:"",
    additionalInfo:"",
    city:"",
    region:"",
    additionalPhoneNumber:""

  })

  useEffect(()=>{
    const error =  validateAddressInfo(info)
    if(error){
      if(error !== phoneNumberError){
        setDisabled(true)
        return
      }
      
    }
    setDisabled(false)
  },[info])

  const sendAddress = (e:React.MouseEvent<HTMLButtonElement>)=>{
    console.log(info)
    const error = validateAddressInfo(info)
    if(error){
      toast.error(error)
      return
      
    }

    handleAddress(info)

  }



  return (
    <div className="flex flex-col w-full justify-center items-center">
      <div className="flex flex-col md:flex-row w-full">
          <div className="w-full lg:w-1/2 p-2">
             <TextInput label="Address*" value={info.address} onChange={(e)=>{setInfo({...info,address:e.target.value})} }/>
          </div>
          <div className="w-full lg:w-1/2 p-2">
             <TextInput label="Region" value={info.region}  onChange={(e)=>{setInfo({...info,region:e.target.value})}  }/>
          </div>
      </div>
      <div className="flex flex-col md:flex-row w-full">
          <div className="w-full lg:w-1/2 p-2">
             <TextInput label="City*" value={info.city} onChange={(e)=>{setInfo({...info,city:e.target.value})} }/>
          </div>
          <div className="w-full lg:w-1/2 p-2">
             <TextInput label="Additional Phone Number"  placeholder="081234543" value={info.additionalPhoneNumber}   onChange={(e)=>{setInfo({...info,additionalPhoneNumber:e.target.value})}}/>
          </div>
      </div>
      <div className="flex flex-col md:flex-row w-full">
          <div className="w-full p-2">
             <TextInput label="Additional Info" value={info.additionalInfo} onChange={(e)=>{setInfo({...info,additionalInfo:e.target.value})}}/>
          </div>
  
      </div>

      <AuthButton value="Continue" onClick={sendAddress} disabled={disabled}/>
      <ToastContainer/>

    </div>
  )
}

export default DemandAddress