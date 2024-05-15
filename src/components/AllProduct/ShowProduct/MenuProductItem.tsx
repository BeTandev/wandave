interface MenuProductItemProps{
    linkProduct?: string
    title: string
    amount?: number
}
function MenuProductItem(props: MenuProductItemProps) {

    const {linkProduct, title, amount } = props

    return (
            <div className="flex justify-between text-[12px] mt-3 hover:text-mainGreen cursor-pointer">
                <div className="flex gap-2">
                    <input type="checkbox" name="" id=""/>
                    <div className="">{title}</div>
                </div>
                {amount ? <div className="">{`(${amount})`}</div> : ""}
            </div>
    );
}

export default MenuProductItem;