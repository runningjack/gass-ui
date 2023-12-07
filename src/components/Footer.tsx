import { Logo } from "../assets"
import { BellIcon } from "@heroicons/react/24/outline"
import { FOOTER_LINK_1,FOOTER_LINK_2,FOOTER_LINK_3,FOOTER_LINK_4 } from "../constants"
import { RenderFooterLinks } from "."


const Footer = () => {
  return (
    <div className='relative bottom-0 bg-eccomOutlineBackground h-50px w-screen mb-0 flex flex-col md:flex-row py-9 px-4 justify-center items-center md:items-start    md:justify-around  '>

      <div className="flex flex-col gap-2 w-1/3 px-3">
        <img src= {Logo} alt="logo" className="w-[100px]" />
        <div className="flex gap-2">
          <BellIcon className="w-4"/>
          <BellIcon className="w-4"/>
          <BellIcon className="w-4"/>
          <BellIcon className="w-4"/>

        </div>
      </div>



      <div className="flex p-2 md:p-3    flex-wrap  w-2/3 justify-center ">
              <div className="w-1/2  md:w-1/4 mb-4 ">
                <RenderFooterLinks text={FOOTER_LINK_1}/>
              </div>
              <div className="w-1/2  md:w-1/4 mb-4">
                <RenderFooterLinks text={FOOTER_LINK_2}/>
              </div>
              <div className="w-1/2  md:w-1/4 mb-4">
                <RenderFooterLinks text={FOOTER_LINK_3}/>
              </div>
              <div className="w-1/2  md:w-1/4 mb-4">
                <RenderFooterLinks text={FOOTER_LINK_4}/>
              </div>
      </div>


      




      

    </div>
  )
}

export default Footer