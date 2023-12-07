

const Input = () => {
  return (
    <div className="w-full mx-auto p-3 bg-white rounded-full shadow-md ">
            
            <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg className="w-full h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
            </span>
            <input
                type="text"
                className="w-full pl-10 pr-4 py-2 rounded-full border-2 border-eccomIcon focus:outline-none focus:border-eccomOrange"
                placeholder="Search For products, vendors or locations"
            />
            </div>
  </div>

  )
}

export default Input