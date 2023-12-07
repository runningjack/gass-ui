

type LandingPageButtonProps = {
  value:string
}

const LandingPageButton = ({value}:LandingPageButtonProps) => {
  return (
    <button className='px-3 py-1 bg-eccomOrange  rounded-[6px] shadow-sm w-[200px] hover:bg-orange-300 hover:text-gray-700'>

        {value}

    </button>
  )
}

export default LandingPageButton