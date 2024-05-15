'use client'
import PositionPage from "@/components/AllProduct/PositionPage/page";
import ShowBrandMenu from "@/components/AllProduct/ShowProduct/ShowBrandMenu";
import ShowCategoryMenu from "@/components/AllProduct/ShowProduct/ShowCategoryMenu";
import ShowKindOfProduct from "@/components/AllProduct/ShowProduct/ShowKindOfProduct";
import ShowLabelItem from "@/components/AllProduct/ShowProduct/ShowLabelItem";
import ShowLabelSelected from "@/components/AllProduct/ShowProduct/ShowLabelSelected";
import ShowPriceMenu from "@/components/AllProduct/ShowProduct/ShowPriceMenu";
import ShowProductItem from "@/components/AllProduct/ShowProduct/ShowProductItem";
import ShowWeightMenu from "@/components/AllProduct/ShowProduct/ShowWeightMenu";
import SortElement from "@/components/AllProduct/ShowProduct/SortElement";
import TransPageBtn from "@/components/AllProduct/ShowProduct/TransPageBtn";
import { AllProductData } from "@/data/productData";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

function ShowProduct() {

    const [pageSelected, setPageSelected] = useState(0)
    const [categorySelected, setCategorySelected] = useState('')
    const [categorySelected2, setCategorySelected2] = useState('')
    const [brandSelected, setBrandSelected] = useState('')
    const [fromPriceSelected, setFromPriceSelected] = useState(1)
    const [endPriceSelected, setEndPriceSelected] = useState(0)
    const [titleBrand, setTitleBrand] = useState('')
    const [titlePrice, setTitlePrice] = useState('')
    const [titleCategory, setTitleCategory] = useState('')
    const [titleCategory2, setTitleCategory2] = useState('')
    const [titleWeight, setTitleWeight] = useState('')
    const [titleLabel, setTitleLabel] = useState('')
    const [generalTitle, setGeneralTitle] = useState<any>([])
    const [productListLength, setProductListLength] = useState(0)
    const [valueShort, getvalueShort] = useState('popular')
    const [weightValue, setWeightValue] = useState(1)
    const [labelValue, setLabelValue] = useState('')
    const searchParams = useSearchParams()

    const brand = searchParams.get('brand')
    const category = searchParams.get('category')
    useEffect(() => {
        if(brand){
            setBrandSelected(brand)
        }
        if(category){
            setCategorySelected(category)
        }
    }, [brand, category])

    useEffect(() => {
        const newGeneralTitle = [titleBrand, titlePrice, titleWeight, titleLabel, titleCategory2];
        setGeneralTitle(newGeneralTitle)
    }, [titleBrand, titlePrice, titleWeight, titleLabel, titleCategory2])

    return (
        <div>
            <PositionPage titleCategory={titleCategory} titleCategory2={titleCategory2} />
            <div className="container">
                <div className="row w-[90%] mx-auto">
                    <div className="flex py-7 gap-5">
                        <div className="basis-1/4 p-3 border hidden lg:block">
                            <ShowCategoryMenu
                                setCategorySelected={setCategorySelected}
                                categorySelected={categorySelected}
                                AllProductData={AllProductData}
                                setTitleCategory={setTitleCategory}
                            />
                            <ShowBrandMenu setTitleBrand={setTitleBrand} setBrandSelected={setBrandSelected} brandSelected={brandSelected} />

                            <ShowPriceMenu setTitlePrice={setTitlePrice} fromPriceSelected={fromPriceSelected} setFromPriceSelected={setFromPriceSelected} setEndPriceSelected={setEndPriceSelected} />

                            <ShowWeightMenu setWeightValue={setWeightValue} setTitleWeight={setTitleWeight} weightValue={weightValue} />
                            <ShowKindOfProduct setCategorySelected={setCategorySelected2} setTitleCategory={setTitleCategory2} categorySelected={categorySelected2} />

                            <ShowLabelItem setTitleLabel={setTitleLabel} setLabelValue={setLabelValue} />
                        </div>
                        <div className="basis-full lg:basis-3/4">
                            <SortElement titleCategory={titleCategory} getvalueShort={getvalueShort} titleCategory2={titleCategory2} />

                            <ShowLabelSelected generalTitle={generalTitle} setTitleBrand={setTitleBrand} setTitlePrice={setTitlePrice} setBrandSelected={setBrandSelected} setTitleWeight={setTitleWeight} setTitleLabel={setTitleLabel} setFromPriceSelected={setFromPriceSelected} setEndPriceSelected={setEndPriceSelected}
                                setWeightValue={setWeightValue} setLabelValue={setLabelValue} setTitleCategory2={setTitleCategory2} setCategorySelected2={setCategorySelected2} />

                            <ShowProductItem AllProductData={AllProductData} pageSelected={pageSelected} categorySelected={categorySelected} brandSelected={brandSelected} endPriceSelected={endPriceSelected} fromPriceSelected={fromPriceSelected} setProductListLength={setProductListLength} valueShort={valueShort} weightValue={weightValue} labelValue={labelValue} categorySelected2={categorySelected2} />

                            <TransPageBtn productListLength={productListLength} pageSelected={pageSelected} setPageSelected={setPageSelected} />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShowProduct;