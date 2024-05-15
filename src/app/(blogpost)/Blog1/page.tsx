import BlogMenu from "@/components/Blog/BlogMenu";
import CommentBox from "@/components/DetailProduct/CommentBox";
import TitlePage from "@/components/TitlePage/page";


function Blog1() {
    return (
        <div>
            <TitlePage detailBlog pageCurrent="Blog 1" />
            <div className="container">
                <div className="row w-[95%] xs:w-[90%] mx-auto py-10 flex flex-col-reverse lg:flex-row gap-5">
                    <BlogMenu detailBlogMenu />
                    <div className="basis-3/4">
                        <div className="font-medium text-xl tracking-wide">Bài viết mẫu 1</div>
                        <div className="text-xs mt-2 tracking-wide">Đây là trang blog của cửa hàng. Bạn có thể dùng blog để quảng bá sản phẩm mới, chia sẻ trải nghiệm của khách hàng, các mẹo mua hàng hoặc bất kì điều gì bạn muốn chia sẻ.</div>
                        <div className="text-xs mt-3 tracking-wide">Làm thế nào để chỉnh sửa hoặc xóa bài viết này?</div>
                        <div className="text-xs tracking-wide mb-5">Bạn có thể chỉnh sửa hoặc xoá bài viết này tại đây hoặc thêm những bài viết mới trong phần quản lý Blog</div>
                        <CommentBox />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog1;