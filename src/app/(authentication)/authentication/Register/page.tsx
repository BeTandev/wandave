'use client'
import TitlePage from "@/components/TitlePage/page";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

function Register() {
    const router = useRouter()

    const [checkPassword, setCheckPassword] = useState('')
    const [checkEmail, setCheckEmail] = useState('')
    const [checkLastName, setCheckLastName] = useState('')
    const [checkFirstName, setCheckFirstName] = useState('')
    const [isShowNotice, setIsShowNotice] = useState(false)
    const [isAlert, setIsAlert] = useState(false)
    const handleClick = () => {
        if(checkEmail.length > 0 && checkLastName.length > 0 && checkFirstName.length > 0){
            if(checkPassword.length >= 6){
                router.push('/authentication')
            }else{
                setIsShowNotice(true)
            }
        }else{
            setIsAlert(true)
        }
    }

    return (
        <div>
            <TitlePage pageCurrent="Đăng ký" />
            <div className="container">
                <div className="row py-10">
                    <h2 className="text-center text-xl">Tạo tài khoản</h2>
                    <div className={`text-center text-red-500 text-xs mt-3 ${isAlert ? 'block' : 'hidden'}`}>Vui lòng kiểm tra lại thông tin đã điền</div>
                    <div className="text-center mt-3"><input className="border w-[250px] xs:w-[350px] placeholder:text-xs py-2 px-4 focus:outline-none text-xs" placeholder="Họ" required type="text" onChange={(e: any) => setCheckLastName(e.target.value)}/></div>
                    <div className="text-center mt-3"><input className="border w-[250px] xs:w-[350px] placeholder:text-xs py-2 px-4 focus:outline-none text-xs" placeholder="Tên" required type="text" onChange={(e: any) => setCheckFirstName(e.target.value)}/></div>
                    <div className="text-center mt-3"><input className="border w-[250px] xs:w-[350px] placeholder:text-xs py-2 px-4 focus:outline-none text-xs" placeholder="Email" required type="email" onChange={(e: any) => setCheckEmail(e.target.value)}/></div>
                    <div className="text-center mt-3"><input className="border w-[250px] xs:w-[350px] placeholder:text-xs py-2 px-4 focus:outline-none text-xs" placeholder="Mật khẩu" required type="password" onChange={(e: any) => setCheckPassword(e.target.value)}/></div>
                    <div className={`text-center text-xs text-red-500 ${isShowNotice ? 'block' : 'hidden'}`}>*Mật khẩu cần ít nhất 6 ký tự</div>
                    <div className="text-xs bg-mainGreen text-white max-w-max px-7 py-3 cursor-pointer text-center mx-auto mt-3 rounded" onClick={() => handleClick()}>Đăng ký</div>
                    <div className="text-sm flex gap-1 justify-center items-center mt-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                        </svg>
                        <Link href={'/'} className="">Quay lại trang chủ</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;