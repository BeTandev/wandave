import BrandMenu from "@/components/AllProduct/ShowProduct/BrandMenu";

interface ShowBrandMenuProps {
    setBrandSelected: any
    brandSelected: string
    setTitleBrand: any
}

function ShowBrandMenu(props: ShowBrandMenuProps) {

    const { setBrandSelected, brandSelected, setTitleBrand } = props

    return (
        <div className="mb-8">
            <div className="text-sm font-semibold">Thương hiệu</div>
            <hr className="mt-3" />
            <BrandMenu setTitleBrand={setTitleBrand} setBrandSelected={setBrandSelected} brandSelected={brandSelected} brand='farmer' title={'Farmer'} />
            <BrandMenu setTitleBrand={setTitleBrand} setBrandSelected={setBrandSelected} brandSelected={brandSelected} brand='bachhoaxanh' title={'Bách Hóa Xanh'} />
        </div>
    );
}

export default ShowBrandMenu;