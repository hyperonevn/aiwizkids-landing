import React, { useEffect, useRef } from 'react';
import { SparklesIcon, ArrowRightIcon, BrainIcon } from 'lucide-react';

export function Hero() {
  const scrollToForm = () => {
    document.getElementById('registration-form')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // ================== CANVAS: Neural Glow + Energy Waves ==================
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();

    const colors = ['#00B4FF', '#F8AF4C', '#8B5CF6'];

    const nodes = Array.from({ length: 55 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      color: colors[Math.floor(Math.random() * colors.length)]
    }));

    let t = 0;

    function draw() {
      t += 0.01;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Background subtle glow waves
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.arc(
          canvas.width / 2,
          canvas.height / 2,
          180 + Math.sin(t + i) * 40,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = `rgba(0, 180, 255, ${0.06 - i * 0.015})`;
        ctx.fill();
      }

      // Nodes + movement
      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;

        const glow = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, 8);
        glow.addColorStop(0, n.color);
        glow.addColorStop(1, 'transparent');

        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(n.x, n.y, 4, 0, Math.PI * 2);
        ctx.fill();
      });

      // Connections
      ctx.lineWidth = 0.55;
      nodes.forEach((a) => {
        nodes.forEach((b) => {
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dy + dy * dy + 0.0001);

          if (dist < 120) {
            const alpha = 1 - dist / 120;
            ctx.strokeStyle = `${a.color + Math.floor(alpha * 180).toString(16)}`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(draw);
    }

    draw();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  // ======================= UI =======================
  return (
    <section className="relative w-full bg-white py-28 px-6 overflow-hidden">

      {/* LIGHT AURAS */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-20 w-96 h-96 bg-[#00B4FF]/15 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-20 w-[500px] h-[500px] bg-[#F8AF4C]/20 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* LEFT TEXT */}
          <div className="space-y-9">

            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00B4FF]/10 to-[#F8AF4C]/10 text-[#00B4FF] px-5 py-2 rounded-full text-sm font-semibold">
              <SparklesIcon className="w-4 h-4 text-[#F8AF4C]" />
              Giáo dục công nghệ AI cho trẻ em
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
              <span className="text-[#00B4FF]">AI</span>
              <span className="text-gray-900"> Wiz </span>
              <span className="text-[#F8AF4C]">Kids</span>
            </h1>

            <p className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-[#00B4FF] to-[#F8AF4C] text-transparent bg-clip-text">
              Học AI – Hiểu AI – Điều khiển AI
            </p>

            <p className="text-xl text-gray-700 font-medium italic">
              “AI là công cụ – Con người là trung tâm”
            </p>

            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              Chương trình giáo dục AI toàn diện cho trẻ 4–17 tuổi,
              giúp các em làm chủ công nghệ thông qua dự án thực tế,
              tư duy sáng tạo và khả năng giải quyết vấn đề.
            </p>

            <button
              onClick={scrollToForm}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#00B4FF] to-[#F8AF4C] text-white px-12 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-[0_0_40px_rgba(0,180,255,0.45)] transition-all transform hover:scale-[1.06]"
            >
              Đăng ký học thử miễn phí
              <ArrowRightIcon className="w-5 h-5" />
            </button>
          </div>

          {/* RIGHT CANVAS */}
          <div className="relative flex flex-col items-center">
            <div className="relative z-10 bg-white border border-gray-100 rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.05)] p-7 overflow-hidden">
              <canvas
                ref={canvasRef}
                className="w-full h-[440px] rounded-2xl"
              />
            </div>

            <div className="mt-6 text-center text-gray-700 text-sm leading-relaxed max-w-sm">
              <p className="font-semibold text-gray-900 mb-1">
                🧠 Mô phỏng mạng nơ-ron & năng lượng AI
              </p>
              <p>Các nút sáng + kết nối tạo ra chuyển động “AI living system”.</p>
              <p className="mt-2 text-xs text-gray-500 italic">
                Logic – Data – Neural – Creativity – Machine Learning
              </p>
            </div>

            <div className="absolute -top-10 -right-10 w-72 h-72 bg-[#00B4FF]/15 blur-[120px] rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-[#F8AF4C]/15 blur-[120px] rounded-full" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 text-[#00B4FF]/20">
        <BrainIcon className="w-16 h-16" />
      </div>
    </section>
  );
}
