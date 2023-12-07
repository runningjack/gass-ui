

export function validateEmailFormat(email:string) {
    // Regular expression for a basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
  
    // Test the email against the regex
    return emailRegex.test(email) ;
  }
  


  export function isNotEmptyField(value:string) {
    // Check if the value is a string and not an empty string or a string with only whitespace
    return typeof value === 'string' && value.trim() !== '' ;
  }


  export function checkPasswordEquality(pass1:string,pass2:string){
    return (pass1 === pass2) && isNotEmptyField(pass1)
  }


  
  export const validatePersonInfo = (person: PersonType): string | null => {
    const { firstName, lastName, phoneNumber } = person;
  
    // Trim whitespace from all fields
    const trimmedFirstName = firstName.trim();
    const trimmedLastName = lastName.trim();
    const trimmedPhoneNumber = phoneNumber.trim();
  
    // Check if any field is empty after trimming
    if (!trimmedFirstName || !trimmedLastName || !trimmedPhoneNumber) {
      return 'All fields must be filled out.';
    }
  
    // Check if phoneNumber is a number
    const phoneNumberAsNumber = +trimmedPhoneNumber;
    if (isNaN(phoneNumberAsNumber)) {
      return 'Phone number must be a valid number.';
    }
  
    // Check if phoneNumber has more than or equal to 11 digits
    if (trimmedPhoneNumber.length < 11) {
      return 'Invalid Phone Number.';
    }
  
    // If all checks pass, return null (indicating no errors)
    return null;
  };
  
 
  interface AddressInfo {
    address: string;
    additionalInfo?: string;
    city: string;
    region?: string;
    additionalPhoneNumber?: string;
  }
  
  export function validateAddressInfo(data: AddressInfo): string | null {
    // Check if address and city are filled
    if (!data.address || !data.city) {
      return "Address and city are required.";
    }
  
    // Check if additionalPhoneNumber is provided and meets the criteria
    if (data.additionalPhoneNumber) {
      // Remove non-digit characters from the phone number
      const phoneNumberDigits = data.additionalPhoneNumber.replace(/\D/g, '');
  
      // Check if the phone number has more than 10 digits
      if (phoneNumberDigits.length < 10) {
        return "Additional phone number must have at least 10 digits.";
      }
  
      // Check if the phone number contains the '+' character
      if (data.additionalPhoneNumber.includes('+')) {
        return "Additional phone number cannot contain the '+' character.";
      }
    }
  
    // If all checks pass, return null (indicating success)
    return null;
  }
  
  // Example usage:
  const dataToValidate: AddressInfo = {
    address: "123 Main Street",
    city: "Example City",
    region: "Example Region",
    additionalPhoneNumber: "+1234567890"
  };
  
  const validationResult: string | null = validateAddressInfo(dataToValidate);
  
  if (validationResult) {
    console.error(validationResult);
  } else {
    console.log("Data is valid!");
  }


  export  const phoneNumberError = "Additional phone number must have at least 10 digits."
  
  