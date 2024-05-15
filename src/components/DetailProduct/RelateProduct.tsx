'use client'
import ProductItem from "@/components/ProductItem/page";
import TitleSection from "@/components/TitleSection/page";
import OrderPopupBestSeller from "@/components/homepage/BestSeller/OrderPopupBestSeller";
import PopupBestSeller from "@/components/homepage/BestSeller/PopupBestSeller";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { AllProductData } from "@/data/productData";
import Autoplay from "embla-carousel-autoplay"
import { useState } from "react";

function RelateProduct() {

    const [isShowPopup, setIsShowPopup] = useState(false)
    const [getItem, setGetItem] = useState('')
    const [isShowOrder, setIsShowOrder] = useState(false)

    return (
        <div>
            <div className="w-full mx-auto">
                <TitleSection title='SẢN PHẨM LIÊN QUAN' />
                <Carousel className="w-full max-w-full mx-auto mt-10"
                    opts={{
                        align: "start",
                        loop: true,
                    }} plugins={[
                        Autoplay({
                            delay: 5000,
                        }),
                    ]}>
                    <CarouselContent>
                        {AllProductData.map((item: any) => (
                            <CarouselItem key={item.id} className="basis-full flex justify-center sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"><ProductItem item={item} bestSeller setIsShowPopup={setIsShowPopup} setGetItem={setGetItem} setIsShowOrder={setIsShowOrder} /></CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>

                {getItem ? (<PopupBestSeller isPopup2={isShowPopup} setIsPopup={setIsShowPopup} item={getItem} />) : ""}
                {getItem ? (<OrderPopupBestSeller isShowOrder={isShowOrder} setIsShowOrder={setIsShowOrder} item={getItem} />) : ""}
            </div>
        </div>
    );
}

export default RelateProduct;