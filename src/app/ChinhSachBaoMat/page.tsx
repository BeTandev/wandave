import StoreMenu from "@/components/StoreMenu/page";
import TitlePage from "@/components/TitlePage/page";


function ChinhSachBaoMat() {
    return (
        <div>
            <TitlePage pageCurrent="Chính sách bảo mật" />
            <div className="container">
                <div className="row w-full xs:w-[90%] mx-auto py-10 flex lg:flex-row flex-col-reverse gap-8">
                    <StoreMenu />
                    <div className="basis-4/5">
                        <h2 className="text-2xl font-medium">Chính sách bảo mật</h2>
                        <div className="text-[12px] mt-4 leading-5">Chính sách bảo mật này nhằm giúp Quý khách hiểu về cách website thu thập và sử dụng thông tin cá nhân của mình thông qua việc sử dụng trang web, bao gồm mọi thông tin có thể cung cấp thông qua trang web khi Quý khách đăng ký tài khoản, đăng ký nhận thông tin liên lạc từ chúng tôi, hoặc khi Quý khách mua sản phẩm, dịch vụ, yêu cầu thêm thông tin dịch vụ từ chúng tôi.</div>
                        <div className="text-[12px] mt-4 leading-5">Chúng tôi sử dụng thông tin cá nhân của Quý khách để liên lạc khi cần thiết liên quan đến việc Quý khách sử dụng website của chúng tôi, để trả lời các câu hỏi hoặc gửi tài liệu và thông tin Quý khách yêu cầu.</div>
                        <div className="text-[12px] mt-4 leading-5">Trang web của chúng tôi coi trọng việc bảo mật thông tin và sử dụng các biện pháp tốt nhất để bảo vệ thông tin cũng như việc thanh toán của khách hàng. </div>
                        <div className="text-[12px] mt-4 leading-5">Mọi thông tin giao dịch sẽ được bảo mật ngoại trừ trong trường hợp cơ quan pháp luật yêu cầu.</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChinhSachBaoMat;