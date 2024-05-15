import BlogMenu from "@/components/Blog/BlogMenu";
import TitlePage from "@/components/TitlePage/page";
import NewBlogItem from "@/components/homepage/NewBlog/NewBlogItem";
import { blogData } from "@/data/blogData";
import Image from "next/image";
import Link from "next/link";

function BlogNews() {
    return (
        <div>
            <TitlePage pageCurrent="Tin tức" />
            <div className="container">
                <div className="row w-[95%] xs:w-[90%] mx-auto py-10 flex flex-col-reverse lg:flex-row gap-5">
                    <BlogMenu />
                    <div className="basis-3/4">
                        <div className="grid">
                            <div className="">Tin tức</div>
                            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-3">
                                {blogData.map((item: any) => (
                                    <div key={item.id} className="basis-full flex justify-center mb-8"><NewBlogItem blognews item={item} /></div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogNews;