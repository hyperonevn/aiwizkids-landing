import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b border-gray-200 bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-[0_2px_15px_rgba(0,0,0,0.05)]">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-10 py-3">
        
        {/* Logo */}
        <div className="flex flex-col leading-tight select-none">
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight">
            <span className="text-[#00B4FF]">AI</span>
            <span className="text-gray-900"> Wiz </span>
            <span className="text-[#F8AF4C]">Kids</span>
          </h1>
          <span className="text-xs md:text-base text-gray-600 font-medium tracking-wide">
            AI School
          </span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-gray-700 font-semibold">
          <a href="#our-story" className="hover:text-[#00B4FF] transition-colors">
            Về chúng tôi
          </a>
          <a href="#learning-paths" className="hover:text-[#00B4FF] transition-colors">
            Chương trình học
          </a>
          <a href="#features" className="hover:text-[#00B4FF] transition-colors">
            Ưu điểm chương trình
          </a>
        </nav>

        {/* Desktop Powered by */}
        <div className="hidden lg:flex items-center gap-2 group">
          <span className="text-sm text-gray-600 font-medium group-hover:text-gray-800 transition-colors">
            Powered by
          </span>
          <div className="relative flex items-baseline gap-1 font-extrabold tracking-tight">
            <span className="absolute inset-0 blur-md opacity-0 group-hover:opacity-40 bg-[#00B4FF]/60 transition-all rounded-lg"></span>
            <span className="text-[#00B4FF] text-lg drop-shadow-[0_0_8px_rgba(0,180,255,0.5)]">
              HYPER
            </span>
            <span className="text-gray-900 text-lg">ONE</span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6 text-gray-800" /> : <Menu className="w-6 h-6 text-gray-800" />}
        </button>
      </div>

      {/* Mobile DROPDOWN MENU */}
      {open && (
        <div
          className="
            md:hidden border-t border-gray-200 bg-white
            shadow-lg px-6 py-4 flex flex-col gap-4 text-gray-700 font-semibold
            animate-slideDown
          "
        >
          <a
            onClick={() => setOpen(false)}
            href="#our-story"
            className="hover:text-[#00B4FF] transition-colors"
          >
            Về chúng tôi
          </a>

          <a
            onClick={() => setOpen(false)}
            href="#learning-paths"
            className="hover:text-[#00B4FF] transition-colors"
          >
            Chương trình học
          </a>

          <a
            onClick={() => setOpen(false)}
            href="#features"
            className="hover:text-[#00B4FF] transition-colors"
          >
            Ưu điểm chương trình
          </a>

          <div className="pt-2 border-t flex items-center gap-2">
            <span className="text-sm text-gray-600">Powered by</span>
            <span className="font-extrabold">
              <span className="text-[#00B4FF]">HYPER</span>
              <span className="text-gray-900">ONE</span>
            </span>
          </div>
        </div>
      )}
    </header>
  );
};
