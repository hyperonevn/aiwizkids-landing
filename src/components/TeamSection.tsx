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
      "Nhà sáng lập – CEO tại HAO KIM THUY COMPANY. Có hơn 10 năm làm việc tại công ty con của tập đoàn CyberAgent Nhật Bản tại Việt Nam, đảm nhiệm vai trò Trưởng nhóm hỗ trợ nghiệp vụ Internet, tham gia vận hành hệ thống, tối ưu quy trình và triển khai nhiều dự án quảng cáo trực tuyến quy mô lớn. Kinh nghiệm trong môi trường công nghệ Nhật giúp anh xây dựng tư duy hệ thống, kỷ luật nghề nghiệp và khả năng phát triển doanh nghiệp theo hướng tinh gọn – hiệu quả. Với tầm nhìn dài hạn dành cho giáo dục.",
    details:
      "Kiều Duy An có hơn 10 năm làm việc tại công ty con của tập đoàn CyberAgent Nhật Bản tại Việt Nam, nơi anh đảm nhiệm vai trò Trưởng nhóm hỗ trợ nghiệp vụ Internet. Môi trường công nghệ cao của Nhật giúp anh tiếp cận những công nghệ tiên tiến và tham gia nhiều dự án phát triển nền tảng số và quảng cáo trực tuyến cho thị trường Việt Nam. Sau đó, anh sáng lập HAO KIM THUY COMPANY, từng bước xây dựng mô hình kinh doanh dựa trên sự kết hợp giữa vận hành thực tiễn và tư duy công nghệ. Niềm đam mê giáo dục và khát vọng phát triển thế hệ trẻ trong kỷ nguyên số đã thúc đẩy anh sáng lập AI WIZ KIDS, với mong muốn tạo ra môi trường nuôi dưỡng tư duy số – tư duy công nghệ – và khả năng tiếp cận AI từ sớm cho trẻ em Việt Nam. Tầm nhìn của anh là giúp trẻ trở thành công dân số tự tin, thông minh và sẵn sàng cho tương lai trong kỷ nguyên trí tuệ nhân tạo.",
  },
  {
    name: "Trương Thị Hoàng Ngọc",
    role: "Đồng sáng lập / COO",
    avatar:
      "https://pub-f826d697a1694a0dac74ab8db71a8d8d.r2.dev/truongthihoangngoc.jpg",
    website: "https://ngoctruong.profile.io.vn",

    summary:
      "Nhiều năm làm việc tại trường Mầm non Quốc tế với kinh nghiệm chuyên sâu trong quản lý mầm non, xây dựng chương trình nuôi dạy trẻ và hỗ trợ tâm lý lứa tuổi mầm non. Đồng thời từng giảng dạy ở cấp 1 và cấp 2, mang đến góc nhìn toàn diện về hành trình học tập – phát triển của trẻ. Hiện là Founder & COO của HAO KIM THUY COMPANY, kiên định theo đuổi sứ mệnh tạo ra giá trị bền vững cho giáo dục và cộng đồng.",
    details:
      "Trương Thị Hoàng Ngọc có nhiều năm kinh nghiệm làm việc tại các trường Mầm non Quốc tế, nơi cô phát triển chuyên môn vững chắc trong quản lý mầm non, xây dựng chương trình nuôi dưỡng – giáo dục, và đặc biệt là đồng hành tâm lý cùng trẻ trong giai đoạn đầu đời. Sự kết hợp giữa kiến thức sư phạm, hiểu biết tâm lý trẻ và kỹ năng quản trị giúp cô xây dựng môi trường học tập an toàn, ấm áp và chuẩn mực.\n\nKhông chỉ gắn bó với bậc mầm non, cô còn từng giảng dạy ở cấp 1 và cấp 2, từ đó sở hữu góc nhìn xuyên suốt về tiến trình phát triển toàn diện của trẻ — từ cảm xúc, nhận thức đến kỹ năng xã hội.\n\nVới vai trò Đồng sáng lập – Founding Partner kiêm COO của HAO KIM THUY COMPANY, cô tiếp tục theo đuổi sứ mệnh tạo ra giá trị bền vững cho giáo dục và cộng đồng. Cô tập trung xây dựng quy trình vận hành chuẩn mực, phát triển môi trường học tập nhân văn và hiệu quả, đồng thời đồng hành cùng AI WIZ KIDS trong việc định hình phương pháp tiếp cận trẻ theo hướng hiện đại, tôn trọng sự khác biệt và nuôi dưỡng tiềm năng tự nhiên của mỗi em."
  },
  {
    name: "Lữ Minh Trí",
    role: "Đồng sáng lập / CTO",
    avatar:
      "https://pub-f826d697a1694a0dac74ab8db71a8d8d.r2.dev/luminhtri.jpg",
    website: "https://minhtri.profile.io.vn",
    summary:
      "Nhà sáng lập – CEO tại HYPER ONE CO., LTD, đồng thời là cựu sáng lập & Giám đốc quốc gia Oka&Co Interior Singapore. Với nhiều năm làm việc tại Nhật Bản và Singapore trong các vai trò Trưởng Thiết Kế, Quản Lý Dự Án và Trợ lý Chủ tịch Futher Up (Oka Bain Japan), anh tích lũy tư duy hệ thống, kinh nghiệm tối ưu vận hành và năng lực phát triển sản phẩm công nghệ theo chuẩn quốc tế. Khi trở về Việt Nam, anh tập trung xây dựng Hyper One – nền tảng ứng dụng AI vào bài toán doanh nghiệp và giáo dục.",
    details:
      "Trải qua nhiều năm làm việc tại Nhật Bản và Singapore, anh tích lũy kinh nghiệm sâu rộng trong thiết kế hệ thống, quản lý dự án và phát triển sản phẩm công nghệ. Anh từng đảm nhiệm các vị trí quan trọng như Trưởng Thiết Kế, Quản Lý Dự Án và Trợ lý Chủ tịch tại Futher Up (Oka Bain Japan) — một môi trường đòi hỏi chuẩn mực cao, tư duy hệ thống và khả năng tối ưu hóa liên tục. Anh đồng thời là cựu sáng lập & Giám đốc quốc gia Oka&Co Interior Singapore, nơi anh trực tiếp xây dựng đội ngũ, vận hành thị trường và triển khai nhiều dự án thiết kế – công nghệ tại Singapore và Đông Nam Á. Trở về Việt Nam, anh sáng lập Hyper One với định hướng phát triển nền tảng tự động hoá tư duy AI vì con người, ứng dụng AI vào nhiều bài toán thực tế, trong đó có giáo dục như một trong các mảng quan trọng. Tư duy sản phẩm thực chiến cùng kinh nghiệm quốc tế giúp anh xây dựng Hyper One theo hướng công nghệ ứng dụng — thiết thực, linh hoạt và phù hợp với nhu cầu doanh nghiệp và người học.",
  },
];

const TeamSection: React.FC = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <h2 className="text-4xl font-bold text-center mb-12">Đội ngũ sáng lập</h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-4">
        {founders.map((f, i) => (
          <div
            key={i}
            className="rounded-xl shadow-lg p-6 bg-white text-center border border-gray-100"
          >
            <img
              src={f.avatar}
              alt={f.name}
              className="w-40 h-40 object-cover rounded-full mx-auto mb-5"
            />

            <h3 className="text-2xl font-bold">{f.name}</h3>
            <p className="text-red-600 font-semibold text-lg mt-1">{f.role}</p>

            <a
              href={f.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline text-sm block mt-1"
            >
              {f.website}
            </a>

            <p className="mt-4 text-gray-700">{f.summary}</p>

            {expanded === i && (
              <p className="mt-3 text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                {f.details}
              </p>
            )}

            <button
              onClick={() => setExpanded(expanded === i ? null : i)}
              className="mt-4 text-sm text-blue-700 hover:underline"
            >
              {expanded === i ? "Thu gọn" : "Xem thêm…"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
