import Link from 'next/link';

interface CategoryDetailProductProps{
    dataFiltered: any
}

function CategoryDetailProduct(props: CategoryDetailProductProps) {

    const {dataFiltered} = props

    return (
        <div className="mt-4 text-xs">
            <strong>Danh mục:</strong>
            {dataFiltered && <Link href={`/AllProduct/${dataFiltered.category}`} className='hover:text-mainGreen ml-3'>{dataFiltered.categoryShow}, </Link>}
            <Link href={'/AllProduct'} className='hover:text-mainGreen '>Sản phẩm nổi bật, </Link>
            <Link href={'/AllProduct'} className='hover:text-mainGreen '>Sản phẩm mới</Link>
        </div>
    );
}

export default CategoryDetailProduct;