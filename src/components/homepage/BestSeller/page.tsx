import TitleSection from '@/components/TitleSection/page';
import BestSellerCarousel from '@/components/homepage/BestSeller/BestSellerCarousel';

function BestSeller() {
    return (
        <div>
            <div className="container">
                <div className="row w-full xs:w-[90%] mx-auto">
                    <TitleSection title='Best Seller' />
                    <BestSellerCarousel />
                </div>
            </div>
        </div>
    );
}

export default BestSeller;