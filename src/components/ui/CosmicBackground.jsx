import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';

export const CosmicBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    let animationFrameId;
    let width = window.innerWidth;
    let height = window.innerHeight;

    // 1. Scene Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x040409, 0.00018);

    // 2. Camera Setup
    const camera = new THREE.PerspectiveCamera(70, width / height, 0.1, 4000);
    camera.position.set(0, 35, 120);

    // 3. Renderer Setup
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.85;

    // 4. Post-processing Composer
    let composer = null;
    try {
      composer = new EffectComposer(renderer);
      const renderPass = new RenderPass(scene, camera);
      composer.addPass(renderPass);

      const bloomPass = new UnrealBloomPass(
        new THREE.Vector2(width, height),
        1.15, // Bloom intensity
        0.55, // Bloom radius
        0.72  // Bloom threshold
      );
      composer.addPass(bloomPass);
    } catch (err) {
      console.warn('Post-processing fallback to default renderer:', err);
      composer = null;
    }

    // 5. Starfield Creation (Tier 1: Deep Distant Galaxy Stars - 5000 particles)
    const createDeepStarfield = () => {
      const count = 5000;
      const positions = new Float32Array(count * 3);
      const colors = new Float32Array(count * 3);
      const scales = new Float32Array(count);
      const twinks = new Float32Array(count);

      const colorPalette = [
        new THREE.Color('#ffffff'),
        new THREE.Color('#93c5fd'),
        new THREE.Color('#c084fc'),
        new THREE.Color('#38bdf8'),
        new THREE.Color('#f472b6'),
      ];

      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        // Spherical distribution around universe
        const radius = 900 + Math.random() * 1800;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(Math.random() * 2 - 1);

        positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
        positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
        positions[i3 + 2] = radius * Math.cos(phi) - 400; // Offset along flight corridor

        const col = colorPalette[Math.floor(Math.random() * colorPalette.length)];
        colors[i3] = col.r;
        colors[i3 + 1] = col.g;
        colors[i3 + 2] = col.b;

        scales[i] = 0.8 + Math.random() * 2.2;
        twinks[i] = Math.random() * Math.PI * 2;
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('customColor', new THREE.BufferAttribute(colors, 3));
      geometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1));
      geometry.setAttribute('twinkle', new THREE.BufferAttribute(twinks, 1));

      const material = new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 0 },
        },
        vertexShader: `
          uniform float time;
          attribute vec3 customColor;
          attribute float scale;
          attribute float twinkle;
          varying vec3 vColor;
          varying float vAlpha;

          void main() {
            vColor = customColor;
            float tw = sin(time * 1.8 + twinkle) * 0.4 + 0.6;
            vAlpha = tw;

            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            gl_PointSize = scale * (260.0 / -mvPosition.z) * tw;
            gl_Position = projectionMatrix * mvPosition;
          }
        `,
        fragmentShader: `
          varying vec3 vColor;
          varying float vAlpha;

          void main() {
            float dist = length(gl_PointCoord - vec2(0.5));
            if (dist > 0.5) discard;
            float glow = smoothstep(0.5, 0.05, dist);
            gl_FragColor = vec4(vColor, glow * vAlpha * 0.85);
          }
        `,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });

      return new THREE.Points(geometry, material);
    };

    const deepStars = createDeepStarfield();
    scene.add(deepStars);

    // 6. Starfield Creation (Tier 2: Mid-Range Cosmic Clusters - 6000 particles)
    const createMidStarfield = () => {
      const count = 6000;
      const positions = new Float32Array(count * 3);
      const colors = new Float32Array(count * 3);
      const scales = new Float32Array(count);
      const twinks = new Float32Array(count);

      const colorPalette = [
        new THREE.Color('#ffffff'),
        new THREE.Color('#67e8f9'),
        new THREE.Color('#818cf8'),
        new THREE.Color('#a5b4fc'),
        new THREE.Color('#e0e7ff'),
      ];

      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        // Cylindrical flight corridor distribution
        const radius = 60 + Math.random() * 650;
        const angle = Math.random() * Math.PI * 2;
        const z = 200 - Math.random() * 1600;

        positions[i3] = Math.cos(angle) * radius;
        positions[i3 + 1] = Math.sin(angle) * radius * 0.7 + 10;
        positions[i3 + 2] = z;

        const col = colorPalette[Math.floor(Math.random() * colorPalette.length)];
        colors[i3] = col.r;
        colors[i3 + 1] = col.g;
        colors[i3 + 2] = col.b;

        scales[i] = 1.2 + Math.random() * 3.0;
        twinks[i] = Math.random() * Math.PI * 2;
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('customColor', new THREE.BufferAttribute(colors, 3));
      geometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1));
      geometry.setAttribute('twinkle', new THREE.BufferAttribute(twinks, 1));

      const material = new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 0 },
        },
        vertexShader: `
          uniform float time;
          attribute vec3 customColor;
          attribute float scale;
          attribute float twinkle;
          varying vec3 vColor;
          varying float vAlpha;

          void main() {
            vColor = customColor;
            float tw = sin(time * 2.4 + twinkle) * 0.35 + 0.65;
            vAlpha = tw;

            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            gl_PointSize = scale * (340.0 / -mvPosition.z) * tw;
            gl_Position = projectionMatrix * mvPosition;
          }
        `,
        fragmentShader: `
          varying vec3 vColor;
          varying float vAlpha;

          void main() {
            float dist = length(gl_PointCoord - vec2(0.5));
            if (dist > 0.5) discard;
            float inner = smoothstep(0.5, 0.0, dist);
            float core = smoothstep(0.2, 0.0, dist) * 0.5;
            gl_FragColor = vec4(vColor + vec3(core), (inner + core) * vAlpha * 0.9);
          }
        `,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });

      return new THREE.Points(geometry, material);
    };

    const midStars = createMidStarfield();
    scene.add(midStars);

    // 7. Foreground Warp Stardust (2500 particles continuously streaming forward)
    const createStardustStream = () => {
      const count = 2500;
      const positions = new Float32Array(count * 3);
      const velocities = new Float32Array(count);
      const scales = new Float32Array(count);

      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        positions[i3] = (Math.random() - 0.5) * 500;
        positions[i3 + 1] = (Math.random() - 0.5) * 350;
        positions[i3 + 2] = 150 - Math.random() * 1400;

        velocities[i] = 0.4 + Math.random() * 0.9;
        scales[i] = 1.0 + Math.random() * 2.5;
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1));

      const material = new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 0 },
        },
        vertexShader: `
          attribute float scale;
          varying float vDepth;

          void main() {
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            vDepth = -mvPosition.z;
            gl_PointSize = scale * (280.0 / -mvPosition.z);
            gl_Position = projectionMatrix * mvPosition;
          }
        `,
        fragmentShader: `
          varying float vDepth;

          void main() {
            float dist = length(gl_PointCoord - vec2(0.5));
            if (dist > 0.5) discard;
            float glow = smoothstep(0.5, 0.05, dist);
            vec3 color = mix(vec3(0.4, 0.75, 1.0), vec3(0.7, 0.5, 1.0), sin(vDepth * 0.01) * 0.5 + 0.5);
            gl_FragColor = vec4(color, glow * 0.75);
          }
        `,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });

      return {
        points: new THREE.Points(geometry, material),
        positions,
        velocities,
        count,
      };
    };

    const stardust = createStardustStream();
    scene.add(stardust.points);

    // 8. Undulating 3D Wave Nebula Mesh
    const createNebulaWave = () => {
      const geometry = new THREE.PlaneGeometry(5000, 3200, 128, 80);
      const material = new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 0 },
          color1: { value: new THREE.Color('#09071c') },
          color2: { value: new THREE.Color('#312e81') },
          color3: { value: new THREE.Color('#0284c7') },
          color4: { value: new THREE.Color('#06b6d4') },
        },
        vertexShader: `
          uniform float time;
          varying vec2 vUv;
          varying float vElevation;

          void main() {
            vUv = uv;
            vec3 pos = position;

            // Multi-frequency cosmic wave undulating over time
            float wave1 = sin(pos.x * 0.003 + time * 0.45) * cos(pos.y * 0.003 + time * 0.35) * 48.0;
            float wave2 = sin(pos.x * 0.007 - time * 0.25) * sin(pos.y * 0.006 + time * 0.4) * 22.0;
            float wave3 = cos(length(pos.xy) * 0.002 - time * 0.3) * 30.0;

            pos.z += wave1 + wave2 + wave3;
            vElevation = pos.z;

            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `,
        fragmentShader: `
          uniform vec3 color1;
          uniform vec3 color2;
          uniform vec3 color3;
          uniform vec3 color4;
          varying vec2 vUv;
          varying float vElevation;

          void main() {
            // Radial mask from center of nebula
            float distFromCenter = length(vUv - vec2(0.5));
            float edgeFade = smoothstep(0.5, 0.15, distFromCenter);

            // Color gradient based on wave height
            float normElev = (vElevation + 60.0) / 120.0;
            vec3 col = mix(color1, color2, smoothstep(0.1, 0.45, normElev));
            col = mix(col, color3, smoothstep(0.45, 0.75, normElev));
            col = mix(col, color4, smoothstep(0.75, 1.0, normElev));

            gl_FragColor = vec4(col, edgeFade * 0.45);
          }
        `,
        transparent: true,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide,
        depthWrite: false,
      });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.rotation.x = -Math.PI * 0.42;
      mesh.position.set(0, -60, -500);
      return mesh;
    };

    const nebula = createNebulaWave();
    scene.add(nebula);

    // 9. Horizon Mountain Layers (3 Parallax Silhouette Ridges)
    const createMountainRidge = (zPos, yPos, heightScale, colorHex, opacityVal) => {
      const segs = 90;
      const widthMountain = 4000;
      const positions = [];
      const uvs = [];

      for (let i = 0; i <= segs; i++) {
        const x = (i / segs - 0.5) * widthMountain;
        // Pseudo-random organic jagged mountain peaks using layered sines
        const noise =
          Math.sin(i * 0.14) * 0.4 +
          Math.sin(i * 0.38) * 0.3 +
          Math.sin(i * 0.85) * 0.18 +
          Math.sin(i * 2.1) * 0.12;

        const peakY = (Math.max(0, noise) + 0.15) * heightScale;

        // Quad vertices (top and bottom)
        positions.push(x, yPos + peakY, zPos);
        positions.push(x, yPos - 300, zPos);

        uvs.push(i / segs, 1);
        uvs.push(i / segs, 0);
      }

      const indices = [];
      for (let i = 0; i < segs; i++) {
        const a = i * 2;
        const b = i * 2 + 1;
        const c = (i + 1) * 2;
        const d = (i + 1) * 2 + 1;
        indices.push(a, b, c);
        indices.push(c, b, d);
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
      geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
      geometry.setIndex(indices);

      const material = new THREE.ShaderMaterial({
        uniforms: {
          baseColor: { value: new THREE.Color(colorHex) },
          rimColor: { value: new THREE.Color('#38bdf8') },
          opacityVal: { value: opacityVal },
        },
        vertexShader: `
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform vec3 baseColor;
          uniform vec3 rimColor;
          uniform float opacityVal;
          varying vec2 vUv;

          void main() {
            // Subtle neon rim glow on the mountain peak edge
            float rim = smoothstep(0.85, 1.0, vUv.y) * 0.5;
            vec3 col = mix(baseColor, rimColor, rim);
            gl_FragColor = vec4(col, opacityVal);
          }
        `,
        transparent: true,
        depthWrite: false,
      });

      return new THREE.Mesh(geometry, material);
    };

    const mountains = [
      createMountainRidge(-200, -35, 75, '#06060f', 0.95), // Front ridge
      createMountainRidge(-450, -25, 95, '#0a0a18', 0.85), // Mid ridge
      createMountainRidge(-750, -10, 120, '#0f1128', 0.70), // Back distant ridge
    ];
    mountains.forEach((m) => scene.add(m));

    // 10. Atmospheric Fresnel Glow Sphere
    const createAtmosphereSphere = () => {
      const geometry = new THREE.SphereGeometry(950, 48, 48);
      const material = new THREE.ShaderMaterial({
        uniforms: {
          glowColor: { value: new THREE.Color('#3b82f6') },
        },
        vertexShader: `
          varying vec3 vNormal;
          void main() {
            vNormal = normalize(normalMatrix * normal);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform vec3 glowColor;
          varying vec3 vNormal;
          void main() {
            float intensity = pow(0.72 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.8);
            gl_FragColor = vec4(glowColor, intensity * 0.38);
          }
        `,
        side: THREE.BackSide,
        blending: THREE.AdditiveBlending,
        transparent: true,
        depthWrite: false,
      });

      const sphere = new THREE.Mesh(geometry, material);
      sphere.position.set(0, 0, -600);
      return sphere;
    };

    const atmosphere = createAtmosphereSphere();
    scene.add(atmosphere);

    // 11. Mouse Tilt & Scroll Interactivity Tracking
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const smoothCam = { x: 0, y: 35, z: 120, lookX: 0, lookY: 15, lookZ: -400 };

    const handleMouseMove = (e) => {
      // Normalized between -1.0 and 1.0
      mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // 12. Full-Page Scroll Checkpoints (Trajectory along cosmic flight path)
    const getCameraFlightTarget = (scrollFraction) => {
      // 6 key spatial checkpoints across the user's scroll down the portfolio
      const checkpoints = [
        { p: 0.00, pos: [0, 35, 120], look: [0, 15, -400] },       // Hero
        { p: 0.18, pos: [35, 22, -80], look: [-15, 8, -520] },     // About & Stats
        { p: 0.38, pos: [-45, 10, -280], look: [20, -5, -680] },   // Skills & Projects
        { p: 0.58, pos: [0, -12, -490], look: [0, 2, -920] },      // Kage & Journey
        { p: 0.78, pos: [40, 15, -720], look: [-20, 18, -1180] },  // Problem Solving & Achievements
        { p: 1.00, pos: [0, 5, -960], look: [0, 10, -1500] },      // Education, Contact, Footer
      ];

      // Find surrounding segment
      let i = 0;
      while (i < checkpoints.length - 1 && checkpoints[i + 1].p < scrollFraction) {
        i++;
      }

      const p0 = checkpoints[i];
      const p1 = checkpoints[Math.min(i + 1, checkpoints.length - 1)];
      const segmentSpan = p1.p - p0.p;
      const localT = segmentSpan > 0 ? (scrollFraction - p0.p) / segmentSpan : 0;
      // Smooth cubic hermite easing
      const easedT = localT * localT * (3 - 2 * localT);

      const posX = p0.pos[0] + (p1.pos[0] - p0.pos[0]) * easedT;
      const posY = p0.pos[1] + (p1.pos[1] - p0.pos[1]) * easedT;
      const posZ = p0.pos[2] + (p1.pos[2] - p0.pos[2]) * easedT;

      const lookX = p0.look[0] + (p1.look[0] - p0.look[0]) * easedT;
      const lookY = p0.look[1] + (p1.look[1] - p0.look[1]) * easedT;
      const lookZ = p0.look[2] + (p1.look[2] - p0.look[2]) * easedT;

      return { posX, posY, posZ, lookX, lookY, lookZ };
    };

    // 13. Window Resize Handler
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      if (composer) {
        composer.setSize(width, height);
      }
    };

    window.addEventListener('resize', handleResize);

    // 14. Animation Loop
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Update shader uniforms
      deepStars.material.uniforms.time.value = elapsedTime;
      midStars.material.uniforms.time.value = elapsedTime;
      nebula.material.uniforms.time.value = elapsedTime;
      stardust.points.material.uniforms.time.value = elapsedTime;

      // Rotate starfields slowly for continuous cosmic motion
      deepStars.rotation.y = elapsedTime * 0.008;
      midStars.rotation.y = elapsedTime * 0.015;
      midStars.rotation.z = Math.sin(elapsedTime * 0.05) * 0.04;

      // Stream stardust forward along Z axis
      const dustPos = stardust.positions;
      const dustVel = stardust.velocities;
      for (let i = 0; i < stardust.count; i++) {
        const i3 = i * 3;
        dustPos[i3 + 2] += dustVel[i] * 1.6;

        // If particle streams past camera, reset to far distance
        if (dustPos[i3 + 2] > camera.position.z + 50) {
          dustPos[i3 + 2] = camera.position.z - 1200;
          dustPos[i3] = camera.position.x + (Math.random() - 0.5) * 600;
          dustPos[i3 + 1] = camera.position.y + (Math.random() - 0.5) * 400;
        }
      }
      stardust.points.geometry.attributes.position.needsUpdate = true;

      // Calculate smooth mouse parallax
      mouse.x += (mouse.targetX - mouse.x) * 0.06;
      mouse.y += (mouse.targetY - mouse.y) * 0.06;

      // Calculate total page scroll fraction [0.0 to 1.0]
      const scrollY = window.scrollY || window.pageYOffset || 0;
      const maxScroll = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight
      );
      const scrollFraction = Math.min(1, Math.max(0, scrollY / maxScroll));

      // Get target camera position and lookAt from 3D flight trajectory
      const target = getCameraFlightTarget(scrollFraction);

      // Smoothly interpolate camera position with damping
      const mouseCamX = mouse.x * 18;
      const mouseCamY = mouse.y * 12;

      smoothCam.x += (target.posX + mouseCamX - smoothCam.x) * 0.05;
      smoothCam.y += (target.posY + mouseCamY - smoothCam.y) * 0.05;
      smoothCam.z += (target.posZ - smoothCam.z) * 0.05;

      smoothCam.lookX += (target.lookX + mouse.x * 25 - smoothCam.lookX) * 0.05;
      smoothCam.lookY += (target.lookY + mouse.y * 15 - smoothCam.lookY) * 0.05;
      smoothCam.lookZ += (target.lookZ - smoothCam.lookZ) * 0.05;

      camera.position.set(smoothCam.x, smoothCam.y, smoothCam.z);
      camera.lookAt(smoothCam.lookX, smoothCam.lookY, smoothCam.lookZ);

      // Parallax drift on mountains based on scroll
      mountains[0].position.y = -35 - scrollFraction * 15;
      mountains[1].position.y = -25 - scrollFraction * 25;
      mountains[2].position.y = -10 - scrollFraction * 35;

      // Render through composer or direct
      if (composer) {
        composer.render();
      } else {
        renderer.render(scene, camera);
      }
    };

    animate();

    // 15. Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);

      // Dispose Three.js objects
      [deepStars, midStars, stardust.points, nebula, atmosphere, ...mountains].forEach((obj) => {
        if (obj.geometry) obj.geometry.dispose();
        if (obj.material) {
          if (Array.isArray(obj.material)) {
            obj.material.forEach((m) => m.dispose());
          } else {
            obj.material.dispose();
          }
        }
      });

      if (composer) {
        composer.dispose();
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 w-screen h-screen pointer-events-none z-0 overflow-hidden bg-[#040409]"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block pointer-events-none blur-[1px] scale-[1.005] transform-gpu"
      />
      {/* Subtle depth vignette & cosmic atmosphere softening overlay */}
      <div className="absolute inset-0 bg-radial from-transparent via-[#040409]/20 to-[#040409]/70 pointer-events-none" />
    </div>
  );
};

export default CosmicBackground;
