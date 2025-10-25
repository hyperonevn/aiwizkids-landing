import React from 'react';

// --- Import Header và các section chính ---
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { LearningPaths } from './components/LearningPaths';
import { Features } from './components/Features';
import { Dashboard } from './components/Dashboard';
import { RegistrationForm } from './components/RegistrationForm';
import { MissionVision } from './components/MissionVision';
import { PartnerSection } from './components/PartnerSection';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="w-full min-h-screen bg-white overflow-x-hidden">
      {/* --- Header HYPER ONE --- */}
      <Header />

      {/* --- Hero Section --- */}
      <Hero />

      {/* --- Giới thiệu về chương trình --- */}
      <About />

      {/* --- Lộ trình học --- */}
      <LearningPaths />

      {/* --- Tính năng nổi bật --- */}
      <Features />

      {/* --- Dashboard mô phỏng học tập --- */}
      <Dashboard />

      {/* --- Form đăng ký --- */}
      <RegistrationForm />

      {/* --- Sứ mệnh & Tầm nhìn --- */}
      <MissionVision />

      {/* --- Đối tác công nghệ: HYPER ONE --- */}
      <PartnerSection />

      {/* --- Footer --- */}
      <Footer />
    </div>
  );
}
