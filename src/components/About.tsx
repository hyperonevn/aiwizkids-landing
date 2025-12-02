import React from 'react';
import { HeartIcon, BrainIcon, TargetIcon } from 'lucide-react';

export function About() {
  return (
    <section className="relative w-full bg-gradient-to-br from-[#fdfcff] via-[#fffdf8] to-[#f4fbff] py-10 md:py-14 px-4 md:px-6 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-8 left-0 w-60 h-60 bg-[#00B4FF]/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#F8AF4C]/10 blur-3xl rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* TITLE */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2
            className="
              font-extrabold text-gray-900 tracking-tight
              whitespace-nowrap
              text-[22px] md:text-[34px] lg:text-[40px]
              leading-[1.15]
            "
          >
            Chào mừng đến với AI Wiz Kids
          </h2>

          <p className="text-base md:text-lg text-gray-600 leading-[1.35] mt-4">
            <span className="font-semibold text-[#00B4FF]">AI</span>{" "}
            <span className="font-semibold text-gray-900">Wiz</span>
            <span className="text-[#F8AF4C] font-semibold"> Kids</span> là chương trình giáo dục công nghệ sáng tạo giúp trẻ làm quen,
            hiểu và làm chủ AI thông qua học dự án. Chúng tôi tin rằng{" "}
            <span className="text-[#F8AF4C] font-semibold">
              AI là công cụ phục vụ con người
            </span>
            , chứ không bao giờ thay thế con người.
          </p>
        </div>

        {/* 3 VALUE BLOCKS */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">

          {/* Project-Based Learning */}
          <div className="group bg-white/90 backdrop-blur-md border border-[#00B4FF]/20 p-7 rounded-3xl shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 hover:border-[#00B4FF]/40">
            <div className="w-14 h-14 bg-gradient-to-br from-[#00B4FF] to-[#4DD7FF] rounded-2xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform">
              <BrainIcon className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Học qua dự án</h3>
            <p className="text-gray-600 leading-[1.35] text-sm md:text-base">
              70% thời gian thực hành, tạo ra sản phẩm sau mỗi khóa học. 
              Trẻ học bằng cách làm thật, phát triển tư duy sáng tạo và kỹ năng logic.
            </p>
          </div>

          {/* Humanity Values */}
          <div className="group bg-white/90 backdrop-blur-md border border-[#F8AF4C]/20 p-7 rounded-3xl shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 hover:border-[#F8AF4C]/40">
            <div className="w-14 h-14 bg-gradient-to-br from-[#F8AF4C] to-[#FFD580] rounded-2xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform">
              <HeartIcon className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Giá trị nhân văn</h3>
            <p className="text-gray-600 leading-[1.35] text-sm md:text-base">
              Dạy trẻ sử dụng AI có trách nhiệm và nhân văn, 
              luôn đặt con người là trung tâm và dùng AI để sáng tạo, giúp ích xã hội.
            </p>
          </div>

          {/* Personalized Learning Path */}
          <div className="group bg-white/90 backdrop-blur-md border border-green-200 hover:border-green-300 p-7 rounded-3xl shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform">
              <TargetIcon className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Lộ trình cá nhân</h3>
            <p className="text-gray-600 leading-[1.35] text-sm md:text-base">
              Lộ trình học được thiết kế theo độ tuổi và năng lực, 
              giúp trẻ phát triển tự nhiên, có định hướng và niềm vui trong học tập.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
