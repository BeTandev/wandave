interface WeightMenuProps{
    linkProduct?: string
    title: string
    amount?: number
    weight: number
    setWeightValue: any
    weightValue: number
    setTitleWeight: any
}
function WeightMenu(props: WeightMenuProps) {

    const {title, amount, weight, setWeightValue, weightValue, setTitleWeight} = props

    const handleClick = () => {
        setTitleWeight(title)
        setWeightValue(weight)
    }

    return (
            <div className="flex justify-between text-[12px] mt-3 hover:text-mainGreen cursor-pointer" onClick={handleClick}>
                <div className="flex gap-2">
                    <input type="checkbox" name="" id="" checked = {weightValue === weight} readOnly/>
                    <div className="">{title}</div>
                </div>
                {amount ? <div className="">{`(${amount})`}</div> : ""}
            </div>
    );
}

export default WeightMenu;