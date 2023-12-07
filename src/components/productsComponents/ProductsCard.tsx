//@ts-ignore
import StarRating from "react-star-ratings" ;
import { LandingPageButton } from "..";
import {vendorsToButtonName} from "../../lib"




interface productTypeInterface{
    data: ProductInterface

}

const ProductsCard = ({data:{name,image,price,description,rating,type}}:productTypeInterface) => {
  return (
    <div className="w-full justify-center items-center mt-5">
        <div className="flex cardShadow justify-center ">
            <img src={image} alt="" className="w-[100%] md:w-[80%]" />

        </div>

        <div className="flex flex-col gap-1 justify-center items-center mt-4 Shadow">
            <div className="w-full flex justify-between gap-3 px-[10px] md:px-[20px]">
                <h6>{name}</h6>
                <h6>{price}</h6>
            </div>
            <p>{description}</p>
             <StarRating rating={rating} starRatedColor="gold" starDimension="20px" starSpacing="2px" />
             <LandingPageButton value={vendorsToButtonName[type]}/>
        </div>
           

    </div>
  )
}

export default ProductsCard