import ComponentOption from '@/components/DetailProduct/ComponentOption';

interface WrapComponentOptionProps{
    setSelectedComponent: any
    selectedComponent: number
}

function WrapComponentOption(props: WrapComponentOptionProps) {

    const {setSelectedComponent, selectedComponent} = props

    return (
        <div className="flex items-center gap-3 justify-center">
            <ComponentOption setSelectedComponent={setSelectedComponent} selectedComponent={selectedComponent} SelectedIndex={0} title={'Mô tả sản phẩm'} />
            <hr className='w-[1px] h-[15px] bg-slate-400' />
            <ComponentOption setSelectedComponent={setSelectedComponent} selectedComponent={selectedComponent} SelectedIndex={1} title={'Chính sách thanh toán'} />
            <hr className='w-[1px] h-[15px] bg-slate-400' />
            <ComponentOption setSelectedComponent={setSelectedComponent} selectedComponent={selectedComponent} SelectedIndex={2} title={'Chính sách đổi trả'} />
            <hr className='w-[1px] h-[15px] bg-slate-400' />
            <ComponentOption setSelectedComponent={setSelectedComponent} selectedComponent={selectedComponent} SelectedIndex={3} title={'Bình luận'} />
        </div>
    );
}

export default WrapComponentOption;