
type VendorVectorCardRenderInterface ={
    image:string,
    headerText:string,
    bodyText:string
}

const VendorVectorCardRender = ({ image,headerText, bodyText  }:VendorVectorCardRenderInterface) => {
  return (
    <div className="w-full cardShadow mt-4 py-5">
                <div className='flex flex-col w-full card justify-center  items-center px-3  '>
                    <img src={image} alt="" className='max-w-full h-[100px] md:h-[200px] object-contain' />
                    <h1 className='text-[18px] md:text-xl text-eccomBlack text-center'>{headerText}</h1>
                    <p className='text-eccomGray text-center text-[13px] md:text-[16px]'>{bodyText}</p>

                </div>

    </div>
  )
}

export default VendorVectorCardRender