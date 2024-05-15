'use client'
import { useState } from "react";

function PostMenu2() {

    const [showMenu, setShowMenu] = useState(false)

    return (
        <div className={`mt-2 bg-grayMenu rounded-lg shadow-lg transition-all duration-500 w-max ${showMenu ? 'h-auto py-4' : 'h-[27px] overflow-hidden'}`}>
            <div className="flex items-center justify-center">
                <div className=" font-semibold mr-1">Mục lục bài viết </div>
                <span>[</span>
                <span className=" font-medium text-blue-600 cursor-pointer text-sm" onClick={() => (setShowMenu(!showMenu))}>{showMenu ? 'Ẩn' : 'Hiện'}</span>
                <span>]</span>
            </div>
            <div className="container mx-auto">
                <ol className="text-[13px] text-blue-600 font-light">
                    <li><span className="text-black">1.</span> Vì sao con ngày càng nhát
                        <ol className="list-inside ml-4">
                            <li><span className="text-black">1.1</span> - Ba mẹ hay căng thẳng</li>
                            <li><span className="text-black">1.2</span> - Chăm bẵm con quá mức sẽ khiến trẻ nhút nhát</li>
                            <li><span className="text-black">1.3</span> - Tập trung vào những điểm tiêu cực, chê bai con</li>
                        </ol>
                    </li>
                    <li><span className="text-black">2.</span> Những hậu quả mà trẻ nhút nhát có thể gặp phải </li>
                    <li><span className="text-black">3.</span> Làm gì để giúp trẻ nhút nhát tự tin hơn?
                        <ol className="list-inside ml-4">
                            <li><span className="text-black">3.1</span> - Chỉ cho con cách tự chăm sóc bản thân</li>
                            <li><span className="text-black">3.2</span> - Không ép trẻ phải giao tiếp khi con không thoải mái</li>
                            <li><span className="text-black">3.3</span> - Chủ động gần gũi, giúp trẻ chia sẻ và cởi mở</li>
                            <li><span className="text-black">3.4</span> - Khuyến khích trẻ tham gia hoạt động tập thể</li>
                            <li><span className="text-black">3.5</span> - Hình thành cho bé “hình ảnh tích cực” của riêng mình</li>
                            <li><span className="text-black">3.6</span> - Hãy dành lời khen đúng đắng và không nên la mắng</li>
                            <li><span className="text-black">3.7</span> - Trẻ sẽ học được nhiều hơn bằng việc tự mình cố gắng</li>
                            <li><span className="text-black">3.8</span> - Cha mẹ phải là tấm gương cho con noi theo</li>
                            <li><span className="text-black">3.9</span> - Bố mẹ luôn ở bên con</li>
                            <li><span className="text-black">3.10</span> - Đừng bao giờ so sánh</li>
                            <li><span className="text-black">3.11</span> - Giúp con thành thạo các kỹ năng mới</li>
                            <li><span className="text-black">3.12</span> - Cho phép trẻ buồn hoặc tức giận</li>
                            <li><span className="text-black">3.13</span> - Lắng nghe con</li>
                            <li><span className="text-black">3.14</span> - Dạy trẻ biết quan tâm và chia sẻ</li>
                            <li><span className="text-black">3.15</span> - Đừng coi con bạn mặc nhiên là một đứa trẻ nhút nhát.</li>
                            <li><span className="text-black">3.16</span> - Dạy cho con những cách thức hiệu quả để đối phó với sự sợ hãi.</li>
                            <li><span className="text-black">3.17</span> - Dạy con rằng một người bạn tốt là vô cùng quý giá.</li>
                            <li><span className="text-black">3.18</span> - Đừng khiến con bạn mắc phải chứng lo lắng xã hội bằng việc dạy con phải đề phòng những người lạ.</li>
                            <li><span className="text-black">3.19</span> - Hãy xem xét đến việc có thể bé đang có những nỗi sợ ở bên trong cần được thể hiện ra ngoài.</li>
                        </ol>
                    </li>
                </ol>

            </div>
        </div>
    );
}

export default PostMenu2;