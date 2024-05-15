'use client'
import TransPageBtn from "@/components/AllProduct/ShowProduct/TransPageBtn";
import ProductItem from "@/components/ProductItem/page";
import TitlePage from "@/components/TitlePage/page";
import { AllProductData } from "@/data/productData";
import { useState } from "react";

function SearchPage() {
    const [searchValue, setSearchValue] = useState('')
    const [wrongSearchValue, setWrongSearchValue] = useState('')
    const [dataSearched, setDataSearched] = useState<any>([])
    const [pageSelected, setPageSelected] = useState(0)
    const [isNotFound, setIsNotFound] = useState(false)
    const resultAmount = dataSearched.length
    const searchRegex = new RegExp(searchValue, 'i')
    let productListLength = dataSearched.length

    const handleClick = () => {
        const data = AllProductData.filter((item) => {
            return searchRegex.test(item.title);
        });
        if(data.length <= 0){
            setIsNotFound(true)
        }
        if(data.length > 0){
            setIsNotFound(false)
        }
        setDataSearched(searchValue ? data : [])
        setWrongSearchValue(searchValue)
    }

    let lastIndex = pageSelected * 10
    return (
        <>
            <TitlePage pageCurrent="Tìm kiếm"/>
            <div className="container">
                <div className="row w-[90%] mx-auto text-center py-7">
                    <div className="text-2xl">Tìm kiếm</div>
                    {isNotFound ? <div className="mt-1 text-xl tracking-wide">Không tìm thấy nội dung bạn yêu cầu</div> : ""}
                    {isNotFound ? <div className="text-[12px] mt-3">Không tìm thấy <strong>&quot;{wrongSearchValue}&quot;</strong>. Vui lòng kiểm tra chính tả, sử dụng các từ tổng quát hơn và thử lại!</div> : ""}
                    <div className={`bg-white px-6 py-5 z-10 right-0 xs:right-20 w-full mx-auto`}>
                        {resultAmount === 0 ? <div className="flex items-center justify-between bg-gray-100 md:w-[500px] mx-auto">
                            <input type="text" className="w-full md:w-[500px] bg-gray-100 text-[12px] py-2 px-4 focus:outline-none placeholder:text-[12px]" placeholder="Tìm kiếm sản phẩm" onChange={(e: any) => { setSearchValue(e.target.value) }} />
                            <button type="submit" className="py-3 t text-[12px] md:text-sm w-[100px] md:w-[150px] bg-mainGreen text-white cursor-pointer" onClick={handleClick}>Tìm kiếm</button>
                        </div> : <div className="text-center text-sm">Có {resultAmount} sản phẩm cho tìm kiếm</div>}
                    </div>
                    {resultAmount > 0 ? <div className="text-left text-sm">Kết quả tìm kiếm cho <strong>&quot;{searchValue}&quot;</strong>.</div> : ""}
                    <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 mt-10">
                        {dataSearched.slice(lastIndex, lastIndex + 10).map((item: any) => (
                            <ProductItem item={item} key={item.id} allProductItem />
                        ))}
                    </div>
                    <TransPageBtn productListLength={productListLength} pageSelected={pageSelected} searchPage setPageSelected={setPageSelected} />
                </div>
            </div>
        </>
    );
}

export default SearchPage;