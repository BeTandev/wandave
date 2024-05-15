import KindOfProduct from '@/components/AllProduct/ShowProduct/KindOfProduct';

interface ShowKindOfProductProps{
    setTitleCategory: any
    setCategorySelected: any
    categorySelected: string
}

function ShowKindOfProduct(props: ShowKindOfProductProps) {

    const {setTitleCategory, setCategorySelected, categorySelected} = props

    return (
        <div className="mb-8">
            <div className="text-sm font-semibold">Loại sản phẩm</div>
            <hr className="mt-3" />
            <KindOfProduct setTitleCategory={setTitleCategory} setCategorySelected={setCategorySelected} categorySelected={categorySelected} category="rau" title={'Rau'} />
            <KindOfProduct setTitleCategory={setTitleCategory} setCategorySelected={setCategorySelected} categorySelected={categorySelected} category="traicay" title={'Trái Cây'} />
            <KindOfProduct setTitleCategory={setTitleCategory} setCategorySelected={setCategorySelected} categorySelected={categorySelected} category="raucu" title={'Rau Củ'} />
            <KindOfProduct setTitleCategory={setTitleCategory} setCategorySelected={setCategorySelected} categorySelected={categorySelected} category="thit" title={'Thịt'} />
            <KindOfProduct setTitleCategory={setTitleCategory} setCategorySelected={setCategorySelected} categorySelected={categorySelected} category="haisan" title={'Hải Sản'} />
        </div>
    );
}

export default ShowKindOfProduct;