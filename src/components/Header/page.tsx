'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import NavDropdown from "@/components/Header/NavDropdown/page";
import Link from "next/link";

function Header() {

    const [isSearch, setIsSearch] = useState(false)
    const [isMenuRes, setIsMenuRes] = useState(false)
    const [hoverSearch, setHoverSearch] = useState(false)
    const [hoverLogin, setHoverLogin] = useState(false)
    const [hoverCart, setHoverCart] = useState(false)
    const [dataJson, setDataJson] = useState([])

    useEffect(() => {
        const data: any = window.localStorage.getItem('selectedProduct')
        if (data) {
            const convert = JSON.parse(data)
            setDataJson(convert)
        }
    }, [])

    const handleOpenMenu = () => {
        setIsMenuRes(true)
    }

    const handleSearch = () => {
        setIsSearch(!isSearch)
    }

    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <header className="relative mb-16">
                <div className={`mx-auto fixed z-50 bg-white w-full transition-all duration-100 ${scrollY > 10 ? "top-0 z-[200]" : "top-[36px]"}`}>
                    <div className="container max-w-[1440px] pt-4 text-sm w-[95%] h-[65px] mx-auto">
                        <div className="w-full xs:w-[95%] flex justify-between mx-auto">
                            <div className="block lg:hidden" onClick={handleOpenMenu}>
                                <svg className="w-[27px] h-[27px] cursor-pointer block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#050505" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
                            </div>
                            <div className="">
                                <Link href={'/'} className="w-[200px] h-[70px] block"><Image src={'/logo.png'} width={200} height={100} alt="" /></Link>
                            </div>
                            <NavDropdown />
                            <div className="flex gap-1 lg:gap-4">
                                <div className="flex flex-col relative w-max">
                                    <div className="flex flex-col items-center" onClick={handleSearch} onMouseEnter={() => { setHoverSearch(true) }} onMouseLeave={() => { setHoverSearch(false) }}>
                                        <svg className="w-[22px] h-[22px] cursor-pointer ml-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
                                        <div className={`${hoverSearch ? "visible" : "hidden"} absolute top-8 w-[80px] text-center bg-slate-700 text-white text-[12px] py-1 rounded-lg px-3`}>Tìm kiếm</div>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <Link href={'/authentication/Login'} className="flex flex-col items-center" onMouseEnter={() => { setHoverLogin(true) }} onMouseLeave={() => { setHoverLogin(false) }}>
                                        <svg className="w-0 h-0 lg:w-[22px] lg:h-[22px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" /></svg>
                                        <div className={`${hoverLogin ? "visible" : "hidden"} absolute top-12 w-[95px] text-center bg-slate-700 text-white text-[12px] py-1 rounded-lg px-3`}>Đăng nhập</div>
                                    </Link>
                                </div>
                                <div className="flex flex-col">
                                    <Link href={'/Cart'} className="flex flex-col items-center" onMouseEnter={() => { setHoverCart(true) }} onMouseLeave={() => { setHoverCart(false) }}>
                                        <svg className="w-[22px] h-[22px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" /></svg>
                                        <div className="relative top-[-35px] right-[-10px] z-[100] text-white bg-mainGreen py-[1px] px-2 rounded-full text-[10px]">{dataJson ? dataJson.length : 0}</div>
                                        <div className={`${hoverCart ? "visible" : "hidden"} absolute top-12 w-[80px] text-center bg-slate-700 text-white text-[12px] py-1 rounded-lg px-3`}>Giỏ hàng</div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {isSearch === true ? <div className={`fixed bg-white px-6 py-5 z-10 transition-all duration-200 ${scrollY > 36 ? "top-16" : "top-24"} right-0 xs:right-20`}>
                    <div className="text-lg font-normal text-center">TÌM KIẾM</div>
                    <div className="flex items-center bg-gray-100">
                        <input type="text" className="w-[250px] xs:w-[300px] bg-gray-100 py-2 px-4 focus:outline-none" placeholder="Tìm kiếm sản phẩm" />
                        <div className="pr-5 pl-3">
                            <svg className="w-[20px] h-[20px] cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
                        </div>
                    </div></div> : ""}
            </header>

        </div>
    );
}

export default Header;