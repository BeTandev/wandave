import CategoryMenu from "@/components/AllProduct/ShowProduct/CategoryMenu"

interface ShowCategoryMenuProps {
    setCategorySelected: any
    categorySelected: string
    AllProductData: any
    setTitleCategory: any
}

function ShowCategoryMenu(props: ShowCategoryMenuProps) {

    const { setCategorySelected, categorySelected, AllProductData, setTitleCategory } = props

    const traiCayAmount = AllProductData.filter((item: any) => item.category === 'traicay').length
    const rauCuAmount = AllProductData.filter((item: any) => item.category === 'raucu').length
    const thitAmount = AllProductData.filter((item: any) => item.category === 'thit').length
    const thucPhamKhoAmount = AllProductData.filter((item: any) => item.category === 'thucphamkho').length
    const banhNgotAmount = AllProductData.filter((item: any) => item.category === 'banhngot').length


    return (
        <div className="mb-8">
            <div className="text-sm font-semibold">Danh mục sản phẩm</div>
            <hr className="mt-3" />
            <CategoryMenu setTitleCategory={setTitleCategory} setCategorySelected={setCategorySelected} categorySelected={categorySelected} category="traicay" title={'Trái Cây'} amount={traiCayAmount} />
            <CategoryMenu setTitleCategory={setTitleCategory} setCategorySelected={setCategorySelected} categorySelected={categorySelected} category="raucu" title={'Rau Củ'} amount={rauCuAmount} />
            <CategoryMenu setTitleCategory={setTitleCategory} setCategorySelected={setCategorySelected} categorySelected={categorySelected} category="thit" title={'Thịt'} amount={thitAmount} />
            <CategoryMenu setTitleCategory={setTitleCategory} setCategorySelected={setCategorySelected} categorySelected={categorySelected} category="thucphamkho" title={'Thực Phẩm Khô'} amount={thucPhamKhoAmount} />
            <CategoryMenu setTitleCategory={setTitleCategory} setCategorySelected={setCategorySelected} categorySelected={categorySelected} category="banhngot" title={'Bánh Ngọt'} amount={banhNgotAmount} />
        </div>
    );
}

export default ShowCategoryMenu;