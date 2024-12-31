"use client";

import { useState, useEffect, useRef, useMemo, lazy, Suspense, useCallback } from "react";
import { Github, Linkedin, ExternalLink, FileText, ArrowRight, Eye } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { AnimatePresence } from "framer-motion";
import { Dialog, DialogContent, DialogTitle } from "@radix-ui/react-dialog";
import rehypeRaw from 'rehype-raw';

// Lazy load components
const ReactMarkdown = lazy(() => import('react-markdown'));

const AnimatedBackdrop = dynamic(() => import("../components/AnimatedBackdrop"), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-[#1a0b2e]" />,
});

interface TechStack {
  name: string;
  icon: string;
}

const getDevIcon = (tech: string): string => {
  const iconMap: { [key: string]: string } = {
    'Java': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg',
    'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    'C#': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
    '.NET': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg',
    'SQL Server': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg',
    'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    'Bootstrap': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
    'AWS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg'
  };

  return iconMap[tech] || '';
};

interface Project {
  id: string;
  title: string;
  description: string;
  media: {
    type: 'image' | 'video';
    src: string;
  };
  link: string;
  techStack: TechStack[];
}

const projects: Project[] = [
  {
    id: "student-marking",
    title: "Student Mark Management System",
    description: "A multi-tier academic management platform with robust security and optimized data access.",
    media: {
      type: "image",
      src: "/images/thumbnails/student-mark-management.png"
    },
    link: "https://github.com/DhakalAsace/studentmarktracker",
    techStack: [
      { name: "Java", icon: getDevIcon("Java") },
      { name: "PostgreSQL", icon: getDevIcon("PostgreSQL") },
    ],
  },
  {
    id: "uno-card-game",
    title: "UNO Card Game",
    description: "Interactive card game with real-time game state management and design patterns.",
    media: {
      type: "video",
      src: "/videos/uno-demo.mp4"
    },
    link: "https://github.com/DhakalAsace/UnoCardGame",
    techStack: [
      { name: "C#", icon: getDevIcon("C#") },
      { name: ".NET", icon: getDevIcon(".NET") },
    ],
  },
  {
    id: "hospital-dbms",
    title: "Hospital Database Management System",
    description: "Designed a normalized database schema for complex healthcare data.",
    media: {
      type: "image",
      src: "/images/thumbnails/hospital-dbms.jpg"
    },
    link: "https://github.com/DhakalAsace/HospitalDatabase",
    techStack: [
      { name: "SQL Server", icon: getDevIcon("SQL Server") },
    ],
  },
  
  {
    id: "harmony-hub",
    title: "Harmony Hub",
    description: "A full-stack wellness platform.",
    media: {
      type: "image",
      src: "/images/thumbnails/harmony-hub.png"
    },
    link: "https://github.com/DhakalAsace/HarmonyHub",
    techStack: [
      { name: "Node.js", icon: getDevIcon("Node.js") },
      { name: "React", icon: getDevIcon("React") },
      { name: "MongoDB", icon: getDevIcon("MongoDB") },
      { name: "Bootstrap", icon: getDevIcon("Bootstrap") },
    ],
  },
  {
    id: "cloud-infrastructure-deployment",
    title: "Cloud Infrastructure Deployment",
    description: "Architected highly available infrastructure using VPC, public-private subnets, and secure routing.",
    media: {
      type: "image",
      src: "/images/thumbnails/cloud-infra.jpg"
    },
    link: "https://github.com/DhakalAsace/cloud-project",
    techStack: [
      { name: "AWS", icon: getDevIcon("AWS") },
    ],
  }
];

interface ProjectCardProps {
  project: Project;
  onShowCaseStudy: (index: number) => void;
  index: number;
}

