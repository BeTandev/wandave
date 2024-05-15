import StoreMenu from "@/components/StoreMenu/page";
import TitlePage from "@/components/TitlePage/page";
import Link from "next/link";

function GioiThieu() {
    return (
        <div>
            <TitlePage pageCurrent="Giới thiệu"/>
            <div className="container">
                <div className="row w-[95%] xs:w-[90%] mx-auto flex flex-col-reverse lg:flex-row py-10 gap-8">
                    <StoreMenu />
                    <div className="basis-4/5">
                        <div className="font-medium text-2xl">Giới thiệu</div>
                        <div className="mt-3 text-[12px] tracking-wide">Trang giới thiệu giúp khách hàng hiểu rõ hơn về cửa hàng của bạn. Hãy cung cấp thông tin cụ thể về việc kinh doanh, về cửa hàng, thông tin liên hệ. Điều này sẽ giúp khách hàng cảm thấy tin tưởng khi mua hàng trên website của bạn.</div>
                        <div className="mt-3 text-[12px] tracking-wide">Một vài gợi ý cho nội dung trang Giới thiệu:</div>
                        <ul className="mt-3 text-[13px] tracking-wide flex flex-col gap-3 list-disc ml-4">
                            <li>Bạn là ai</li>
                            <li>Giá trị kinh doanh của bạn là gì</li>
                            <li>Địa chỉ cửa hàng</li>
                            <li>Bạn đã kinh doanh trong ngành hàng này bao lâu rồi</li>
                            <li>Bạn kinh doanh ngành hàng online được bao lâu</li>
                            <li>Đội ngũ của bạn gồm những ai</li>
                            <li>Thông tin liên hệ</li>
                            <li>Liên kết đến các trang mạng xã hội (Twitter, Facebook)</li>
                        </ul>
                        <div className="mt-3 text-[12px] tracking-wide">Bạn có thể chỉnh sửa hoặc xoá bài viết này tại <Link className=" font-bold hover:text-mainGreen" href={'/'}>đây</Link> hoặc thêm những bài viết mới trong phần quản lý <Link href={'/'} className=" font-bold hover:text-mainGreen">Trang nội dung.</Link></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GioiThieu;