import TwobannerImageItem from '@/components/homepage/TwoBannerImage/TwobannerImageItem';

function TwoBannerImage() {
    return (
        <div className='mt-6 mx-auto'>
            <div className="container mx-auto">
                <div className="row w-full xs:w-[90%] flex flex-col md:flex-row gap-4 mx-auto">
                    <TwobannerImageItem imageLink='/two_banner_image_1_1024x1024.png' categoryProduct='Mật ong rừng' titleProduct='Mật Ong Rừng' contentProduct='Giảm Giá 25%' linkProduct="/AllProduct" />
                    <TwobannerImageItem imageLink='/two_banner_image_2_1024x1024.png' categoryProduct='Đồ uống Organic' titleProduct='Giảm giá 30%' contentProduct='Cho Đơn Hàng Của Bạn' linkProduct="/AllProduct" />
                </div>
            </div>
        </div>
    );
}

export default TwoBannerImage;