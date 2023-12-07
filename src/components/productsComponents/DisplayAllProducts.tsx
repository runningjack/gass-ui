
import { ProductsCard } from "..";
// import { TOP_PRODUCT } from "../../tests/testData";

type AllProductsIterface  =  {
  data: ProductInterface[];
} &  {
  header : string
}

const DisplayAllProducts = ({ data, header }: AllProductsIterface) => {
  return (
  
  <div className="flex flex-col px-[10px] lg:px-[80px]">
        <h1 className="3xl text-eccomBlack fon-bold text-4xl">{header}</h1>
        <div className="flex  flex-wrap ">

        {
            data.map((item,index)=>(
                <div className="w-1/2 md:w-1/3 lg:w-1/4 p-2" key={index}>
                    <ProductsCard
                    data={{
                        description: item.description,
                        image: item.image,
                        name: item.name,
                        rating: item.rating,
                        price: item.price,
                        type: item.type,
                    }}
                    />
                </div>

            ))
        }
        
        </div>

  </div>
  );
};

export default DisplayAllProducts;
