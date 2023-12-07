import {Logo} from  "../assets"
import { Input,CartIcon,Checkbox } from '.'
import { BookmarkIcon,UserIcon } from "@heroicons/react/24/outline"
import { Link } from "react-router-dom"




const Navbar = () => {
  return (
       
      <nav className="fixed w-full m-0 left-0  bg-white z-[1]">
        <div className='flex justify-between items-center w-full px-7 '>


          {/* flexone for logo */}

           <div className='w-1/2 md:w-2/5' >
             <Link to={"/"}>
               <img src={Logo}/>
             </Link>
           </div>

            {/* input */}
           <div className='w-2/5 hidden  md:flex'>

             <Input/>
          
           </div>

           
           <div className='w-1/2 md:w-2/5'>

                <div className='flex justify-end gap-4  '>

                     <div className="flex gap items-center">
                        <BookmarkIcon className="w-6 text-eccomGray"/>
                        <p className="hidden md:block text-eccomBlack">saved</p>
                     </div>

                     <div className="flex gap items-center">
                         <CartIcon numOfItems={10}/>
                         <p className="hidden md:block text-eccomBlack">Cart</p>
                     </div>

                     <div className="flex gap items-center ">
                         <UserIcon className="w-6 text-eccomGray" />
                         <p className="hidden md:block text-eccomBlack">Profile</p>
                     </div>

                </div>

              
           </div>

        </div>

         {/* mobile input  */}

         <div className="w-[95%]  md:hidden ">
            <Input/>
         </div>


         <div className="w-full flex px-5 pl-[80px] gap-2 bg-eccomOrange mt-[10px]">
            <p>Sort:</p>

            <Checkbox labelName="Vendors"/>
            <Checkbox labelName="Location"/>
            <Checkbox labelName="Price"/>
            <Checkbox labelName="Product"/>

            


         </div>


      </nav>

       


    
           


        )
       
}

export default Navbar