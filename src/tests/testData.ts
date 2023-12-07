import { Cylinder,TOP_VENDOR_IMAGES } from "../assets"




const TOP_PRODUCT:any  =  []

for (let i = 0; i < 8; i++) {

    const product = {
        description: "Yellow Cylinder without gas filled",
        image: Cylinder,
        name: "3kg Cylinder",
        rating: i % 6,
        price: i * 500,
        type:"products"

    }

    TOP_PRODUCT.push(product)




    
  }


  const TOP_VENDORS:any =  []
  
for (let i = 0; i < 8; i++) {

    const vendor  = {
        description: "Yellow Cylinder without gas filled",
        image: TOP_VENDOR_IMAGES[i % TOP_VENDOR_IMAGES.length],
        name: "3kg Cylinder",
        rating: i % 6,
        price: i * 500,
        type:"vendors"

    }
    TOP_VENDORS.push(vendor)

}

  export {TOP_PRODUCT,TOP_VENDORS}

