import React from 'react';

// Core sections
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import OurStory from './components/OurStory';
import TeamSection from './components/TeamSection';
import { MissionVision } from './components/MissionVision';
import { LearningPaths } from './components/LearningPaths';
import { Features } from './components/Features';
import { Dashboard } from './components/Dashboard';
import { RegistrationForm } from './components/RegistrationForm';
import { PartnerSection } from './components/PartnerSection';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="w-full min-h-screen bg-white overflow-x-hidden">

      <Header />

      {/* 1. Hero */}
      <Hero />

      {/* 2. Giới thiệu ngắn */}
      <About />

      {/* 3. Câu chuyện AI Wiz Kids */}
      <OurStory />

      {/* 4. Đội ngũ sáng lập */}
      <TeamSection />

      {/* 5. Sứ mệnh và Tầm nhìn */}
      <MissionVision />

      {/* 6. Lộ trình học */}
      <LearningPaths />

      {/* 7. Tính năng nổi bật */}
      <Features />

      {/* 8. Dashboard */}
      <Dashboard />

      {/* 9. Form đăng ký */}
      <RegistrationForm />

      {/* 10. Đối tác */}
      <PartnerSection />

      <Footer />
    </div>
  );
}
