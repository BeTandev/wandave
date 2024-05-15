'use client'
import React from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Image from 'next/image';

function Slider() {
    return (
        <div>
            <Carousel className="w-[100vw] mx-auto mt-[60px]"
                opts={{
                    align: "start",
                    loop: true,
                }} plugins={[
                    Autoplay({
                        delay: 5000,
                    }),
                ]}>
                <CarouselContent>
                    <CarouselItem><Image src={'/slideshow_1.png'} alt='' width={1600} height={100} /></CarouselItem>
                    <CarouselItem><Image src={'/slideshow_2.png'} alt='' width={1600} height={100} /></CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
}

export default Slider;