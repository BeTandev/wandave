import Image from 'next/image';

interface ThanhToanItemProps{
    dataJson: any
}

function ThanhToanItem(props: ThanhToanItemProps) {

    const {dataJson} = props

    return (
        <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-3">
                <Image src={`${dataJson.image[0].link}`} alt="" width={60} height={50} className="rounded"></Image>
                <div className="flex flex-col">
                    <div className="text-xs font-medium">{dataJson.title}</div>
                    <div className="text-xs font-light">{dataJson.weightOrder}kg</div>
                </div>
            </div>
            <div className="text-xs">{(dataJson.weightOrder * dataJson.price).toLocaleString("en-US")}đ</div>
        </div>
    );
}

export default ThanhToanItem;