const ProjectCard = ({ project, onShowCaseStudy, index }: ProjectCardProps) => (
  <div className="group relative bg-white/5 rounded-xl p-6 transition-all duration-300 hover:bg-white/10 hover:shadow-glow animate-fade-in">
    <div className="aspect-video relative rounded-lg overflow-hidden mb-4">
      {project.media.type === 'video' ? (
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={project.media.src} type="video/mp4" />
        </video>
      ) : (
        <Image
          src={project.media.src}
          alt={project.title}
          fill={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          priority={index < 2}  // Prioritize loading first 2 images
        />
      )}
    </div>
    <h3 className="text-xl font-bold font-playfair mb-2">{project.title}</h3>
    <p className="text-purple-200/90 mb-4 font-poppins">{project.description}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {project.techStack.map((tech, techIndex) => (
        <div key={techIndex} className="flex items-center bg-purple-700/20 px-3 py-1 rounded-full">
          <Image
            src={tech.icon}
            alt={tech.name}
            width={24}
            height={24}
            className="rounded-sm"
          />
          <span className="text-sm">{tech.name}</span>
        </div>
      ))}
    </div>
    <div className="flex items-center gap-4">
      <Link
        href={project.link}
        className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Project <ExternalLink className="w-4 h-4" />
      </Link>
      <button
        onClick={() => onShowCaseStudy(index)}
        className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors"
      >
        Case Study <Eye className="w-4 h-4" /> {/* or use ChevronRight or ArrowRight */}
      </button>
    </div>
  </div>
);

// Add new interface for recommendations
interface Recommendation {
  name: string;
  title: string;
  company: string;
  content: string;
  fullContent?: string;
  type: 'linkedin' | 'letter';
  image?: string;
  letterPdfUrl?: string;
  letterImageUrl?: string;
}

// Update recommendations data
const recommendations: Recommendation[] = [
  {
    name: "Bappa Shah",
    title: "CEO",
    company: "Leading Edge Software",
    content: "I am pleased to recommend Mr. Ashesh Dhakal, who has been an invaluable asset to Leading Edge Software Pvt. Ltd. during his tenure with us. Ashesh's technical prowess, combined with his dedication and proactive approach, has significantly contributed to the success of numerous projects...",
    fullContent: "I am pleased to recommend Mr. Ashesh Dhakal, who has been an invaluable asset to Leading Edge Software Pvt. Ltd. during his tenure with us. Ashesh's technical prowess, combined with his dedication and proactive approach, has significantly contributed to the success of numerous projects. One of Ashesh's most notable strengths is his problem-solving capability. He approaches problems analytically and can quickly identify the root causes of issues, providing effective and efficient solutions. This skill has been instrumental in meeting project deadlines and maintaining client satisfaction. Ashesh Dhakal is a dedicated, skilled, and innovative professional who would be a tremendous addition to any team. I am confident that he will continue to excel and make significant contributions in his future endeavors.",
    type: "linkedin",
    image: "/images/Bappa.jpg" // Add LinkedIn profile image if available
  },
  {
    name: "Supervisor",
    title: "Supervisor, Customer Care",
    company: "Elexicon Energy",
    content: "Ashesh joined Elexicon Energy as a Customer Experience Advisor... He displayed an eagerness to take on additional tasks and excelled in a fast-paced environment...",
    type: "letter",
    letterImageUrl: "/images/Letters/Reco-Letter.png"
  }
];

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'recommendations', label: 'Recommendations' }
];

// Update navigation component
const Navigation = ({ isMobile = false, activeSection }: { isMobile?: boolean, activeSection: string }) => (
  <nav className={`fixed ${isMobile ? 'bottom-8 left-1/2 -translate-x-1/2' : 'right-6 top-1/2 -translate-y-1/2'} z-50`}>
    <div className={`flex ${isMobile ? 'flex-row' : 'flex-col'} items-center gap-4 
                    bg-white/5 backdrop-blur-sm rounded-full p-3 border border-white/10`}>
      {sections.map(section => (
        <button
          key={section.id}
          onClick={() => {
            document.getElementById(section.id)?.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
          }}
          className="group relative flex items-center"
        >
          <span className={`absolute ${isMobile ? 'bottom-full mb-2' : 'right-full mr-4'} 
                        px-2 py-1 rounded-md bg-white/5 text-sm text-purple-200/70 
                        opacity-0 group-hover:opacity-100 transition-all duration-300
                        whitespace-nowrap`}>
            {section.label}
          </span>
          <div className={`w-3 h-3 rounded-full transition-all duration-300
                        ${activeSection === section.id 
                          ? 'bg-pink-400 scale-125' 
                          : 'bg-white/20 hover:bg-white/40'}`} 
          />
        </button>
      ))}
    </div>
  </nav>
);

