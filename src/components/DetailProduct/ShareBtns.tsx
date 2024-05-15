'use client'
import {
    FacebookShareButton,
    FacebookIcon,
    PinterestShareButton,
    PinterestIcon,
    TwitterShareButton,
    TwitterIcon,
} from 'next-share'

interface ShareBtnsProps {
    slug: any
}

function ShareBtns(props: ShareBtnsProps) {

    const {slug} = props

    return (
        <div className="flex mt-4 items-center gap-3">
            <div className="text-sm">Chia sẻ</div>
            <FacebookShareButton
                url={`http://localhost:3000/Product/${slug}`}
                quote={'next-share is a social share buttons for your next React apps.'}
                hashtag={'#nextshare'}
            >
                <FacebookIcon size={22} round />
            </FacebookShareButton>
            <TwitterShareButton
                url={`http://localhost:3000/Product/${slug}`}
                title={'next-share is a social share buttons for your next React apps.'}
            >
                <TwitterIcon size={22} round />
            </TwitterShareButton>
            <PinterestShareButton
                url={`http://localhost:3000/Product/${slug}`}
                media={'next-share is a social share buttons for your next React apps.'}
            >
                <PinterestIcon size={22} round />
            </PinterestShareButton>
        </div>
    );
}

export default ShareBtns;