import NewBlogItem from '@/components/homepage/NewBlog/NewBlogItem';
import { blogData } from '@/data/blogData';

function NewBlogCarousel() {
    return (
        <div className='grid place-items-center grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-10'>
            {blogData.map((item: any) => (
                <div key={item.id} className="basis-full flex justify-center mb-8"><NewBlogItem item={item} /></div>
            ))}
        </div>
    );
}

export default NewBlogCarousel;