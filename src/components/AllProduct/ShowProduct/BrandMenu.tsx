interface BrandMenuProps{
    title: string
    amount?: number
    setBrandSelected: any
    brand: string
    brandSelected: string
    setTitleBrand: any
}
function BrandMenu(props: BrandMenuProps) {

    const {title, amount, brand, setBrandSelected, brandSelected, setTitleBrand} = props
    const handleClick = () => {
        if(brand === brandSelected){
            setBrandSelected('')
            setTitleBrand('')
        }else{
            setBrandSelected(brand)
            setTitleBrand(title)
        }
    }

    return (
            <div className="flex justify-between text-[12px] mt-3 hover:text-mainGreen cursor-pointer" onClick={handleClick}>
                <div className="flex gap-2">
                    <input type="checkbox" name="" id="" checked = {brand === brandSelected} readOnly/>
                    <div className="">{title}</div>
                </div>
                {amount ? <div className="">{`(${amount})`}</div> : ""}
            </div>
    );
}

export default BrandMenu;