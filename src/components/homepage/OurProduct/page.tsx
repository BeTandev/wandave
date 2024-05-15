'use client'
import TitleSection from "@/components/TitleSection/page";
import { productData, productDataMeat } from "../../../data/productData";
import ProductItem from "@/components/ProductItem/page";
import { useEffect, useState } from "react";

interface dataProductType{
    id: number
    image: object
    title: string
    price: number
    salePrice?: number
}

function OurProduct() {

    const [dataIndex, setDataIndex] = useState(1)
    const [dataProduct, setDataProduct] = useState<dataProductType[]>([])

    useEffect(() => {
        if(dataIndex === 1){
            setDataProduct(productData)
        } else if(dataIndex === 2){
            setDataProduct(productData)
        } else if(dataIndex === 3){
            setDataProduct(productDataMeat)
        }
    },[dataIndex])

    return (
        <div>
            <div className="container">
                <div className="row w-full xs:w-[90%] mx-auto">
                    <TitleSection title="SẢN PHẨM CỦA CHÚNG TÔI" />
                    <div className="flex justify-center mt-8 gap-8">
                        <div className={`uppercase cursor-pointer ${dataIndex === 1 ? "text-mainGreen" : ""}`} onClick={() => setDataIndex(1)}>sản phẩm nổi bật</div>
                        <div className={`uppercase cursor-pointer ${dataIndex === 2 ? "text-mainGreen" : ""}`} onClick={() => setDataIndex(2)}>sản phẩm bán chạy</div>
                        <div className={`uppercase cursor-pointer ${dataIndex === 3 ? "text-mainGreen" : ""}`} onClick={() => setDataIndex(3)}>Thịt</div>
                    </div>
                    <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 mt-10">
                        {dataProduct?.map((item: any) => (
                            <ProductItem item={item} key={item.id} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurProduct;