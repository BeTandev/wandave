import PostMenuMucLuc from "@/app/(blogpost)/BlogMucLuc/PostMenuMucLuc";
import BlogMenu from "@/components/Blog/BlogMenu";
import CommentBox from "@/components/DetailProduct/CommentBox";
import TitlePage from "@/components/TitlePage/page";
import Image from "next/image";

function BlogMucLuc() {
    return (
        <div>
            <TitlePage detailBlog pageCurrent="Blog 1" />
            <div className="container">
                <div className="row w-[95%] xs:w-[90%] mx-auto py-10 flex flex-col-reverse lg:flex-row gap-5">
                    <BlogMenu detailBlogMenu />
                    <div className="basis-3/4">
                        <div className="font-medium text-xl tracking-wide">Bài viết mẫu chứa mục lục</div>
                        <div className="text-xs mt-2 tracking-wide italic">Giấc ngủ có vai trò vô cùng quan trọng đối với sức khỏe cũng như sự phát triển của bé. Với bài viết sau sẽ giúp bạn biết nên dùng các loại thực phẩm đơn giản mà vẫn giúp bé có giấc ngủ ngon.</div>
                        <PostMenuMucLuc />
                        <h3 className="mt-4 font-medium text-xl">Sữa (Hay các sản phẩm từ sữa)</h3>
                        <Image src={'/blog-muc-luc-1.png'} alt="" width={600} height={100} className="mx-auto mt-4"/>
                        <div className="text-xs tracking-wide mt-4">Bạn có biết trong sữa có chứa rất nhiều vitamin và khoáng chất đặc biệt là tryptophan – một chất giúp ổn định thần kinh, khống chế độ hưng phấn thần kinh trung ương, giúp bé ngủ ngon và sâu hơn.</div>
                        <div className="text-xs tracking-wide mt-2">Đồng thời canxi trong sữa giúp đẩy mạnh sự sản xuất mentonin, giúp não bộ giảm căng thẳng và ổn định trí não, đi vào giấc ngủ nhanh hơn. Đây thật sự là <strong>thực phẩm giúp bé ngủ ngon</strong> tốt và dễ dùng, hãy cho bé uống 1 ly sữa ấm mỗi ngày trước khi đi ngủ để bé ngủ ngon giấc và giấc ngủ được sâu hơn.</div>
                        <h3 className="font-medium text-xl mt-4">Quả óc chó</h3>
                        <div className="text-xs tracking-wide mt-2">Thông tin từ các nhà khoa học đã chứng minh, ăn quả óc chó trước khi đi ngủ có thể giúp bé ngủ ngon hơn, yên giấc và sâu hơn. Mỗi ngày nấu 15g quả óc chó cùng cháo loãng cho bé ăn trước khi đi ngủ, món cháo óc chó còn giúp ích cho các bé hay bị bệnh mất ngủ, phải dùng nhiều thuốc…</div>
                        <h3 className="font-medium text-xl mt-4">Chuối</h3>
                        <div className="text-xs tracking-wide mt-2">Trong chuối có chứa chất Melatonin và Serotonin có khả năng điều chỉnh chu kỳ giấc ngủ của bé, magie trong chuối giúp cơ thể thư giãn, dễ đi sâu vào giấc ngủ. Hãy xay chuối với chút kem bơ và sữa cho bé ăn mỗi ngày, canxi và tryptophan trong sữa cũng góp phần lớn trong việc điều chỉnh giấc ngủ của bé giúp bé ngủ ngon và sâu giâc hơn.</div>
                        <Image src={'/blog-muc-luc-2.png'} alt="" width={600} height={100} className="mx-auto mt-4"/>
                        <h3 className="font-medium text-xl mt-4">Giấm</h3>
                        <div className="text-xs tracking-wide mt-2">Trong thành phần giấm có chứa nhiều amino axit và organic axit, có tác dụng giúp não bộ sảng khoái, tinh thần nhẹ nhàng, dễ đi vào giấc ngủ ngon và sâu.</div>
                        <h3 className="font-medium text-xl mt-4">Quả táo</h3>
                        <div className="text-xs tracking-wide mt-2">Nhiều bạn ít biết táo cũng là thực phẩm giúp bé ngủ ngon, trong táo chứa nhiều rất nhiều protein, vitamin C, canxi… táo có chứa nguồn dinh dưỡng phong phú, có tác dụng an thần lớn. Đặc biệt, canxi trong quả táo là chất giúp xoa dịu, trấn an trẻ nhỏ, giúp bé nhanh chóng đi vào giấc ngủ.</div>
                        <h3 className="font-medium text-xl mt-4">Quả đậu bắp</h3>
                        <Image src={'/blog-muc-luc-3.png'} alt="" width={600} height={100} className="mx-auto mt-4"/>
                        <div className="text-xs tracking-wide mt-4">Ngoài những chất dinh dưỡng cực tốt như protein và dầu chứa trong nó thì hạt đậu bắp còn có tryptophan – chất giúp bé ngủ ngon và sâu hơn. Thời điểm bé ăn dặm hoặc ăn cơm, cha mẹ có thể bổ sung vào bữa ăn cho bé nhà mình loại thực vật này</div>
                        <h3 className="font-medium text-xl mt-4">Cho trẻ một giấc ngủ ngon</h3>
                        <div className="text-xs tracking-wide mt-2">Với một số thực phẩm giúp bé ngủ ngon trên, bạn nên kèm theo một số lưu ý sau đây để giúp bé có giấc ngủ ngon và sâu nhé!</div>
                        <div className="text-xs tracking-wide mt-2">- Lên một thời gian biểu và tập cho trẻ có một thói quen ngủ sớm và đi ngủ đúng vào một giờ giấc để tạo cho trẻ có một phản xạ nghỉ ngơi giúp trẻ ngủ dễ dàng trong bất cứ trường hợp hay tình huốn nào.</div>
                        <div className="text-xs tracking-wide mt-2 mb-8">- Tâm hồn trẻ rất non nớt vì vậy cần hết sức tránh các chấn thương về tâm lý, làm trẻ bị ức chế tâm lý trước khi ngủ như các hành động doạ nạt, quát mắng, cho bé xem phim hay ảnh kinh dị. Nếu trẻ có tiểu tiện trong khi ngủ gia đình cũng nên làm vệ sinh nhẹ nhàng giúp bé ngủ lại, tránh la mắng trẻ.</div>
                        <CommentBox />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogMucLuc;