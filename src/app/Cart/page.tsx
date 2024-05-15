'use client'
import ProductItemCart from "@/components/CartComponent/ProductItemCart";
import TitlePage from "@/components/TitlePage/page";
import Link from "next/link";
import { useEffect, useState } from "react";

function Cart() {

    const [dataJson, setDataJson] = useState<any[]>([])
    const [totalPriceProducts, setTotalPriceproducts] = useState(0)

    useEffect(() => {
        const data: any = window.localStorage.getItem('selectedProduct')
        if (data) {
            const convert = JSON.parse(data)
            setDataJson(convert)
        }
    }, [])

    useEffect(() => {
        let total = 0
        for(let i = 0; i < dataJson.length; i++){
            total += dataJson[i].price * dataJson[i].weightOrder;
        }
        setTotalPriceproducts(total)
    }, [dataJson])


    return (
        <div>
            <TitlePage pageCurrent="Giỏ hàng" />
            <div className="container">
                <div className="row w-[95%] xs:w-[90%] py-10 mx-auto">
                    <div className="flex flex-col md:flex-row gap-5">
                        <div className="basis-4/5 items-center">
                            <div className="flex justify-between items-center">
                                <h2 className="block text-lg font-semibold">Giỏ hàng:</h2>
                                <div className="text-xs underline font-light">{dataJson.length} Sản phẩm</div>
                            </div>
                            <hr className="mt-3" />
                            {dataJson.map((item: any, index: number) => <ProductItemCart key={index} item={item} setDataJson={setDataJson} dataJson={dataJson} />)}
                        </div>
                        <div className="basis-1/5 border py-3 px-3 rounded">
                            <div className="w-full">
                                <div className="text-lg font-medium">Thông tin đơn hàng</div>
                                <hr className="mt-2" />
                                <div className="flex mt-2 justify-between">
                                    <div className="text-base font-semibold">Tổng tiền:</div>
                                    <div className="font-semibold text-red-600">{totalPriceProducts.toLocaleString("en-US")}₫</div>
                                </div>
                                <hr className="mt-2" />
                                <div className="mt-2 text-xs">Phí vận chuyển sẽ được tính ở trang thanh toán.</div>
                                <div className="text-xs">Bạn cũng có thể nhập mã giảm giá ở trang thanh toán.</div>
                                <div className="mt-2 font-semibold text-sm">Ghi chú đơn hàng</div>
                                <textarea cols={30} rows={3} defaultValue={""} placeholder="Ghi chú" className="border focus:outline-none placeholder:text-sm p-2" />
                                <button type="submit" className="mt-2 bg-mainGreen w-full py-2 text-white uppercase text-sm rounded">Thanh toán ngay</button>
                                <Link href={'/'} className="flex mt-2 items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                                    </svg>
                                    <div className="text-sm">Tiếp tục mua hàng</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;