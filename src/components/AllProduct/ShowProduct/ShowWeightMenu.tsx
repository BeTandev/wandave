import WeightMenu from '@/components/AllProduct/ShowProduct/WeightMenu';
interface ShowWeightMenu{
    setWeightValue: any
    setTitleWeight: any
    weightValue: number
}

function ShowWeightMenu(props: ShowWeightMenu) {

    const {setWeightValue, setTitleWeight, weightValue} = props

    return (
        <div className="mb-8">
            <div className="text-sm font-semibold">Kích thước</div>
            <hr className="mt-3" />
            <WeightMenu linkProduct={'/'} title={'1kg'} setWeightValue={setWeightValue} setTitleWeight={setTitleWeight} weightValue={weightValue} weight={1} />
            <WeightMenu linkProduct={'/'} title={'2kg'} setWeightValue={setWeightValue} setTitleWeight={setTitleWeight} weightValue={weightValue} weight={2} />
            <WeightMenu linkProduct={'/'} title={'1,5kg'} setWeightValue={setWeightValue} setTitleWeight={setTitleWeight} weightValue={weightValue} weight={1.5} />
        </div>
    );
}

export default ShowWeightMenu;