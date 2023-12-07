
import { TextInput } from '..'
const EmailInputDisplay = () => {
  return (
    <div className='w-full'>
        <TextInput
        
         label='Email'
         onChange={()=>console.log("changing")}
         value='Hello'
        
        />

    </div>
  )
}

export default EmailInputDisplay