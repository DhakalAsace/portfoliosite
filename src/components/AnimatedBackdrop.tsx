'use client';

import { useEffect, useRef, useMemo } from 'react';

interface Vector2D {
  x: number;
  y: number;
}

interface Particle {
  position: Vector2D;
  velocity: Vector2D;
  acceleration: Vector2D;
  size: number;
  baseSize: number;
  color: string;
  alpha: number;
  life: number;
  maxLife: number;
  grow: boolean;
}

export function AnimatedBackdrop() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mousePosRef = useRef<Vector2D | null>(null);

  const colors = useMemo(() => [
    '#FF66CC', // Bright Pink
    '#9933FF', // Purple
    '#6600FF', // Electric Indigo
    '#FF3399', // Vibrant Pink
    '#CC66FF', // Soft Purple
  ], []);

  const createParticle = (x: number, y: number): Particle => {
    const color = colors[Math.floor(Math.random() * colors.length)];
    const size = 1 + Math.random() * 2;
    const life = 200 + Math.random() * 100;

    return {
      position: { x, y },
      velocity: { x: Math.random() * 1 - 0.5, y: Math.random() * 1 - 0.5 },
      acceleration: { x: 0, y: 0 },
      size,
      baseSize: size,
      color,
      alpha: 1,
      life,
      maxLife: life,
      grow: Math.random() > 0.5,
    };
  };

  const updateParticle = (particle: Particle, dimensions: { width: number; height: number }) => {
    particle.life--;
    particle.alpha = particle.life / particle.maxLife;

    // Bounce off walls
    if (particle.position.x < 0 || particle.position.x > dimensions.width) {
      particle.velocity.x *= -1;
    }
    if (particle.position.y < 0 || particle.position.y > dimensions.height) {
      particle.velocity.y *= -1;
    }

    // Update position and velocity
    particle.velocity.x += particle.acceleration.x;
    particle.velocity.y += particle.acceleration.y;
    particle.position.x += particle.velocity.x;
    particle.position.y += particle.velocity.y;

    // Size oscillation
    if (particle.grow) {
      particle.size += 0.05;
      if (particle.size > particle.baseSize * 1.5) particle.grow = false;
    } else {
      particle.size -= 0.05;
      if (particle.size < particle.baseSize * 0.5) particle.grow = true;
    }

    // Reset acceleration
    particle.acceleration.x = 0;
    particle.acceleration.y = 0;

    // Reinitialize dead particles
    if (particle.life <= 0) {
      const { width, height } = dimensions;
      Object.assign(particle, createParticle(Math.random() * width, Math.random() * height));
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const updateDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      particlesRef.current = Array.from({ length: 150 }, () =>
        createParticle(Math.random() * canvas.width, Math.random() * canvas.height)
      );
    };

    const handleMouseMove = (e: MouseEvent) => {
      mousePosRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
      mousePosRef.current = null;
    };

    window.addEventListener('resize', updateDimensions);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    updateDimensions();

    const gradientColors = ['#1a0033', '#330066', '#660099'];
    let gradientOffset = 0;

    const animate = () => {
      if (!ctx) return;

      // Dynamic background gradient
      const gradient = ctx.createLinearGradient(0, gradientOffset, canvas.width, canvas.height + gradientOffset);
      gradientColors.forEach((color, i) => gradient.addColorStop(i / (gradientColors.length - 1), color));
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      gradientOffset += 0.5;
      if (gradientOffset > canvas.height) gradientOffset = 0;

      // Subtle shadow overlay
      ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw and update particles
      particlesRef.current.forEach((particle) => {
        updateParticle(particle, { width: canvas.width, height: canvas.height });

        ctx.beginPath();
        ctx.arc(particle.position.x, particle.position.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `${particle.color}${Math.floor(particle.alpha * 255).toString(16).padStart(2, '0')}`;
        ctx.fill();
      });

      // Draw connections
      particlesRef.current.forEach((particle, i) => {
        particlesRef.current.slice(i + 1).forEach((other) => {
          const dx = particle.position.x - other.position.x;
          const dy = particle.position.y - other.position.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.position.x, particle.position.y);
            ctx.lineTo(other.position.x, other.position.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${1 - dist / 100})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', updateDimensions);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [colors]);

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full pointer-events-none blur-sm" aria-hidden="true" />;
}
