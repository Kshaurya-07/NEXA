import React, { useEffect, useRef } from 'react';

export default function BackgroundNetwork() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const isMobile = width < 768;
    const checkReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Camera and parallax
    const camera = {
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0,
      fov: 420,
    };

    // 3D Particles
    const particleCount = isMobile ? 32 : 68;
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: (Math.random() - 0.5) * width * 1.5,
        y: (Math.random() - 0.5) * height * 1.5,
        z: Math.random() * 800 - 200,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        vz: (Math.random() - 0.5) * 0.25,
        radius: Math.random() * 1.5 + 0.8,
        colorType: Math.random() > 0.85 ? 'cyan' : Math.random() > 0.95 ? 'amber' : 'white',
      });
    }

    // 3D Wireframe Polyhedron 1: Octahedron
    const octahedron = {
      cx: width * 0.35,
      cy: -height * 0.15,
      cz: 250,
      size: isMobile ? 45 : 75,
      rotX: 0,
      rotY: 0,
      rotZ: 0,
      speedX: 0.003,
      speedY: 0.005,
      speedZ: 0.002,
      vertices: [
        [0, 1, 0],
        [1, 0, 0],
        [0, 0, 1],
        [-1, 0, 0],
        [0, 0, -1],
        [0, -1, 0],
      ],
      edges: [
        [0, 1], [0, 2], [0, 3], [0, 4],
        [5, 1], [5, 2], [5, 3], [5, 4],
        [1, 2], [2, 3], [3, 4], [4, 1],
      ],
    };

    // 3D Wireframe Polyhedron 2: Hexagonal Prism / Spatial Core
    const hexCore = {
      cx: -width * 0.32,
      cy: height * 0.22,
      cz: 300,
      size: isMobile ? 38 : 65,
      rotX: 0.3,
      rotY: 0,
      rotZ: 0,
      speedX: -0.004,
      speedY: 0.003,
      speedZ: -0.002,
      vertices: [],
      edges: [],
    };

    // Build Hexagon vertices
    const sides = 6;
    for (let i = 0; i < sides; i++) {
      const angle = (i * 2 * Math.PI) / sides;
      hexCore.vertices.push([Math.cos(angle), Math.sin(angle), -0.7]);
      hexCore.vertices.push([Math.cos(angle), Math.sin(angle), 0.7]);
    }
    for (let i = 0; i < sides; i++) {
      const next = (i + 1) % sides;
      hexCore.edges.push([i * 2, next * 2]);
      hexCore.edges.push([i * 2 + 1, next * 2 + 1]);
      hexCore.edges.push([i * 2, i * 2 + 1]);
    }

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      octahedron.cx = width * 0.35;
      octahedron.cy = -height * 0.15;
      hexCore.cx = -width * 0.32;
      hexCore.cy = height * 0.22;
    };

    const handleMouseMove = (e) => {
      if (checkReducedMotion) return;
      const normalizedX = (e.clientX / width - 0.5) * 2;
      const normalizedY = (e.clientY / height - 0.5) * 2;
      camera.targetX = normalizedX * 45;
      camera.targetY = normalizedY * 35;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    // 3D Matrix Rotation Helper
    const rotate3D = (v, rx, ry, rz) => {
      let [x, y, z] = v;

      // Rotate X
      const cosX = Math.cos(rx);
      const sinX = Math.sin(rx);
      const y1 = y * cosX - z * sinX;
      const z1 = y * sinX + z * cosX;

      // Rotate Y
      const cosY = Math.cos(ry);
      const sinY = Math.sin(ry);
      const x2 = x * cosY + z1 * sinY;
      const z2 = -x * sinY + z1 * cosY;

      // Rotate Z
      const cosZ = Math.cos(rz);
      const sinZ = Math.sin(rz);
      const x3 = x2 * cosZ - y1 * sinZ;
      const y3 = x2 * sinZ + y1 * cosZ;

      return [x3, y3, z2];
    };

    // 3D Perspective Projection
    const project = (x, y, z, cx = 0, cy = 0) => {
      const fov = camera.fov;
      const adjustedZ = z + fov;
      if (adjustedZ <= 10) return null;
      const scale = fov / adjustedZ;
      return {
        px: (width / 2) + cx + (x - camera.x) * scale,
        py: (height / 2) + cy + (y - camera.y) * scale,
        scale,
      };
    };

    // Draw Polyhedron Wireframe
    const drawPolyhedron = (poly, strokeColor) => {
      if (!checkReducedMotion) {
        poly.rotX += poly.speedX;
        poly.rotY += poly.speedY;
        poly.rotZ += poly.speedZ;
      }

      const projectedPoints = [];
      for (let i = 0; i < poly.vertices.length; i++) {
        const v = poly.vertices[i];
        const [rx, ry, rz] = rotate3D(v, poly.rotX, poly.rotY, poly.rotZ);
        const p = project(rx * poly.size, ry * poly.size, rz * poly.size + poly.cz, poly.cx, poly.cy);
        projectedPoints.push(p);
      }

      ctx.beginPath();
      for (let i = 0; i < poly.edges.length; i++) {
        const [idx1, idx2] = poly.edges[i];
        const p1 = projectedPoints[idx1];
        const p2 = projectedPoints[idx2];
        if (p1 && p2) {
          ctx.moveTo(p1.px, p1.py);
          ctx.lineTo(p2.px, p2.py);
        }
      }
      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = 1;
      ctx.stroke();

      // Vertex nodes
      for (let i = 0; i < projectedPoints.length; i++) {
        const pt = projectedPoints[i];
        if (pt) {
          ctx.beginPath();
          ctx.arc(pt.px, pt.py, 2 * pt.scale, 0, Math.PI * 2);
          ctx.fillStyle = strokeColor;
          ctx.fill();
        }
      }
    };

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth camera interpolation
      camera.x += (camera.targetX - camera.x) * 0.05;
      camera.y += (camera.targetY - camera.y) * 0.05;

      // 1. Draw 3D Floating Polyhedra Wireframes
      drawPolyhedron(octahedron, 'rgba(6, 182, 212, 0.22)');
      drawPolyhedron(hexCore, 'rgba(255, 255, 255, 0.16)');

      // 2. Draw 3D Particles with Depth Projection
      const projectedParticles = [];

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!checkReducedMotion) {
          p.x += p.vx;
          p.y += p.vy;
          p.z += p.vz;

          const boundX = width * 0.8;
          const boundY = height * 0.8;
          if (p.x < -boundX || p.x > boundX) p.vx *= -1;
          if (p.y < -boundY || p.y > boundY) p.vy *= -1;
          if (p.z < -200 || p.z > 600) p.vz *= -1;
        }

        const proj = project(p.x, p.y, p.z);
        if (proj) {
          projectedParticles.push({ ...proj, raw: p });

          // Draw node
          ctx.beginPath();
          ctx.arc(proj.px, proj.py, Math.max(0.5, p.radius * proj.scale), 0, Math.PI * 2);

          let alpha = Math.min(0.8, Math.max(0.1, (p.z + 200) / 800));
          if (p.colorType === 'cyan') {
            ctx.fillStyle = `rgba(6, 182, 212, ${alpha * 0.9})`;
          } else if (p.colorType === 'amber') {
            ctx.fillStyle = `rgba(245, 158, 11, ${alpha * 0.8})`;
          } else {
            ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.6})`;
          }
          ctx.fill();
        }
      }

      // Connect nearby particles in 3D projection
      const maxConnectDist = isMobile ? 85 : 125;
      for (let i = 0; i < projectedParticles.length; i++) {
        for (let j = i + 1; j < projectedParticles.length; j++) {
          const p1 = projectedParticles[i];
          const p2 = projectedParticles[j];
          const dx = p1.px - p2.px;
          const dy = p1.py - p2.py;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxConnectDist) {
            const zDiff = Math.abs(p1.raw.z - p2.raw.z);
            if (zDiff < 200) {
              const alpha = (1 - dist / maxConnectDist) * (1 - zDiff / 200) * 0.16;
              ctx.beginPath();
              ctx.moveTo(p1.px, p1.py);
              ctx.lineTo(p2.px, p2.py);
              ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
              ctx.lineWidth = 0.65;
              ctx.stroke();
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Deep Obsidian Matte Base */}
      <div className="absolute inset-0 bg-[#050508]" />

      {/* Atmospheric Spatial Glow Cones (Cyan / Slate / Obsidian) */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1100px] h-[650px] bg-gradient-to-b from-cyan-500/[0.04] via-white/[0.015] to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -left-48 w-[650px] h-[650px] bg-cyan-600/[0.025] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-[700px] h-[700px] bg-amber-500/[0.02] rounded-full blur-[170px] pointer-events-none" />

      {/* Subtle Radial Holographic Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-35 mask-radial pointer-events-none" />

      {/* 3D Wireframe + Projected Particle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full opacity-85" />
    </div>
  );
}
