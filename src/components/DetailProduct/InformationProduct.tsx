'use client'
import { Suspense } from 'react';
import TitlePage from '@/components/TitlePage/page';
// import { AllProductData } from '@/data/productData';
import { useEffect, useState } from 'react';
import ImageDetailProduct from '@/components/DetailProduct/ImageDetailProduct';
import { removeAccents } from '@/helper/removeAccents';
import CommitQuality from '@/components/DetailProduct/CommitQuality';
import GeneralInfo from '@/components/DetailProduct/GeneralInfo';
import ChinhSachThanhToanComponent from '@/components/ChinhSachThanhToanComponent/page';
import ChinhSachDoiTraComponent from '@/components/ChinhSachDoiTraComponent/page';
import WrapComponentOption from '@/components/DetailProduct/WrapComponentOption';
import Image from 'next/image';
import Link from 'next/link';
import CommentBox from '@/components/DetailProduct/CommentBox';
import InfoDetailProduct from '@/components/DetailProduct/InfoDetailProduct';
import RelateProduct from '@/components/DetailProduct/RelateProduct';
import ProductItem from '@/components/ProductItem/page';
import WatchedProduct from '@/components/DetailProduct/WatchedProduct';
import { productData } from '@/data/productData';

interface InformationProductProps{
    dataProduct: any
}

function InformationProduct(props: InformationProductProps) {

    const {dataProduct} = props

    const [slug, setSlug] = useState('')
    const [dataFilter, setDataFilter] = useState<any>([])
    const [imageIndex, setImageindex] = useState(1)
    const [imageShow, setImageShow] = useState('')
    const [selectedComponent, setSelectedComponent] = useState(0)
    const dataFiltered = dataFilter[0]

    useEffect(() => {
        const pathname = window.location.pathname; // Lấy đường dẫn từ URL
        const parts = pathname.split('/'); // Tách đường dẫn thành các phần dựa trên dấu "/"
        setSlug(parts[parts.length - 1]) // Lấy phần cuối cùng của đường dẫn
        setDataFilter(productData.filter(item => removeAccents(item.title).toLocaleLowerCase().replace(/ /g, "-") === slug))
    }, [slug]);

    useEffect(() => {
        setImageShow(dataFiltered?.image[imageIndex - 1].link)
    }, [imageIndex, dataFiltered])

    return (
        <div>
            {dataFiltered && <TitlePage detailProduct pageCurrent={dataFiltered.title} />}
            <div className="container">
                <div className="row w-full xs:w-[90%] mx-auto py-10">
                    <Suspense fallback={<div>Loading...</div>}>
                        <div className="flex gap-5 flex-wrap lg:flex-nowrap">
                            <ImageDetailProduct imageShow={imageShow} dataFiltered={dataFiltered} setImageindex={setImageindex} />

                            <GeneralInfo dataFiltered={dataFiltered} slug={slug} />

                            <CommitQuality />
                        </div>
                        <div className="flex flex-col lg:flex-row gap-5 mt-10 lg:mt-5 items-start">
                            <div className="basis-full lg:basis-3/4">
                                <WrapComponentOption setSelectedComponent={setSelectedComponent} selectedComponent={selectedComponent} />
                                <div className="mt-8">
                                    {selectedComponent === 0 && <InfoDetailProduct />}
                                    {selectedComponent === 1 && <ChinhSachThanhToanComponent />}
                                    {selectedComponent === 2 && <ChinhSachDoiTraComponent />}
                                    {selectedComponent === 3 && <CommentBox />}
                                </div>
                            </div>
                            <div className="basis-1/4">
                                <h2 className='text-lg font-medium uppercase lg:block hidden'>Sản phẩm <span className='text-mainGreen'>bán chạy</span></h2>
                                <hr className='mt-1 h-[3px] w-[100px] bg-mainGreen lg:block hidden' />
                                <div className="mt-5 hidden lg:flex flex-col gap-3 ">
                                    {productData.slice(0, 5).map(item => (
                                        <div key={item.id} className="flex gap-3">
                                            <Link href={`/Product/${removeAccents(item.title).toLocaleLowerCase().replace(/ /g, "-")}`}><Image src={`${item.image[0].link}`} width={70} height={70} alt='' /></Link>
                                            <div className="">
                                                <Link href={`/Product/${item.title}`}><div className="text-sm">{item.title}</div></Link>
                                                <div className=" mt-2 text-xs font-medium text-red-500">{item.price.toLocaleString("en-US")}<span>đ</span></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="lg:hidden sm:grid hidden grid-cols-3 gap-3 mt-5 justify-items-center items-center">
                                    {productData.slice(0, 3).map(item => (<ProductItem key={item.id} item={item} bestSellerProduct />))}
                                </div>
                                <div className="sm:hidden xs:grid hidden grid-cols-2 gap-3 mt-5 justify-items-center items-center">
                                    {productData.slice(0, 2).map(item => (<ProductItem key={item.id} item={item} bestSellerProduct />))}
                                </div>
                                <div className="xs:hidden grid grid-cols-1 gap-3 mt-5 justify-items-center items-center">
                                    {productData.slice(0, 1).map(item => (<ProductItem key={item.id} item={item} bestSellerProduct />))}
                                </div>
                            </div>
                        </div>
                        <RelateProduct />
                        <WatchedProduct />
                    </Suspense>
                </div>
            </div>
        </div>
    );
}

export default InformationProduct;