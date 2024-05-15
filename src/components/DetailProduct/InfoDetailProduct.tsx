import Image from "next/image";

function InfoDetailProduct() {
    return (
        <div>
            <h2 className="text-xl font-medium">Dưa lưới có tác dụng gì? 10 công dụng của dưa lưới đối với sức khỏe</h2>
            <div className="text-xs mt-2">Dưa lưới là một trong nhưng loại trái cây được ưa chuộng khi hè đến bởi hương vị thanh mát và ngon ngọt. Bài viết dưới đây của chuyên mục Mẹo vào bếp sẽ chỉ ra công dụng của dưa lưới và những người không nên ăn loại thực phẩm này, cùng xem thôi!</div>
            <div className="text-lg font-medium mt-2">1. Nguồn gốc và đặc điểm của dưa lưới</div>
            <div className="text-xs mt-2">Dưa lưới là loại quả thường có hình bầu dục, da quả màu xanh, khi chín thường ngả xanh vàng và có các đường gân trắng đan xen như lưới nên có tên gọi là dưa vân lưới (gọi ngắn là dưa lưới).</div>
            <div className="text-xs mt-2">Thịt quả dưa lưới thường màu vàng da cam nghiêng vàng đỏ, có vị ngọt thanh. trọn lượng quả dưa lưới rơi vào khoảng 1.5 - 3.5 kg.</div>
            <div className="text-xs mt-2">Dưa lưới có nguồn gốc từ châu Phi và Ấn Độ. Người Ai Cập là người đầu tiên trồng giống cây này, ban đầu dưa lưới nhỏ và ít ngọt, sau thời gian nó không ngừng phát triển cho đến nay trở thành loại trái to và ngọt.</div>
            <Image src={'/dua-luoi-1.jpg'} alt="" width={700} height={100} className="mt-2"/>
            <div className="text-lg font-medium mt-2">2. Thành phần dinh dưỡng</div>
            <div className="text-xs mt-2">Dưa lưới cung cấp rất nhiều tiền vitamin A (β-carotene), vitamin C, các loại dinh dưỡng như vitamin E và axit folic là những chất chống oxy hóa quan trọng trong quá trình biến dưỡng dinh dưỡng của con người.</div>
            <div className="text-xs mt-2">Trong 100gr dưa lưới chứa:</div>
            <ul>
                <li className="list-disc ml-4 text-xs mt-4">Nước 90.2gr</li>
                <li className="list-disc ml-4 text-xs mt-2">Năng lượng 38 kcal</li>
                <li className="list-disc ml-4 text-xs mt-2">Ni tơ 0.13gr</li>
                <li className="list-disc ml-4 text-xs mt-2">Protein 0.82gr</li>
                <li className="list-disc ml-4 text-xs mt-2">Carbohydrate 8.69gr</li>
                <li className="list-disc ml-4 text-xs mt-2">Đường 7.88gr</li>
                <li className="list-disc ml-4 text-xs mt-2">Canxi 9mg</li>
                <li className="list-disc ml-4 text-xs mt-2">Magie 13mg</li>
                <li className="list-disc ml-4 text-xs mt-2">Photpho 17mg</li>
                <li className="list-disc ml-4 text-xs mt-2">Kali 157 mg</li>
                <li className="list-disc ml-4 text-xs mt-2">Vitamin C 10.9 mg</li>
                <li className="list-disc ml-4 text-xs mt-2">Vitamin B6 0.04mg</li>
                <li className="list-disc ml-4 text-xs mt-2">Vitamin A 232 µg</li>
                <li className="list-disc ml-4 text-xs mt-2">Acid folic 14µg</li>
                <li className="list-disc ml-4 text-xs mt-2">Một số khoáng chất và vitamin khác</li>
            </ul>
            <Image src={'/dua-luoi-2.jpg'} alt="" width={700} height={100} className="mt-2"></Image>
            <div className="text-lg font-medium mt-2">3. Công dụng của dưa lưới với sức khỏe</div>
            <div className="text-sm mt-2 font-semibold">Tốt cho mắt</div>
            <div className="text-xs mt-2">Dưa lưới rất giàu folate và vitamin nhóm B, rất cần thiết cho sự phát triển của thai nhi và ngừa bệnh thiếu máu. Chất lutein và zeaxanthin trong dưa lưới rất cần cho đôi mắt sáng khỏe, thiếu lutein và zeaxanthin dẫn đến thoái hóa điểm vàng và đục thủy tinh thể.</div>
            <Image src={'/dua-luoi-3.jpg'} alt="" width={700} height={100} className="mt-2"></Image>
            <div className="text-sm mt-2 font-semibold">Tốt cho tim mạch</div>
            <div className="text-xs mt-2">Dưa lưới cũng giàu adenosine chất này rất có lợi cho tim vì nó có đặc tính làm loãng máu. Điều này ngăn ngừa máu đông trong hệ thống tim mạch. Vitamin C ngăn ngừa tình trạng xơ cứng động mạch, trong khi folate giúp ngăn ngừa các cơn đau tim có thể xảy ra.</div>
            <Image src={'/dua-luoi-4.jpg'} alt="" width={700} height={100} className="mt-2"></Image>
            <div className="text-sm mt-2 font-semibold">Tốt cho bệnh nhân tiểu đường</div>
            <div className="text-sm mt-2">Dưa lưới có nhiều loại vitamin khác nhau, khoáng chất và các protein nhưng lại ít calo, ít đường phù hợp với người bệnh tiểu đường. Nguồn chất kali trong dưa lưới làm tăng lưu lượng máu và oxy tới não giúp bạn giảm căng thẳng, giúp tinh thần thoải mái hơn.</div>
            <Image src={'/dua-luoi-5.jpg'} alt="" width={700} height={100} className="mt-2"></Image>
            <div className="text-sm mt-2 font-semibold">Tăng cường hệ miễn dịch và ngăn ngừa ung thư</div>
            <div className="text-sm mt-2">Dưa lưới giàu vitamin C và vitamin A có chức năng làm tăng khả năng hệ miễn dịch bằng cách kích thích các bạch cầu trong cơ thể. Là một chất chống oxy hóa mạnh mẽ, vitamin C cũng có hiệu quả chống lại các gốc tự do trong cơ thể. Các gốc tự do này làm hư da và gây lão hóa sớm.</div>
            <div className="text-sm mt-2">Dưa lưới là nguồn chứa chất chống oxy hóa dạng polyphenol, là chất có lợi cho sức khỏe trong việc phòng chống bệnh ung thư và tăng cường hệ miễn dịch.</div>
            <Image src={'/dua-luoi-6.jpg'} alt="" width={700} height={100} className="mt-2"></Image>
            <div className="text-sm mt-2 font-semibold">Điều trị các vấn đề về kinh nguyệt ở nữ giới</div>
            <div className="text-sm mt-2">Vitamin C ở dưa lưới có hiệu quả trong việc điều hòa chu kỳ kinh nguyệt và làm giảm những cơn đau bụng khi có kinh ở phụ nữ. Thường xuyên tiêu thụ dưa lưới trong thời gian kinh nguyệt có thể làm giảm lưu lượng và hạn chế tình trạng đông máu đáng kể.</div>
            <Image src={'/dua-luoi-7.jpg'} alt="" width={700} height={100} className="mt-2"></Image>
            <div className="text-sm mt-2 font-semibold">Có tác dụng làm đẹp da</div>
            <div className="text-sm mt-2">Ăn dưa lưới vào buổi sáng giúp cơ thể giải độc, điều tiết tốt hơn. Zeaxanthin trong dưa lưới còn có tác dụng bảo vệ da khỏi tia UV. Ngoài ra, dưa lưới còn là nguồn thực phẩm chứa beta-carotene, axit folic, kali, vitamin C và vitamin A giúp bạn cải thiện làn da trẻ trung và khỏe mạnh hơn.</div>
            <Image src={'/dua-luoi-8.jpg'} alt="" width={700} height={100} className="mt-2"></Image>
            <div className="text-sm mt-2 font-semibold">Giảm căng thẳng và điều trị mất ngủ</div>
            <div className="text-sm mt-2">Theo các nhà nghiên cứu Pháp, trong dưa lưới có enzyme super oxyd dismutase (SOD) giúp cải thiện những dấu hiệu căng thẳng về thể chất lẫn tinh thần khi kích thích cơ thể sản xuất kháng thể, giúp làm giảm tỷ lệ cholesterol xấu.</div>
            <div className="text-sm mt-2">Ngoài ra, Beta-carotene sẽ chuyển thành vitamin A, có vai trò quan trọng đối với thị giác, sức khỏe của da và niêm mạc và cải thiện chứng mất ngủ.</div>
        </div>
    );
}

export default InfoDetailProduct;