import Image from 'next/image';
import Link from 'next/link';

function Footer() {
    return (
        <div className='py-10 bg-[#F8F8F8] mt-10'>
            <div className="container">
                <div className="row flex flex-wrap xl:flex-nowrap gap-5 w-full xs:w-[92%] mx-auto">
                    <div className="w-[380px] xl:w-[23.3%] mb-3">
                        <div className="font-medium text-lg">Giới thiệu</div>
                        <hr className='w-[60px] bg-mainGreen h-0.5 mt-2' />
                        <div className="text-xs mt-4">Thực phẩm Organic Wandave chuyên cung cấp các thực phẩm tươi sạch, giá cả phải chăng. Đạt tiêu chuẩn chất lượng</div>
                        <div className="flex text-sm mt-4 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 mr-2 text-mainGreen">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                            <div className="text-xs">59A Âu cơ, Phường 14, Quận 11, TP. HCM</div>
                        </div>
                        <Link href={'/'} className="flex text-sm mt-4 items-center hover:text-mainGreen">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 mr-2 text-mainGreen">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                            </svg>
                            <div className="text-xs">0385942049</div>
                        </Link>
                        <Link href={'/'} className='flex text-sm mt-4 items-center hover:text-mainGreen'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 mr-2 text-mainGreen">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                            <div className="text-xs">wandave@gmail.com</div>
                        </Link>
                    </div>
                    <div className="w-[380px] xl:w-[23.3%] mb-3 flex gap-1">
                        <div className="basis-1/2">
                            <div className="font-medium text-lg">Liên kết</div>
                            <hr className='w-[60px] bg-mainGreen h-0.5 mt-2' />
                            <Link href={'/SearchPage'} className="text-xs block hover:text-mainGreen mt-4">Tìm kiếm</Link>
                            <Link href={'/GioiThieu'} className="text-xs block hover:text-mainGreen mt-4">Giới thiệu</Link>
                            <Link href={'/LienHe'} className="text-xs block hover:text-mainGreen mt-4">Liên hệ</Link>
                            <Link href={'/HeThongCuaHang'} className="text-xs block hover:text-mainGreen mt-4">Hệ thống cửa hàng</Link>
                        </div>
                        <div className="basis-1/2">
                            <div className="font-medium text-lg">Chính sách</div>
                            <hr className='w-[60px] bg-mainGreen h-0.5 mt-2' />
                            <Link href={'/ChinhSachThanhToan'} className="text-xs block hover:text-mainGreen mt-4">Chính sách thanh toán</Link>
                            <Link href={'/ChinhSachDoiTra'} className="text-xs block hover:text-mainGreen mt-4">Chính sách đổi trả</Link>
                            <Link href={'/ChinhSachBaoMat'} className="text-xs block hover:text-mainGreen mt-4">Chính sách bảo mật</Link>
                            <Link href={'/'} className="text-xs block hover:text-mainGreen mt-4">Điều khoản sử dụng</Link>
                        </div>
                    </div>
                    <div className="w-[380px] xl:w-[23.3%] mb-3">
                        <div className="font-medium text-lg">Fanpage</div>
                        <hr className='w-[60px] bg-mainGreen h-0.5 mt-2' />
                        <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FXtech789&tabs=timeline&width=340&height=200&small_header=false&adapt_container_width=true&hide_cover=true&show_facepile=false" width="320" height="200" style={{ border: 'none', overflow: 'hidden' }} scrolling="no" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; web-share"></iframe>
                    </div>
                    <div className="w-[380px] xl:w-[23.3%] xl:ml-10 mb-3">
                        <div className="font-medium text-lg">Đăng ký nhận khuyến mãi</div>
                        <hr className='w-[60px] bg-mainGreen h-0.5 mt-2' />
                        <div className="mt-4 text-xs">Hãy là người đầu tiên nhận khuyến mãi lớn!</div>
                        <div className="flex mt-4 items-center">
                            <input type="email" placeholder='Email' className='outline-none px-3 py-2 w-[200px]' />
                            <div className="uppercase px-4 py-3 bg-mainGreen text-white text-[9px] cursor-pointer">Đăng ký</div>
                        </div>
                        <div className="mt-6 flex gap-3">
                            <Link href={'/'} className='relative'>
                                <Image src={'/fb-icon.png'} width={30} height={30} alt='' />
                            </Link>
                            <Link href={'/'} className='relative'>
                                <Image src={'/ins-icon.png'} width={30} height={30} alt='' />
                            </Link>
                            <Link href={'/'} className='relative'>
                                <Image src={'/yt.png'} width={30} height={30} alt='' />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;