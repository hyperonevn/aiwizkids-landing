import React from 'react';

export function PartnerSection() {
  return (
    <section className="relative w-full bg-gray-950 text-white py-20 px-6 overflow-hidden">
      {/* Hiệu ứng ánh sáng nền */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(0,194,255,0.1),_transparent_70%)] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* --- Tiêu đề --- */}
        <h2 className="text-4xl md:text-5xl font-bold mb-10 tracking-tight text-white">
          Đối tác công nghệ
        </h2>

        {/* --- Logo hoặc tên HYPER ONE --- */}
        <div className="flex justify-center mb-10">
          <div className="relative group transition-transform duration-300 hover:scale-105">
            <div className="bg-gradient-to-r from-[#00c2ff] to-[#00f5d4] rounded-3xl p-[3px] shadow-[0_0_25px_rgba(0,194,255,0.3)]">
              <div className="bg-gray-950 rounded-3xl px-12 py-8 flex flex-col items-center justify-center">
                <a
                  href="https://hyperonevn.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-baseline gap-2 select-none"
                >
                  <span className="text-[#00c2ff] text-4xl font-extrabold tracking-tight">
                    HYPER
                  </span>
                  <span className="text-white text-4xl font-extrabold tracking-tight">
                    ONE
                  </span>
                </a>
              </div>
            </div>

            {/* Hiệu ứng ánh sáng hover */}
            <div className="absolute inset-0 rounded-3xl blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-700 bg-[#00c2ff]/30"></div>
          </div>
        </div>

        {/* --- Nội dung giới thiệu --- */}
        <div className="max-w-3xl mx-auto space-y-6 text-gray-300 text-lg leading-relaxed">
          <p>
            <span className="text-[#00c2ff] font-bold">HYPER</span>
            <span className="text-white font-bold"> ONE</span> — 
            <em className="text-gray-400"> Vietnam’s Leading AI Innovation Hub</em> — 
            là đơn vị công nghệ tiên phong tại Việt Nam, chuyên phát triển các giải pháp 
            <strong> Trí tuệ nhân tạo </strong> và nền tảng 
            <strong> Tự động hóa thực chiến</strong>.
          </p>

          <p>
            Với vai trò{' '}
            <span className="text-orange-400 font-semibold">cố vấn công nghệ chiến lược</span>{' '}
            của{' '}
            <span className="text-[#00B4FF] font-bold">AI</span>
            <span className="text-white font-bold"> Wiz </span>
            <span className="text-[#F8AF4C] font-bold">Kids</span>,{' '}
            <span className="text-[#00c2ff] font-bold">HYPER</span>
            <span className="text-white font-bold"> ONE</span>{' '}
            đồng hành trong việc kiến tạo hệ sinh thái giáo dục sáng tạo, giúp trẻ em làm quen,
            hiểu và làm chủ công nghệ AI — từ <em>tư duy logic</em> đến <em>ứng dụng thực tế</em>.
          </p>
        </div>

        {/* --- CTA nhỏ --- */}
        <div className="mt-12">
          <a
            href="https://hyperonevn.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-lg font-semibold text-white bg-gradient-to-r from-[#00c2ff] to-[#00f5d4] py-3 px-8 rounded-full shadow-[0_0_20px_rgba(0,194,255,0.3)] hover:shadow-[0_0_35px_rgba(0,194,255,0.5)] hover:scale-105 transition-all"
          >
            Khám phá HYPER ONE →
          </a>
        </div>
      </div>
    </section>
  );
}
