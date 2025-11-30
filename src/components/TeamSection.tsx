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
      "Nhà sáng lập – CEO tại HAO KIM THUY COMPANY. Hơn 10 năm làm việc tại công ty con của tập đoàn CyberAgent tại Việt Nam, giữ vị trí Trưởng nhóm hỗ trợ nghiệp vụ Internet và tham gia nhiều dự án phát triển quảng cáo.",
    details:
      "Kiều Duy An có hơn 10 năm làm việc tại công ty con của tập đoàn CyberAgent Nhật Bản tại Việt Nam, nơi anh đảm nhiệm vai trò Trưởng nhóm hỗ trợ nghiệp vụ Internet. Môi trường công nghệ cao của Nhật giúp anh tiếp cận những công nghệ tiên tiến và tham gia nhiều dự án phát triển nền tảng số và quảng cáo trực tuyến cho thị trường Việt Nam. Sau đó, anh sáng lập Hao Kim Thùy Company, từng bước xây dựng mô hình kinh doanh dựa trên sự kết hợp giữa vận hành thực tiễn và tư duy công nghệ. Niềm đam mê giáo dục và khát vọng phát triển thế hệ trẻ trong kỷ nguyên số đã thúc đẩy anh sáng lập AI WIZ KIDS, với mong muốn tạo ra môi trường nuôi dưỡng tư duy số – tư duy công nghệ – và khả năng tiếp cận AI từ sớm cho trẻ em Việt Nam. Tầm nhìn của anh là giúp trẻ trở thành công dân số tự tin, thông minh và sẵn sàng cho tương lai trong kỷ nguyên trí tuệ nhân tạo.",
  },
  {
    name: "Trương Thị Hoàng Ngọc",
    role: "Đồng sáng lập / COO",
    avatar:
      "https://pub-f826d697a1694a0dac74ab8db71a8d8d.r2.dev/truongthihoangngoc.jpg",
    website: "https://ngoctruong.profile.io.vn",
    summary:
     "Giáo viên mầm non nhiều năm kinh nghiệm, đồng sáng lập – COO tại HAO KIM THUY COMPANY. Kết hợp chuyên môn sư phạm và tư duy vận hành để xây dựng môi trường giáo dục bền vững, ấm áp, hiệu quả và luôn đặt sự phát triển của trẻ em lên hàng đầu.",

    details:
      "Trương Thị Hoàng Ngọc là giáo viên mầm non giàu kinh nghiệm, được phụ huynh và học sinh yêu mến bởi sự tận tâm và sự đồng hành sâu sắc trong quá trình phát triển của trẻ. Là Đồng sáng lập – COO HAO KIM THUY COMPANY, cô có nhiều kinh nghiệm trong vận hành công ty và xây dựng quy trình. Cô kết hợp giữa chuyên môn sư phạm và tư duy vận hành để tạo nên các quy trình giáo dục mượt mà, chuẩn mực nhưng vẫn giữ được sự thân thiện, ấm áp — phù hợp hoàn hảo với đặc thù trẻ nhỏ. Tại AI WIZ KIDS, cô đóng vai trò định hình phương pháp tiếp cận trẻ, đảm bảo môi trường học tập an toàn – giàu cảm hứng – hiệu quả, giúp trẻ tự tin bước vào thế hệ đầu tiên của kỷ nguyên AI.",
  },
  {
    name: "Lữ Minh Trí",
    role: "Đồng sáng lập / CTO",
    avatar:
      "https://pub-f826d697a1694a0dac74ab8db71a8d8d.r2.dev/luminhtri.jpg",
    website: "https://minhtri.profile.io.vn",
    summary:
      "Nhà sáng lập – CEO HYPER ONE CO., LTD. Cựu sáng lập & Giám đốc quốc gia Oka&Co Interior Singapore. Nhiều năm làm việc tại Nhật – Singapore trong các vai trò Trưởng Thiết Kế, Quản Lý Dự Án và Trợ lý Chủ tịch Futher Up (Oka Bain Japan).",
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
