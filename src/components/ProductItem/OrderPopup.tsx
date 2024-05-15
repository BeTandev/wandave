import Image from "next/image";

interface OrderPopupProps{
    isOrder: boolean
    setIsOrder: any
    item: any
    detailProduct?: boolean
}

function OrderPopup(props: OrderPopupProps) {

    const {isOrder, setIsOrder, item, detailProduct} = props
    
    return (
        <div className={`${isOrder ? 'fixed' : 'hidden'} w-[100vw] h-[100vh] top-0 left-0 z-[100]`}>
            <div className="max-w-[340px] xs:w-[450px] py-5 bg-white relative z-[102] left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] rounded-xl">
                <div className="bg-[url('/Success.gif')] w-20 h-20 bg-cover bg-no-repeat bg-center mx-auto"></div>
                <div className="text-center mt-5">Thêm vào giỏ thành công</div>
                <div className="flex justify-center gap-4 mt-3">
                    <div className="">
                        <Image src={`${item.image[0].link}`} alt="" width={70} height={70}></Image>
                    </div>
                    <div className="flex flex-col justify-evenly">
                        <div className="">{item.title}</div>
                        <div className="text-red-600">{item.price.toLocaleString("en-US")}<span>đ</span></div>
                    </div>
                </div>
                <div className="absolute top-[-18px] text-white bg-black px-3 py-1 rounded-full right-[-15px] text-base cursor-pointer" onClick={() => {setIsOrder(false)}}>X</div>
            </div>
            <div className="w-[100vw] h-[100vh] bg-black top-0 left-0 z-[101] opacity-60 fixed"></div>
        </div>
    );
}

export default OrderPopup;