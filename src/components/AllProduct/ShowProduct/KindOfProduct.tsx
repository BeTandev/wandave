interface KindOfProductProps{
    title: string
    category?: string
    setCategorySelected?: any
    categorySelected?: string
    setTitleCategory: any
}
function KindOfProduct(props: KindOfProductProps) {

    const { title, category, setCategorySelected, categorySelected, setTitleCategory } = props

    const handleClick = () => {
        if(category){
            setCategorySelected(category)
        }
        setTitleCategory(title)
    }
    
    return (
            <div className="flex justify-between text-[12px] mt-3 hover:text-mainGreen cursor-pointer" onClick={handleClick}>
                <div className="flex gap-2">
                    <input type="checkbox" name="" id="" checked={categorySelected === category} readOnly/>
                    <div className="">{title}</div>
                </div>
            </div>
    );
}

export default KindOfProduct;