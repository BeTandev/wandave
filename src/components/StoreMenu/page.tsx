import Link from 'next/link';

function StoreMenu() {
    return (
        <div className="basis-1/5 px-3 py-2 border">
            <div className="font-medium">Danh mục</div>
            <hr className="w-full h-[1px] mt-2" />
            <div className="font-medium text-[13px] flex flex-col gap-3 mt-5">
                <Link className="block hover:text-mainGreen" href={'/AllProduct'}>Tất cả sản phẩm</Link>
                <Link className="block hover:text-mainGreen" href={'/BlogNews'}>Tin tức mới</Link>
                <Link className="block hover:text-mainGreen" href={'/AllProduct'}>Sản phẩm khuyến mãi</Link>
                <Link className="block hover:text-mainGreen" href={'/HeThongCuaHang'}>Hệ thống cửa hàng</Link>
            </div>
        </div>
    );
}

export default StoreMenu;