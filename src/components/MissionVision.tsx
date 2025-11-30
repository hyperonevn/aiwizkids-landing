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
    text: "Trở thành nền tảng giáo dục công nghệ hàng đầu cho trẻ 4–17 tuổi tại Việt Nam và khu vực Đông Nam Á.",
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
      className="relative bg-gradient-to-br from-[#fdfcff] via-[#fffdf8] to-[#f4fbff] py-24 px-6 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-0 w-80 h-80 bg-[#00B4FF]/10 blur-3xl rounded-full" />
        <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#F8AF4C]/10 blur-3xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">AI Wiz Kids</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Chúng tôi tin rằng tương lai thuộc về những đứa trẻ hiểu công nghệ, có khả năng sáng tạo và biết sử dụng AI vì lợi ích của con người.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {ITEMS.map(({ icon: Icon, title, text, bg, border }, i) => (
            <div
              key={i}
              className={`group text-center p-10 rounded-3xl bg-white/90 backdrop-blur-md shadow-sm border ${border} hover:shadow-xl hover:-translate-y-1 transition`}
            >
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md group-hover:scale-110 transition"
                style={{ background: `linear-gradient(to bottom right, ${bg[0]}, ${bg[1]})` }}
              >
                <Icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{title}</h3>
              <p className="text-gray-600 text-lg">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center max-w-4xl mx-auto bg-gradient-to-br from-[#F8AF4C]/10 to-[#00B4FF]/10 rounded-3xl p-12 shadow-inner">
          <p className="text-2xl md:text-3xl font-extrabold">
            “<span className="text-[#00B4FF]">AI</span> Wiz <span className="text-[#F8AF4C]">Kids</span> – Học AI, hiểu AI, điều khiển AI.”
          </p>
          <p className="text-xl text-gray-600 mt-4 italic">AI là công cụ – Con người là trung tâm.</p>
        </div>
      </div>
    </section>
  );
}
