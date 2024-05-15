import Link from "next/link";
interface InfoProductProps{
    dataFiltered: any
}

function InfoProduct(props: InfoProductProps) {

    const {dataFiltered} = props

    return (
        <div>
            {dataFiltered && <div className="text-xl font-medium">{dataFiltered.title}</div>}
            <div className="flex mt-3 gap-3">
                <div className="text-xs">
                    <strong>Thương hiệu: </strong>
                    {dataFiltered && <Link href={`/AllProduct/?brand=${dataFiltered.brand}`} className="hover:text-mainGreen">{dataFiltered.brandShow}</Link>}
                </div>
                <hr className='w-[1px] bg-black h-[14px]' />
                <div className="text-xs">
                    <strong>Loại: </strong>
                    {dataFiltered && <Link href={`/AllProduct/?category=${dataFiltered.category}`} className="hover:text-mainGreen">{dataFiltered.categoryShow}</Link>}
                </div>
                {dataFiltered && dataFiltered.MSPindex && <hr className='w-[1px] bg-black h-[14px]' />}
                {dataFiltered && dataFiltered.MSPindex && <div className="text-xs">
                    <strong>MSP: </strong>
                    {dataFiltered && <span className="">{dataFiltered.MSPindex}</span>}
                </div>}
            </div>
            <div className="flex mt-3 gap-4 items-center">
                <div className="flex gap-2 items-center">
                    {dataFiltered && <div className="text-lg font-medium text-red-500">{dataFiltered.price.toLocaleString("en-US")}<span>đ</span></div>}
                    {dataFiltered && dataFiltered.salePrice && <div className=" text-slate-600 text-sm line-through font-medium">{dataFiltered.salePrice.toLocaleString("en-US")}<span>đ</span></div>}
                </div>
                <div className="text-sm">
                    <strong>Tình trạng: </strong>
                    {dataFiltered && dataFiltered.OutOfproduct ? <span className='text-red-500'>Hết hàng</span> : <span className='text-mainGreen'>Còn hàng</span>}
                </div>
            </div>
            {dataFiltered && dataFiltered.desciption && <div className="mt-3 text-xs leading-5">{dataFiltered.desciption}</div>}
        </div>
    );
}

export default InfoProduct;