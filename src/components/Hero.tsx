import React, { useEffect, useRef } from 'react';
import { SparklesIcon, ArrowRightIcon, BrainIcon } from 'lucide-react';

export function Hero() {
  const scrollToForm = () => {
    document.getElementById('registration-form')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // ===== Canvas chuyển động AI =====
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

    const width = canvas.width;
    const height = canvas.height;

    const keywords = [
      'Logic', 'Data', 'AI', 'Neural', 'Human', 'Vision',
      'Code', 'Creativity', 'Machine', 'Learning', 'Future', 'Ethics'
    ];

    const colors = ['#00B4FF', '#F8AF4C', '#FF6AC1', '#8B5CF6', '#00FFB7'];

    const nodes = Array.from({ length: 45 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.7,
      vy: (Math.random() - 0.5) * 0.7,
      color: colors[Math.floor(Math.random() * colors.length)],
      label: Math.random() < 0.25 ? keywords[Math.floor(Math.random() * keywords.length)] : null
    }));

    function draw() {
      ctx.clearRect(0, 0, width, height);

      // Nền nhẹ
      ctx.fillStyle = 'rgba(255,255,255,0.5)';
      ctx.fillRect(0, 0, width, height);

      // Nút sáng
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, 6);
        grad.addColorStop(0, n.color);
        grad.addColorStop(1, 'transparent');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(n.x, n.y, 3.5, 0, Math.PI * 2);
        ctx.fill();

        // Gắn nhãn từ khóa
        if (n.label) {
          ctx.font = '10px Poppins, sans-serif';
          ctx.fillStyle = 'rgba(20,20,20,0.8)';
          ctx.fillText(n.label, n.x + 8, n.y + 3);
        }
      }

      // Đường kết nối
      for (const a of nodes) {
        for (const b of nodes) {
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) {
            const alpha = 1 - dist / 110;
            ctx.strokeStyle = a.color.replace('#', '#') + Math.floor(alpha * 180).toString(16);
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(draw);
    }
    draw();

    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <section className="relative w-full bg-gradient-to-br from-[#fdfbff] via-[#f4faff] to-[#fff9f2] py-24 px-6 overflow-hidden">
      {/* Ánh sáng nền */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-0 w-72 h-72 bg-[#00B4FF]/20 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#F8AF4C]/20 blur-3xl rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* --- Text trái --- */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00B4FF]/10 to-[#F8AF4C]/10 text-[#00B4FF] px-4 py-2 rounded-full text-sm font-semibold tracking-wide">
              <SparklesIcon className="w-4 h-4 text-[#F8AF4C]" />
              Giáo dục công nghệ AI cho trẻ em
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              <span className="text-[#00B4FF] drop-shadow-sm">AI</span>
              <span className="text-gray-900"> Wiz </span>
              <span className="text-[#F8AF4C]">Kids</span>
            </h1>

            <p className="text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#00B4FF] to-[#F8AF4C]">
              Học AI – Hiểu AI – Điều khiển AI
            </p>

            <p className="text-xl text-gray-700 font-medium italic">
              “AI là công cụ – Con người là trung tâm”
            </p>

            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              Chương trình giáo dục công nghệ toàn diện cho trẻ từ 4–17 tuổi, 
              giúp các em làm quen, hiểu và làm chủ AI thông qua các 
              dự án học tập thực tế, sáng tạo và đầy cảm hứng.
            </p>

            <button
              onClick={scrollToForm}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#00B4FF] to-[#F8AF4C] text-white px-10 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-[0_0_35px_rgba(0,180,255,0.4)]"
            >
              Đăng ký học thử miễn phí
              <ArrowRightIcon className="w-5 h-5" />
            </button>
          </div>

          {/* --- Canvas AI + chú thích --- */}
          <div className="relative flex flex-col items-center">
            <div className="relative z-10 bg-white rounded-3xl shadow-[0_0_30px_rgba(0,0,0,0.08)] p-6 overflow-hidden">
              <canvas ref={canvasRef} className="w-full h-[420px] rounded-2xl" />
            </div>

            {/* --- Chú thích dễ hiểu --- */}
            <div className="mt-6 text-center text-gray-700 text-sm leading-relaxed max-w-sm">
              <p className="font-semibold text-gray-900 mb-1">
                🧠 Mô phỏng mạng nơ-ron nhân tạo (Artificial Neural Network)
              </p>
              <p>
                Mỗi điểm sáng là một “nút” trong mạng AI.  
                Các đường nối biểu diễn cách AI “học” và “liên kết dữ liệu”.
              </p>
              <p className="mt-2 text-xs text-gray-500 italic">
                Logic – Data – Machine Learning – Human – Creativity
              </p>
            </div>

            {/* Hiệu ứng sáng quanh */}
            <div className="absolute -top-10 -right-10 w-80 h-80 bg-[#00B4FF]/20 blur-3xl rounded-full"></div>
            <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-[#F8AF4C]/20 blur-3xl rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Icon nền */}
      <div className="absolute bottom-6 right-6 text-[#00B4FF]/20">
        <BrainIcon className="w-16 h-16" />
      </div>
    </section>
  );
}
