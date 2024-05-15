'use client'
import TitlePage from "@/components/TitlePage/page";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Login() {

    const router = useRouter()

    const handleClick = () => {
        router.push('/authentication/Login')
    }
    
    return (
        <div>
            <TitlePage pageCurrent="Đăng nhập" />
            <div className="container">
                <div className="row py-10">
                    <h2 className="text-center text-xl">Đăng nhập</h2>
                    <div className="text-center mt-3"><input className="border w-[350px] placeholder:text-xs py-2 px-4 focus:outline-none text-xs" placeholder="Email" required type="email" /></div>
                    <div className="text-center mt-3"><input className="border w-[350px] placeholder:text-xs py-2 px-4 focus:outline-none text-xs" placeholder="Mật khẩu" required type="password" /></div>
                    <div className="text-xs bg-mainGreen text-white max-w-max px-7 py-3 cursor-pointer text-center mx-auto mt-3 rounded" onClick={() => handleClick()}>Đăng nhập</div>
                    <div className="text-xs mx-auto text-center mt-3"><Link className="hover:text-mainGreen transition-all duration-100" href={'/authentication/Login'}>Quên mật khẩu?</Link></div>
                    <div className="text-xs flex gap-1 justify-center items-center">
                        <span>hoặc</span>
                        <Link href={'/authentication/Register'} className="text-mainGreen underline hover:no-underline transition-all duration-200">Đăng ký</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;