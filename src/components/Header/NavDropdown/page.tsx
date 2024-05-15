import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import Link from "next/link"

function NavDropdown() {
    return (
        <div className="hidden lg:flex gap-5">
            <Link className="text-base font-medium mt-[3px]" href={'/'}>Trang chủ</Link>
            <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-base font-medium my-0 py-0 h-[22px] mt-1 focus:outline-none"><span className="">Sản phẩm</span> <svg className="ml-1 w-[12px] h-[12px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg></DropdownMenuTrigger>
                <DropdownMenuContent className="flex gap-6 px-7 py-3">
                    <div className="">
                        <Link href={'/AllProduct?category=traicay'}><DropdownMenuLabel className="text-lg hover:text-mainGreen">Trái cây</DropdownMenuLabel></Link>
                        <DropdownMenuSeparator className="w-full bg-mainGreen mx-auto" />
                        <Link href={'/Product/dua-luoi'}><DropdownMenuItem className="cursor-pointer">Dưa lưới</DropdownMenuItem></Link>
                        <Link href={'/Product/dau-tay'}><DropdownMenuItem className="cursor-pointer">Dâu tây</DropdownMenuItem></Link>
                        <Link href={'/'}><DropdownMenuItem className="cursor-pointer">Ổi xanh</DropdownMenuItem></Link>
                        <Link href={'/'}><DropdownMenuItem className="cursor-pointer">Nho tím không hạt</DropdownMenuItem></Link>
                    </div>
                    <div className="">
                        <Link href={'/AllProduct?category=raucu'}><DropdownMenuLabel className="text-lg hover:text-mainGreen">Rau củ</DropdownMenuLabel></Link>
                        <DropdownMenuSeparator className="w-full bg-mainGreen mx-auto" />
                        <Link href={'/'}><DropdownMenuItem className="cursor-pointer">Rau cải</DropdownMenuItem></Link>
                        <Link href={'/'}><DropdownMenuItem className="cursor-pointer">Khoai</DropdownMenuItem></Link>
                        <Link href={'/'}><DropdownMenuItem className="cursor-pointer">Tỏi</DropdownMenuItem></Link>
                    </div>
                    <div className="">
                        <Link href={'/AllProduct?category=thit'}><DropdownMenuLabel className="text-lg hover:text-mainGreen">Thịt</DropdownMenuLabel></Link>
                        <DropdownMenuSeparator className="w-full bg-mainGreen mx-auto" />
                        <Link href={'/Product/thit-heo-ba-roi'}><DropdownMenuItem className="cursor-pointer">Thịt heo</DropdownMenuItem></Link>
                        <Link href={'/Product/thit-bo'}><DropdownMenuItem className="cursor-pointer">Thịt bò</DropdownMenuItem></Link>
                        <Link href={'/Product/thit-cuu'}><DropdownMenuItem className="cursor-pointer">Thịt cừu - bê</DropdownMenuItem></Link>
                        <Link href={'/'}><DropdownMenuItem className="cursor-pointer">Thịt gà - vịt</DropdownMenuItem></Link>
                        <Link href={'/'}><DropdownMenuItem className="cursor-pointer">Thịt xay - cắt lát</DropdownMenuItem></Link>
                    </div>
                    <div className="">
                        <Link href={'/AllProduct?category=thucphamkho'}><DropdownMenuLabel className="text-lg hover:text-mainGreen">Thực phẩm khô</DropdownMenuLabel></Link>
                        <DropdownMenuSeparator className="w-full bg-mainGreen mx-auto" />
                        <Link href={'/'}><DropdownMenuItem className="cursor-pointer">Khô bò</DropdownMenuItem></Link>
                        <Link href={'/'}><DropdownMenuItem className="cursor-pointer">khô heo</DropdownMenuItem></Link>
                        <Link href={'/'}><DropdownMenuItem className="cursor-pointer">Khô cá</DropdownMenuItem></Link>
                        <Link href={'/'}><DropdownMenuItem className="cursor-pointer">Mực khô</DropdownMenuItem></Link>
                    </div>
                    <div className="">
                        <Link href={'/AllProduct?category=banhngot'}><DropdownMenuLabel className="text-lg hover:text-mainGreen">Bánh ngọt</DropdownMenuLabel></Link>
                        <DropdownMenuSeparator className="w-full bg-mainGreen mx-auto" />
                        <Link href={'/'}><DropdownMenuItem className="cursor-pointer">Bánh quy</DropdownMenuItem></Link>
                        <Link href={'/'}><DropdownMenuItem className="cursor-pointer">Bánh mặn</DropdownMenuItem></Link>
                        <Link href={'/'}><DropdownMenuItem className="cursor-pointer">Bánh nhập khẩu</DropdownMenuItem></Link>
                        <Link href={'/'}><DropdownMenuItem className="cursor-pointer">Bánh nội địa</DropdownMenuItem></Link>
                    </div>
                </DropdownMenuContent>
            </DropdownMenu>
            <NavigationMenu className="h-[20px] m-0 p-0">
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="flex text-base font-medium h-[20px] m-0 p-0 pt-2">Blog</NavigationMenuTrigger>
                        <NavigationMenuContent className="w-[100px]">
                            <NavigationMenuLink className="w-full">
                                <Link href={'/BlogNews'} className="w-[200px] block px-3 py-2 text-base">Tin tức</Link>
                            </NavigationMenuLink>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <Link className="block text-base font-medium mt-[3px]" href={'/GioiThieu'}>Giới thiệu</Link>
            <Link className="block text-base font-medium mt-[3px]" href={'/LienHe'}>Liên hệ</Link>
        </div>
    )
}

export default NavDropdown