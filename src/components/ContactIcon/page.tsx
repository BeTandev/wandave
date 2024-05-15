'use client'
import ScrollTopBtn from '@/components/ContactIcon/ScrollTopBtn';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function ContactIcon() {

    const [isShowContact, setIsShowContact] = useState(false)

    return (
        <div className='fixed right-4 bottom-16'>
            <div className="overflow-hidden h-[290px]">
                <div className={`flex flex-col gap-4 relative transition-all duration-300 ${isShowContact ? "bottom-0" : "bottom-[-355px]"}`}>
                    <Link href={'/'}><Image src={'/phone.png'} alt='' width={45} height={45} /></Link>
                    <Link href={'/'}><Image src={'/zalo.png'} alt='' width={45} height={45} /></Link>
                    <Link href={'/'}><Image src={'/twitter.png'} alt='' width={45} height={45} /></Link>
                    <Link href={'/'}><Image src={'/youtube.png'} alt='' width={45} height={45} /></Link>
                    <Link href={'/'}><Image src={'/instagram.png'} alt='' width={45} height={45} /></Link>
                </div>
            </div>
            <div className="bg-[url('/Support.gif')] w-[45px] h-[45px] bg-cover bg-no-repeat bg-center mx-auto rounded-full cursor-pointer mt-4 border-2" onClick={() => {setIsShowContact(!isShowContact)}}></div>
            <ScrollTopBtn />
        </div>
    );
}

export default ContactIcon;