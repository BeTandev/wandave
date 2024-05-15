import PriceMenu from "@/components/AllProduct/ShowProduct/PriceMenu"

interface ShowPriceMenu {
    fromPriceSelected: number
    setFromPriceSelected: any
    setEndPriceSelected: any
    setTitlePrice: any
}

function ShowPriceMenu(props: ShowPriceMenu) {

    const {fromPriceSelected, setFromPriceSelected, setEndPriceSelected, setTitlePrice} = props

    return (
        <div className="mb-8">
            <div className="text-sm font-semibold">Thương hiệu</div>
            <hr className="mt-3" />
            <PriceMenu setTitlePrice={setTitlePrice} fromPriceSelected={fromPriceSelected} setFromPriceSelected={setFromPriceSelected} setEndPriceSelected={setEndPriceSelected} startPrice={0} endPrice={50000} title={'Duới 50,000đ'} />
            <PriceMenu setTitlePrice={setTitlePrice} fromPriceSelected={fromPriceSelected} setFromPriceSelected={setFromPriceSelected} setEndPriceSelected={setEndPriceSelected} startPrice={50000} endPrice={200000} title={'50,000đ - 200,000đ'} />
            <PriceMenu setTitlePrice={setTitlePrice} fromPriceSelected={fromPriceSelected} setFromPriceSelected={setFromPriceSelected} setEndPriceSelected={setEndPriceSelected} startPrice={200000} endPrice={400000} title={'200,000đ - 400,000đ'} />
            <PriceMenu setTitlePrice={setTitlePrice} fromPriceSelected={fromPriceSelected} setFromPriceSelected={setFromPriceSelected} setEndPriceSelected={setEndPriceSelected} startPrice={400000} endPrice={1000000} title={'400,000đ - 1,000,000đ'} />
            <PriceMenu setTitlePrice={setTitlePrice} fromPriceSelected={fromPriceSelected} setFromPriceSelected={setFromPriceSelected} setEndPriceSelected={setEndPriceSelected} startPrice={1000000} title={'Trên 1,000,000đ'} />
        </div>
    );
}

export default ShowPriceMenu;