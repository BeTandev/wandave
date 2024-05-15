'use client'
import OrderPopup from "@/components/ProductItem/OrderPopup"
import { useRouter } from "next/navigation"
import { useState } from "react"

interface OrderProductProps{
    dataFiltered: any
    productAmount: number
}

function OrderProduct(props: OrderProductProps) {

    const router = useRouter()
    const _ = require('lodash');
    const [amountSelect, setAmountSelect] = useState(1)
    const [isOrder, setIsOrder] = useState(false)
    const {dataFiltered, productAmount} = props

    const handleOrder = () => {
        setIsOrder(true)
        const data: any = localStorage.getItem('selectedProduct')
        let dataJson
        if(data){
            dataJson = JSON.parse(data)
        }
        let myObject: any = {};
        myObject.weightOrder = amountSelect * productAmount
        const dataJsonAdded = {...dataFiltered, ...myObject}

        let result = _.find(dataJson, function(obj: any){
            if (obj.id === dataJsonAdded.id) {
                _.update(obj, 'weightOrder', function(n: any){return n = obj.weightOrder + dataJsonAdded.weightOrder})
                return true;
            }
        })

        let test: any = []
        if (!dataJson) {
            test = test.concat(dataJsonAdded)
        } else {
            let checkItem = _.find(dataJson, function (obj: any) {
                if (obj.id === dataJsonAdded.id) {
                    return true
                }
            })
            if (checkItem !== undefined) {
                const dataCheck = dataJson.filter((item: any) => item.id !== result.id)
                test = dataCheck.concat(result)
            } else {
                test = dataJson.concat(dataJsonAdded)
            }
        }
        localStorage.setItem('selectedProduct', JSON.stringify(test))
    }

    const buyNow = () => {
        const data: any = localStorage.getItem('selectedProduct')
        let dataJson
        if(data){
            dataJson = JSON.parse(data)
        }
        let myObject: any = {};
        myObject.weightOrder = amountSelect * productAmount
        const dataJsonAdded = {...dataFiltered, ...myObject}

        let result = _.find(dataJson, function(obj: any){
            if (obj.id === dataJsonAdded.id) {
                _.update(obj, 'weightOrder', function(n: any){return n = obj.weightOrder + dataJsonAdded.weightOrder})
                return true;
            }
        })

        let test: any = []
        if (!dataJson) {
            test = test.concat(dataJsonAdded)
        } else {
            const dataCheck = dataJson.filter((item: any) => item.id !== result.id)
            test = dataCheck.concat(result)
        }
        localStorage.setItem('selectedProduct', JSON.stringify(test))
        router.push('/Cart')

    }

    const handleAmount = (e: any) => {
        setAmountSelect(e.target.value)
    }

    return (
        <div className="flex mt-7 items-center justify-between">
            <div className="flex">
                <input type="number" inputMode="numeric" className='focus:outline-none border border-black w-[40px] h-[44px] flex justify-center items-center text-center' value={amountSelect} onChange={handleAmount} />
                <div className="flex flex-col">
                    <div className="h-[22px] border border-black w-10 text-2xl flex items-center justify-center cursor-pointer" onClick={() => setAmountSelect(Number(amountSelect) + 1)}>+</div>
                    <div className="h-[22px] border border-black w-10 text-2xl flex items-center justify-center cursor-pointer" onClick={() => setAmountSelect(amountSelect > 0 ? amountSelect - 1 : amountSelect)}>-</div>
                </div>
            </div>
            <div className="bg-mainGreen text-xs font-semibold text-white px-6 xl:px-12 py-3 hover:bg-white border border-mainGreen transition-all duration-300 hover:text-mainGreen cursor-pointer" onClick={handleOrder}>Thêm vào giỏ</div>
            <div className="text-xs font-semibold text-mainGreen px-6 xl:px-12 py-3 border border-mainGreen transition-all duration-300 hover:text-white cursor-pointer hover:bg-mainGreen" onClick={buyNow}>Mua ngay</div>
            {dataFiltered && <OrderPopup isOrder={isOrder} setIsOrder={setIsOrder} item={dataFiltered} />}
        </div>
    );
}

export default OrderProduct;