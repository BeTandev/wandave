import TitlePage from "@/components/TitlePage/page";
import Link from "next/link";

function Account() {
    return (
        <>
            <TitlePage pageCurrent="Tài khoản" />
            <div className="container">
                <div className="row w-[95%] xs:w-[90%] py-10 mx-auto">
                    <h2 className="font-medium text-center text-xl">Tài khoản của bạn</h2>
                    <div className="flex flex-col md:flex-row">
                        <div className="basis-full md:basis-1/5">
                            <h3 className="text-sm font-medium tracking-widest">TÀI KHOẢN</h3>
                            <Link href={'/'} className="flex mt-5 items-center gap-2 hover:text-mainGreen transition-all duration-200">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                                </svg>
                                <span className="text-xs">Danh sách địa chỉ</span>
                            </Link>
                            <Link href={'/'} className="flex mt-2 items-center gap-2 hover:text-mainGreen transition-all duration-200">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                                </svg>
                                <span className="text-xs">Đăng xuất</span>
                            </Link>
                        </div>
                        <div className="basis-full md:basis-4/5 mt-5 md:mt-0">
                            <h3 className="text-sm font-medium tracking-widest">Thông tin tài khoản</h3>
                            <div className="mt-3">test</div>
                            <div className="text-xs mt-2 mb-2">ssd@gmail.com</div>
                            <Link href={'/'} className="text-sm hover:text-mainGreen transition-all duration-200">Xem địa chỉ</Link>
                            <div className="mt-10 text-xs">Bạn chưa đặt mua sản phẩm.</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Account;