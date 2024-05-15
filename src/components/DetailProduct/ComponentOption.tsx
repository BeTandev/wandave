interface ComponentOptionProps{
    SelectedIndex: number
    title: string
    setSelectedComponent: any
    selectedComponent: number
}

function ComponentOption(props: ComponentOptionProps) {

    const {SelectedIndex, title, setSelectedComponent, selectedComponent} = props

    return (
        <div className={`uppercase text-sm cursor-pointer relative before:absolute before:bottom-0 before:content-[''] before:w-full before:h-[1px] before:bg-mainGreen transition-all duration-300 ${selectedComponent === SelectedIndex ? "text-mainGreen before:h-[1px]" : "before:translate-x-[-100%] hover:before:translate-x-0 overflow-hidden before:h-[1px] hover:text-mainGreen"}`} onClick={() => setSelectedComponent(SelectedIndex)}>{title}</div>
    );
}

export default ComponentOption;