export default function Page() {
  const [activeCaseStudy, setActiveCaseStudy] = useState<number | null>(null);
  const [caseStudyContent, setCaseStudyContent] = useState<string | null>(null);
  const [showLetterModal, setShowLetterModal] = useState(false);
  const [activeRecommendation, setActiveRecommendation] = useState<Recommendation | null>(null);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    if (activeCaseStudy !== null) {
      const projectId = projects[activeCaseStudy].id;
      fetch(`/api/case-study?id=${projectId}`)
        .then(res => res.json())
        .then(data => setCaseStudyContent(data.content));
    }
  }, [activeCaseStudy]);

  const handleShowCaseStudy = (index: number) => {
    setActiveCaseStudy(index === activeCaseStudy ? null : index);
  };

  useEffect(() => {
    const observerOptions = {
      // More granular thresholds for better detection
      threshold: [0, 0.25, 0.5, 0.75, 1],
      rootMargin: '-20% 0px'
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Find the most visible section
          const visibleEntries = Array.from(document.querySelectorAll('section'))
            .map(section => {
              const rect = section.getBoundingClientRect();
              const windowHeight = window.innerHeight;
              const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
              const visibleRatio = visibleHeight / windowHeight;
              return {
                id: section.id,
                ratio: visibleRatio
              };
            })
            .filter(entry => entry.ratio > 0)
            .sort((a, b) => b.ratio - a.ratio);

          if (visibleEntries.length > 0) {
            setActiveSection(visibleEntries[0].id);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    sections.forEach(section => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    // Set initial active section based on scroll position
    const setInitialActiveSection = () => {
      const visibleSection = sections.find(section => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
        }
        return false;
      });
      if (visibleSection) {
        setActiveSection(visibleSection.id);
      }
    };

    setInitialActiveSection();
    window.addEventListener('scroll', setInitialActiveSection);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', setInitialActiveSection);
    };
  }, []);

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <Navigation activeSection={activeSection} />
      </div>

      {/* Mobile Navigation */}
      <div className="block md:hidden">
        <Navigation isMobile activeSection={activeSection} />
      </div>

      <main className="relative min-h-screen bg-gradient-to-b from-[#1a0b2e] to-[#1a0b4e] text-white overflow-x-hidden">
        <AnimatedBackdrop />

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

        {/* Hero Section */}
        <section id="hero" className="relative min-h-screen py-20 px-4 scroll-mt-20">
          <div className="w-full max-w-3xl mx-auto text-center space-y-8">
            <div className="relative w-56 h-56 mx-auto mb-8 image-container">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-purple-600 opacity-50" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10">
                <Image
                  src="/images/profile/Ashesh Dhakal.png"
                  alt="Ashesh Dhakal"
                  fill
                  className="object-cover object-[center_top] scale-125"
                  priority
                  sizes="(max-width: 768px) 224px, 224px"
                />
                <div className="image-overlay rounded-full"></div>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-pink-400 font-script text-xl animate-fade-in">Hello, I am</p>
              <h1 className="font-montserrat text-3xl md:text-4xl font-bold tracking-tight">
                <span className="name-sweep">Ashesh Dhakal</span>
              </h1>
              <p className="font-poppins max-w-2xl mx-auto text-lg md:text-xl text-purple-200/90 leading-relaxed animate-fade-in-slow">
                A versatile full-stack developer proficient in a wide range of front-end and back-end
                technologies, frameworks, databases, and industry best practices.
              </p>
            </div>

            <div className="flex items-center justify-center gap-8 pt-8 animate-fade-in-slow">
              <Link
                href="https://github.com/dhakalasace"
                className="p-3 rounded-full hover:bg-white/10 transition-all hover:scale-110 hover:shadow-glow"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-8 h-8" />
                <span className="sr-only">GitHub Profile</span>
              </Link>
              <Link
                href="https://linkedin.com/in/asheshdhakal"
                className="p-3 rounded-full hover:bg-white/10 transition-all hover:scale-110 hover:shadow-glow"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* <Twitter className="w-8 h-8" />
                <span className="sr-only">Twitter Profile</span>
              </Link>
              <Link
                href="https://linkedin.com/in/asheshdhakal"
                className="p-3 rounded-full hover:bg-white/10 transition-all hover:scale-110 hover:shadow-glow"
                target="_blank"
                rel="noopener noreferrer"
              > */}
                <Linkedin className="w-8 h-8" />
                <span className="sr-only">LinkedIn Profile</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="relative min-h-screen py-20 px-4 scroll-mt-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-12 animate-title">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index}>
                  <ProjectCard
                    project={project}
                    index={index}
                    onShowCaseStudy={handleShowCaseStudy}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recommendations Section */}
        <section id="recommendations" className="relative min-h-screen py-20 px-4 scroll-mt-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-16 animate-title">
              Recommendations
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {recommendations.map((rec, index) => (
                <div 
                  key={index}
                  className="group bg-white/5 rounded-xl p-6 backdrop-blur-sm 
                             border border-purple-500/20 hover:bg-white/10 
                             transition-all duration-300 hover:shadow-glow 
                             animate-fade-in cursor-pointer"
                  onClick={() => {
                    if (rec.type === 'letter') {
                      setActiveRecommendation(rec);
                      setShowLetterModal(true);
                    }
                  }}
                >
                  <div className="flex items-start gap-4">
                    {rec.type === 'linkedin' ? (
                      <div className="flex flex-col items-center">
                        <Linkedin className="w-8 h-8 text-[#0077b5] mb-2" />
                        <span className="text-xs text-purple-200/70">LinkedIn</span>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center">
                        <FileText className="w-8 h-8 text-pink-400 mb-2" />
                        <span className="text-xs text-purple-200/70">Letter</span>
                      </div>
                    )}
                    <div>
                      <h3 className="text-xl font-bold text-purple-200">{rec.name}</h3>
                      <p className="text-pink-400">{rec.title}</p>
                      <p className="text-sm text-purple-200/70 mb-4">{rec.company}</p>
                      <p className="text-purple-100/90 leading-relaxed">
                        &ldquo;{rec.content}&rdquo;
                      </p>
                      
                      {rec.type === 'letter' && (
                        <button className="mt-4 text-sm text-pink-400 hover:text-pink-300 
                                         flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                          View Full Letter <ArrowRight className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            
          </div>

          {/* Letter Modal */}
          {showLetterModal && activeRecommendation && (
            <Dialog open={showLetterModal} onOpenChange={() => setShowLetterModal(false)}>
              <DialogContent className="fixed inset-4 lg:inset-auto lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 
                                        w-[calc(100%-2rem)] lg:w-[90vw] lg:max-w-4xl h-[calc(100vh-2rem)] 
                                        bg-gradient-to-b from-[#1a0b2e]/95 to-[#1a0b4e]/95 rounded-xl 
                                        border border-purple-500/20 shadow-2xl backdrop-blur-xl overflow-hidden">
                <div className="sticky top-0 z-30 flex items-center justify-between p-4 lg:p-6 bg-[#1a0b2e]/90 backdrop-blur-sm border-b border-purple-500/20">
                  <DialogTitle className="text-xl lg:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
                    Letter of Recommendation - {activeRecommendation?.company}
                  </DialogTitle>
                  <button 
                    onClick={() => setShowLetterModal(false)}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="h-[calc(100%-4rem)] p-6 overflow-y-auto">
                  <Image
                    src={activeRecommendation?.letterImageUrl || ''}
                    alt={`Letter of Recommendation from ${activeRecommendation?.company}`}
                    width={800}
                    height={1200}
                    className="w-full h-auto rounded-lg mb-6"
                  />
                  <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                    <p className="text-purple-200/70">
                      For access to original recommendation letters or contact information of my references,
                      please <Link href="mailto:dhakalasace777@email.com" className="text-pink-400 hover:text-pink-300">reach out to me</Link>.
                    </p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          )}
        </section>

        {/* Case Study Modal */}
        <AnimatePresence>
          {activeCaseStudy !== null && caseStudyContent && (
            <Suspense fallback={<div className="animate-pulse bg-white/10 rounded-lg h-96" />}>
              <CaseStudyModal
                isOpen={true}
                onClose={() => setActiveCaseStudy(null)}
                content={caseStudyContent}
              />
            </Suspense>
          )}
        </AnimatePresence>
      </main>
    </>
  );
}

const useParseSections = (content: string) => {
  return useMemo(() => {
    if (!content) return [];
    const headings = content.match(/^(#{1,3})\s+(.+)$/gm) || [];
    return headings.map(heading => ({
      id: heading.replace(/^#{1,3}\s+/, '').trim().toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      title: heading.replace(/^#{1,3}\s+/, '').trim(),
      level: (heading.match(/^#+/) || [''])[0].length
    }));
  }, [content]);
};

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: string;
}

function CaseStudyModal({ isOpen, onClose, content }: CaseStudyModalProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState('');
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const sections = useParseSections(content);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element && contentRef.current) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + contentRef.current.scrollTop - headerOffset;
      
      contentRef.current.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
      setIsMobileNavOpen(false);
    }
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="fixed inset-4 lg:inset-auto lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 w-[calc(100%-2rem)] lg:w-[90vw] lg:max-w-5xl h-[calc(100vh-2rem)] bg-gradient-to-b from-[#1a0b2e]/95 to-[#1a0b4e]/95 rounded-xl border border-purple-500/20 shadow-2xl backdrop-blur-xl overflow-hidden">
        <div className="sticky top-0 z-30 flex items-center justify-between p-4 lg:p-6 bg-[#1a0b2e]/90 backdrop-blur-sm border-b border-purple-500/20">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
              className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <DialogTitle className="text-xl lg:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
              Case Study Details
            </DialogTitle>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex h-[calc(100%-4rem)]">
          {/* Mobile Navigation */}
          <div className={`
            fixed inset-y-0 left-0 z-50 w-64 bg-[#1a0b2e] border-r border-purple-500/20
            transform transition-transform duration-300 lg:hidden
            ${isMobileNavOpen ? 'translate-x-0' : '-translate-x-full'}
          `}>
            <nav className="p-6 overflow-y-auto h-full">
              {sections.map(({ id, title, level }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`
                    w-full text-left px-3 py-2 rounded-lg transition-all
                    ${activeSection === id ? 'bg-purple-500/20 text-white' : 'text-purple-200/60 hover:bg-purple-500/10'}
                    ${level === 2 ? 'pl-6' : level === 3 ? 'pl-9' : ''}
                  `}
                >
                  {title}
                </button>
              ))}
            </nav>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block w-64 border-r border-purple-500/20 p-6 overflow-y-auto">
            {sections.map(({ id, title, level }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`
                  w-full text-left px-3 py-2 rounded-lg transition-all
                  ${activeSection === id ? 'bg-purple-500/20 text-white' : 'text-purple-200/60 hover:bg-purple-500/10'}
                  ${level === 2 ? 'pl-6' : level === 3 ? 'pl-9' : ''}
                `}
              >
                {title}
              </button>
            ))}
          </nav>

          {/* Content */}
          <div ref={contentRef} className="flex-1 overflow-y-auto px-6 py-4 custom-scrollbar">
            <div className="prose prose-invert prose-lg max-w-none">
              <ReactMarkdown
                rehypePlugins={[rehypeRaw]}
                components={{
                  h1: ({children}) => (
                    <h1 id={children?.toString().toLowerCase().replace(/[^a-z0-9]+/g, '-')}
                        className="scroll-mt-24 text-3xl font-bold mb-6 text-white">
                      {children}
                    </h1>
                  ),
                  h2: ({children}) => (
                    <h2 id={children?.toString().toLowerCase().replace(/[^a-z0-9]+/g, '-')}
                        className="scroll-mt-24 text-2xl font-semibold mt-8 mb-4 text-purple-200">
                      {children}
                    </h2>
                  ),
                  h3: ({children}) => (
                    <h3 id={children?.toString().toLowerCase().replace(/[^a-z0-9]+/g, '-')}
                        className="scroll-mt-24 text-xl font-medium mt-6 mb-3 text-pink-200">
                      {children}
                    </h3>
                  ),
                  p: ({children}) => (
                    <p className="text-purple-100/90 leading-relaxed mb-4">
                      {children}
                    </p>
                  ),
                  div: ({className, children, ...props}) => {
                    if (className === 'video-container') {
                      return (
                        <div className="aspect-video relative rounded-lg overflow-hidden mb-4">
                          {children}
                        </div>
                      );
                    }
                    return <div className={className} {...props}>{children}</div>;
                  },
                }}
              >
                {content}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
