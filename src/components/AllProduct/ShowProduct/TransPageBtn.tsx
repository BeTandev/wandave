interface TransPageBtnProps{
    pageSelected: number
    setPageSelected: any
    productListLength: number
    searchPage?: boolean
}

function TransPageBtn(props: TransPageBtnProps) {

    const {pageSelected, setPageSelected, productListLength, searchPage} = props

    const checkLength = (productListLength) % 10
    let totalPage = 0
    if (checkLength === 0) {
        totalPage = (productListLength) / 10
    } else {
        totalPage = (((productListLength) - checkLength) / 10) + 1
    }

    return (
        <div className="flex mt-5 justify-center gap-2">
            {Array.from({ length: totalPage }, (_, index) => (
                <div key={index} className={`py-2 px-4 ${pageSelected === index ? "bg-black text-white" : "order text-slate-400 hover:bg-black hover:text-white"} transition-all duration-300 cursor-pointer`} onClick={() => setPageSelected(index)}>{index + 1}</div>
            ))}
            {totalPage ? <div className="py-2 px-3 border text-slate-400 hover:bg-black hover:text-white transition-all duration-300 cursor-pointer flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
            </div> : (!searchPage ? <div>Không có sản phẩm phù hợp với yêu cầu</div> : "")}
        </div>
    );
}

export default TransPageBtn;