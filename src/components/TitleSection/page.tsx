interface TitleSectionProps{
    title: string
    titleHighlight?: string
}
function TitleSection(props: TitleSectionProps) {

    const {title, titleHighlight} = props

    return (
        <div className='mt-10'>
            <div className="mx-auto flex items-center gap-3 justify-center">
                <hr className='w-[50px] bg-black h-0.5' />
                <div className="text-base xs:text-sm font-medium uppercase">{title} <span className="text-mainGreen">{titleHighlight}</span></div>
                <hr className='w-[50px] bg-black h-0.5' />
            </div>
        </div>
    )
}

export default TitleSection