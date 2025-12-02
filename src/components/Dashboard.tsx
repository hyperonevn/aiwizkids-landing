import React from "react";
import { BarChartIcon, AwardIcon, BookOpenIcon } from "lucide-react";

export function Dashboard() {
  return (
    <section
      id="dashboard"
      className="relative w-full bg-gradient-to-br from-[#fdfcff] via-[#fffdf8] to-[#f4fbff] py-20 md:py-24 px-6 overflow-hidden"
    >
      {/* BRAND LIGHT AURAS */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-0 w-72 h-72 bg-[#00B4FF]/10 blur-3xl rounded-full" />
        <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#F8AF4C]/10 blur-3xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* LEFT TEXT */}
        <div className="space-y-6 md:space-y-8">
          <h2
            className="
              font-extrabold text-gray-900 leading-[1.15]
              text-[clamp(1.8rem,4vw,3rem)]
            "
          >
            Dashboard học tập thân thiện
          </h2>

          <p
            className="
              text-gray-600 max-w-lg 
              leading-[1.45]
              text-[clamp(1rem,3.2vw,1.25rem)]
            "
          >
            Giao diện trực quan giúp trẻ theo dõi tiến độ, nhận huy hiệu và lưu
            trữ dự án của mình trong{" "}
            <span className="text-[#00B4FF] font-semibold">AI</span>
            <span className="font-semibold"> Wiz </span>
            <span className="text-[#F8AF4C] font-semibold">Kids</span>.
          </p>

          <div className="space-y-5">
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
              desc="Thành tích học tập được ghi nhận bằng huy hiệu sáng – truyền động lực cực mạnh."
            />
            <Feature
              color="from-green-400 to-emerald-500"
              icon={<BookOpenIcon className="w-6 h-6 text-white" />}
              title="Portfolio dự án"
              desc="Lưu trữ toàn bộ sản phẩm học tập: website, game, video, bài thuyết trình."
            />
          </div>
        </div>

        {/* RIGHT – MINI DASHBOARD MOCKUP */}
        <div
          className="
            relative bg-white rounded-3xl 
            shadow-[0_0_40px_rgba(0,0,0,0.08)]
            overflow-hidden border border-gray-100
          "
        >
          <div className="p-6 md:p-8">
            {/* HEADER */}
            <div className="flex justify-between items-center mb-6 md:mb-8">
              <h3
                className="
                  font-bold text-gray-900 
                  text-[clamp(1rem,3vw,1.25rem)]
                "
              >
                Học viên:{" "}
                <span className="text-[#00B4FF] font-semibold">Andy – 5 tuổi</span>
              </h3>
              <span className="text-sm text-gray-500">
                Tuần 8 • Khóa AI Storybook
              </span>
            </div>

            {/* PROGRESS BAR */}
            <div className="mb-8">
              <p className="text-sm text-gray-600 mb-2 font-medium">
                Tiến độ khóa học
              </p>
              <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                <div className="h-3 bg-gradient-to-r from-[#00B4FF] to-[#F8AF4C] rounded-full animate-[progress_5s_ease-in-out_infinite]" />
              </div>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-4 md:gap-6 mb-8">
              {[
                { icon: "🏅", label: "5 Huy hiệu" },
                { icon: "💡", label: "3 Dự án" },
                { icon: "📘", label: "12 Bài học" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="
                    bg-gradient-to-br from-[#fdfcff] to-[#f4fbff] 
                    border border-gray-100 
                    rounded-2xl shadow-sm 
                    p-4 text-center 
                    hover:shadow-md transition-all
                  "
                >
                  <div className="text-2xl md:text-3xl mb-2">{item.icon}</div>
                  <p
                    className="
                      text-sm font-semibold text-gray-700
                      whitespace-nowrap
                    "
                  >
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            {/* LATEST PROJECT */}
            <div
              className="
                bg-gradient-to-br from-[#00B4FF]/10 to-[#F8AF4C]/10 
                rounded-2xl p-5 shadow-inner 
                border border-[#00B4FF]/20
              "
            >
              <p className="text-sm font-semibold text-gray-900 mb-1">
                🌟 Dự án gần nhất:
              </p>
              <h4
                className="
                  font-bold text-[#00B4FF] 
                  text-[clamp(1rem,3vw,1.25rem)]
                  mb-1
                "
              >
                “AI kể chuyện cùng bé”
              </h4>
              <p
                className="
                  text-gray-600 text-sm leading-[1.4] 
                "
              >
                Bé dùng AI để minh họa câu chuyện tự sáng tác – sản phẩm được
                lưu trong portfolio.
              </p>
            </div>
          </div>

          {/* SUBTLE ANIMATION */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/20 to-transparent animate-[pulse_4s_infinite]" />
        </div>
      </div>
    </section>
  );
}

/* ====== SUB COMPONENT ====== */
function Feature({
  color,
  icon,
  title,
  desc,
}: {
  color: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div
        className={`
          w-12 h-12 md:w-14 md:h-14 
          bg-gradient-to-br ${color} 
          rounded-xl flex items-center justify-center 
          shadow-md flex-shrink-0
        `}
      >
        {icon}
      </div>

      <div>
        <h3
          className="
            font-bold text-gray-900 
            mb-1 leading-[1.25]
            text-[clamp(1rem,3.5vw,1.2rem)]
          "
        >
          {title}
        </h3>
        <p
          className="
            text-gray-600 
            leading-[1.4]
            text-[clamp(0.85rem,3.2vw,1rem)]
          "
        >
          {desc}
        </p>
      </div>
    </div>
  );
}
