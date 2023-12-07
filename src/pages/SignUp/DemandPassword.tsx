import { TextInput, AuthButton } from "../../components"
import {useState,ChangeEvent,useEffect} from "react"
import { checkPasswordEquality } from "../../lib"
import { PencilIcon } from "@heroicons/react/24/outline"



type DemandPasswordProps = {
  handlePassword : (pass:string)=> void,
  goBack : ()=> void,
  email:string
}

const DemandPassword = ({handlePassword,email,goBack}:DemandPasswordProps) => {
  const [password1, setPassword1] = useState("")
  const [password2, setPassword2] = useState("")
  const [disabled, setDisabled] = useState(true)


  useEffect(()=>{
    if(!checkPasswordEquality(password1,password2)){
      setDisabled(true)
    }else{
      setDisabled(false)
    }

  },[password1,password2])


  const handleChangeForPass1 = (e:ChangeEvent<HTMLInputElement>)=>{
    setPassword1(e.target.value)
    console.log(password1)
    
   
  }

  const handleChangeForPass2 = (e:ChangeEvent<HTMLInputElement>)=>{
    console.log(e.target.value)
    setPassword2(e.target.value)
    
   
  }

  const handleClick = ()=>{
      handlePassword(password1)

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
        value={password1}
        onChange={handleChangeForPass1}
        type="password"
        placeholder="******"
        

        
        
        
       
       />
      <TextInput
        
        label='Confirm Password'
        value={password2}
        onChange={handleChangeForPass2}
        type="password"
        placeholder="******"
        
        
        
       
       />

       <AuthButton value="Continue" disabled={disabled}  onClick={handleClick} />
       
    </div>
  )
}

export default DemandPassword