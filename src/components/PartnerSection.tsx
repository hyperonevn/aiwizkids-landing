import React from "react";

export function PartnerSection(): JSX.Element {
  return (
    <section className="relative w-full bg-white text-gray-800 py-8 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(0,194,255,0.08),_transparent_80%)] pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h2 className="text-xl md:text-2xl font-bold mb-5 text-gray-900">
          Đối tác công nghệ
        </h2>

        <div className="flex justify-center mb-5">
          <div className="relative group transition duration-300 hover:scale-105">
            <div className="bg-gradient-to-r from-[#00c2ff] to-[#00f5d4] rounded-lg p-[1.5px] shadow-[0_0_6px_rgba(0,194,255,0.2)]">
              <div className="bg-white rounded-lg px-5 py-3 flex items-center justify-center">
                <a
                  href="https://hyperonevn.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-baseline gap-1 select-none"
                >
                  <span className="text-[#00c2ff] text-xl font-extrabold">
                    HYPER
                  </span>
                  <span className="text-gray-900 text-xl font-extrabold">
                    ONE
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-md mx-auto text-gray-700 text-xs leading-relaxed space-y-3">
          <p>
            <span className="text-[#00c2ff] font-bold">HYPER ONE</span> là đơn vị công nghệ tập trung vào các ứng dụng AI đơn giản, dễ triển khai và hỗ trợ thiết thực cho giáo dục lẫn doanh nghiệp.
          </p>

          <p>
            Là đối tác công nghệ của{" "}
            <span className="text-orange-500 font-semibold">AI Wiz Kids</span>,
            Hyper One hỗ trợ xây dựng công cụ giúp trẻ tiếp cận tư duy AI phù hợp lứa tuổi.
          </p>

          <p>
            Năm 2025, Hyper One là{" "}
            <strong>1 trong 5 doanh nghiệp công nghệ Việt</strong> được mời tham dự{" "}
            <strong>Tech Fusion Night</strong> thuộc{" "}
            <strong>WISE HCMC+ Week</strong>, kết nối giao lưu công nghệ Việt – Hàn.
          </p>
        </div>

        <div className="mt-6">
          <a
            href="https://hyperonevn.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-xs font-semibold text-white bg-gradient-to-r from-[#00c2ff] to-[#00f5d4] py-1.5 px-5 rounded-full shadow-[0_0_8px_rgba(0,194,255,0.3)] hover:scale-105 transition-all"
          >
            Xem thêm →
          </a>
        </div>
      </div>
    </section>
  );
}

export default PartnerSection;
