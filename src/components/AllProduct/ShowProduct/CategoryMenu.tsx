interface CategoryMenuProps{
    title: string
    amount?: number
    category?: string
    setCategorySelected?: any
    categorySelected?: string
    setTitleCategory: any
}
function CategoryMenu(props: CategoryMenuProps) {

    const { title, amount, category, setCategorySelected, categorySelected, setTitleCategory } = props

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
                {amount ? <div className="">{`(${amount})`}</div> : ""}
            </div>
    );
}

export default CategoryMenu;