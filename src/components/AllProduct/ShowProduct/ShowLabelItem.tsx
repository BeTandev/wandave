import LabelItem from '@/components/AllProduct/ShowProduct/LabelItem';
interface ShowLabelItemProps{
    setLabelValue: any
    setTitleLabel: any
}

function ShowLabelItem(props: ShowLabelItemProps) {

    const {setLabelValue, setTitleLabel} = props

    return (
        <div className="mb-8">
            <div className="text-sm font-semibold">Nhãn sản phẩm</div>
            <hr className="mt-3" />
            <div className="flex mt-3 text-[11px] gap-2">
                <LabelItem setLabelValue={setLabelValue} setTitleLabel={setTitleLabel} labelItem={"organic"} title={"Organic"} />
                <LabelItem setLabelValue={setLabelValue} setTitleLabel={setTitleLabel} labelItem={"detox"} title={"Detox"} />
            </div>
        </div>
    );
}

export default ShowLabelItem;