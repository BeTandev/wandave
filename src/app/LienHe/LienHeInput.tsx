interface LienHeInputProps{
    labelTitle: string
    placeholderInput: string
    typeInput?: string
    textareaCheck?: boolean
}

function LienHeInput(props: LienHeInputProps) {

    const {labelTitle, placeholderInput, typeInput, textareaCheck} = props

    return (
        <div className="mt-3">
            <div className="text-[12px]">{labelTitle}</div>
            {!textareaCheck ? <input type={typeInput ? typeInput : "text"} placeholder={placeholderInput} className="focus:outline-none border py-1 px-3 placeholder:text-[12px] w-full mt-1 text-[12px]"/> : <textarea placeholder={placeholderInput} className="focus:outline-none border py-1 px-3 placeholder:text-[12px] w-full mt-1 h-[90px] text-[12px]"/>}
        </div>
    );
}

export default LienHeInput;