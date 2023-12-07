import {MouseEvent} from 'react'



type AuthButtonProps = {
    value:string,
    disabled?:boolean,
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  }
const AuthButton = ({value,onClick,disabled}:AuthButtonProps) => {
  return (
    <button className='px-3 py-1 bg-eccomOrange  rounded-[6px] shadow-sm w-full hover:bg-orange-300 hover:text-gray-700 disabled:bg-gray-300'
      onClick={onClick} disabled={disabled}>

        {value}

    </button>
  )
}

export default AuthButton