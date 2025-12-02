import React from "react";
import {
  VideoIcon,
  TrophyIcon,
  CalendarIcon,
  FolderIcon,
  MonitorIcon,
  UserIcon,
} from "lucide-react";

export function Features() {
  const features = [
    {
      icon: VideoIcon,
      title: "Học online linh hoạt",
      description:
        "Học trực tiếp cùng giáo viên qua Zoom – dễ dàng tham gia từ bất kỳ đâu, chỉ cần máy tính hoặc máy tính bảng.",
    },
    {
      icon: TrophyIcon,
      title: "70% thực hành dự án",
      description:
        "Trẻ chủ động tạo ra sản phẩm thực tế – học đi đôi với hành, không chỉ nghe giảng.",
    },
    {
      icon: CalendarIcon,
      title: "Lịch học linh hoạt",
      description:
        "Thời gian học được thiết kế phù hợp với lịch sinh hoạt của phụ huynh và học sinh.",
    },
    {
      icon: FolderIcon,
      title: "Sản phẩm cụ thể",
      description:
        "Sau mỗi khóa học, trẻ có sản phẩm hoàn chỉnh: video, game, website hoặc báo cáo sáng tạo.",
    },
    {
      icon: MonitorIcon,
      title: "Dashboard thân thiện",
      description:
        "Nền tảng học tập trực quan – dễ dùng, theo dõi tiến độ và thành tích từng học viên.",
    },
    {
      icon: UserIcon,
      title: "Giảng viên tận tâm & giàu kinh nghiệm",
      description:
        "Đội ngũ giảng viên luôn đồng hành, truyền cảm hứng và định hướng rõ ràng cho từng học viên.",
    },
  ];

  return (
    <section
      id="features"
      className="relative w-full bg-gradient-to-br from-[#fdfcff] via-[#fffdf8] to-[#f4fbff] py-20 md:py-24 px-6 overflow-hidden"
    >
      {/* BRAND AURA */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-0 w-72 h-72 bg-[#00B4FF]/10 blur-3xl rounded-full" />
        <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#F8AF4C]/10 blur-3xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* TITLE */}
        <div className="text-center mb-14 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 md:mb-6">
            Ưu điểm chương trình{" "}
            <span className="text-[#00B4FF]">AI</span>
            <span className="text-gray-900"> Wiz </span>
            <span className="text-[#F8AF4C]">Kids</span>
          </h2>

          <p
            className="
              text-base md:text-xl 
              text-gray-600 
              max-w-3xl mx-auto 
              leading-[1.5]
            "
          >
            <span className="font-semibold text-[#00B4FF]">AI Wiz Kids</span>{" "}
            mang đến trải nghiệm học tập toàn diện, kết hợp sáng tạo – tư duy
            logic – kỹ năng số, giúp trẻ làm chủ công nghệ tương lai.
          </p>
        </div>

        {/* GRID FEATURES */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="
                  group bg-white/90 backdrop-blur-md 
                  border border-gray-100 
                  p-8 md:p-10 
                  rounded-3xl 
                  shadow-sm 
                  hover:shadow-xl hover:-translate-y-1 
                  transition-all duration-300
                  hover:border-[#00B4FF]/30
                "
              >
                {/* ICON */}
                <div
                  className="
                    w-14 h-14 md:w-16 md:h-16 
                    bg-gradient-to-br from-[#00B4FF] to-[#F8AF4C] 
                    rounded-2xl flex items-center justify-center 
                    mb-5 md:mb-6 
                    shadow-md 
                    group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(0,180,255,0.4)]
                    transition-all duration-300
                  "
                >
                  <Icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </div>

                {/* TITLE */}
                <h3
                  className="
                    font-bold text-gray-900 
                    mb-2 md:mb-3 
                    leading-[1.25]
                    break-words
                    text-[clamp(1rem,3.5vw,1.35rem)]
                  "
                >
                  {feature.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="
                    text-gray-600 
                    leading-[1.45]
                    break-words
                    text-[clamp(0.85rem,3.3vw,1rem)]
                  "
                >
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
