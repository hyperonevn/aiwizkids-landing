import React from "react";
import { SparklesIcon, ArrowRightIcon } from "lucide-react";

export function Hero() {
  const scrollToForm = () => {
    document.getElementById("registration-form")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="relative w-full bg-white py-8 md:py-14 px-4 md:px-6 overflow-hidden">

      {/* Soft Auras */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-10 md:left-20 w-60 md:w-96 h-60 md:h-96 bg-[#00B4FF]/15 blur-[100px] md:blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-10 md:right-20 w-72 md:w-[500px] h-72 md:h-[500px] bg-[#F8AF4C]/20 blur-[120px] md:blur-[150px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-4 md:space-y-6">

            {/* Badge */}
            <div
              className="
                inline-flex items-center gap-2
                bg-gradient-to-r from-[#00B4FF]/10 to-[#F8AF4C]/10
                text-[#00B4FF] px-4 md:px-5 py-1.5 md:py-2
                rounded-full text-xs md:text-sm font-semibold
              "
            >
              <SparklesIcon className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#F8AF4C]" />
              Giáo dục công nghệ AI cho trẻ em
            </div>

            {/* HEADLINE */}
            <h1
              className="
                font-extrabold tracking-tight
                leading-[1.2]
                text-[22px] md:text-[32px] lg:text-[40px]
                text-gray-900
              "
            >
              Nuôi dưỡng tư duy sáng tạo và năng lực công nghệ cho trẻ em Việt Nam.
              <br className="hidden md:block" />
      
            </h1>

            {/* SLOGAN */}
            <p
              className="
                whitespace-nowrap
                font-semibold
                bg-gradient-to-r from-[#00B4FF] to-[#F8AF4C]
                text-transparent bg-clip-text
                leading-[1.2]
                text-base md:text-xl lg:text-2xl
              "
            >
              Học AI – Hiểu AI – Điều khiển AI
            </p>

            {/* QUOTE */}
            <p className="text-sm md:text-lg text-gray-700 font-medium italic leading-[1.25]">
              “AI là công cụ – Con người là trung tâm.”
            </p>

            {/* DESCRIPTION */}
            <p
              className="
                text-xs md:text-base text-gray-600 
                max-w-xl 
                leading-[1.35]
              "
            >
              Chương trình giáo dục AI toàn diện cho trẻ 4–16 tuổi,
              giúp các em phát triển tư duy sáng tạo, làm chủ công nghệ
              và sử dụng AI một cách có trách nhiệm.
            </p>

            {/* CTA */}
            <button
              onClick={scrollToForm}
              className="
                inline-flex items-center gap-3
                bg-gradient-to-r from-[#00B4FF] to-[#F8AF4C]
                text-white px-8 md:px-12 py-3 md:py-4
                rounded-full text-base md:text-lg font-semibold
                shadow-lg hover:shadow-[0_0_40px_rgba(0,180,255,0.45)]
                transition-all transform hover:scale-[1.05]
              "
            >
              Đăng ký học thử miễn phí
              <ArrowRightIcon className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center relative">
            <img
              src="https://pub-f826d697a1694a0dac74ab8db71a8d8d.r2.dev/awk/founder.jpg"
              alt="Founder AI WIZ Kids - Kiều Duy An"
              className="w-full max-w-xs md:max-w-md rounded-3xl shadow-xl border border-gray-200"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
