import Link from "next/link";

interface TitlePageProps{
    pageCurrent: string
    detailProduct?: boolean
    blogPost?: boolean
    detailBlog?: boolean
}

function TitlePage(props: TitlePageProps) {

    const {pageCurrent, detailProduct, blogPost, detailBlog} = props
    let checkTitle:any
    if(detailBlog){
        checkTitle = <Link href={'/BlogNews'}>Tin tức</Link>
    }

    return (
        <div className='container bg-grayF8 relative'>
                <div className="row w-full xs:w-[90%] mx-auto">
                    <div className="flex text-[12px] gap-1.5 py-3">
                        <Link href={'/'}>Trang chủ</Link>
                        <div className="">/</div>
                        {detailBlog ? checkTitle : detailProduct ? <Link href={'/AllProduct'}>Sản phẩm</Link> : <div className="">{pageCurrent}</div>}
                        {detailProduct || detailBlog ? <div className="">/</div> : ""}
                        {detailProduct || detailBlog ? <div className="">{pageCurrent}</div> : ""}
                        
                    </div>
                </div>
            </div>
    );
}

export default TitlePage;