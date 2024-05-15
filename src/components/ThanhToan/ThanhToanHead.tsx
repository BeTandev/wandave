import Link from "next/link";

function ThanhToanHead() {
    return (
        <div>
            <h2 className="text-xl">wandave</h2>
            <div className="flex text-[11px] gap-3 mt-2">
                <Link href={'/Cart'} className=" text-blue-600">Giỏ hàng</Link>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
                <div className="">Thông tin giao hàng</div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
                <div className=" text-gray-500">Phương thức thanh toán</div>
            </div>
        </div>
    );
}

export default ThanhToanHead;