import ProductItem from "@/components/ProductItem/page";
import TitleSection from "@/components/TitleSection/page";
import { useEffect, useState } from "react";

function WatchedProduct() {

    const [dataJson, setDataJson] = useState<any>([])

    useEffect(() => {
        const data: any = localStorage.getItem('watchedProduct')
        const checkData = data ? JSON.parse(data) : []
        const dataSlice = checkData.slice(0,5)
        setDataJson(dataSlice)
    }, [])

    return (
        <>
            {dataJson.length !== 0 ? <div>
                <TitleSection title="Sản phẩm đã xem" />
                <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 mt-10">
                    {dataJson?.map((item: any) => (
                        <ProductItem item={item} key={item.id} />
                    ))}
                </div>
            </div> : ""}
        </>
    );
}

export default WatchedProduct;