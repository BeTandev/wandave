import ChinhSachDoiTraComponent from "@/components/ChinhSachDoiTraComponent/page";
import StoreMenu from "@/components/StoreMenu/page";
import TitlePage from "@/components/TitlePage/page";

function ChinhSachDoiTra() {
    return (
        <div>
            <TitlePage pageCurrent="Chính sách đổi trả" />
            <div className="container">
                <div className="row w-full xs:w-[90%] mx-auto py-10 flex lg:flex-row flex-col-reverse gap-8">
                    <StoreMenu />
                    <div className="basis-4/5">
                        <h2 className="text-2xl font-medium">Chính sách đổi trả</h2>
                        <ChinhSachDoiTraComponent />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChinhSachDoiTra;