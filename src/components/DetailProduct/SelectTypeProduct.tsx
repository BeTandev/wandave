import { useEffect } from "react"

interface SelectTypeProductProps{
    dataFiltered: any
    setCheckSelectSize?: any
    checkSelectSize?: number
    selectType?: boolean
    setCheckSelectType?: any
    checkSelectType?: number
    setProductAmount?: any
}

function SelectTypeProduct(props: SelectTypeProductProps) {

    const {dataFiltered, setCheckSelectSize, checkSelectSize, selectType, setCheckSelectType, checkSelectType, setProductAmount} = props

    useEffect(() => {
        setProductAmount(dataFiltered?.weight[0].amount)
    }, [dataFiltered])

    const handleClick = (item: any) => {
        setCheckSelectSize(item.id)
        setProductAmount(item.amount)
    }

    return (
        <div>
            <div className="mt-4 text-xs">{selectType ? 'Loại quả' : 'Kích thước'}:</div>
            {!selectType && <div className="flex mt-1 gap-2">
                {dataFiltered && dataFiltered.weight.map((item: any) => (<div onClick={() => handleClick(item)} key={item.id} className={`text-[12px] flex justify-center items-center border p-2 cursor-pointer ${checkSelectSize === item.id ? 'border-red-500 text-black' : 'border-gray-400 text-slate-400'}`}>{item.amount}kg</div>))}
            </div>}
            {selectType && <div className="flex mt-1 gap-2">
                {dataFiltered && dataFiltered.typeOfProduct.map((item: any) => (<div onClick={() => setCheckSelectType(item.id)} key={item.id} className={`text-[12px] flex justify-center items-center border p-2 cursor-pointer ${checkSelectType === item.id ? 'border-red-500 text-black' : 'border-gray-400 text-slate-400'}`}>{item.type}</div>))}
            </div>}
        </div >
    );
}

export default SelectTypeProduct;