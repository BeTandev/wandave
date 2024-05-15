import ProductItem from '@/components/ProductItem/page';
import TitleSection from '@/components/TitleSection/page';
import { productData } from '@/data/productData';

function NewProduct() {
    return (
        <div>
            <div className="container">
                <div className="row w-full xs:w-[90%] mx-auto">
                    <TitleSection title='Sản phẩm mới' />
                    <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 mt-10">
                        {productData.map((item: any) => (
                            <ProductItem item={item} key={item.id} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewProduct;