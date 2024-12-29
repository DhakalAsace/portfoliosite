import { Github, Twitter, Linkedin, ExternalLink } from 'lucide-react';
import Link from "next/link";
import Image from "next/image";
import { AnimatedBackdrop } from "../components/AnimatedBackdrop";

const Head = () => (
  <>
    <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet" />
  </>
);

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const ProjectCard = ({ title, description, image, link }: ProjectCardProps) => (
  <div className="group relative bg-white/5 rounded-xl p-6 transition-all duration-300 hover:bg-white/10 hover:shadow-glow animate-fade-in">
    <div className="aspect-video relative rounded-lg overflow-hidden mb-4 image-container">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="image-overlay rounded-lg"></div>
    </div>
    <h3 className="text-xl font-bold font-playfair mb-2">{title}</h3>
    <p className="text-purple-200/90 mb-4 font-poppins">{description}</p>
    <Link 
      href={link}
      className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      View Project <ExternalLink className="w-4 h-4" />
    </Link>
  </div>
);

export default function Page() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with Next.js, featuring real-time inventory management and secure payment processing.",
      image: "/api/placeholder/640/360",
      link: "#"
    },
    {
      title: "AI Task Manager",
      description: "Smart task management application leveraging machine learning for intelligent task prioritization and scheduling.",
      image: "/api/placeholder/640/360",
      link: "#"
    },
    {
      title: "Social Media Dashboard",
      description: "Unified dashboard for managing multiple social media accounts with analytics and automated posting features.",
      image: "/api/placeholder/640/360",
      link: "#"
    }
  ];

  return (
    <>
      <Head />
      <main className="relative min-h-screen bg-gradient-to-b from-[#1a0b2e] to-[#1a0b4e] text-white overflow-x-hidden">
        <AnimatedBackdrop />

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col items-center justify-center p-4">
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
              <p className="text-pink-400 font-script text-xl animate-fade-in">Hello, I'm</p>
              <h1 className="font-montserrat text-3xl md:text-4xl font-bold tracking-tight">
                <span className="name-sweep">Ashesh Dhakal</span>
              </h1>
              <p className="font-poppins max-w-2xl mx-auto text-lg md:text-xl text-purple-200/90 leading-relaxed animate-fade-in-slow">
                A versatile full-stack developer proficient in a wide range of front-end and back-end technologies, frameworks, databases, and industry best practices.
              </p>
            </div>

            <div className="flex items-center justify-center gap-8 pt-8 animate-fade-in-slow">
              <Link
                href="https://github.com"
                className="p-3 rounded-full hover:bg-white/10 transition-all hover:scale-110 hover:shadow-glow"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-8 h-8" />
                <span className="sr-only">GitHub Profile</span>
              </Link>
              <Link
                href="https://twitter.com"
                className="p-3 rounded-full hover:bg-white/10 transition-all hover:scale-110 hover:shadow-glow"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="w-8 h-8" />
                <span className="sr-only">Twitter Profile</span>
              </Link>
              <Link
                href="https://linkedin.com"
                className="p-3 rounded-full hover:bg-white/10 transition-all hover:scale-110 hover:shadow-glow"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-8 h-8" />
                <span className="sr-only">LinkedIn Profile</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-12 animate-title">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
