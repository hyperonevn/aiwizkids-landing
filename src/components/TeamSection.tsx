import React, { useState } from "react";

interface Founder {
  name: string;
  role: string;
  avatar: string;
  website: string;
  summary: string;
  details: string;
}

const founders: Founder[] = [
  {
    name: "Kiều Duy An",
    role: "Nhà sáng lập / CEO",
    avatar: "https://pub-f826d697a1694a0dac74ab8db71a8d8d.r2.dev/kieuduyan.jpg",
    website: "https://andy.profile.io.vn",
    summary:
      "Hơn 10 năm làm việc tại CyberAgent Nhật Bản, tích lũy tư duy hệ thống và kinh nghiệm vận hành công nghệ. Niềm đam mê giáo dục thôi thúc anh xây dựng môi trường nuôi dưỡng tư duy số cho trẻ.",
    details:
      "Kiều Duy An có hơn 10 năm làm việc tại công ty con của tập đoàn CyberAgent Nhật Bản tại Việt Nam, nơi anh đảm nhiệm vai trò Trưởng nhóm hỗ trợ nghiệp vụ Internet. Môi trường công nghệ cao của Nhật giúp anh tiếp cận nhiều công nghệ tiên tiến và tham gia vận hành các dự án phát triển nền tảng số và quảng cáo trực tuyến phục vụ thị trường Nhật Bản.\n\nNiềm đam mê giáo dục cùng khát vọng phát triển thế hệ trẻ trong kỷ nguyên số đã đưa anh đến AI WIZ KIDS. Anh mong muốn tạo ra một môi trường giúp trẻ hình thành tư duy số, tư duy công nghệ và khả năng ứng dụng AI từ sớm.\n\nTầm nhìn của anh là góp phần xây dựng thế hệ công dân số Việt Nam tự tin, thông minh và sẵn sàng bước vào tương lai của trí tuệ nhân tạo."
  },

  {
    name: "Trương Thị Hoàng Ngọc",
    role: "Đồng sáng lập / COO",
    avatar: "https://pub-f826d697a1694a0dac74ab8db71a8d8d.r2.dev/truongthihoangngoc.jpg",
    website: "https://ngoctruong.profile.io.vn",
    summary:
      "Nhiều năm kinh nghiệm trong môi trường mầm non quốc tế, am hiểu hành vi – tâm lý trẻ. Định hình mô hình giáo dục nhân văn và hiện đại cho AI WIZ KIDS.",
    details:
      "Trương Thị Hoàng Ngọc có nhiều năm kinh nghiệm làm việc tại các trường Mầm non Quốc tế, nơi cô phát triển chuyên môn về quản lý, xây dựng chương trình nuôi dưỡng – giáo dục và đồng hành tâm lý cùng trẻ.\n\nCô từng giảng dạy ở cấp 1 và cấp 2, sở hữu góc nhìn xuyên suốt về hành trình phát triển của trẻ — từ nhận thức, cảm xúc đến kỹ năng xã hội.\n\nVới vai trò COO của AI WIZ KIDS, cô tập trung xây dựng môi trường học tập an toàn – tôn trọng – cá nhân hoá, hướng đến việc nuôi dưỡng tự tin và tiềm năng tự nhiên của mỗi em."
  },

  {
    name: "Lữ Minh Trí",
    role: "Đồng sáng lập / CTO",
    avatar: "https://pub-f826d697a1694a0dac74ab8db71a8d8d.r2.dev/luminhtri.jpg",
    website: "https://minhtri.profile.io.vn",
    summary:
      "Nhiều năm làm việc tại Nhật Bản và Singapore trong các vai trò thiết kế hệ thống và quản lý dự án. Kinh nghiệm quốc tế giúp anh xây dựng hướng tiếp cận công nghệ ứng dụng trong giáo dục.",
    details:
      "Anh có nhiều năm làm việc tại Nhật Bản và Singapore, đảm nhiệm các vai trò như Trưởng Thiết Kế, Quản Lý Dự Án và Trợ lý Chủ tịch tại Futher Up (Oka Bain Japan) — môi trường đòi hỏi tư duy hệ thống, tính kỷ luật và khả năng tối ưu hoá liên tục.\n\nAnh đồng thời là cựu sáng lập & Giám đốc quốc gia Oka&Co Interior Singapore, trực tiếp xây dựng đội ngũ và triển khai nhiều dự án thiết kế – công nghệ tại Đông Nam Á.\n\nSau khi trở về Việt Nam, anh sáng lập HYPER ONE tập trung vào các giải pháp ứng dụng trí tuệ nhân tạo và tự động hoá tư duy, đặc biệt trong lĩnh vực giáo dục.\n\nKinh nghiệm quốc tế cùng tư duy sản phẩm thực tiễn giúp anh định hình AI WIZ KIDS theo hướng công nghệ ứng dụng — thiết thực, hiện đại và tối ưu trải nghiệm học tập cho trẻ."
  }
];

const TeamSection: React.FC = () => {
  const [selected, setSelected] = useState<Founder | null>(null);

  return (
    <section className="py-24 bg-white relative">
      <h2 className="text-4xl font-extrabold text-center mb-16 tracking-tight">
        Đội ngũ sáng lập
      </h2>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-14 max-w-7xl mx-auto px-10">
        {founders.map((f, i) => (
          <div
            key={i}
            onClick={() => setSelected(f)}
            className="
              cursor-pointer
              rounded-3xl
              bg-white
              border border-gray-200
              p-10
              text-center
              shadow-md
              transition-all duration-500
              hover:shadow-2xl
              hover:-translate-y-3
              hover:scale-[1.05]
            "
          >
            <img
              src={f.avatar}
              className="w-44 h-44 mx-auto rounded-full object-cover mb-6 shadow"
            />

            <h3 className="text-2xl font-bold whitespace-nowrap">
              {f.name}
            </h3>

            <p className="text-gray-600 mt-1 font-medium">{f.role}</p>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white max-w-5xl w-full rounded-3xl p-12 relative shadow-2xl flex gap-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE */}
            <button
              className="absolute top-6 right-6 text-3xl text-gray-500 hover:text-black"
              onClick={() => setSelected(null)}
            >
              ×
            </button>

            <img
              src={selected.avatar}
              className="w-64 h-64 rounded-2xl object-cover shadow-lg"
            />

            <div className="flex-1">
              <h3 className="text-4xl font-extrabold">{selected.name}</h3>
              <p className="text-red-600 font-semibold text-xl mt-1">
                {selected.role}
              </p>

              <p className="mt-6 text-gray-700 whitespace-pre-line leading-relaxed text-[16.5px]">
                {selected.details}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TeamSection;
