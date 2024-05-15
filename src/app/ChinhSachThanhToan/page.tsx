import ChinhSachThanhToanComponent from "@/components/ChinhSachThanhToanComponent/page";
import StoreMenu from "@/components/StoreMenu/page";
import TitlePage from "@/components/TitlePage/page";

function ChinhSachThanhToan() {
    return (
        <div>
            <TitlePage pageCurrent="chính sách thanh toán" />
            <div className="container">
                <div className="row w-full lg:w-[90%] mx-auto py-10 flex lg:flex-row flex-col-reverse gap-8">
                    <StoreMenu />
                    <div className="basis-4/5">
                        <h2 className="text-2xl font-medium">Chính sách thanh toán</h2>
                        <ChinhSachThanhToanComponent />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChinhSachThanhToan;