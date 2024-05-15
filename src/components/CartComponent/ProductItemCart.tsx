'use client'
import Image from "next/image";
import { useEffect, useState } from "react";

interface ProductItemCartProps {
    item: any
    setDataJson: any
    dataJson: any
}

function ProductItemCart(props: ProductItemCartProps) {

    const { item, setDataJson, dataJson } = props
    const [amountOrder, setAmountOrder] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)
    useEffect(() => {
        setAmountOrder(item.weightOrder)
    }, [item.weightOrder])

    const handleIncrease = () => {
        let numberS = amountOrder
        setAmountOrder(numberS + 1)
        const newDataJson = [...dataJson]
        const index = dataJson.findIndex((product: any) => product.id === item.id)
        if (index !== -1) {
            newDataJson[index].weightOrder = amountOrder + 1
            setDataJson(newDataJson)
            localStorage.setItem('selectedProduct', JSON.stringify(newDataJson))
        }
    }
    const handleDescrease = () => {
        if (amountOrder > 1) {
            let numberS = amountOrder
            setAmountOrder(numberS - 1)
            const newDataJson = [...dataJson]
            const index = dataJson.findIndex((product: any) => product.id === item.id)
            if (index !== -1) {
                newDataJson[index].weightOrder = amountOrder - 1
                setDataJson(newDataJson)
                localStorage.setItem('selectedProduct', JSON.stringify(newDataJson))
            }
        }
    }

    useEffect(() => {
        setTotalPrice(amountOrder * item.price)
    }, [amountOrder, item.price])

    const handleDelete = () => {
        const calc = dataJson.filter((product: any) => product.id !== item.id)
        localStorage.setItem('selectedProduct', JSON.stringify(calc))
        setDataJson(calc)
    }

    return (
        <div className="flex flex-col md:flex-row mt-3 md:items-center mb-4">
            <div className="flex gap-3 basis-3/5">
                <Image src={`${item.image[0].link}`} alt="" width={90} height={60}></Image>
                <div className="">
                    <h3 className="text-sm font-semibold">{item.title}</h3>
                    <div className="text-xs mt-2">{item.weightOrder}kg</div>
                    <div className="text-xs mt-2">{(item.price).toLocaleString("en-US")}đ</div>
                </div>
            </div>
            <div className="flex basis-2/5 mt-3 md:mt-0 justify-between items-center">
                <div className="flex flex-row gap-2 md:flex-col items-center">
                    <div className="flex items-center">
                        <div className="border cursor-pointer px-2 text-xl" onClick={() => handleDescrease()}>-</div>
                        <input className="border w-8 text-center text-sm focus:outline-none" type="number" value={amountOrder} onChange={(e: any) => setAmountOrder(e.target.value)} />
                        <div className="border cursor-pointer px-2 text-xl" onClick={() => handleIncrease()}>+</div>
                    </div>
                    <div className="text-sm font-semibold underline cursor-pointer" onClick={handleDelete}>Xóa</div>
                </div>
                <div className="text-xs font-semibold text-red-500">{totalPrice.toLocaleString("en-US")}đ</div>
            </div>
        </div>
    );
}

export default ProductItemCart;