'use client'
import ProductItem from "@/components/ProductItem/page";
import { compareValues } from "@/helper/compareValues";
import { useEffect, useState } from "react";

interface ShowProductItemProps {
    AllProductData: any
    pageSelected: number
    categorySelected: string
    brandSelected: string
    endPriceSelected: number
    fromPriceSelected: number
    setProductListLength: any
    valueShort: string
    weightValue: number
    labelValue: string
    categorySelected2: string
}

function ShowProductItem(props: ShowProductItemProps) {

    const { AllProductData, categorySelected, brandSelected, endPriceSelected, fromPriceSelected, pageSelected, setProductListLength, valueShort, weightValue, labelValue, categorySelected2 } = props

    const [productList, setProductList] = useState<any>([])

    useEffect(() => {
        const productFiltered = AllProductData.filter((item: any) => (categorySelected2 ? item.category === categorySelected2 : true) && (categorySelected ? item.category === categorySelected : true) && (brandSelected ? item.brand === brandSelected : true) && (endPriceSelected ? fromPriceSelected < item.price && item.price < endPriceSelected : item.price > fromPriceSelected) && (weightValue ? item.weight.some((item: any) => item.amount === weightValue) : true) && (labelValue ? item.label === labelValue : true))
        setProductList(productFiltered)
    }, [categorySelected, brandSelected, endPriceSelected, fromPriceSelected, weightValue, labelValue, categorySelected2])

    useEffect(() => {
        let filteredData = AllProductData;
    
        if (categorySelected) {
            filteredData = filteredData.filter((item: any) => item.category === categorySelected);
        }
    
        if (brandSelected) {
            filteredData = filteredData.filter((item: any) => item.brand === brandSelected);
        }
    
        setProductList(filteredData);
    }, [brandSelected, categorySelected]);
    

    useEffect(() => {
        setProductListLength(productList.length)
    }, [productList])

    let valueAfterSort: any
    if (valueShort === 'popular') {
        valueAfterSort = productList
    }
    if (valueShort === 'priceasc') {
        valueAfterSort = productList.sort(compareValues('price'))
    }
    if (valueShort === 'pricedesc') {
        valueAfterSort = productList.sort(compareValues('price', 'desc'))
    }
    if (valueShort === 'nameasc') {
        valueAfterSort = productList.sort(compareValues('title'))
    }
    if (valueShort === 'namedesc') {
        valueAfterSort = productList.sort(compareValues('title', 'desc'))
    }

    let lastIndex = pageSelected * 10

    return (
        <>
            <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 mt-10">
                {valueAfterSort.slice(lastIndex, lastIndex + 10).map((item: any) => (
                    <ProductItem item={item} key={item.id} allProductItem />
                ))}
            </div>
        </>
    );
}

export default ShowProductItem;