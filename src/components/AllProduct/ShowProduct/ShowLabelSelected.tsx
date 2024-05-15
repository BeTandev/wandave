interface ShowLabelSelectedProps{
    generalTitle: any
    setTitleBrand: any
    setTitlePrice: any
    setBrandSelected: any
    setTitleWeight: any
    setTitleLabel: any
    setFromPriceSelected: any
    setEndPriceSelected: any
    setWeightValue: any
    setLabelValue: any
    setTitleCategory2: any
    setCategorySelected2: any
}

function ShowLabelSelected(props: ShowLabelSelectedProps) {

    const {generalTitle, setTitleBrand, setTitlePrice, setBrandSelected, setTitleWeight, setTitleLabel, setFromPriceSelected, setEndPriceSelected, setWeightValue, setLabelValue, setTitleCategory2, setCategorySelected2} = props

    const handleDelete = () => {
        setTitleBrand('')
        setTitlePrice('')
        setBrandSelected('')
        setTitleWeight('')
        setTitleLabel('')
        setFromPriceSelected(1)
        setEndPriceSelected(0)
        setWeightValue(1)
        setLabelValue('')
        setTitleCategory2('')
        setCategorySelected2('')
    }

    const allEmpty = generalTitle.every((item: any) => item.trim() === '')

    return (
        <div className="flex mt-2 gap-2">
            {generalTitle.map((item: any, index: number) => (
                (item ? <div key={index} className="cursor-pointer bg-black text-white text-[12px] py-1 px-1.5 rounded-md flex items-center">{item}<span className=" font-extrabold ml-1">x</span></div> : "")
            ))}
            {allEmpty === false ? <div className="cursor-pointer bg-black text-white text-[12px] py-1 px-1.5 rounded-md flex items-center" onClick={handleDelete}>Xóa hết<span className=" font-extrabold ml-1">x</span></div> : ""}
        </div>
    );
}

export default ShowLabelSelected;