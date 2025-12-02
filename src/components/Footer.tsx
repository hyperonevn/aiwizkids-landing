import React from "react";
import { MailIcon, PhoneIcon, GlobeIcon } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer
      className="
        w-full bg-white 
        text-gray-800 
        py-16 px-6 
        border-t border-gray-200
      "
    >
      <div className="max-w-7xl mx-auto text-center">

        {/* LOGO + TAGLINE */}
        <div className="mb-10 flex flex-col items-center justify-center leading-tight">
          <h3
            className="
              font-extrabold tracking-tight
              text-[clamp(1.6rem,4vw,2.25rem)]
              leading-[1.1]
            "
          >
            <span className="text-[#00B4FF]">AI</span>
            <span className="text-gray-900"> Wiz </span>
            <span className="text-[#F8AF4C]">Kids</span>
          </h3>

          <span
            className="
              text-gray-500 font-medium
              text-[clamp(0.8rem,2.5vw,1rem)]
              tracking-wide
            "
          >
            AI School
          </span>

          <p
            className="
              text-gray-500 mt-2 
              text-[clamp(0.8rem,2.4vw,0.95rem)]
            "
          >
            Giáo dục công nghệ sáng tạo cho thế hệ tương lai
          </p>
        </div>

        {/* CONTACT BLOCK */}
        <div
          className="
            flex flex-col md:flex-row 
            justify-center items-center 
            gap-5 md:gap-7
            text-gray-600 
            mt-6
          "
        >
          {/* Website */}
          <a
            href="https://www.awk.edu.vn"
            className="
              flex items-center gap-2 
              hover:text-[#00B4FF] transition-colors
              text-[clamp(0.9rem,2.5vw,1rem)]
            "
          >
            <GlobeIcon className="w-5 h-5" />
            www.awk.edu.vn
          </a>

          <span className="hidden md:inline text-gray-300">•</span>

          {/* Email */}
          <a
            href="mailto:info@awk.edu.vn"
            className="
              flex items-center gap-2 
              hover:text-[#00B4FF] transition-colors
              text-[clamp(0.9rem,2.5vw,1rem)]
            "
          >
            <MailIcon className="w-5 h-5" />
            info@awk.edu.vn
          </a>

          <span className="hidden md:inline text-gray-300">•</span>

          {/* Phone 1 */}
          <a
            href="tel:0932048881"
            className="
              flex items-center gap-2 
              hover:text-[#00B4FF] transition-colors
              text-[clamp(0.9rem,2.5vw,1rem)]
            "
          >
            <PhoneIcon className="w-5 h-5" />
            093 204 8881
          </a>

          {/* Phone 2 */}
          <a
            href="tel:0797539591"
            className="
              flex items-center gap-2 
              hover:text-[#00B4FF] transition-colors
              text-[clamp(0.9rem,2.5vw,1rem)]
            "
          >
            <PhoneIcon className="w-5 h-5" />
            079 753 9591
          </a>
        </div>

        {/* COPYRIGHT */}
        <div className="text-gray-500 text-[clamp(0.8rem,2vw,0.95rem)] mt-12">
          <p>© 2025 AI Wiz Kids. All rights reserved.</p>

          <p
            className="
              mt-1 text-gray-500 
              flex justify-center items-center gap-1
              text-[clamp(0.8rem,2vw,0.95rem)]
            "
          >
            Powered by
            <a
              href="https://hyperonevn.com"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-baseline gap-1 font-extrabold tracking-tight 
                text-[#00B4FF] hover:text-[#00D8FF] transition-colors
                text-[clamp(0.85rem,2vw,1rem)]
              "
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
