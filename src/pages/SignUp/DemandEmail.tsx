import { GmailLogo, } from '../../assets'
import { TextInput,AuthButton } from '../../components'
import React, { useState} from "react"

import { validateEmailFormat} from '../../lib';



interface DemandEmailProps  {

  updateVal: (value: string) => void;
  defaultValue?:string
}

const DemandEmail = ({updateVal,defaultValue}:DemandEmailProps) => {
  const customVal = defaultValue ? defaultValue : "" 
  const [value, setValue]  =  useState(customVal)
  const [disabled,setDisabled] = useState(true)


  const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
      setValue(e.target.value)
      console.log(e.target.value)
      const emailFormatIsValid = validateEmailFormat(e.target.value)
      console.log(emailFormatIsValid)
      if (!emailFormatIsValid){
        setDisabled(true)
      }else{
        setDisabled(false)
      }

    


  }
  
  const handleClick = (e:React.MouseEvent<HTMLButtonElement>)=>{
    updateVal(value)

    
  

  }

  return (
    <div className='flex flex-col w-full justify-center items-center gap-2'>
        <TextInput
        
         label='Email'
         onChange={handleChange}
         value= {value}
         placeholder='xxxxx@gmail.com'
        
        />

            <AuthButton value='Continue' onClick={handleClick} disabled = {disabled}/>
            <button className='flex justify-center items-center first-letter:px-3 py-1  border border-eccomOutlineBackground rounded-[6px] shadow-sm w-full hover:bg-orange-100 hover:text-gray-700 gap-2'>
              
            <img src={GmailLogo} alt="" className="w-[20px]" />
              <p>Gmail</p>
                     

            </button>
            

           


    </div>
  )

}

export default DemandEmail