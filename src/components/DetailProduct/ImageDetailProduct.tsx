import Image from "next/image";

interface ImageDetailProductProps{
    imageShow: string
    dataFiltered: any
    setImageindex: any
}

function ImageDetailProduct(props: ImageDetailProductProps) {

    const {imageShow, dataFiltered, setImageindex} = props

    return (
        <div className="basis-full md:basis-5/12 lg:basis-4/12">
            <div className="relative">
                {imageShow ? <Image src={`${imageShow}`} alt='' width={450} height={450} /> : ""}
                {dataFiltered && dataFiltered.salePrice && <div className="absolute top-0 left-3 bg-red-600 text-white text-xs py-3 px-1">-{(100 - (dataFiltered.price / dataFiltered.salePrice * 100)).toFixed(0)}%</div>}
            </div>
            <div className="grid md:grid-cols-4 sm:grid-cols-8 xs:grid-cols-5 grid-cols-4 mt-4">
                {dataFiltered?.image.map((item: any) => (<Image className='cursor-pointer' key={item.id} src={`${item.link}`} alt='' width={60} height={60} onClick={() => { setImageindex(item.id) }}></Image>))}
            </div>
        </div>
    );
}

export default ImageDetailProduct;