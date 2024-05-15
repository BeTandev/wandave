import InformationProduct from "@/components/DetailProduct/InformationProduct";
import AllProductData from "@/data/allProductData.json";


export async function generateStaticParams() {
    const posts:any = []
    AllProductData.map((item: any) => posts.push({
        id: item.id
    }))

    return posts
}

// const App = dynamic(() => import('@/data/productData'), {ssr: false})

function Detailproduct() {

    return (
        <InformationProduct dataProduct={AllProductData}/>
    );
}

export default Detailproduct