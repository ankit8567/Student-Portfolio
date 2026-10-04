import React, { useState, useEffect } from 'react';
import { portfolioData, Project, Certificate } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { SkillsSection } from './sections/SkillsSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { CertificationsSection } from './sections/CertificationsSection';
import { CodingJourneySection } from './sections/CodingJourneySection';
import { SocialsSection } from './sections/SocialsSection';
import { ContactSection } from './sections/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { ProjectModal } from './components/ProjectModal';
import { CertificateModal } from './components/CertificateModal';
import { PhotoUploadModal } from './components/PhotoUploadModal';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const [photoModalOpen, setPhotoModalOpen] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState<string | null>(() => {
    try {
      const saved = localStorage.getItem('ankit_portfolio_photo');
      if (saved) return saved;
    } catch (e) {
      // ignore
    }
    return portfolioData.personal.customPhotoUrl || '/profile.jpg';
  });

  const handleUpdatePhoto = (newPhoto: string | null) => {
    setProfilePhoto(newPhoto);
    try {
      if (newPhoto) {
        localStorage.setItem('ankit_portfolio_photo', newPhoto);
      } else {
        localStorage.removeItem('ankit_portfolio_photo');
      }
    } catch (e) {
      // ignore
    }
  };

  // Close modals on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setResumeOpen(false);
        setSelectedProject(null);
        setSelectedCertificate(null);
        setPhotoModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#F7F7F5] text-[#1A1A1A] bg-grain font-sans antialiased selection:bg-neutral-900 selection:text-white">
      {/* Top Fixed Navigation */}
      <Navbar onResumeClick={() => setResumeOpen(true)} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <HeroSection
          onResumeClick={() => setResumeOpen(true)}
          onOpenPhotoModal={() => setPhotoModalOpen(true)}
          profilePhoto={profilePhoto}
        />

        {/* 2. About Me */}
        <AboutSection
          onOpenPhotoModal={() => setPhotoModalOpen(true)}
          profilePhoto={profilePhoto}
        />

        {/* 3. Tech Stack / Skills */}
        <SkillsSection />

        {/* 4. Projects Showcase */}
        <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />

        {/* 5. Experience / Internships */}
        <ExperienceSection />

        {/* 6. Certifications */}
        <CertificationsSection
          onSelectCertificate={(cert) => setSelectedCertificate(cert)}
        />

        {/* 7. LeetCode / Coding Journey */}
        <CodingJourneySection />

        {/* 8. Social / Professional Links */}
        <SocialsSection />

        {/* 9. Contact Section */}
        <ContactSection />
      </main>

      {/* 10. Charcoal Rounded Footer */}
      <Footer />

      {/* Interactive Modals */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />

      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />

      <CertificateModal
        certificate={selectedCertificate}
        isOpen={Boolean(selectedCertificate)}
        onClose={() => setSelectedCertificate(null)}
      />

      <PhotoUploadModal
        isOpen={photoModalOpen}
        onClose={() => setPhotoModalOpen(false)}
        currentPhoto={profilePhoto}
        onUpdatePhoto={handleUpdatePhoto}
      />
    </div>
  );
}
