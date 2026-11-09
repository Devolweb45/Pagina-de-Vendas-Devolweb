import React, { useEffect, useRef } from 'react';

interface Comet {
  x: number;
  y: number;
  length: number;
  speed: number;
  size: number;
  angle: number; // in radians
  opacity: number;
  maxOpacity: number;
  life: number;
  maxLife: number;
  hue: number; // warm orange/amber hues (25 - 45)
  sparks: Spark[];
}

interface Spark {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  decay: number;
  color: string;
}

export const MeteorShowerCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    const handleResize = () => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const comets: Comet[] = [];
    const maxComets = 18; // Balanced subtle quantity across the hero section

    const createComet = (initial = false): Comet => {
      // Angle: 120 to 135 degrees (Falling DOWNWARDS and to the left: +Y is down, -X is left)
      const angleDeg = 122 + (Math.random() * 16 - 8); // ~114° to 130° (natural steep downward fall)
      const angle = (angleDeg * Math.PI) / 180;
      
      // Spawn points: distributed across top and top-right to cover entire section
      let startX = 0;
      let startY = 0;

      if (initial) {
        // Initial distribution across entire canvas
        startX = Math.random() * (width + 300) - 100;
        startY = Math.random() * height * 0.95;
      } else {
        const spawnSide = Math.random();
        if (spawnSide < 0.75) {
          // Spawn along top across full width + extra right margin
          startX = Math.random() * (width + 350) - 50;
          startY = -60 - Math.random() * 80;
        } else {
          // Spawn along upper right edge
          startX = width + 20 + Math.random() * 80;
          startY = Math.random() * (height * 0.5) - 40;
        }
      }

      const length = 80 + Math.random() * 130; // Slender comet tail (80px - 210px)
      const speed = 4.0 + Math.random() * 4.5; // Natural falling speed
      const size = 0.7 + Math.random() * 0.9; // Fine, ultra-sleek comet radius
      const maxOpacity = 0.28 + Math.random() * 0.35; // Softer, less intense luminosity
      const maxLife = 100 + Math.random() * 70;

      return {
        x: startX,
        y: startY,
        length,
        speed,
        size,
        angle,
        opacity: initial ? maxOpacity * Math.random() : 0,
        maxOpacity,
        life: initial ? Math.floor(Math.random() * (maxLife * 0.7)) : 0,
        maxLife,
        hue: 25 + Math.random() * 20, // 25 (Orange) to 45 (Amber/Yellow)
        sparks: [],
      };
    };

    // Initialize initial active comets
    for (let i = 0; i < maxComets; i++) {
      comets.push(createComet(true));
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Manage and render comets
      for (let i = 0; i < comets.length; i++) {
        const c = comets[i];

        c.life++;
        // Fade in and out smoothly
        if (c.life < 12) {
          c.opacity = (c.life / 12) * c.maxOpacity;
        } else if (c.life > c.maxLife - 20) {
          c.opacity = Math.max(0, ((c.maxLife - c.life) / 20) * c.maxOpacity);
        }

        // Move comet forward DOWNWARDS (cos(angle) is negative, sin(angle) is POSITIVE = falling down)
        c.x += Math.cos(c.angle) * c.speed;
        c.y += Math.sin(c.angle) * c.speed;

        // Calculate tail backwards vector (opposite of trajectory angle)
        const tailAngle = c.angle + Math.PI;
        const tailEndX = c.x + Math.cos(tailAngle) * c.length;
        const tailEndY = c.y + Math.sin(tailAngle) * c.length;

        // Occasionally emit subtle ultra-fine spark particles
        if (Math.random() < 0.25 && c.opacity > 0.35) {
          const sparkSpread = (Math.random() - 0.5) * 0.3;
          const sparkSpeed = 0.5 + Math.random() * 1.0;
          c.sparks.push({
            x: c.x + (Math.random() - 0.5) * 2,
            y: c.y + (Math.random() - 0.5) * 2,
            vx: Math.cos(tailAngle + sparkSpread) * sparkSpeed,
            vy: Math.sin(tailAngle + sparkSpread) * sparkSpeed,
            size: 0.6 + Math.random() * 0.9,
            alpha: c.opacity * 0.8,
            decay: 0.04 + Math.random() * 0.03,
            color: Math.random() > 0.5 ? '#fde047' : '#fb923c',
          });
        }

        // Render Tail (Ultra-fine rabo de cometa com degradê neon)
        if (c.opacity > 0.01) {
          ctx.save();

          // 1. Slender outer diffuse glow
          const outerGradient = ctx.createLinearGradient(c.x, c.y, tailEndX, tailEndY);
          outerGradient.addColorStop(0, `rgba(255, 230, 180, ${c.opacity * 0.5})`);
          outerGradient.addColorStop(0.12, `rgba(249, 115, 22, ${c.opacity * 0.35})`);
          outerGradient.addColorStop(0.45, `rgba(234, 88, 12, ${c.opacity * 0.15})`);
          outerGradient.addColorStop(1, 'rgba(234, 88, 12, 0)');

          ctx.beginPath();
          ctx.moveTo(c.x, c.y);
          ctx.lineTo(tailEndX, tailEndY);
          ctx.strokeStyle = outerGradient;
          ctx.lineWidth = Math.max(0.8, c.size * 1.8);
          ctx.lineCap = 'round';
          ctx.stroke();

          // 2. Razor-thin brilliant core flame
          const coreGradient = ctx.createLinearGradient(c.x, c.y, tailEndX, tailEndY);
          coreGradient.addColorStop(0, `rgba(255, 255, 255, ${c.opacity * 0.85})`);
          coreGradient.addColorStop(0.1, `rgba(254, 240, 138, ${c.opacity * 0.75})`);
          coreGradient.addColorStop(0.35, `rgba(249, 115, 22, ${c.opacity * 0.55})`);
          coreGradient.addColorStop(0.7, `rgba(194, 65, 12, ${c.opacity * 0.15})`);
          coreGradient.addColorStop(1, 'rgba(194, 65, 12, 0)');

          ctx.beginPath();
          ctx.moveTo(c.x, c.y);
          ctx.lineTo(tailEndX, tailEndY);
          ctx.strokeStyle = coreGradient;
          ctx.lineWidth = Math.max(0.6, c.size * 0.75);
          ctx.lineCap = 'round';
          ctx.stroke();

          // 3. Comet Head Nucleus (Fine pinpoint glow)
          const glowRad = Math.max(1.5, c.size * 2);
          const radialGlow = ctx.createRadialGradient(c.x, c.y, 0, c.x, c.y, glowRad);
          radialGlow.addColorStop(0, `rgba(255, 255, 255, ${c.opacity * 0.8})`);
          radialGlow.addColorStop(0.3, `rgba(254, 215, 170, ${c.opacity * 0.55})`);
          radialGlow.addColorStop(0.7, `rgba(249, 115, 22, ${c.opacity * 0.25})`);
          radialGlow.addColorStop(1, 'rgba(249, 115, 22, 0)');

          ctx.beginPath();
          ctx.arc(c.x, c.y, glowRad, 0, Math.PI * 2);
          ctx.fillStyle = radialGlow;
          ctx.fill();

          // Delicate white core dot
          ctx.beginPath();
          ctx.arc(c.x, c.y, Math.max(0.5, c.size * 0.6), 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${c.opacity * 0.9})`;
          ctx.shadowColor = '#f97316';
          ctx.shadowBlur = 3;
          ctx.fill();

          ctx.restore();
        }

        // Render Sparks
        for (let j = c.sparks.length - 1; j >= 0; j--) {
          const sp = c.sparks[j];
          sp.x += sp.vx;
          sp.y += sp.vy;
          sp.alpha -= sp.decay;

          if (sp.alpha <= 0) {
            c.sparks.splice(j, 1);
            continue;
          }

          ctx.save();
          ctx.beginPath();
          ctx.arc(sp.x, sp.y, sp.size, 0, Math.PI * 2);
          ctx.fillStyle = sp.color;
          ctx.globalAlpha = sp.alpha * 0.7;
          ctx.shadowColor = '#f97316';
          ctx.shadowBlur = 2;
          ctx.fill();
          ctx.restore();
        }

        // Reset comet if fallen past bottom or off screen
        if (
          c.life >= c.maxLife ||
          c.x < -200 ||
          c.y > height + 100
        ) {
          comets[i] = createComet(false);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.85 }}
    />
  );
};
