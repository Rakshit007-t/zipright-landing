import { useEffect, useRef } from 'react';

export default function Starfield() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let animationFrameId;
    let width, height;
    let stars = [];
    let shootingStars = [];

    // Initialize static stars
    const initStars = () => {
      stars = [];
      // Reduce density for mobile performance and cap max stars
      const numStars = Math.min(200, Math.floor((width * height) / 6000));
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 1.5,
          opacity: Math.random(),
          speed: Math.random() * 0.05 + 0.01,
          phase: Math.random() * Math.PI * 2
        });
      }
    };

    // Resize handler
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initStars();
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    // Animation Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw static/twinkling stars
      stars.forEach((star) => {
        star.phase += star.speed;
        // Oscillate opacity between ~0.2 and 1.0
        const currentOpacity = 0.2 + (Math.sin(star.phase) + 1) / 2 * 0.8;
        
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${currentOpacity * star.opacity})`;
        ctx.fill();
      });

      // Randomly spawn a shooting star (approx. 0.5% chance per frame)
      if (Math.random() < 0.005 && shootingStars.length < 1) {
        shootingStars.push({
          x: Math.random() * width * 1.5, // Start from further right/top
          y: -50, // Start above the screen
          length: Math.random() * 80 + 40,
          speed: Math.random() * 10 + 15, // Fast speed
          opacity: 1,
          angle: Math.PI / 4 // 45 degrees diagonal down-left
        });
      }

      // Draw and update shooting stars
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const star = shootingStars[i];
        
        // Move star
        star.x -= Math.cos(star.angle) * star.speed;
        star.y += Math.sin(star.angle) * star.speed;
        
        // Fade out slightly
        star.opacity -= 0.01;

        if (star.opacity <= 0 || star.x < -100 || star.y > height + 100) {
          shootingStars.splice(i, 1);
          continue;
        }

        // Draw shooting star line with gradient tail
        const tailX = star.x + Math.cos(star.angle) * star.length;
        const tailY = star.y - Math.sin(star.angle) * star.length;

        const gradient = ctx.createLinearGradient(star.x, star.y, tailX, tailY);
        gradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`);
        gradient.addColorStop(0.1, `rgba(255, 255, 255, ${star.opacity * 0.8})`);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.beginPath();
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(tailX, tailY);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        
        // Draw head glow
        ctx.beginPath();
        ctx.arc(star.x, star.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
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
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ background: 'transparent' }}
    />
  );
}
