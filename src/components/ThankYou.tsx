import React from "react";
import { CheckCircle } from "lucide-react";

export default function ThankYou() {
  return (
    <section className="relative w-full min-h-screen bg-white py-20 px-6 overflow-hidden flex items-center justify-center">

      {/* Background lights */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#00C2FF]/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#F8AF4C]/20 blur-3xl rounded-full"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-xl mx-auto">
        {/* Icon */}
        <CheckCircle className="w-20 h-20 mx-auto text-[#00B4FF] drop-shadow-lg mb-6" />

        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          Cảm ơn bạn đã đăng ký!
        </h1>

        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          Đội ngũ{" "}
          <span className="text-[#00B4FF] font-semibold">AI</span>
          <span className="text-gray-900 font-semibold"> Wiz </span>
          <span className="text-[#F8AF4C] font-semibold">Kids</span>{" "}
          đã nhận được thông tin và sẽ liên hệ tư vấn trong thời gian sớm nhất.
        </p>

        {/* CTA */}
        <a
          href="/"
          className="inline-block bg-gradient-to-r from-[#00B4FF] to-[#F8AF4C] text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all"
        >
          Quay về trang chủ
        </a>
      </div>
    </section>
  );
}
