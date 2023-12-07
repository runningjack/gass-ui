

type VendorCardProps = {
    image:string,
    alt?: string
}


const VendorCard = ({image,alt}:VendorCardProps) => {
  return (
    <div className='w-full cardShadow'>

        <img src={image} alt={alt}  className="w-full"/>



    </div>
  )
}

export default VendorCard