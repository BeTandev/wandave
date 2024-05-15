'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

function PhuongThucThanhToanOption() {

    const router = useRouter()

    const [paymentOption, setPaymentOption] = useState(1)

    const handleSubmit = () => {
        if(paymentOption === 1){
            localStorage.setItem('paymentOption', 'Thanh toán khi giao hàng (COD)')
        }else{
            localStorage.setItem('paymentOption', 'Chuyển khoản qua ngân hàn')
        }
        router.push('/HoanTatDonHang')
    }

    return (
        <>
            <h3 className="mt-4 tracking-wide">Phương thức vận chuyển</h3>
            <div className="flex justify-between items-center mt-2 rounded py-3 px-5 border-2">
                <div className="flex gap-2 items-center">
                    <input type="radio" name="" id="" checked />
                    <div className="text-sm">Giao hàng tận nơi</div>
                </div>
                <div className="text-sm">0đ</div>
            </div>
            <h3 className="mt-4 tracking-wide">Phương thức thanh toán</h3>
            <div className="flex items-center mt-2 rounded py-3 px-5 border-2 gap-2 cursor-pointer" onClick={() => { setPaymentOption(1) }}>
                <input type="radio" name="" id="" checked={paymentOption === 1} />
                <div className="text-sm">Thanh toán khi giao hàng (COD)</div>
            </div>
            <div className="flex items-center mt-2 rounded py-3 px-5 border-2 gap-2 cursor-pointer" onClick={() => { setPaymentOption(2) }}>
                <input type="radio" name="" id="" checked={paymentOption === 2} />
                <div className="text-sm">Chuyển khoản qua ngân hàng</div>
            </div>
            <div className="flex flex-col xs:flex-row mt-5 justify-between items-center gap-5">
                <Link href={'/Cart'} className="text-blue-500 text-center text-sm">Giỏ hàng</Link>
                <div className=" bg-blue-600 text-white py-4 px-5 rounded cursor-pointer text-center text-sm" onClick={handleSubmit}>Hoàn tất đơn hàng</div>
            </div>
        </>
    );
}

export default PhuongThucThanhToanOption;