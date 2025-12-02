import React from "react";
import { HeartIcon, EyeIcon, StarIcon } from "lucide-react";

const ITEMS = [
  {
    icon: HeartIcon,
    title: "Sứ mệnh",
    text: "Truyền cảm hứng công nghệ và sáng tạo cho thế hệ trẻ, giúp các em tự tin làm chủ tương lai số và công nghệ AI.",
    bg: ["#F8AF4C", "#FFD580"],
    border: "border-[#F8AF4C]/20",
  },
  {
    icon: EyeIcon,
    title: "Tầm nhìn",
    text: "Trở thành nền tảng giáo dục công nghệ hàng đầu cho trẻ 4–16 tuổi tại Việt Nam và khu vực Đông Nam Á.",
    bg: ["#00B4FF", "#5AE0FF"],
    border: "border-[#00B4FF]/20",
  },
  {
    icon: StarIcon,
    title: "Giá trị cốt lõi",
    text: "Sáng tạo – Nhân văn – Linh hoạt – Lấy trẻ làm trung tâm.",
    bg: ["#7A5AF8", "#E36AFF"],
    border: "border-purple-200 hover:border-purple-300",
  },
];

export function MissionVision() {
  return (
    <section
      id="mission"
      className="relative bg-gradient-to-br from-[#fdfcff] via-[#fffdf8] to-[#f4fbff] py-12 md:py-16 px-4 md:px-6 overflow-hidden"
    >
      {/* Soft background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-0 w-64 h-64 bg-[#00B4FF]/10 blur-3xl rounded-full" />
        <div className="absolute bottom-10 right-0 w-72 h-72 bg-[#F8AF4C]/10 blur-3xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title */}
        <div className="text-center mb-10 md:mb-14">
          <h2
            className="
              font-extrabold 
              whitespace-nowrap
              bg-gradient-to-r from-[#00C2FF] to-[#F8AF4C]
              bg-clip-text text-transparent
              text-[26px] md:text-[36px] lg:text-[42px]
              leading-[1.15]
              mb-4
            "
          >
            AI Wiz Kids
          </h2>

          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-[1.35]">
            Chúng tôi tin rằng tương lai thuộc về những đứa trẻ hiểu công nghệ, 
            có khả năng sáng tạo và biết sử dụng AI vì lợi ích của con người.
          </p>
        </div>

        {/* 3 Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-10">
          {ITEMS.map(({ icon: Icon, title, text, bg, border }, i) => (
            <div
              key={i}
              className={`group text-center p-6 md:p-8 rounded-3xl bg-white/90 backdrop-blur-md shadow-sm border ${border} hover:shadow-xl hover:-translate-y-1 transition`}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 shadow-md group-hover:scale-110 transition"
                style={{ background: `linear-gradient(to bottom right, ${bg[0]}, ${bg[1]})` }}
              >
                <Icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl md:text-2xl font-bold mb-3">{title}</h3>

              <p className="text-gray-600 text-base md:text-lg leading-[1.35]">
                {text}
              </p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-14 md:mt-16 text-center max-w-4xl mx-auto bg-gradient-to-br from-[#F8AF4C]/10 to-[#00B4FF]/10 rounded-3xl p-8 md:p-12 shadow-inner">
          <p className="text-xl md:text-3xl font-extrabold leading-[1.2]">
            “<span className="text-[#00B4FF]">AI</span> Wiz{" "}
            <span className="text-[#F8AF4C]">Kids</span> – Học AI, hiểu AI, điều khiển AI.”
          </p>

          <p className="text-gray-600 mt-3 md:mt-4 italic text-base md:text-xl">
            AI là công cụ – Con người là trung tâm.
          </p>
        </div>
      </div>
    </section>
  );
}
