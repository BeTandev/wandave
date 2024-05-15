import Image from "next/image";

function CommitQuality() {
    return (
        <div className="basis-full lg:basis-3/12 py-3 px-4 border border-mainGreen rounded-lg h-max">
            <div className="text-lg font-medium">Wandave Cam kết</div>
            <hr className='w-[50px] h-0.5 bg-mainGreen' />
            <div className="flex mt-4 text-sm items-center gap-2">
                <Image src={"/service_icon_1_icon.png"} alt='' width={20} height={20} />
                <div className="">Nguồn gốc rõ ràng.</div>
            </div>
            <div className="flex mt-2 text-sm items-center gap-2">
                <Image src={"/service_icon_2_icon.png"} alt='' width={20} height={20} />
                <div className="">Chất lượng đảm bảo.</div>
            </div>
            <div className="flex mt-2 text-sm items-center gap-2">
                <Image src={"/service_icon_3_icon.png"} alt='' width={20} height={20} />
                <div className="">Giá cả cạnh tranh.</div>
            </div>
            <div className="flex mt-2 text-sm items-center gap-2">
                <Image src={"/service_icon_4_icon.png"} alt='' width={20} height={20} />
                <div className="">Tốt cho sức khoẻ.</div>
            </div>
        </div>
    );
}

export default CommitQuality;