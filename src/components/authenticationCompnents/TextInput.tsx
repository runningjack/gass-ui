import {ChangeEvent} from 'react'




interface InputProps {
  label: string;
  value: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  type?:"password" | "text"
  placeholder?:string
}


const TextInput = ({label, value,onChange,type,placeholder}:InputProps) => {
  return (
    <div className='w-full'>
          <div>
            <label  className="block mb-1 text-sm  text-eccomBlack dark:text-white font-bold">{label}</label>
            <input type={type} id="first_name" className="bg-gray-50 border  border-eccomOutlineBackground text-eccomGray text-sm rounded-lg focus:ring-blue-500 focus:border-eccomOrange block w-full p-2.5 focus:outline-eccomOrange"
                placeholder={placeholder}
                value={value}
                
                onChange={onChange} />
        </div>
    </div>
  )
}

export default TextInput