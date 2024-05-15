'use client'

import { useState } from "react";

function Popup() {

    const [isPopup, setIsPopup] = useState(true)

    return (
        <div className={`${isPopup ? 'fixed' : 'hidden'} w-[100vw] h-[100vh] top-0 left-0 z-[100]`}>
            <div className=" w-[330px] xs:w-[370px] md:w-[600px] h-[320px] bg-white relative z-[502] left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] bg-[url('/popup.png')] bg-center bg-no-repeat bg-cover">
                <div className="absolute w-[60%] right-0 z-20 px-10 top-[50%] translate-y-[-50%]">
                    <div className="text-xl font-medium">Hãy đến với chúng tôi</div>
                    <div className="mt-2 text-sm">Chúng tôi sẽ cập nhật các chương trình khuyến mãi đến bạn.</div>
                    <ul className='mt-2'>
                        <li className='text-sm list-disc'>Giảm giá sản phẩm</li>
                        <li className='text-sm list-disc'>Sản phẩm mới</li>
                        <li className='text-sm list-disc'>Sản phẩm bán chạy</li>
                    </ul>
                    <div className="flex items-end">
                        <input type="email" className='w-[65%] mt-4 py-2 px-3 focus:outline-none' placeholder='Email'/>
                        <button className='w-[35%] text-[8px] md:text-[12px] h-full py-3 text-white uppercase tracking-widest bg-mainGreen'>Đăng ký</button>
                    </div>
                </div>
                <div className="w-[60%] h-full bg-white opacity-50 absolute right-0 top-0"></div>
                <div className="absolute top-[-18px] text-white bg-black px-3 py-1 rounded-full right-[-15px] text-base cursor-pointer" onClick={() => {setIsPopup(false)}}>X</div>
            </div>
            <div className="w-[100vw] h-[200vh] bg-black top-[-100vh] left-0 z-[500] opacity-60 relative"></div>
        </div>
    );
}

export default Popup;