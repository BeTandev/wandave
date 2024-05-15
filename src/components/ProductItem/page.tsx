'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import PopupProduct from '@/components/ProductItem/PopupProduct';
import OrderPopup from '@/components/ProductItem/OrderPopup';
import { removeAccents } from '@/helper/removeAccents';


interface ProductItemProps {
    item: any
    bestSeller?: boolean
    setIsShowPopup?: any
    setGetItem?: any
    setIsShowOrder?: any
    allProductItem?: boolean
    bestSellerProduct?: boolean
}

function ProductItem(props: ProductItemProps) {

    const { id, image, title, price, salePrice, weight, bestSellerProduct } = props.item
    const _ = require('lodash');
    const { bestSeller, setIsShowPopup, setGetItem, setIsShowOrder, allProductItem } = props
    const [isPopup, setIsPopup] = useState(false)
    const [isHovered, setIsHovered] = useState(false);
    const [isHoveredCart, setIsHoveredCart] = useState(false)
    const [isHoveredLook, setIsHoveredLook] = useState(false)
    const [isOrder, setIsOrder] = useState(false)

    const handlePopup = () => {
        if (bestSeller) {
            setIsShowPopup(true)
            setGetItem(props.item)
        } else {
            setIsPopup(true)
        }
    }

    const handleOrderPopup = () => {
        if (bestSeller) {
            setIsShowOrder(true)
            setGetItem(props.item)
        } else {
            setIsOrder(true)
        }
        const data: any = localStorage.getItem('selectedProduct')
        let dataJson
        if(data){
            dataJson = JSON.parse(data)
        }
        let myObject: any = {};
        myObject.weightOrder = 1;
        const dataJsonAdded = {...props.item, ...myObject}

        let result = _.find(dataJson, function(obj: any){
            if (obj.id === dataJsonAdded.id) {
                _.update(obj, 'weightOrder', function(n: any){return n = obj.weightOrder + dataJsonAdded.weightOrder})
                return true;
            }
        })

        let test: any = []
        if (!dataJson) {
            test = test.concat(dataJsonAdded)
        } else {
            let checkItem = _.find(dataJson, function (obj: any) {
                if (obj.id === dataJsonAdded.id) {
                    return true
                }
            })
            if (checkItem !== undefined) {
                const dataCheck = dataJson.filter((item: any) => item.id !== result.id)
                test = dataCheck.concat(result)
            } else {
                test = dataJson.concat(dataJsonAdded)
            }
        }
        localStorage.setItem('selectedProduct', JSON.stringify(test))
    }

    const handleWatched = () => {
        const data: any = localStorage.getItem('watchedProduct')
        let dataJson = data ? JSON.parse(data) : []
        const dataJsonAdded = props.item

        let test: any = []
        if (dataJson.length < 1) {
            test = test.concat(dataJsonAdded)
        } else {
            test = dataJson.concat(dataJsonAdded)
        }
        localStorage.setItem('watchedProduct', JSON.stringify(test))
        console.log(dataJson.length)
    }

    return (
        <>
            <div className="relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                <div className="relative overflow-hidden">
                    <Link href={`/Product/${removeAccents(title).toLocaleLowerCase().replace(/ /g, "-")}`}>{image[0].link && <Image src={image[0].link} loading='lazy' alt="test" width={300} height={100} onClick={handleWatched}/>}</Link>
                    {!bestSellerProduct && <div className={`absolute top-[50%] translate-y-[-50%] transition-all duration-500 right-0 `}>
                        <div className="flex flex-col gap-3 relative ">
                            <div className="">
                                <div className={`bg-slate-800 text-white text-xs py-1.5 rounded bottom-4 w-20 flex justify-center items-center absolute right-14 ${isHoveredCart ? "opacity-100" : "opacity-0"} ${bestSeller ? "bottom-[4rem]" : ""}`}>Mua ngay</div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`w-[35px] h-[35px] shadow-md shadow-slate-400 p-2 bg-white rounded-full transition-all duration-500 bottom-2 absolute hover:bg-mainGreen hover:text-white cursor-pointer ${isHovered ? "right-2" : "right-[-3rem]"} ${bestSeller ? "bottom-[4rem]" : ""}`} onMouseEnter={() => setIsHoveredCart(true)} onMouseLeave={() => setIsHoveredCart(false)} onClick={handleOrderPopup}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                </svg>
                            </div>
                            <div className="">
                                <div className={`bg-slate-800 text-white text-xs py-1.5 rounded w-20 flex justify-center items-center absolute right-14 ${isHoveredLook ? "opacity-100" : "opacity-0"} ${bestSeller ? "bottom-5" : ""}`}>Xem nhanh</div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`w-[35px] h-[35px] shadow-md shadow-slate-400 p-2 bg-white rounded-full transition-all duration-500  absolute hover:bg-mainGreen hover:text-white cursor-pointer ${isHovered ? "right-2" : "right-[-3rem]"} ${bestSeller ? "bottom-5" : ""}`} onMouseEnter={() => setIsHoveredLook(true)} onMouseLeave={() => setIsHoveredLook(false)} onClick={handlePopup}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                            </div>
                        </div>
                    </div>}
                </div>
                <Link href={`/Product/${removeAccents(title).toLocaleLowerCase().replace(/ /g, "-")}`} onClick={handleWatched}>
                    <div className="mt-2">{title}</div>
                    <div className="text-sm mt-2 text-red-600 font-medium flex">
                        <div className="">{price.toLocaleString("en-US")}<span>đ</span></div>
                        <div className="ml-3 text-slate-500 line-through">{salePrice?.toLocaleString("en-US")}<span>{salePrice ? "đ" : ""}</span></div>
                    </div>
                    {salePrice ? <div className={`${allProductItem ? 'w-8 h-8 text-[11px]' : 'w-10 h-10 text-sm'} bg-saleRed absolute top-0 left-3 flex justify-center items-center text-white`}>-{(100 - (price / salePrice * 100)).toFixed(0)}%</div> : ""}
                </Link>
            </div>
            {!bestSellerProduct && <PopupProduct isPopup2={isPopup} setIsPopup={setIsPopup} setIsOrder={setIsOrder} item={props.item} />}
            {!bestSellerProduct && <OrderPopup isOrder={isOrder} setIsOrder={setIsOrder} item={props.item} />}
        </>
    );
}

export default ProductItem;