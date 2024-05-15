interface SortElementProps{
    titleCategory: string
    getvalueShort: any
    titleCategory2: string
}

function SortElement(props: SortElementProps) {

    const {titleCategory, getvalueShort, titleCategory2} = props
    const finalTitle = titleCategory2 ? titleCategory2 : titleCategory

    return (
        <div className="flex justify-between">
            <div className=" text-sm xs:text-lg md:text-xl">{finalTitle ? finalTitle : "Tất cả sản phẩm"}</div>
            <div className="flex items-center gap-5">
                <label htmlFor="" className="text-sm font-medium text-[12px]">Sắp xếp:</label>
                <select name="" id="" className="text-[12px] border border-black py-2 px-3 focus:outline-none" onChange={(e: any) => { getvalueShort(e.target.value) }}>
                    <option value="popular">Sản phẩm nổi bật</option>
                    <option value="priceasc">Giá: tăng dần</option>
                    <option value="pricedesc">Giá: giảm dần</option>
                    <option value="nameasc">Tên: A - Z</option>
                    <option value="namedesc">Tên: Z - A</option>
                    <option value="oddest">Cũ nhất</option>
                    <option value="lastest">Mới nhất</option>
                    <option value="bestseller">Bán chạy nhất</option>
                </select>
            </div>
        </div>
    );
}

export default SortElement;