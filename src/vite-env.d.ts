/// <reference types="vite/client" />


interface FooterTextInterface {
    header: string;
    lists: {
        tag: string;
        tagUrl: string;
    }[];
}



interface ProductInterface{
           
        image:string,
        name:string,
        price:number,
        description:string,
        rating:number,
        type:"products" | "vendors"
    
}


type PersonType = {
    firstName: string;
    lastName: string;
    phoneNumber: string;
  };
  


type AddressType = {
    address: string;
    region: string;
    city: string;
    additionalPhoneNumber: string;
    additionalInfo: string;
  };
  
type LoginType = {
    email: string;
    password: string;
   
  };
  