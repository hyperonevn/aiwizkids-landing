import React from 'react';
import {
  VideoIcon,
  TrophyIcon,
  CalendarIcon,
  FolderIcon,
  MonitorIcon,
  UserIcon
} from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: VideoIcon,
      title: 'Học online linh hoạt',
      description:
        'Học trực tiếp cùng giáo viên qua Zoom – dễ dàng tham gia từ bất kỳ đâu, chỉ cần máy tính hoặc máy tính bảng.'
    },
    {
      icon: TrophyIcon,
      title: '70% thực hành dự án',
      description:
        'Trẻ chủ động tạo ra sản phẩm thực tế – học đi đôi với hành, không chỉ nghe giảng.'
    },
    {
      icon: CalendarIcon,
      title: 'Lịch học linh hoạt',
      description:
        'Thời gian học được thiết kế phù hợp với lịch sinh hoạt của phụ huynh và học sinh.'
    },
    {
      icon: FolderIcon,
      title: 'Sản phẩm cụ thể',
      description:
        'Sau mỗi khóa học, trẻ có sản phẩm hoàn chỉnh: video, game, website, hoặc báo cáo sáng tạo.'
    },
    {
      icon: MonitorIcon,
      title: 'Dashboard thân thiện',
      description:
        'Nền tảng học tập trực quan, dễ dùng – theo dõi tiến độ và thành tích từng học viên.'
    },
    {
      icon: UserIcon,
      title: 'Giảng viên tận tâm & giàu kinh nghiệm',
      description:
        'Đội ngũ giảng viên luôn đồng hành, truyền cảm hứng và định hướng cho từng học viên.'
    }
  ];

  return (
    <section
      id="features"
      className="relative w-full bg-gradient-to-br from-[#fdfcff] via-[#fffdf8] to-[#f4fbff] py-24 px-6 overflow-hidden"
    >
      {/* Hiệu ứng nền dịu */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-0 w-80 h-80 bg-[#00B4FF]/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F8AF4C]/10 blur-3xl rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* --- Tiêu đề --- */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Ưu điểm chương trình{' '}
            <span className="text-[#00B4FF]">AI</span>
            <span className="text-gray-900"> Wiz </span>
            <span className="text-[#F8AF4C]">Kids</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            <span className="font-semibold text-[#00B4FF]">AI Wiz Kids</span>{' '}
            mang đến trải nghiệm học tập toàn diện, kết hợp sáng tạo – tư duy
            logic – kỹ năng số, giúp trẻ làm chủ công nghệ tương lai.
          </p>
        </div>

        {/* --- Lưới tính năng --- */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-white/90 backdrop-blur-md border border-gray-100 p-10 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 hover:border-[#00B4FF]/30"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#00B4FF] to-[#F8AF4C] rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(0,180,255,0.4)] transition-all duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
