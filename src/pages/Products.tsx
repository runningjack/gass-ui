import { DisplayAllProducts } from "../components";

import { TOP_PRODUCT,TOP_VENDORS } from "../tests/testData";

const Products = () => {
  return (
    <div className="boxMargin ">

       <div className="flex flex-col mt-[100px] md:mt-[50px]">
           <div className="flex flex-col">
              <DisplayAllProducts data={TOP_PRODUCT} header="Top Products"/>

           </div>
           <div className="flex flex-col mt-5 md:mt-8">
              <DisplayAllProducts data={TOP_VENDORS} header="Top Vendors"/>

           </div>

       </div>
      
    </div>
  );
};

export default Products;
