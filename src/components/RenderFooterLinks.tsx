import { Link } from "react-router-dom"


type FooterProps = {
    text : FooterTextInterface
}

const RenderFooterText = ({text:{header,lists}}:FooterProps) => {
  return (
    <div  className="w-full">

        <h3>{header}</h3>
        {
            lists.map((item)=>(
                <Link to={"/"} className="block">

                    
                    
                    {/* <p> */}
                        {item.tag}
                    {/* </p> */}

                </Link >
            ))
        }

    </div>
  )
}

export default RenderFooterText