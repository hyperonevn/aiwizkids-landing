import React from 'react';
import { SmileIcon, ZapIcon, RocketIcon } from 'lucide-react';

export function LearningPaths() {
  const paths = [
    {
      age: '4–7 tuổi',
      title: 'Khám phá AI qua hình ảnh',
      icon: SmileIcon,
      description:
        'Học qua hình ảnh, cảm xúc và kể chuyện. Trẻ làm quen với AI một cách tự nhiên và vui vẻ.',
      course: 'AI Storybook',
      courseDesc:
        'Bé vẽ tranh, AI minh họa, bé kể chuyện và tạo ra cuốn sách điện tử của riêng mình.',
      gradient: 'from-[#F8AF4C] to-[#FFCF73]'
    },
    {
      age: '7–12 tuổi',
      title: 'Xây dựng dự án đầu tay',
      icon: ZapIcon,
      description:
        'Học logic, kéo thả và làm dự án thực tế. Phát triển tư duy giải quyết vấn đề và kỹ năng sáng tạo.',
      course: 'Website đầu tay',
      courseDesc:
        'Học HTML/CSS cơ bản, thiết kế và xây dựng trang web cá nhân đầu tiên.',
      gradient: 'from-[#00B4FF] to-[#5AE0FF]'
    },
    {
      age: '12–16 tuổi',
      title: 'Làm chủ công nghệ AI',
      icon: RocketIcon,
      description:
        'Học code thực sự và sử dụng công cụ AI nâng cao để tạo ra ứng dụng, game và chatbot thông minh.',
      course: 'AI Project Lab',
      courseDesc:
        'Xây dựng chatbot thông minh, mini game và ứng dụng di động tích hợp AI.',
      gradient: 'from-[#7A5AF8] to-[#E36AFF]'
    }
  ];

  return (
    <section
      id="learning-paths"
      className="relative w-full bg-gradient-to-br from-[#fdfcff] via-[#f7fbff] to-[#fff9f3] py-24 px-6 overflow-hidden"
    >
      {/* Hiệu ứng ánh sáng thương hiệu */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-0 w-80 h-80 bg-[#00B4FF]/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#F8AF4C]/10 blur-3xl rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Tiêu đề */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Chương trình học theo độ tuổi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Chương trình được thiết kế riêng cho từng giai đoạn phát triển, giúp
            trẻ học đúng nội dung, đúng thời điểm và phát triển toàn diện cùng{' '}
            <span className="text-[#00B4FF] font-semibold">AI</span>
            <span className="text-gray-900 font-semibold"> Wiz </span>
            <span className="text-[#F8AF4C] font-semibold">Kids</span>.
          </p>
        </div>

        {/* Danh sách lộ trình */}
        <div className="grid md:grid-cols-3 gap-10">
          {paths.map((path, index) => {
            const Icon = path.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
              >
                {/* Phần trên gradient */}
                <div
                  className={`bg-gradient-to-br ${path.gradient} p-8 text-white`}
                >
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-5 shadow-inner">
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="text-sm font-semibold mb-1 opacity-90">
                    {path.age}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{path.title}</h3>
                  <p className="text-white text-opacity-90 leading-relaxed">
                    {path.description}
                  </p>
                </div>

                {/* Phần mô tả khóa học */}
                <div className="p-8">
                  <div className="inline-block bg-gray-100 px-4 py-2 rounded-full text-sm font-semibold text-gray-700 mb-4">
                    Khóa học tiêu biểu
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {path.course}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {path.courseDesc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
