

type VendorHeaderTextProps  = {
    text: string
}

const VendorHeaderText = ({text}:VendorHeaderTextProps) => {
  return (

    <h1 className="text-xl lg:text-2xl text-center  text-eccomGray">{text}</h1>
    
  )
}

export default VendorHeaderText