'use client'
import CategoryDetailProduct from '@/components/DetailProduct/CategoryDetailProduct';
import InfoProduct from '@/components/DetailProduct/InfoProduct';
import OrderProduct from '@/components/DetailProduct/OrderProduct';
import SelectTypeProduct from '@/components/DetailProduct/SelectTypeProduct';
import ShareBtns from '@/components/DetailProduct/ShareBtns';
import StoreSystem from '@/components/DetailProduct/StoreSystem';
import { useState } from 'react';

interface GeneralInfoProps{
    dataFiltered: any
    slug: string
}

function GeneralInfo(props: GeneralInfoProps) {

    const {dataFiltered, slug} = props

    const [checkSelectSize, setCheckSelectSize] = useState(1)
    const [checkSelectType, setCheckSelectType] = useState(1)
    const [productAmount, setProductAmount] = useState(0)

    return (
        <div className="basis-full md:basis-6/12 lg:basis-5/12">

            <InfoProduct dataFiltered={dataFiltered} />

            <SelectTypeProduct dataFiltered={dataFiltered} setCheckSelectSize={setCheckSelectSize} checkSelectSize={checkSelectSize} setProductAmount={setProductAmount}/>

            {dataFiltered && dataFiltered.typeOfProduct && <SelectTypeProduct dataFiltered={dataFiltered} selectType setCheckSelectType={setCheckSelectType} checkSelectType={checkSelectType} />}

            <OrderProduct dataFiltered={dataFiltered} productAmount={productAmount}/>

            <CategoryDetailProduct dataFiltered={dataFiltered} />

            {dataFiltered && <ShareBtns slug={slug} />}

            <StoreSystem />
        </div>
    );
}

export default GeneralInfo;