import Image from "next/image";
import Link from "next/link";

function SaleNotice() {
    return (
        <div className="w-full mt-10 relative">
            <Image src={'/parallax.png'} alt="" width={1600} height={100} className="hidden md:block"></Image>
            <Image src={'/parallax-mobile.png'} alt="" width={1600} height={100} className="md:hidden block"></Image>
            <div className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] text-white w-full text-center">
                <div className="text-3xl lg:text-5xl">Giảm giá cuối mùa 2020 lên tới 30%</div>
                <div className="text-xl lg:text-2xl w-[400px] lg:w-[500px] mx-auto mt-10">Stock is limited. Order now to avoid disappointment.</div>
                <Link href={'/AllProduct'} className="mt-5 block py-3 px-6 bg-mainGreen w-[150px] mx-auto hover:bg-transparent hover:border border-mainGreen transition-all duration-500">Xem ngay</Link>
            </div>
        </div>
    );
}

export default SaleNotice;