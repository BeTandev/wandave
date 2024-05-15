interface PriceMenuProps{
    title: string
    amount?: number
    startPrice: number
    endPrice?: number
    setFromPriceSelected: any
    setEndPriceSelected: any
    fromPriceSelected: number
    setTitlePrice: any
}
function PriceMenu(props: PriceMenuProps) {

    const { title, amount, setFromPriceSelected, setEndPriceSelected, startPrice, endPrice, fromPriceSelected, setTitlePrice } = props
    const handleClick = () => {
        if(endPrice){
            setFromPriceSelected(startPrice)
            setEndPriceSelected(endPrice)
            if(startPrice === fromPriceSelected){
                setFromPriceSelected(1)
                setEndPriceSelected(0)
            }
            setTitlePrice(title)
        }
        else{
            setFromPriceSelected(startPrice)
            if(startPrice === fromPriceSelected){
                setFromPriceSelected(1)
                setEndPriceSelected(0)
            }
            setTitlePrice(title)
        }
    }

    return (
            <div className="flex justify-between text-[12px] mt-3 hover:text-mainGreen cursor-pointer" onClick={handleClick}>
                <div className="flex gap-2">
                    <input type="checkbox" name="" id="" checked={fromPriceSelected === startPrice} readOnly/>
                    <div className="">{title}</div>
                </div>
                {amount ? <div className="">{`(${amount})`}</div> : ""}
            </div>
    );
}

export default PriceMenu;