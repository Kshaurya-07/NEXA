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
      scrollY: window.scrollY || 0,
      targetScrollY: window.scrollY || 0,
      fov: 460,
    };

    // -------------------------------------------------------------
    // 1. LAYER 1: PERSPECTIVE FLOOR & CEILING GRID
    // -------------------------------------------------------------
    const drawPerspectiveGrid = () => {
      ctx.save();
      const gridHorizon = height * 0.85;
      const numLines = isMobile ? 8 : 14;
      const gridPitch = (camera.scrollY * 0.05) % 40;

      ctx.beginPath();
      for (let i = 0; i <= numLines; i++) {
        const yRatio = i / numLines;
        const currentY = gridHorizon + Math.pow(yRatio, 2.2) * (height - gridHorizon);
        ctx.moveTo(0, currentY);
        ctx.lineTo(width, currentY);
      }
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.035)';
      ctx.lineWidth = 0.75;
      ctx.stroke();

      // Perspective vanishing lines
      ctx.beginPath();
      const numVLines = isMobile ? 10 : 20;
      const vanishX = width / 2 - camera.x * 1.5;
      for (let i = -numVLines; i <= numVLines; i++) {
        const bottomX = (width / 2) + i * (width / (numVLines * 0.75)) + camera.x * 2;
        ctx.moveTo(vanishX, gridHorizon - 100);
        ctx.lineTo(bottomX, height);
      }
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.02)';
      ctx.lineWidth = 0.5;
      ctx.stroke();
      ctx.restore();
    };

    // -------------------------------------------------------------
    // 2. LAYER 2: 3D DIGITAL DUST PARTICLE FIELD
    // -------------------------------------------------------------
    const particleCount = isMobile ? 36 : 85;
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: (Math.random() - 0.5) * width * 1.6,
        y: (Math.random() - 0.5) * height * 1.6,
        z: Math.random() * 900 - 250,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        vz: (Math.random() - 0.5) * 0.2,
        radius: Math.random() * 1.6 + 0.6,
        colorType: Math.random() > 0.75 ? 'cyan' : Math.random() > 0.93 ? 'amber' : 'white',
      });
    }

    // -------------------------------------------------------------
    // 3. LAYER 3 & 4: 3D FLOATING WIREFRAME GEOMETRY LIBRARY
    // -------------------------------------------------------------

    // Helper: 3D Rotation Matrix
    const rotate3D = (v, rx, ry, rz) => {
      let [x, y, z] = v;

      // X
      const cosX = Math.cos(rx);
      const sinX = Math.sin(rx);
      const y1 = y * cosX - z * sinX;
      const z1 = y * sinX + z * cosX;

      // Y
      const cosY = Math.cos(ry);
      const sinY = Math.sin(ry);
      const x2 = x * cosY + z1 * sinY;
      const z2 = -x * sinY + z1 * cosY;

      // Z
      const cosZ = Math.cos(rz);
      const sinZ = Math.sin(rz);
      const x3 = x2 * cosZ - y1 * sinZ;
      const y3 = x2 * sinZ + y1 * cosZ;

      return [x3, y3, z2];
    };

    // Helper: 3D Perspective Projection
    const project = (x, y, z, cx = 0, cy = 0) => {
      const fov = camera.fov;
      const adjustedZ = z + fov;
      if (adjustedZ <= 15) return null;
      const scale = fov / adjustedZ;
      return {
        px: (width / 2) + cx + (x - camera.x) * scale,
        py: (height / 2) + cy + (y - camera.y) * scale,
        scale,
      };
    };

    // Polyhedron Models Definitions
    // A. Octahedron
    const octahedronVertices = [
      [0, 1, 0], [1, 0, 0], [0, 0, 1],
      [-1, 0, 0], [0, 0, -1], [0, -1, 0],
    ];
    const octahedronEdges = [
      [0, 1], [0, 2], [0, 3], [0, 4],
      [5, 1], [5, 2], [5, 3], [5, 4],
      [1, 2], [2, 3], [3, 4], [4, 1],
    ];

    // B. Tetrahedron
    const tetraVertices = [
      [1, 1, 1], [-1, -1, 1], [-1, 1, -1], [1, -1, -1]
    ].map(v => [v[0] * 0.7, v[1] * 0.7, v[2] * 0.7]);
    const tetraEdges = [
      [0, 1], [0, 2], [0, 3],
      [1, 2], [2, 3], [3, 1]
    ];

    // C. Reference Style: Irregular Connected Triangular Mesh (Pyramidal Crystal)
    const meshVertices = [
      [0, 1.25, 0],
      [-0.85, 0.25, 0.65],
      [0.85, 0.25, 0.65],
      [0, 0.35, -0.95],
      [-1.15, -0.75, -0.2],
      [1.15, -0.75, -0.2],
      [0, -1.15, 0.75],
      [0, -0.2, 0.15],
    ];
    const meshEdges = [
      [0, 1], [0, 2], [0, 3],
      [1, 2], [2, 3], [3, 1],
      [1, 4], [2, 5], [1, 6], [2, 6],
      [4, 6], [5, 6], [4, 3], [5, 3],
      [7, 0], [7, 6], [7, 1], [7, 2]
    ];

    // D. Low-Poly Icosahedron (Geodesic Core)
    const phi = (1 + Math.sqrt(5)) / 2;
    const icoRawVertices = [
      [-1,  phi, 0], [ 1,  phi, 0], [-1, -phi, 0], [ 1, -phi, 0],
      [ 0, -1,  phi], [ 0,  1,  phi], [ 0, -1, -phi], [ 0,  1, -phi],
      [ phi, 0, -1], [ phi, 0,  1], [-phi, 0, -1], [-phi, 0,  1]
    ];
    const icoVertices = icoRawVertices.map(v => {
      const len = Math.sqrt(v[0]*v[0] + v[1]*v[1] + v[2]*v[2]);
      return [v[0] / len, v[1] / len, v[2] / len];
    });
    const icoEdges = [
      [0, 11], [0, 5], [0, 1], [0, 7], [0, 10],
      [1, 5], [5, 11], [11, 10], [10, 7], [7, 1],
      [3, 9], [3, 4], [3, 2], [3, 6], [3, 8],
      [4, 9], [2, 4], [6, 2], [8, 6], [9, 8],
      [4, 5], [5, 9], [9, 1], [1, 8], [8, 7],
      [7, 6], [6, 10], [10, 2], [2, 11], [11, 4]
    ];

    // E. 3D Hexagonal Prism
    const hexVertices = [];
    const hexEdges = [];
    for (let i = 0; i < 6; i++) {
      const ang = (i * 2 * Math.PI) / 6;
      hexVertices.push([Math.cos(ang), Math.sin(ang), -0.75]);
      hexVertices.push([Math.cos(ang), Math.sin(ang), 0.75]);
    }
    for (let i = 0; i < 6; i++) {
      const next = (i + 1) % 6;
      hexEdges.push([i * 2, next * 2]);
      hexEdges.push([i * 2 + 1, next * 2 + 1]);
      hexEdges.push([i * 2, i * 2 + 1]);
    }

    // World Object Catalog placed throughout the website's vertical depth
    const worldObjects = [
      // 1. Hero / NIA section: Reference-style triangular mesh on left
      {
        id: 'hero-mesh-left',
        x: -width * 0.38,
        worldY: 280,
        z: 220,
        size: isMobile ? 42 : 72,
        rotX: 0.2, rotY: 0.4, rotZ: 0,
        speedX: 0.003, speedY: 0.004, speedZ: 0.002,
        vertices: meshVertices,
        edges: meshEdges,
        color: 'rgba(6, 182, 212, 0.45)',
        glowColor: 'rgba(6, 182, 212, 0.8)',
        hasDataPulses: true,
      },
      // 2. Hero / NIA section: Octahedron on right
      {
        id: 'hero-octa-right',
        x: width * 0.38,
        worldY: 180,
        z: 200,
        size: isMobile ? 40 : 68,
        rotX: 0.5, rotY: 0, rotZ: 0.2,
        speedX: -0.003, speedY: 0.005, speedZ: -0.002,
        vertices: octahedronVertices,
        edges: octahedronEdges,
        color: 'rgba(255, 255, 255, 0.35)',
        glowColor: 'rgba(255, 255, 255, 0.75)',
        hasDataPulses: true,
      },
      // 3. Hero lower / Architecture: 3D Orbital ring with orbiting node
      {
        id: 'arch-orbital',
        x: width * 0.42,
        worldY: 820,
        z: 160,
        size: isMobile ? 48 : 84,
        rotX: 1.1, rotY: 0.4, rotZ: 0,
        speedX: 0.002, speedY: 0.006, speedZ: 0.001,
        isOrbitalRing: true,
        ringNodes: 2,
        color: 'rgba(20, 184, 166, 0.45)',
        glowColor: 'rgba(20, 184, 166, 0.85)',
      },
      // 4. Nexa App section: Low-poly Icosahedron (Geodesic sphere)
      {
        id: 'app-ico-left',
        x: -width * 0.40,
        worldY: 1350,
        z: 260,
        size: isMobile ? 38 : 62,
        rotX: 0, rotY: 0.3, rotZ: 0.5,
        speedX: 0.004, speedY: -0.003, speedZ: 0.002,
        vertices: icoVertices,
        edges: icoEdges,
        color: 'rgba(6, 182, 212, 0.4)',
        glowColor: 'rgba(6, 182, 212, 0.75)',
        hasDataPulses: true,
      },
      // 5. Why Nexa / Reality: Floating Tetrahedron
      {
        id: 'why-tetra-right',
        x: width * 0.36,
        worldY: 1950,
        z: 190,
        size: isMobile ? 44 : 70,
        rotX: 0.3, rotY: 0.2, rotZ: 0.4,
        speedX: -0.004, speedY: 0.004, speedZ: -0.003,
        vertices: tetraVertices,
        edges: tetraEdges,
        color: 'rgba(255, 255, 255, 0.35)',
        glowColor: 'rgba(255, 255, 255, 0.7)',
        hasDataPulses: true,
      },
      // 6. Features section: Connected Triangular Mesh 2 on left
      {
        id: 'features-mesh-left',
        x: -width * 0.36,
        worldY: 2650,
        z: 180,
        size: isMobile ? 40 : 70,
        rotX: 0.4, rotY: -0.2, rotZ: 0.3,
        speedX: 0.003, speedY: 0.005, speedZ: 0.002,
        vertices: meshVertices,
        edges: meshEdges,
        color: 'rgba(6, 182, 212, 0.42)',
        glowColor: 'rgba(6, 182, 212, 0.8)',
        hasDataPulses: true,
      },
      // 7. Features section: Hexagonal Core on right
      {
        id: 'features-hex-right',
        x: width * 0.39,
        worldY: 3300,
        z: 230,
        size: isMobile ? 36 : 64,
        rotX: 0.6, rotY: 0.1, rotZ: -0.4,
        speedX: -0.003, speedY: 0.004, speedZ: -0.002,
        vertices: hexVertices,
        edges: hexEdges,
        color: 'rgba(20, 184, 166, 0.4)',
        glowColor: 'rgba(20, 184, 166, 0.75)',
        hasDataPulses: true,
      },
      // 8. Demo Video section: Cinematic Octahedron
      {
        id: 'demo-octa-left',
        x: -width * 0.38,
        worldY: 4100,
        z: 210,
        size: isMobile ? 42 : 72,
        rotX: 0.1, rotY: 0.5, rotZ: 0.2,
        speedX: 0.004, speedY: -0.003, speedZ: 0.002,
        vertices: octahedronVertices,
        edges: octahedronEdges,
        color: 'rgba(255, 255, 255, 0.35)',
        glowColor: 'rgba(255, 255, 255, 0.75)',
        hasDataPulses: true,
      },
      // 9. Team Glitchers / Collective: Triangular Mesh on right
      {
        id: 'about-mesh-right',
        x: width * 0.37,
        worldY: 4850,
        z: 190,
        size: isMobile ? 40 : 68,
        rotX: 0.3, rotY: 0.3, rotZ: 0.1,
        speedX: -0.003, speedY: 0.005, speedZ: 0.001,
        vertices: meshVertices,
        edges: meshEdges,
        color: 'rgba(6, 182, 212, 0.45)',
        glowColor: 'rgba(6, 182, 212, 0.8)',
        hasDataPulses: true,
      },
      // 10. Download section: Orbital Aura
      {
        id: 'download-orbital',
        x: -width * 0.36,
        worldY: 5600,
        z: 170,
        size: isMobile ? 46 : 80,
        rotX: 1.2, rotY: -0.3, rotZ: 0.2,
        speedX: 0.003, speedY: 0.005, speedZ: 0.001,
        isOrbitalRing: true,
        ringNodes: 2,
        color: 'rgba(245, 158, 11, 0.35)',
        glowColor: 'rgba(245, 158, 11, 0.8)',
      },
      // 11. Contact section: Hexagonal Communications Beacon on right
      {
        id: 'contact-beacon-right',
        x: width * 0.36,
        worldY: 6400,
        z: 220,
        size: isMobile ? 38 : 66,
        rotX: 0.5, rotY: 0.2, rotZ: -0.3,
        speedX: -0.004, speedY: 0.003, speedZ: -0.002,
        vertices: hexVertices,
        edges: hexEdges,
        color: 'rgba(6, 182, 212, 0.45)',
        glowColor: 'rgba(6, 182, 212, 0.8)',
        hasDataPulses: true,
      },
    ];

    // -------------------------------------------------------------
    // 4. LAYER 5: TRAVELING DATA STREAM PACKETS
    // -------------------------------------------------------------
    const dataPackets = [];
    worldObjects.forEach((obj, idx) => {
      if (obj.hasDataPulses && obj.edges) {
        dataPackets.push({
          objIndex: idx,
          edgeIndex: 0,
          progress: Math.random(),
          speed: 0.008 + Math.random() * 0.006,
        });
      }
    });

    // -------------------------------------------------------------
    // 5. LAYER 6: FLOATING TRANSLUCENT UI FRAGMENTS
    // -------------------------------------------------------------
    const uiFragments = [
      {
        id: 'frag-timetable',
        x: -width * 0.28,
        worldY: 420,
        z: 120,
        title: '09:00 AM • DSA LAB [LH-1]',
        sub: 'NIA TIMETABLE ENGINE',
        color: 'cyan',
      },
      {
        id: 'frag-attendance',
        x: width * 0.26,
        worldY: 1050,
        z: 100,
        title: '88% • ATTENDANCE (SAFE)',
        sub: '75% MANDATE BUFFER',
        color: 'emerald',
      },
      {
        id: 'frag-finance',
        x: -width * 0.27,
        worldY: 2150,
        z: 110,
        title: '₹180 • FOOD STREET SPLIT',
        sub: 'CAMPUS PEER LEDGER',
        color: 'emerald',
      },
      {
        id: 'frag-tasks',
        x: width * 0.28,
        worldY: 2900,
        z: 90,
        title: '3 TASKS • DUE THIS WEEK',
        sub: 'EXTREMELY IMPORTANT',
        color: 'rose',
      },
      {
        id: 'frag-email',
        x: -width * 0.26,
        worldY: 3850,
        z: 100,
        title: 'CIRCULAR #492 • DISTILLED',
        sub: 'GMAIL NOTICE AGENT',
        color: 'amber',
      },
      {
        id: 'frag-nia',
        x: width * 0.27,
        worldY: 4700,
        z: 120,
        title: 'NIA COGNITION • READY',
        sub: 'SUB-10MS LOCAL SOLVER',
        color: 'cyan',
      },
    ];

    // Resize Handler
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      worldObjects.forEach((obj) => {
        if (obj.x < 0) obj.x = -width * (isMobile ? 0.34 : 0.38);
        if (obj.x > 0) obj.x = width * (isMobile ? 0.34 : 0.38);
      });
    };

    // Scroll Handler
    const handleScroll = () => {
      camera.targetScrollY = window.scrollY || window.pageYOffset || 0;
    };

    // Mouse Move Handler (Desktop Parallax)
    const handleMouseMove = (e) => {
      if (checkReducedMotion || isMobile) return;
      const normalizedX = (e.clientX / width - 0.5) * 2;
      const normalizedY = (e.clientY / height - 0.5) * 2;
      camera.targetX = normalizedX * 35;
      camera.targetY = normalizedY * 25;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove);

    // -------------------------------------------------------------
    // 6. MAIN ANIMATION & RENDERING LOOP
    // -------------------------------------------------------------
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth camera interpolation
      camera.x += (camera.targetX - camera.x) * 0.05;
      camera.y += (camera.targetY - camera.y) * 0.05;
      camera.scrollY += (camera.targetScrollY - camera.scrollY) * 0.08;

      // 1. Draw Layer 1: Perspective Grid
      drawPerspectiveGrid();

      // 2. Draw Layer 2: 3D Digital Dust Particle Field
      const projectedParticles = [];
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!checkReducedMotion) {
          p.x += p.vx;
          p.y += p.vy;
          p.z += p.vz;

          const boundX = width * 0.85;
          const boundY = height * 0.85;
          if (p.x < -boundX || p.x > boundX) p.vx *= -1;
          if (p.y < -boundY || p.y > boundY) p.vy *= -1;
          if (p.z < -250 || p.z > 650) p.vz *= -1;
        }

        const proj = project(p.x, p.y, p.z);
        if (proj) {
          projectedParticles.push({ ...proj, raw: p });

          ctx.beginPath();
          ctx.arc(proj.px, proj.py, Math.max(0.5, p.radius * proj.scale), 0, Math.PI * 2);

          const alpha = Math.min(0.7, Math.max(0.08, (p.z + 250) / 900));
          if (p.colorType === 'cyan') {
            ctx.fillStyle = `rgba(6, 182, 212, ${alpha * 0.9})`;
          } else if (p.colorType === 'amber') {
            ctx.fillStyle = `rgba(245, 158, 11, ${alpha * 0.85})`;
          } else {
            ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.6})`;
          }
          ctx.fill();
        }
      }

      // Connect nearby particles in 3D
      const maxConnectDist = isMobile ? 80 : 120;
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
              const alpha = (1 - dist / maxConnectDist) * (1 - zDiff / 200) * 0.15;
              ctx.beginPath();
              ctx.moveTo(p1.px, p1.py);
              ctx.lineTo(p2.px, p2.py);
              ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
              ctx.lineWidth = 0.6;
              ctx.stroke();
            }
          }
        }
      }

      // 3. Draw Layers 3 & 4: Floating 3D Wireframe Objects with Scroll Parallax
      const activeScreenYOffset = camera.scrollY * 0.85;

      worldObjects.forEach((obj, objIdx) => {
        // Compute relative Y position based on user scroll
        const relativeY = obj.worldY - activeScreenYOffset;

        // Perform fast frustum culling: only draw if within vertical viewing margin
        if (relativeY < -height * 0.8 || relativeY > height * 1.5) {
          return;
        }

        // Apply continuous 3D rotation
        if (!checkReducedMotion) {
          obj.rotX += obj.speedX;
          obj.rotY += obj.speedY;
          obj.rotZ += obj.speedZ;
        }

        // Special: Render 3D Orbital Ring
        if (obj.isOrbitalRing) {
          const ringPoints = [];
          const segments = 32;
          for (let s = 0; s < segments; s++) {
            const angle = (s * 2 * Math.PI) / segments;
            const rx = Math.cos(angle) * obj.size;
            const ry = Math.sin(angle) * obj.size;
            const [rx3, ry3, rz3] = rotate3D([rx, ry, 0], obj.rotX, obj.rotY, obj.rotZ);
            const p = project(rx3, ry3, rz3 + obj.z, obj.x, relativeY);
            if (p) ringPoints.push(p);
          }

          if (ringPoints.length > 2) {
            ctx.beginPath();
            ctx.moveTo(ringPoints[0].px, ringPoints[0].py);
            for (let s = 1; s < ringPoints.length; s++) {
              ctx.lineTo(ringPoints[s].px, ringPoints[s].py);
            }
            ctx.closePath();
            ctx.strokeStyle = obj.color;
            ctx.lineWidth = 1;
            ctx.stroke();

            // Orbiting satellite nodes along the ring
            const nodeProgress = ((Date.now() * 0.001) % (2 * Math.PI));
            const nx = Math.cos(nodeProgress) * obj.size;
            const ny = Math.sin(nodeProgress) * obj.size;
            const [nx3, ny3, nz3] = rotate3D([nx, ny, 0], obj.rotX, obj.rotY, obj.rotZ);
            const nodeP = project(nx3, ny3, nz3 + obj.z, obj.x, relativeY);
            if (nodeP) {
              ctx.beginPath();
              ctx.arc(nodeP.px, nodeP.py, 3.5 * nodeP.scale, 0, Math.PI * 2);
              ctx.fillStyle = obj.glowColor;
              ctx.shadowColor = obj.glowColor;
              ctx.shadowBlur = 10;
              ctx.fill();
              ctx.shadowBlur = 0;
            }
          }
          return;
        }

        // Standard: Render 3D Wireframe Polyhedron
        const projectedPoints = [];
        for (let i = 0; i < obj.vertices.length; i++) {
          const v = obj.vertices[i];
          const [rx, ry, rz] = rotate3D(v, obj.rotX, obj.rotY, obj.rotZ);
          const p = project(rx * obj.size, ry * obj.size, rz * obj.size + obj.z, obj.x, relativeY);
          projectedPoints.push(p);
        }

        // Draw Wireframe Edges
        ctx.beginPath();
        for (let i = 0; i < obj.edges.length; i++) {
          const [i1, i2] = obj.edges[i];
          const p1 = projectedPoints[i1];
          const p2 = projectedPoints[i2];
          if (p1 && p2) {
            ctx.moveTo(p1.px, p1.py);
            ctx.lineTo(p2.px, p2.py);
          }
        }
        ctx.strokeStyle = obj.color;
        ctx.lineWidth = 0.9;
        ctx.stroke();

        // Draw Glowing Nodes at Vertices (Reference Image Signature Detail!)
        for (let i = 0; i < projectedPoints.length; i++) {
          const pt = projectedPoints[i];
          if (pt) {
            ctx.beginPath();
            ctx.arc(pt.px, pt.py, 2.2 * pt.scale, 0, Math.PI * 2);
            ctx.fillStyle = obj.glowColor;
            ctx.shadowColor = obj.glowColor;
            ctx.shadowBlur = 8;
            ctx.fill();
            ctx.shadowBlur = 0;
          }
        }

        // Draw Traveling Data Stream Packets along Edges (Layer 5)
        dataPackets.forEach((pkt) => {
          if (pkt.objIndex === objIdx && obj.edges && obj.edges.length > 0) {
            pkt.progress += pkt.speed;
            if (pkt.progress >= 1) {
              pkt.progress = 0;
              pkt.edgeIndex = (pkt.edgeIndex + 1) % obj.edges.length;
            }
            const safeEdgeIndex = pkt.edgeIndex % obj.edges.length;
            const [i1, i2] = obj.edges[safeEdgeIndex];
            const p1 = projectedPoints[i1];
            const p2 = projectedPoints[i2];
            if (p1 && p2) {
              const packetX = p1.px + (p2.px - p1.px) * pkt.progress;
              const packetY = p1.py + (p2.py - p1.py) * pkt.progress;
              ctx.beginPath();
              ctx.arc(packetX, packetY, 2.8 * p1.scale, 0, Math.PI * 2);
              ctx.fillStyle = '#38bdf8';
              ctx.shadowColor = '#38bdf8';
              ctx.shadowBlur = 12;
              ctx.fill();
              ctx.shadowBlur = 0;
            }
          }
        });
      });

      // 4. Draw Layer 6: Floating Translucent UI Fragments
      if (!isMobile) {
        uiFragments.forEach((frag) => {
          const relY = frag.worldY - activeScreenYOffset;
          // Culling
          if (relY < -height * 0.4 || relY > height * 1.2) return;

          // Subtle floating bobbing
          const bob = Math.sin(Date.now() * 0.0015 + frag.z) * 6;
          const p = project(frag.x, relY + bob, frag.z);
          if (!p) return;

          const boxWidth = 190 * p.scale;
          const boxHeight = 44 * p.scale;
          const radius = 8 * p.scale;

          ctx.save();
          // Glass panel background with safe fallback for roundRect
          ctx.beginPath();
          if (typeof ctx.roundRect === 'function') {
            ctx.roundRect(p.px - boxWidth / 2, p.py - boxHeight / 2, boxWidth, boxHeight, radius);
          } else {
            ctx.rect(p.px - boxWidth / 2, p.py - boxHeight / 2, boxWidth, boxHeight);
          }
          ctx.fillStyle = 'rgba(9, 9, 16, 0.72)';
          ctx.fill();
          ctx.strokeStyle = frag.color === 'cyan' 
            ? 'rgba(6, 182, 212, 0.35)' 
            : frag.color === 'emerald'
            ? 'rgba(16, 185, 129, 0.35)'
            : frag.color === 'rose'
            ? 'rgba(244, 63, 94, 0.35)'
            : 'rgba(245, 158, 11, 0.35)';
          ctx.lineWidth = 0.85;
          ctx.stroke();

          // Title text
          ctx.font = `bold ${Math.max(8, 9 * p.scale)}px monospace`;
          ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
          ctx.textAlign = 'center';
          ctx.fillText(frag.title, p.px, p.py - 2 * p.scale);

          // Subtitle text
          ctx.font = `${Math.max(6, 7 * p.scale)}px monospace`;
          ctx.fillStyle = frag.color === 'cyan' 
            ? 'rgba(6, 182, 212, 0.85)' 
            : frag.color === 'emerald'
            ? 'rgba(16, 185, 129, 0.85)'
            : frag.color === 'rose'
            ? 'rgba(244, 63, 94, 0.85)'
            : 'rgba(245, 158, 11, 0.85)';
          ctx.fillText(frag.sub, p.px, p.py + 11 * p.scale);
          ctx.restore();
        });
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Deep Obsidian Base */}
      <div className="absolute inset-0 bg-[#050508]" />

      {/* Atmospheric Spatial Volumetric Lights */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1200px] h-[700px] bg-gradient-to-b from-cyan-500/[0.045] via-teal-500/[0.015] to-transparent rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/4 -left-40 w-[700px] h-[700px] bg-cyan-600/[0.03] rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-1/2 -right-40 w-[750px] h-[750px] bg-teal-500/[0.025] rounded-full blur-[190px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-32 w-[650px] h-[650px] bg-amber-500/[0.02] rounded-full blur-[170px] pointer-events-none" />

      {/* Subtle Radial Holographic Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 mask-radial pointer-events-none" />

      {/* 3D Global Perspective Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full opacity-90" />
    </div>
  );
}
