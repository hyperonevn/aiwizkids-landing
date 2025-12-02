import React from "react";

export default function OurStory() {
  return (
    <section
      id="our-story"
      className="relative w-full bg-white py-12 md:py-16 px-4 md:px-6 overflow-hidden"
    >
      {/* Background subtle light */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[480px] h-[480px] bg-[#00C2FF]/5 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-[360px] h-[360px] bg-[#F8AF4C]/10 blur-3xl rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">

        {/* Title */}
        <h2
          className="
            font-extrabold 
            bg-gradient-to-r from-[#00C2FF] to-[#F8AF4C] 
            bg-clip-text text-transparent 
            whitespace-nowrap
            text-[26px] md:text-[36px] lg:text-[42px]
            leading-[1.15]
            mb-6
          "
        >
          Câu chuyện của chúng tôi
        </h2>

        {/* Paragraphs */}
        <p className="text-gray-700 leading-[1.35] text-base md:text-lg mb-4">
          <span className="text-[#00C2FF] font-semibold">AI WIZ KIDS </span>
          được hình thành từ một trăn trở rất giản dị: trẻ em Việt Nam đang lớn
          lên trong một thế giới thay đổi quá nhanh, nhưng cách các em được
          chuẩn bị cho tương lai lại quá chậm.
        </p>

        <p className="text-gray-700 leading-[1.35] text-base md:text-lg mb-4">
          Chúng tôi bắt đầu không phải từ một tham vọng lớn, mà từ mong muốn tạo
          ra một nơi trẻ em được tiếp cận công nghệ và AI theo cách an toàn,
          nhân văn và có ý nghĩa. Một nơi các em không bị ép buộc học trước
          thời đại, mà được dẫn dắt để hiểu, để sáng tạo và để trở thành chính
          mình.
        </p>

        <p className="text-gray-700 leading-[1.35] text-base md:text-lg mb-4">
          AI WIZ KIDS được xây dựng như một
          <span className="text-[#F8AF4C] font-semibold">
            {" "}ngôi nhà công nghệ dành cho trẻ
          </span>
          , nơi tôn trọng sự tò mò tự nhiên và đặt con người lên trên mọi thuật
          toán. Chúng tôi tin rằng AI không được tạo ra để thay thế con người,
          mà để mở rộng khả năng của các em khi được hướng dẫn đúng cách.
        </p>

        <p className="text-gray-700 leading-[1.35] text-base md:text-lg">
          Hành trình này mới bắt đầu, nhưng mục tiêu thì rõ ràng: giúp thế hệ
          trẻ Việt Nam bước vào kỷ nguyên AI với sự tự tin, lòng nhân ái và khả
          năng làm chủ tương lai của chính mình.
        </p>
      </div>
    </section>
  );
}
