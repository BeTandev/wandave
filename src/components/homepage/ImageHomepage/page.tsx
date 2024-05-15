import Image from 'next/image';
import Link from 'next/link';

function ImageHomepage() {
    return (
        <div className='container mt-10'>
            <div className="row w-full xs:w-[90%] mx-auto">
                <Link href={'/'} className="w-full">
                    <Image src={'/slideshow_1.png'} alt='' width={1600} height={500} />
                </Link>
            </div>
        </div>
    );
}

export default ImageHomepage;