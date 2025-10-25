import React from 'react';
import { BarChartIcon, AwardIcon, BookOpenIcon } from 'lucide-react';

export function Dashboard() {
  return (
    <section
      id="dashboard"
      className="relative w-full bg-gradient-to-br from-[#fdfcff] via-[#fffdf8] to-[#f4fbff] py-24 px-6 overflow-hidden"
    >
      {/* Hiệu ứng nền thương hiệu */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-0 w-80 h-80 bg-[#00B4FF]/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#F8AF4C]/10 blur-3xl rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-14 items-center">
        {/* --- Text trái --- */}
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Dashboard học tập thân thiện
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
            Giao diện trực quan, giúp trẻ theo dõi tiến độ, nhận huy hiệu và lưu
            trữ dự án của mình trong{" "}
            <span className="text-[#00B4FF] font-semibold">AI</span>
            <span className="text-gray-900 font-semibold"> Wiz </span>
            <span className="text-[#F8AF4C] font-semibold">Kids</span>.
          </p>

          <div className="space-y-6">
            <Feature
              color="from-[#00B4FF] to-[#5AE0FF]"
              icon={<BarChartIcon className="w-6 h-6 text-white" />}
              title="Theo dõi tiến độ"
              desc="Xem rõ các bài học đã hoàn thành và kế hoạch học tập sắp tới."
            />
            <Feature
              color="from-[#F8AF4C] to-[#FFD580]"
              icon={<AwardIcon className="w-6 h-6 text-white" />}
              title="Huy hiệu thành tích"
              desc="Mỗi thành tích học tập được ghi nhận bằng huy hiệu sáng rực, truyền động lực."
            />
            <Feature
              color="from-green-400 to-emerald-500"
              icon={<BookOpenIcon className="w-6 h-6 text-white" />}
              title="Portfolio dự án"
              desc="Lưu trữ sản phẩm học tập: website, game, video, bài thuyết trình – mọi thứ ở một nơi."
            />
          </div>
        </div>

        {/* --- Mô phỏng Dashboard mini --- */}
        <div className="relative bg-white rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.08)] overflow-hidden">
          <div className="p-6">
            {/* Thanh tiêu đề */}
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-gray-900">
                Học viên: <span className="text-[#00B4FF]">Andy - 5 tuổi</span>
              </h3>
              <span className="text-sm text-gray-500">Tuần 8 / Khóa AI Storybook</span>
            </div>

            {/* Thanh tiến độ */}
            <div className="mb-8">
              <p className="text-sm text-gray-600 mb-2 font-medium">
                Tiến độ khóa học
              </p>
              <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                <div className="h-3 bg-gradient-to-r from-[#00B4FF] to-[#F8AF4C] rounded-full animate-[progress_5s_ease-in-out_infinite]" />
              </div>
            </div>

            {/* Bảng thành tích */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              {[
                { icon: "🏅", label: "5 Huy hiệu" },
                { icon: "💡", label: "3 Dự án" },
                { icon: "📘", label: "12 Bài học" }
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-br from-[#fdfcff] to-[#f4fbff] border border-gray-100 rounded-2xl shadow-sm p-4 text-center hover:shadow-md transition-all"
                >
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <p className="text-sm font-semibold text-gray-700">{item.label}</p>
                </div>
              ))}
            </div>

            {/* Dự án mới nhất */}
            <div className="bg-gradient-to-br from-[#00B4FF]/10 to-[#F8AF4C]/10 rounded-2xl p-5 shadow-inner border border-[#00B4FF]/20">
              <p className="text-sm font-semibold text-gray-900 mb-1">
                🌟 Dự án gần nhất:
              </p>
              <h4 className="text-xl font-bold text-[#00B4FF] mb-2">
                “AI kể chuyện cùng bé”
              </h4>
              <p className="text-gray-600 text-sm">
                Bé dùng AI để minh họa câu chuyện tự sáng tác – sản phẩm được lưu trong portfolio.
              </p>
            </div>
          </div>

          {/* Hiệu ứng động nhẹ */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/20 to-transparent animate-[pulse_4s_infinite]" />
        </div>
      </div>
    </section>
  );
}

/* === Component phụ gọn gàng === */
function Feature({
  color,
  icon,
  title,
  desc
}: {
  color: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div
        className={`w-14 h-14 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center shadow-md flex-shrink-0`}
      >
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-1">{title}</h3>
        <p className="text-gray-600 leading-relaxed text-[15px]">{desc}</p>
      </div>
    </div>
  );
}
