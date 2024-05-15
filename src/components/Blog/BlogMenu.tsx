import { blogData } from "@/data/blogData";
import Image from "next/image";
import Link from "next/link";

interface BlogMenuProps{
    detailBlogMenu?: boolean
}

function BlogMenu(props: BlogMenuProps) {

    const {detailBlogMenu} = props
    let dataList:any
    if(detailBlogMenu){
        dataList = blogData.slice(0,3)
    }else{
        dataList = blogData.slice(0,4)
    }

    return (
        <div className="basis-1/4">
            <div className="py-3 px-3 border">
                <div className="font-medium">Bài viết mới nhất</div>
                <hr className="mt-2" />
                {dataList.map((item: any) => (
                    <div key={item.id} className="flex items-center gap-3 mt-4">
                        <Link href={`${item.link}`}><Image src={`${item.image}`} alt="" width={50} height={50} className="w-[70px] h-[40px]" /></Link>
                        <div className="flex flex-col gap-1">
                            <div className="text-[13px]"><Link href={`${item.link}`}>{item.title}</Link></div>
                            <div className="text-xs">{item.dateMenu}</div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="py-3 px-3 border mt-5">
                <div className="font-medium text-lg">Danh mục</div>
                <hr className="mt-2" />
                <div className="flex flex-col gap-2 mt-3">
                    <Link href={'/AllProduct'} className="text-sm font-medium hover:text-mainGreen transition-all duration-200">Tất cả sản phẩm</Link>
                    <Link href={'/BlogNews'} className="text-sm font-medium hover:text-mainGreen transition-all duration-200">Tin tức mới</Link>
                    <Link href={'/AllProduct'} className="text-sm font-medium hover:text-mainGreen transition-all duration-200">Sản phẩm khuyến mãi</Link>
                    <Link href={'/HeThongCuaHang'} className="text-sm font-medium hover:text-mainGreen transition-all duration-200">Hệ thống cửa hàng</Link>
                </div>
            </div>
        </div>
    );
}

export default BlogMenu;