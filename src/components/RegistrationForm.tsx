import React, { useState } from 'react';
import { SendIcon } from 'lucide-react';

export function RegistrationForm() {
  const [formData, setFormData] = useState({
    parentName: '',
    childAge: '',
    goal: '',
    contact: ''
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section
      id="registration-form"
      className="relative w-full bg-gradient-to-br from-[#fdfcff] via-[#f7fbff] to-[#fff9f3] py-24 px-6 overflow-hidden"
    >
      {/* Lights */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-0 w-80 h-80 bg-[#00B4FF]/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#F8AF4C]/10 blur-3xl rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Đăng ký học thử miễn phí
          </h2>
          <p className="text-xl text-gray-600">
            Để lại thông tin, đội ngũ{' '}
            <span className="text-[#00B4FF] font-semibold">AI</span>
            <span className="text-gray-900 font-semibold"> Wiz </span>
            <span className="text-[#F8AF4C] font-semibold">Kids</span> sẽ tư vấn lộ trình học phù hợp nhất cho con bạn.
          </p>
        </div>

        <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
          
          {/* FORM SUBMIT THỰC */}
          <form
            action="https://formsubmit.co/info@awk.edu.vn"
            method="POST"
            className="space-y-6"
          >
            {/* Hidden fields */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="Đăng ký học thử mới từ AI WIZ KIDS" />
            <input type="hidden" name="_next" value="https://awk.edu.vn/thank-you" />

            {/* Họ tên */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Họ tên phụ huynh *
              </label>
              <input
                type="text"
                name="parentName"
                required
                value={formData.parentName}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#00B4FF] focus:outline-none transition-colors"
                placeholder="Nhập họ tên của bạn"
              />
            </div>

            {/* Độ tuổi */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Độ tuổi của bé *
              </label>
              <select
                name="childAge"
                required
                value={formData.childAge}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#00B4FF] focus:outline-none transition-colors"
              >
                <option value="">Chọn độ tuổi</option>
                <option value="4-7">4–7 tuổi</option>
                <option value="7-12">7–12 tuổi</option>
                <option value="12-17">12–17 tuổi</option>
              </select>
            </div>

            {/* Mục tiêu */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Mục tiêu học của bé
              </label>
              <textarea
                name="goal"
                rows={4}
                value={formData.goal}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#F8AF4C] focus:outline-none transition-colors resize-none"
                placeholder="Ví dụ: Con muốn học làm game, tạo website..."
              />
            </div>

            {/* Liên hệ */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Email hoặc Số điện thoại *
              </label>
              <input
                type="text"
                name="contact"
                required
                value={formData.contact}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#00B4FF] focus:outline-none transition-colors"
                placeholder="Email hoặc SĐT để chúng tôi liên hệ"
              />
            </div>

            {/* Nút gửi */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#00B4FF] to-[#F8AF4C] hover:opacity-90 text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-lg hover:shadow-2xl"
            >
              Gửi đăng ký
              <SendIcon className="w-5 h-5" />
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}
