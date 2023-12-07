import {  CyliderVector, VENDOR_IMAGES } from "../assets";
import {
  LandingPageButton,
  VendorCard,
  VendorHeaderText,
  VendorVectorCardRender,
} from "../components";
import { HOW_IT_WORKS_TEXT, WHY_CHOOSE_US_TEXT,CITIES } from "../constants";

const LandingPage = () => {
  return (
    <div className="boxMargin">
      <div className="flex ">
        <div className="flex flex-col-reverse md:flex-row items-center  justify-between p-[15px] md:p-[50px] w-full gap-2 ">
          <div className="flex      flex-col gap-2 w-full md:w-1/2 justify-center cardShadow h-full p-[40px]">
            <div>
              <h1 className="text-4xl text-eccomBlack">
                Convenient Cooking Gas
              </h1>
              <h1 className="text-4xl text-eccomBlack">
                Delivery To your Doorstep
              </h1>
            </div>

            <div>
              <p className="text-[15px]  text-eccomGray">
                At Gascode we understand the importance of hassle-free cooking
                gas say goodbye to
              </p>
              <p className="text-[15px] text-eccomGray">
                Long queues tedius errands, We bring teh cooking essentials
                directly to you{" "}
              </p>
            </div>

            <LandingPageButton value="Shop Now" />
          </div>

          <div className="w-full md:w-1/2 flex justify-center items-center cardShadow h-full">
            <img src={CyliderVector} alt="" className="w-[300px]" />
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full gap-3 justify-center items-center">
        <VendorHeaderText text="Find Top Vendors nearest you" />
        <div className="flex w-full justify-center  gap-5 flex-wrap">
          {VENDOR_IMAGES.map((image, index) => (
            <div className="w-1/3 md:1/4  lg:w-1/6" key={index}>
              <VendorCard image={image} />
            </div>
          ))}
        </div>
        <LandingPageButton value="Explore Vendors" />
      </div>

      {/* How it work section */}

      <div className="flex flex-col gap-3 w-full justify-center items-center mt-[80px]">
        <VendorHeaderText text="How It Works" />
        <div className="flex px-[20px] p-2 md:px-[50px]  justify-center flex-wrap">
          {HOW_IT_WORKS_TEXT.map((item) => (
            <div className="flex w-1/2 md:w-1/3 space-y-5 gap-2 ">
              <VendorVectorCardRender
                bodyText={item.bodyText}
                image={item.image}
                headerText={item.HeaderText}
              />
            </div>
          ))}
        </div>

        <LandingPageButton value="Explore Now" />
      </div>

      {/* Why choose Us Section */}

      <div className="flex flex-col gap-3 w-full justify-center items-center mt-[80px]  ">
        <VendorHeaderText text="Why Choose Us" />
        <div className="flex px-[20px] p-2 md:px-[50px]  justify-center flex-wrap">
          {WHY_CHOOSE_US_TEXT.map((item) => (
            <div className="flex w-1/2 md:w-1/3 space-y-5 gap-2 ">
              <VendorVectorCardRender
                bodyText={item.bodyText}
                image={item.image}
                headerText={item.HeaderText}
              />
            </div>
          ))}
        </div>
        <LandingPageButton value="Explore Now" />
      </div>

      {/* find top place section  */}

      <div className="flex flex-col mt-[100px] cardShadow">
        <VendorHeaderText text="Find Us In Cities Near You"/>
        <div className="flex justify-center mx-2 lg:mx-[200px] py-4 flex-wrap ">
          {
            CITIES.map((city)=>(

              <div className="w-1/3  lg:w-1/5 mt-3">
                  <button className="px-3 py-1 bg-eccomBlue rounded-[6px] shadow-sm  w-[80%] text-white">{city}</button>
              </div>
            ))
          }
        
           
        </div>

      </div>

       <div className="flex flex-col bg-eccomOrange justify-center items-center py-[80px] lg:px-[80px]  lg:mt-[80px] gap-2">

              <h1 className="text-lg text-eccomBlack md:text-3xl">Join Our Community</h1>
          <div className="flex-flex-col w-[80%] md:w-[30%]">
              <p className="text-center text-eccomGray font-semibold text-lg">Elevate Your Business with gascode, increae sales, seize new oppurtinities</p>
          </div>
          <button className='px-3 py-1 bg-white  rounded-[6px] shadow-sm w-[200px] hover:bg-orange-300 hover:text-gray-700'>

          Explore Now

    </button>
       </div>
    </div>
  );
};

export default LandingPage;
