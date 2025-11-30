import React from 'react';
import { MailIcon, PhoneIcon, GlobeIcon } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white text-gray-800 py-14 px-6 border-t border-gray-200">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* --- Logo chữ AI Wiz Kids --- */}
        <div className="mb-8 flex flex-col items-center justify-center leading-tight">
          <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            <span className="text-[#00B4FF]">AI</span>
            <span className="text-gray-900"> Wiz </span>
            <span className="text-[#F8AF4C]">Kids</span>
          </h3>

          <span className="text-sm md:text-base text-gray-500 font-medium tracking-wide">
            AI School
          </span>

          <p className="text-gray-500 text-sm mt-2">
            Giáo dục công nghệ sáng tạo cho thế hệ tương lai
          </p>
        </div>

        {/* --- Liên hệ --- */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-gray-600 mt-6">
          <a
            href="https://www.awk.edu.vn"
            className="flex items-center gap-2 hover:text-[#00B4FF] transition-colors"
          >
            <GlobeIcon className="w-5 h-5" />
            www.awk.edu.vn
          </a>

          <span className="hidden md:inline text-gray-400">|</span>

          <a
            href="mailto:contact@awk.edu.vn"
            className="flex items-center gap-2 hover:text-[#00B4FF] transition-colors"
          >
            <MailIcon className="w-5 h-5" />
            info@awk.edu.vn
          </a>

          <span className="hidden md:inline text-gray-400">|</span>

          <a
            href="tel:0932048881"
            className="flex items-center gap-2 hover:text-[#00B4FF] transition-colors"
          >
            <PhoneIcon className="w-5 h-5" />
            093 204 8881
          </a>

          <a
            href="tel:0797539591"
            className="flex items-center gap-2 hover:text-[#00B4FF] transition-colors"
          >
            <PhoneIcon className="w-5 h-5" />
            079 753 95 91
          </a>
        </div>

        {/* --- Bản quyền & HYPER ONE --- */}
        <div className="text-gray-500 text-sm mt-10">
          <p>© 2025 AI Wiz Kids. All rights reserved.</p>

          <p className="mt-1 text-gray-500 flex justify-center items-center gap-1">
            Powered by
            <a
              href="https://hyperonevn.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-baseline gap-1 font-extrabold tracking-tight text-[#00B4FF] hover:text-[#00D8FF] transition-colors"
            >
              <span>HYPER</span>
              <span className="text-gray-900">ONE</span>
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
};
