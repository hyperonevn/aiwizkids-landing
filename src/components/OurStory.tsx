import React, { useState } from "react";

export default function OurStory() {
  const [expanded, setExpanded] = useState(false);

  const paragraphs = [
    `AI là ai?
Khi mạng xã hội và các doanh nghiệp bước vào quá trình tự động hoá, một câu hỏi ngày càng trở nên quan trọng: người đang trò chuyện với mình qua màn hình là ai? Là một con người thật, một telesale được đào tạo hay một hệ thống được lập trình để hành xử như con người? Câu hỏi tưởng đơn giản nhưng lại chạm tới bản chất của thời đại trí tuệ nhân tạo.`,

    `Hơn 20 năm làm việc trong giáo dục cho tôi thấy một điều rõ ràng: thế hệ trẻ đang lớn lên trong một thế giới mà ngôn ngữ, kỹ năng và cách tư duy cần phải khác đi. Các em cần được trang bị kỹ năng công nghệ, tư duy logic, khả năng biểu đạt và nhận diện cảm xúc để có thể tự tin bước vào tương lai, một tương lai nơi AI không chỉ là công cụ mà là một phần của đời sống. Trẻ em như những trang giấy trắng, chúng ta trao cho các em những bậc thang đầu tiên để chính các em có thể tự mở cánh cửa và làm chủ vận hội của mình.`,

    `Nhưng còn ông bà của các em thì sao?
Chỉ cách nhau một thế hệ nhưng tốc độ phát triển công nghệ lại tạo ra một khoảng cách ngày càng lớn. Khi trẻ say mê khám phá những công nghệ mới, liệu ông bà và con cháu còn nói chung một ngôn ngữ? Sợi dây kết nối gia đình, vốn là cốt lõi của văn hoá Á Đông, liệu có bền vững khi AI thay đổi mọi tương tác của con người? Và liệu sẽ đến một thời điểm nào đó, những đứa trẻ ưu tiên trò chuyện với chatbot hơn là thủ thỉ với người thân?`,

    `Chính vì vậy, AI không chỉ là câu chuyện dành cho những người làm công nghệ. Khi ranh giới giữa con người và chatbot trở nên mờ nhạt, khi AI len vào từng nhịp sống của một thành phố năng động như TP.HCM, thì việc phổ cập AI cho những nhóm cộng đồng yếu thế, những người không có điều kiện thời gian hay kỹ thuật, trở thành một nhiệm vụ không thể trì hoãn.`,

    `AI Wiz Kids ra đời từ một niềm tin rất rõ ràng:
Trí tuệ nhân tạo phải phục vụ cộng đồng.
Chúng tôi tin rằng một xã hội chỉ phát triển bền vững khi mọi người đều có cơ hội tiếp cận, học hỏi và sử dụng AI một cách an toàn, thông minh và có trách nhiệm. Một cộng đồng mạnh là cộng đồng có những vòng tay vững chãi để chở che, nâng đỡ, để không ai bị bỏ lại phía sau.`,

    `Đội ngũ sáng lập AI Wiz Kids`
  ];

  const previewLimit = 2; // hiển thị 2 đoạn đầu

  return (
    <section
      id="our-story"
      className="relative w-full bg-white py-12 md:py-16 px-4 md:px-6 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#00C2FF]/5 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-[380px] h-[380px] bg-[#F8AF4C]/10 blur-3xl rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Title */}
        <h2
          className="
            font-extrabold 
            bg-gradient-to-r from-[#00C2FF] to-[#F8AF4C] 
            bg-clip-text text-transparent 
            text-[26px] md:text-[36px] lg:text-[42px]
            leading-[1.15]
            mb-8
          "
        >
          Câu chuyện của chúng tôi
        </h2>

        {/* Content */}
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden relative ${
            expanded ? "max-h-[4000px]" : "max-h-[360px]"
          }`}
        >
          {!expanded && (
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
          )}

          {paragraphs
            .slice(0, expanded ? paragraphs.length : previewLimit)
            .map((p, i) => (
              <p
                key={i}
                className="text-gray-700 leading-[1.55] text-base md:text-lg mb-5 whitespace-pre-line"
              >
                {p}
              </p>
            ))}
        </div>

        {/* Button */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 px-6 py-2 rounded-full border border-[#00C2FF] text-[#00C2FF] font-semibold hover:bg-[#00C2FF] hover:text-white transition-all duration-300"
        >
          {expanded ? "Thu gọn" : "Xem thêm"}
        </button>
      </div>
    </section>
  );
}
