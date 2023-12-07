import  { Justlogo } from "../../assets"
import { Link } from "react-router-dom"

type WrapperProps = {
    header:string,
    body:string,
   
}


const AuthHeaders = ({header,body}:WrapperProps) => {
  return (
    <div className="flex w-full h-full justify-center items-center">

        <div className="flex flex-col justify-center items-center">
            <Link to={"/"}>
                <img src={Justlogo} alt="" className="w-[50px] lg:w-[60px] " />
            </Link>
            <h1 className="text-2xl">{header}</h1>
            <p className="text-md text-center font-normal">{body}</p>
        </div>





    </div>
  )
}

export default AuthHeaders