
type InputProp  ={
    labelName: string
}

export default function Checkbox({labelName}:InputProp){
    return(
        <div className="flex items-center gap-1">
            <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-eccomBlack bg-eccomBlack  border-gray-300 rounded focus:ring-eccomBlack   focus:ring-2"/>
            <label className="text-eccomGray font-semibold text-[12px] lg:text-[15px]">{labelName} </label>
        </div>

    )
    
}