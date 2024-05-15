'use client'
import TitlePage from "@/components/TitlePage/page";
import { storeAddressData } from "@/data/storeAddressData";
import Link from "next/link";
import { useState } from "react";


function HeThongCuaHang() {

    const [cityValue, setCityValue] = useState('')
    const [districtValue, setDistrictValue] = useState('')
    const [miniMap, setMiniMap] = useState('https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3918.541659349711!2d106.770127!3d10.846345!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527a0a3afbffb%3A0x1f6382516d3656ff!2zNDcgVGjhu5FuZyBOaOG6pXQsIELDrG5oIFRo4buNLCBUaOG7pyDEkOG7qWMsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmlldG5hbQ!5e0!3m2!1sen!2sus!4v1713948770621!5m2!1sen!2sus')
    const districtCity = storeAddressData.filter(item => item.city === cityValue)

    const uniqueDistricts: any = {};
    const uniqueData = districtCity.filter(item => {
        if (!uniqueDistricts[item.district]) {
            uniqueDistricts[item.district] = true;
            return true;
        }
        return false;
    });

    const StoreChainDistrict = districtValue ? storeAddressData.filter((item) => item.district === districtValue) : storeAddressData
    const StoreChainDistrictMap = StoreChainDistrict.map((item) => (
        <div key={item.id} className="mb-4 cursor-pointer" onClick={() => { setMiniMap(item.miniMap) }}>
            <div className="text-[12px] font-semibold">{item.city}</div>
            <div className="text-[12px] text-gray-700 mt-1">{item.address + item.district}</div>
            <div className="text-[12px] text-gray-700 mt-1">Thời gian hoạt động: {item.time}</div>
            <Link href={`${item.direction}`} className="flex items-center mt-2 gap-1 text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                    <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
                </svg>
                <div className="text-[12px] underline">Chỉ đường</div>
            </Link>
        </div>
    ))

    return (
        <div>
            <TitlePage pageCurrent="Hệ thống cửa hàng" />
            <div className="container">
                <div className="row w-full lg:w-[90%] mx-auto py-10">
                    <h2 className="text-2xl font-medium text-center">Hệ thống cửa hàng</h2>
                    <div className="flex flex-col lg:flex-row mt-10 gap-5 w-full">
                        <div className="basis-1/3 px-4 py-6 bg-grayF8 shadow-lg">
                            <div>
                                <select name="" id="" className="focus:outline-none text-[12px] w-full py-2 px-4 border-2 rounded" onChange={(e: any) => { setCityValue(e.target.value) }}>
                                    <option value="">Chọ tỉnh/thành phố</option>
                                    <option value="Hồ Chí Minh">Hồ Chí Minh</option>
                                    <option value="Hà Nội">Hà Nội</option>
                                </select>
                            </div>
                            <div>
                                <select name="" id="" className="focus:outline-none text-[12px] w-full py-2 px-4 border-2 rounded mt-5" onChange={(e: any) => { setDistrictValue(e.target.value) }}>
                                    <option value="">Chọn Quận/Huyện</option>
                                    {uniqueData.map((item: any, index: number) => (<option key={index} value={item.district}>{item.district}</option>))}
                                </select>
                            </div>
                            <div className="py-2 px-4 mt-4 bg-white h-[400px] overflow-y-scroll">
                                {StoreChainDistrictMap}
                            </div>
                        </div>
                        <div className="basis-2/3">
                            <div className="w-full">
                                <iframe src={`${miniMap}`} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full h-[555px] block rounded" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeThongCuaHang;