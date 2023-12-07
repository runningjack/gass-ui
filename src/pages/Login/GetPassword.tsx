import React from 'react'

import { useState } from 'react'
import { AuthButton,TextInput } from '../../components'
import { Logo } from '../../assets'
import { PencilIcon } from '@heroicons/react/24/outline'



type DemandPasswordProps = {
  handlePassword : (pass:string)=> void,
  goBack : ()=> void,
  email:string
}

const GetPassword = ({goBack,email,handlePassword}:DemandPasswordProps) => {
  const [password, setPassword] = useState("")
 
    const handleClick =()=>{
        console.log(password)
         handlePassword(password)
         

    }

  return (

    <div className="w-full flex flex-col gap-[30px]">
     

    <div className='flex justify-between items-center first-letter:px-3 py-1  border border-eccomOutline bg-eccomOutline rounded-[6px] shadow-sm w-full px-2   
      disabled:bg-eccomOutline' >
                  
                    <h3 className="text-eccomBlack text-[14px] md:text-[16px]">{email}</h3>
                      
                            <PencilIcon className="w-[20px] cursor-pointer" onClick={()=>goBack()}/>
                      
                           
      
                  </div>
          <TextInput
            
            label='Password'
            value={password}
            onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setPassword(e.target.value) }
            type="password"
            placeholder="******"
            
    
            
            
            
           
           />
        
         
    
           <AuthButton value="Continue"   onClick={handleClick} />
           
        </div>


  )
}

export default GetPassword