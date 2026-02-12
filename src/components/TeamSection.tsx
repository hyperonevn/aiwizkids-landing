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
      "Hơn 10 năm làm việc trong môi trường công nghệ Nhật Bản, tích lũy tư duy hệ thống và kinh nghiệm vận hành. Đam mê giáo dục thúc đẩy anh xây dựng môi trường nuôi dưỡng tư duy số cho trẻ.",
    details:
      "Kiều Duy An có hơn 10 năm làm việc trong môi trường công nghệ hướng đến thị trường Nhật Bản, nơi anh đảm nhiệm vai trò quản lý và hỗ trợ vận hành các nền tảng số.\n\nQuá trình làm việc giúp anh hình thành tư duy hệ thống, sự kỷ luật và khả năng tối ưu quy trình. Từ nền tảng đó, anh mong muốn ứng dụng công nghệ vào giáo dục theo hướng thực tiễn, dễ tiếp cận và bền vững.\n\nAnh hướng đến việc góp phần xây dựng một thế hệ trẻ có khả năng thích nghi với môi trường số và tư duy công nghệ từ sớm."
  },

  {
    name: "Trương Thị Hoàng Ngọc",
    role: "Đồng sáng lập / COO",
    avatar: "https://pub-f826d697a1694a0dac74ab8db71a8d8d.r2.dev/truongthihoangngoc.jpg",
    website: "https://ngoctruong.profile.io.vn",
    summary:
      "Nhiều năm kinh nghiệm trong môi trường mầm non quốc tế, am hiểu tâm lý và hành vi trẻ. Tập trung xây dựng mô hình giáo dục nhân văn và hiện đại.",
    details:
      "Trương Thị Hoàng Ngọc có nhiều năm làm việc trong hệ thống giáo dục mầm non quốc tế, tham gia quản lý và xây dựng chương trình học.\n\nCô từng giảng dạy ở nhiều cấp học, từ đó có góc nhìn toàn diện về sự phát triển của trẻ ở cả nhận thức, cảm xúc và kỹ năng xã hội.\n\nVới vai trò COO, cô tập trung xây dựng môi trường học tập an toàn, tôn trọng sự khác biệt và khuyến khích phát triển tiềm năng tự nhiên của mỗi học sinh."
  },

  {
    name: "Lữ Minh Trí",
    role: "Đồng sáng lập / CTO",
    avatar: "https://pub-f826d697a1694a0dac74ab8db71a8d8d.r2.dev/luminhtri.jpg",
    website: "https://minhtri.profile.io.vn",
    summary:
      "Kinh nghiệm làm việc trong môi trường quốc tế với vai trò thiết kế hệ thống và quản lý dự án. Tập trung vào ứng dụng công nghệ theo hướng thực tiễn và tối ưu vận hành.",
    details:
      "Anh có nhiều năm làm việc tại Nhật Bản và Singapore trong các vai trò liên quan đến thiết kế hệ thống, quản lý dự án và vận hành.\n\nQuá trình làm việc trong môi trường yêu cầu tính kỷ luật và tối ưu cao giúp anh hình thành cách tiếp cận công nghệ dựa trên cấu trúc, hiệu suất và khả năng mở rộng.\n\nKhi tham gia đồng sáng lập dự án, anh tập trung xây dựng nền tảng kỹ thuật vững chắc, ưu tiên tính ổn định, đơn giản và dễ triển khai.\n\nĐịnh hướng của anh là ứng dụng công nghệ theo cách thực tế, hỗ trợ giáo viên và học sinh thay vì làm phức tạp trải nghiệm học tập."
  }
];

const TeamSection: React.FC = () => {
  const [selected, setSelected] = useState<Founder | null>(null);

  return (
    <section className="py-24 bg-white relative">
      <h2 className="text-4xl font-extrabold text-center mb-16 tracking-tight">
        Đội ngũ sáng lập
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto px-6 md:px-10">
        {founders.map((f, i) => (
          <div
            key={i}
            onClick={() => setSelected(f)}
            className="
              cursor-pointer
              rounded-3xl
              bg-white
              border border-gray-200
              p-8
              text-center
              shadow-md
              transition-all duration-300
              hover:shadow-xl
              active:scale-[0.97]
            "
          >
            <img
              src={f.avatar}
              className="w-40 h-40 mx-auto rounded-full object-cover mb-6 shadow"
            />

            <h3 className="text-xl md:text-2xl font-bold whitespace-nowrap">
              {f.name}
            </h3>

            <p className="text-gray-600 mt-1 font-medium text-sm md:text-base">
              {f.role}
            </p>
          </div>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="
              bg-white 
              w-full 
              max-w-5xl 
              rounded-2xl 
              p-6 sm:p-10 
              relative 
              shadow-2xl 
              flex 
              flex-col 
              md:flex-row 
              gap-6 md:gap-10
              max-h-[90vh]
              overflow-y-auto
            "
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-3xl text-gray-500 hover:text-black"
              onClick={() => setSelected(null)}
            >
              ×
            </button>

            <img
              src={selected.avatar}
              className="
                w-40 h-40 
                sm:w-56 sm:h-56 
                md:w-64 md:h-64 
                rounded-2xl 
                object-cover 
                shadow-lg 
                mx-auto md:mx-0
              "
            />

            <div className="flex-1">
              <h3 className="text-3xl md:text-4xl font-extrabold">
                {selected.name}
              </h3>

              <p className="text-red-600 font-semibold text-lg md:text-xl mt-1">
                {selected.role}
              </p>

              <p className="mt-6 text-gray-700 whitespace-pre-line leading-relaxed text-[15.5px] md:text-[16.5px]">
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
