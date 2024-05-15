function ChinhSachThanhToanComponent() {
    return (
        <div className="w-full">
            <strong className="mt-3 text-[12px] block">1. Các hình thức thanh toán</strong>
            <div className="text-[12px] mt-3">Khách hàng có thể lựa chọn các hình thức thanh toán sau để thanh toán cho đơn hàng của mình khi mua sản phẩm trên website wandave</div>
            <div className="text-[12px] mt-3">1.1. Thanh toán trả trước: là hình thức thanh toán trực tuyến mà khách hàng sử dụng để thanh toán cho đơn hàng, bao gồm:​​</div>
            <ul className="text-[12px] mt-3">
                <li className="list-disc mt-3 ml-4">Thẻ ATM (Thẻ ghi nợ/thanh toán/trả trước nội địa);</li>
                <li className="list-disc mt-3 ml-4">Thẻ thanh toán quốc tế, thẻ tín dụng.</li>
            </ul>
            <div className="text-[12px] mt-3">1.2. Thanh toán trả sau: là hình thức mà khách hàng sử dụng để thanh toán cho đơn hàng khi Nam An Market giao hàng, bao gồm:</div>
            <ul className="text-[12px] mt-3">
                <li className="list-disc mt-3 ml-4">Tiền mặt</li>
                <li className="list-disc mt-3 ml-4">Thẻ ATM (thẻ ngân hàng, thẻ thanh toán nội địa), thẻ tín dụng và thẻ thanh toán quốc tế (Visa, Master, JCB, UnionPay…) qua máy quẹt thẻ (POS, mPOS) của Ngân hàng</li>
            </ul>
        </div>
    );
}

export default ChinhSachThanhToanComponent;