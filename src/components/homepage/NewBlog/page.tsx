import TitleSection from '@/components/TitleSection/page';
import NewBlogCarousel from '@/components/homepage/NewBlog/NewBlogCarousel';

function NewBlog() {
    return (
        <div>
            <div className="container">
                <div className="row w-full xs:w-[90%] mx-auto">
                    <TitleSection title='Tin tức mới' />
                    <NewBlogCarousel />
                </div>
            </div>
        </div>
    );
}

export default NewBlog;