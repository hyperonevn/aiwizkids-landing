import React from 'react';
import { HeartIcon, EyeIcon, StarIcon } from 'lucide-react';

export function MissionVision() {
  return (
    <section
      id="mission"
      className="relative w-full bg-gradient-to-br from-[#fdfcff] via-[#fffdf8] to-[#f4fbff] py-24 px-6 overflow-hidden"
    >
      {/* Ánh sáng nền thương hiệu */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-0 w-80 h-80 bg-[#00B4FF]/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#F8AF4C]/10 blur-3xl rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* --- Tiêu đề --- */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Sứ mệnh & Tầm nhìn
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Chúng tôi tin rằng tương lai thuộc về những đứa trẻ hiểu công nghệ, 
            có khả năng sáng tạo và biết sử dụng AI vì lợi ích của con người.
          </p>
        </div>

        {/* --- 3 khối nội dung --- */}
        <div className="grid md:grid-cols-3 gap-10">
          {/* Sứ mệnh */}
          <div className="group text-center p-10 rounded-3xl bg-white/90 backdrop-blur-md shadow-sm border border-[#F8AF4C]/20 hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="w-20 h-20 bg-gradient-to-br from-[#F8AF4C] to-[#FFD580] rounded-full flex items-center justify-center mx-auto mb-6 shadow-md group-hover:scale-110 transition-transform">
              <HeartIcon className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Sứ mệnh</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              Truyền cảm hứng công nghệ và sáng tạo cho thế hệ trẻ, 
              giúp các em tự tin làm chủ tương lai số và công nghệ AI.
            </p>
          </div>

          {/* Tầm nhìn */}
          <div className="group text-center p-10 rounded-3xl bg-white/90 backdrop-blur-md shadow-sm border border-[#00B4FF]/20 hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="w-20 h-20 bg-gradient-to-br from-[#00B4FF] to-[#5AE0FF] rounded-full flex items-center justify-center mx-auto mb-6 shadow-md group-hover:scale-110 transition-transform">
              <EyeIcon className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Tầm nhìn</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              Trở thành nền tảng giáo dục công nghệ hàng đầu cho trẻ 4–17 tuổi 
              tại Việt Nam và khu vực Đông Nam Á.
            </p>
          </div>

          {/* Giá trị cốt lõi */}
          <div className="group text-center p-10 rounded-3xl bg-white/90 backdrop-blur-md shadow-sm border border-purple-200 hover:border-purple-300 hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="w-20 h-20 bg-gradient-to-br from-[#7A5AF8] to-[#E36AFF] rounded-full flex items-center justify-center mx-auto mb-6 shadow-md group-hover:scale-110 transition-transform">
              <StarIcon className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Giá trị cốt lõi</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              Sáng tạo – Nhân văn – Linh hoạt – Lấy trẻ làm trung tâm.
            </p>
          </div>
        </div>

        {/* --- Thông điệp thương hiệu --- */}
        <div className="mt-20 text-center max-w-4xl mx-auto bg-gradient-to-br from-[#F8AF4C]/10 to-[#00B4FF]/10 rounded-3xl p-12 shadow-inner">
          <p className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-relaxed">
            “
            <span className="text-[#00B4FF]">AI</span>
            <span className="text-gray-900"> Wiz </span>
            <span className="text-[#F8AF4C]">Kids</span> – Học AI, hiểu AI, điều khiển AI.”
          </p>
          <p className="text-xl text-gray-600 mt-4 italic">
            AI là công cụ – Con người là trung tâm.
          </p>
        </div>
      </div>
    </section>
  );
}
