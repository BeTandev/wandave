'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

interface NewBlogItemProps{
    item: any
    blognews?: boolean
}

function NewBlogItem(props: NewBlogItemProps) {

    const {id, date, title, summary, image, link} = props.item
    const {blognews} = props
    const [isHover, setIsHover] = useState(false)

    return (
        <div onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
            <Link href={`${link}`} className='relative'>
                <Image src={image} alt='' width={500} height={100} className='h-[160px]' />
                <div className={`w-full h-full bg-black absolute z-10 top-0 transition-all duration-300 ${isHover ? 'opacity-20' : 'opacity-0'}`}></div>
            </Link>
            <div className="mt-3">
                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                    </svg>
                    <div className="ml-2 text-sm">{date}</div>
                </div>
                <hr className='w-full h-[1px] bg-black mt-3' />
                <Link href={`${link}`}><div className="mt-3 font-medium">{title}</div></Link>
                <div className={`text-xs mt-3 text-grey text-ellipsis ${blognews ? 'line-clamp-1' : 'line-clamp-3'}`}>{summary}</div>
                <Link href={`${link}`} className="flex items-center mt-3 text-mainGreen">
                    <div className='mr-1 text-sm'>Xem thêm</div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                    </svg>
                </Link>
            </div>
        </div>
    );
}

export default NewBlogItem;