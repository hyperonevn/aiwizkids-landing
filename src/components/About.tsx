import React from 'react';
import { HeartIcon, BrainIcon, TargetIcon } from 'lucide-react';

export function About() {
  return (
    <section className="relative w-full bg-gradient-to-br from-[#fdfcff] via-[#fffdf8] to-[#f4fbff] py-24 px-6 overflow-hidden">
      {/* Hiệu ứng ánh sáng nền */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-0 w-72 h-72 bg-[#00B4FF]/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F8AF4C]/10 blur-3xl rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* --- Tiêu đề --- */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Chào mừng đến với{' '}
            <span className="text-[#00B4FF]">AI</span>
            <span className="text-gray-900"> Wiz </span>
            <span className="text-[#F8AF4C]">Kids</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            <span className="font-semibold text-[#00B4FF]">AI</span> <span className="font-semibold text-gray-900">Wiz</span><span className="text-[#F8AF4C]"> Kids</span> là chương trình giáo dục công nghệ sáng tạo giúp trẻ làm quen, hiểu và làm chủ AI thông qua học dự án. 
            Chúng tôi tin rằng <span className="text-[#F8AF4C] font-semibold">AI là công cụ phục vụ con người</span>, chứ không bao giờ thay thế con người.
          </p>
        </div>

        {/* --- 3 khối giá trị --- */}
        <div className="grid md:grid-cols-3 gap-10">
          {/* Học qua dự án */}
          <div className="group bg-white/90 backdrop-blur-md border border-[#00B4FF]/20 p-10 rounded-3xl shadow-sm hover:shadow-2xl transition-all hover:-translate-y-1 hover:border-[#00B4FF]/40">
            <div className="w-16 h-16 bg-gradient-to-br from-[#00B4FF] to-[#4DD7FF] rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
              <BrainIcon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Học qua dự án</h3>
            <p className="text-gray-600 leading-relaxed">
              70% thời gian thực hành, tạo ra sản phẩm sau mỗi khóa học. 
              Trẻ học bằng cách làm thật, phát triển tư duy sáng tạo và kỹ năng logic.
            </p>
          </div>

          {/* Giá trị nhân văn */}
          <div className="group bg-white/90 backdrop-blur-md border border-[#F8AF4C]/20 p-10 rounded-3xl shadow-sm hover:shadow-2xl transition-all hover:-translate-y-1 hover:border-[#F8AF4C]/40">
            <div className="w-16 h-16 bg-gradient-to-br from-[#F8AF4C] to-[#FFD580] rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
              <HeartIcon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Giá trị nhân văn</h3>
            <p className="text-gray-600 leading-relaxed">
              Dạy trẻ sử dụng AI có trách nhiệm và nhân văn, 
              luôn đặt con người là trung tâm, và dùng AI để sáng tạo, giúp ích xã hội.
            </p>
          </div>

          {/* Lộ trình cá nhân */}
          <div className="group bg-white/90 backdrop-blur-md border border-green-200 hover:border-green-300 p-10 rounded-3xl shadow-sm hover:shadow-2xl transition-all hover:-translate-y-1">
            <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
              <TargetIcon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Lộ trình cá nhân</h3>
            <p className="text-gray-600 leading-relaxed">
              Lộ trình học được thiết kế theo độ tuổi và năng lực, 
              giúp trẻ phát triển tự nhiên, có định hướng và niềm vui trong học tập.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
