import React, { useState } from "react";
import { SendIcon, CheckCircle } from "lucide-react";

export function RegistrationForm() {
  const [formData, setFormData] = useState({
    parentName: "",
    childAge: "",
    goal: "",
    contact: "",
  });

  const [isSent, setIsSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="registration-form"
      className="
        relative w-full 
        bg-gradient-to-br from-[#fdfcff] via-[#f7fbff] to-[#fff9f3] 
        py-20 md:py-24 px-6 
        overflow-hidden
      "
    >
      {/* Brand auras */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-0 w-72 h-72 bg-[#00B4FF]/10 blur-3xl rounded-full" />
        <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#F8AF4C]/10 blur-3xl rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Title */}
        <div className="text-center mb-10 md:mb-12">
          <h2
            className="
              font-extrabold text-gray-900 tracking-tight 
              text-[clamp(1.8rem,4vw,3rem)]
              leading-[1.15]
            "
          >
            Đăng ký học thử miễn phí
          </h2>
        </div>

        {/* FORM WRAPPER */}
        <div
          className="
            bg-white/95 backdrop-blur-md 
            rounded-3xl shadow-xl 
            p-8 md:p-12 
            border border-gray-100
          "
        >
          <form
            action="https://formsubmit.co/info@awk.edu.vn"
            method="POST"
            onSubmit={() => setIsSent(true)}
            className="space-y-6"
          >
            {/* Hidden fields */}
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_subject"
              value="Đăng ký học thử mới từ AI WIZ KIDS"
            />

            {/* INPUT GROUP */}
            <Field
              label="Họ tên phụ huynh *"
              name="parentName"
              required
              value={formData.parentName}
              placeholder="Nhập họ tên của bạn"
              onChange={handleChange}
            />

            <SelectField
              label="Độ tuổi của bé *"
              name="childAge"
              required
              value={formData.childAge}
              onChange={handleChange}
            />

            <TextAreaField
              label="Mục tiêu học của bé"
              name="goal"
              value={formData.goal}
              onChange={handleChange}
              placeholder="Ví dụ: Con muốn học làm game..."
            />

            <Field
              label="Email hoặc Số điện thoại *"
              name="contact"
              required
              value={formData.contact}
              placeholder="Email hoặc SĐT để chúng tôi liên hệ"
              onChange={handleChange}
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="
                w-full bg-gradient-to-r from-[#00B4FF] to-[#F8AF4C]
                text-white py-4 rounded-xl 
                font-bold text-[clamp(1rem,3vw,1.25rem)]
                flex items-center justify-center gap-2
                hover:opacity-90 transition-all
              "
            >
              Gửi đăng ký
              <SendIcon className="w-5 h-5" />
            </button>
          </form>

          {/* SUCCESS MESSAGE */}
          {isSent && (
            <div
              className="
                mt-6 p-4 rounded-xl 
                bg-green-50 border border-green-200 
                flex items-center gap-3
              "
            >
              <CheckCircle className="text-green-500 w-6 h-6" />
              <p className="text-green-700 font-semibold">
                Cảm ơn bạn! Thông tin đã được gửi thành công.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* ============ Sub Components ============ */

function Field({
  label,
  name,
  required,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  name: string;
  required?: boolean;
  value: string;
  onChange: any;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-gray-700 font-semibold mb-2 text-[clamp(0.9rem,3vw,1rem)]">
        {label}
      </label>
      <input
        type="text"
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        className="
          w-full px-4 py-3 
          border-2 border-gray-200 
          rounded-xl focus:border-[#00B4FF] 
          text-[clamp(0.9rem,3vw,1rem)]
        "
        placeholder={placeholder}
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  required,
  value,
  onChange,
}: {
  label: string;
  name: string;
  required?: boolean;
  value: string;
  onChange: any;
}) {
  return (
    <div>
      <label className="block text-gray-700 font-semibold mb-2 text-[clamp(0.9rem,3vw,1rem)]">
        {label}
      </label>
      <select
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        className="
          w-full px-4 py-3 
          border-2 border-gray-200 
          rounded-xl focus:border-[#00B4FF]
          text-[clamp(0.9rem,3vw,1rem)]
        "
      >
        <option value="">Chọn độ tuổi</option>
        <option value="4-7">4–7 tuổi</option>
        <option value="7-12">7–12 tuổi</option>
        <option value="12-17">12–17 tuổi</option>
      </select>
    </div>
  );
}

function TextAreaField({
  label,
  name,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  name: string;
  value: string;
  onChange: any;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-gray-700 font-semibold mb-2 text-[clamp(0.9rem,3vw,1rem)]">
        {label}
      </label>
      <textarea
        name={name}
        rows={4}
        value={value}
        onChange={onChange}
        className="
          w-full px-4 py-3 
          border-2 border-gray-200 
          rounded-xl focus:border-[#F8AF4C]
          text-[clamp(0.9rem,3vw,1rem)]
        "
        placeholder={placeholder}
      />
    </div>
  );
}
