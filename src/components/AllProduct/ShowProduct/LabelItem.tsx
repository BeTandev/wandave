interface LabelItemProps{
    setLabelValue: any
    labelItem: string
    title: string
    setTitleLabel: any
}
function LabelItem(props: LabelItemProps) {

    const {setLabelValue, labelItem, title, setTitleLabel} = props

    const handleClickLabel = () => {
        setLabelValue(labelItem)
        setTitleLabel(title)
    }

    return (
        <div className="py-1 px-2 border cursor-pointer" onClick={handleClickLabel}>{title}</div>
    );
}

export default LabelItem;