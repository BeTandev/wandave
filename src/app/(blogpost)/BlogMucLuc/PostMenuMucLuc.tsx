'use client'
import { useState } from "react";

function PostMenuMucLuc() {

    const [showMenu, setShowMenu] = useState(false)

    return (
        <div className={`mt-2 bg-grayMenu rounded-lg shadow-lg transition-all duration-500 w-max ${showMenu ? 'h-auto py-4' : 'h-[27px] overflow-hidden'}`}>
            <div className="flex items-center justify-center">
                <div className=" font-semibold mr-1">Mục lục bài viết </div>
                <span>[</span>
                <span className=" font-medium text-blue-600 cursor-pointer text-sm" onClick={() => (setShowMenu(!showMenu))}>{showMenu ? 'Ẩn' : 'Hiện'}</span>
                <span>]</span>
            </div>
            <div className="container mx-auto">
                <ol className="text-[13px] text-blue-600 font-light">
                    <li><span className="text-black">1.</span> Sữa (Hay các sản phẩm từ sữa)
                        <ol className="list-inside ml-4">
                            <li><span className="text-black">1.1</span> - Quả óc chó</li>
                            <li><span className="text-black">1.2</span> - Chuối</li>
                            <li><span className="text-black">1.3</span> - Giấm</li>
                            <li><span className="text-black">1.4</span> - Quả táo</li>
                            <li><span className="text-black">1.5</span> - Quả đậu bắp</li>
                        </ol>
                    </li>
                    <li><span className="text-black">2.</span> Cho trẻ một giấc ngủ ngon</li>
                </ol>
            </div>
        </div>
    );
}

export default PostMenuMucLuc;