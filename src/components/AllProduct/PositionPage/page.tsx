import Link from 'next/link';
interface PositionPageProps{
    titleCategory: string
    titleCategory2: string
}

function PositionPage(props: PositionPageProps) {

    const {titleCategory, titleCategory2} = props
    const finalTitle = titleCategory2 ? titleCategory2 : titleCategory

    return (
        <div className='container bg-grayF8 relative'>
            <div className="row w-[90%] mx-auto">
                <div className="flex text-[12px] gap-1.5 py-3">
                    <Link href={'/'}>Trang chủ</Link>
                    <div className="">/</div>
                    <div className="">{finalTitle ? finalTitle : "Tất cả sản phẩm"}</div>
                </div>
            </div>
        </div>
    );
}

export default PositionPage;