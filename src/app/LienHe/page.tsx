import LienHeInput from "@/app/LienHe/LienHeInput";
import StoreMenu from "@/components/StoreMenu/page";
import TitlePage from "@/components/TitlePage/page";

function LienHe() {
    return (
        <div>
            <TitlePage pageCurrent="Liên hệ" />
            <div className="container">
                <div className="row w-[95%] xs:w-[90%] mx-auto flex flex-col-reverse lg:flex-row py-10 gap-8">
                    <StoreMenu />
                    <div className="basis-4/5">
                        <h2 className="text-center text-2xl font-semibold">LIÊN HỆ</h2>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7836.660970117961!2d106.6170726!3d10.8624488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175295319c4155d%3A0xae4e05f1a53decca!2sXtech789.com!5e0!3m2!1svi!2s!4v1713944494051!5m2!1svi!2s" className="w-full h-[300px] mt-4" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                        <div className="flex flex-col md:flex-row mt-10 gap-5">
                            <div className="basis-1/2">
                                <div className="font-semibold">GỬI THẮC MẮC CHO CHÚNG TÔI</div>
                                <LienHeInput labelTitle="Họ và tên" placeholderInput="Nhập tên của bạn" />
                                <LienHeInput labelTitle="Số điện thoại" placeholderInput="Nhập số điện thoại của bạn" typeInput="number" />
                                <LienHeInput labelTitle="Email" placeholderInput="Nhập email của bạn" typeInput="email" />
                                <LienHeInput labelTitle="Message" placeholderInput="Nội dung..." textareaCheck />
                                <button className="flex mt-4 items-center bg-mainGreen px-6 py-3 rounded text-white gap-0.5">
                                    <span className="text-[12px]">Gửi liên hệ</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                    </svg>
                                </button>
                            </div>
                            <div className="basis-1/2">
                                <div className="font-semibold">THÔNG TIN LIÊN HỆ</div>
                                <div className="text-[12px] mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum earum eveniet dolorum suscipit nesciunt incidunt animi repudiandae ab at, tenetur distinctio voluptate vel illo similique.</div>
                                <div className="flex mt-4 items-center gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                                    </svg>
                                    <div className="text-[12px]">
                                        <div className="font-medium">Địa chỉ</div>
                                        <div className="mt-1">182 Lê đại hành, phường 15, quận 11 TP.HCM</div>
                                    </div>
                                </div>
                                <div className="flex mt-4 items-center gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                                    </svg>
                                    <div className="text-[12px]">
                                        <div className="font-medium">Số điện thoại</div>
                                        <div className="mt-1">1900.636.099</div>
                                    </div>
                                </div>
                                <div className="flex mt-4 items-center gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                        <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                                        <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                                    </svg>

                                    <div className="text-[12px]">
                                        <div className="font-medium">Email</div>
                                        <div className="mt-1">dev@xtech789.com</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LienHe;