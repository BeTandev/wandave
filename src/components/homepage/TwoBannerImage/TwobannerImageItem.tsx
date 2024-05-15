'use client'
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface TwobannerImageItemProps {
    imageLink: string
    categoryProduct: string
    titleProduct: string
    contentProduct: string
    linkProduct: string
}

function TwobannerImageItem(props: TwobannerImageItemProps) {

    const router = useRouter()

    const { imageLink, categoryProduct, titleProduct, contentProduct, linkProduct } = props

    const [isHovered, setIsHovered] = useState(false);

    const handleClick = () => {
        router.push(linkProduct)
    }

    return (
        <div className="basis-1/2 overflow-hidden cursor-pointer" onClick={handleClick}>
            <div className='relative' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                <div className={`relative transition-all duration-300 ${isHovered ? 'hover:scale-105' : ''}`} >
                    <Image src={imageLink} alt="" width={800} height={100} />
                </div>
                <div className="absolute top-[50%] translate-y-[-50%] p-3">
                    <div className="p-3 transition-all w-full duration-300">
                        <div className="text-sm">{categoryProduct}</div>
                        <div className="mt-2 font-semibold text-base xs:text-xl">{titleProduct}</div>
                        <div className="text-base xs:text-xl">{contentProduct}</div>
                        <div className="mt-2 text-sm xs:text-base flex items-center">
                            <Link href={`${linkProduct}`} className="text-mainGreen">MUA NGAY</Link>
                            <Link href={`${linkProduct}`}><svg className='w-4 h-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#53a716" d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TwobannerImageItem;