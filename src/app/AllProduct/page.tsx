'use client'

import { Suspense } from 'react'
import ShowProduct from '@/components/AllProduct/ShowProduct/page';

function AllProduct() {
    return (
        <Suspense>
            <ShowProduct />
        </Suspense>
    );
}

export default AllProduct;