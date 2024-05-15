import Slider from "@/components/homepage/Slider";
import TwoBannerImage from "@/components/homepage/TwoBannerImage/page";
import OurProduct from "@/components/homepage/OurProduct/page";
import ImageHomepage from "@/components/homepage/ImageHomepage/page";
import BestSeller from "@/components/homepage/BestSeller/page";
import SaleNotice from "@/components/homepage/SaleNotice/page";
import NewProduct from "@/components/homepage/NewProduct/page";
import NewBlog from "@/components/homepage/NewBlog/page";
import Popup from "@/components/Popup/page";` 1r54`


export default function Home() {

  return (
    <div className="overflow-hidden">
      <Slider />
      <TwoBannerImage />
      <OurProduct />
      <ImageHomepage />
      <BestSeller />
      <SaleNotice />
      <NewProduct />
      <NewBlog />
      <Popup />
    </div>
  );
}
