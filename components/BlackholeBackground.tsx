"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

interface OrbitingObject {
  mesh: THREE.Object3D;
  radius: number;
  angle: number;
  speed: number;
  inclination: number;
  yOffset: number;
  rotSpeedX: number;
  rotSpeedY: number;
  rotSpeedZ: number;
}

function createSoftGlowTexture(
  innerColor: string,
  midColor: string,
  outerColor: string
): THREE.CanvasTexture {
  const size = 256;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");

  if (ctx) {
    const grad = ctx.createRadialGradient(
      size / 2,
      size / 2,
      0,
      size / 2,
      size / 2,
      size / 2
    );
    grad.addColorStop(0, innerColor);
    grad.addColorStop(0.35, midColor);
    grad.addColorStop(1, outerColor);
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, size, size);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

function createPhotonRingTexture(): THREE.CanvasTexture {
  const size = 512;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");

  if (ctx) {
    const cx = size / 2;
    const cy = size / 2;
    const grad = ctx.createRadialGradient(cx, cy, size * 0.17, cx, cy, size * 0.5);
    grad.addColorStop(0.0, "rgba(0, 0, 0, 1)");
    grad.addColorStop(0.22, "rgba(0, 0, 0, 0.98)");
    grad.addColorStop(0.27, "rgba(255, 255, 255, 0.95)");
    grad.addColorStop(0.32, "rgba(186, 230, 253, 0.72)");
    grad.addColorStop(0.45, "rgba(56, 189, 248, 0.28)");
    grad.addColorStop(0.68, "rgba(79, 70, 229, 0.10)");
    grad.addColorStop(1.0, "rgba(0, 0, 0, 0)");

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, size, size);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

export default function BlackholeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.innerHTML = "";

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      });
    } catch {
      return;
    }

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x03050a, 0.025);

    const isMobile = window.innerWidth < 768;
    const camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      0.1,
      150
    );
    camera.position.set(0, 1.3, isMobile ? 14.5 : 11.2);

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x03050a, 1);
    container.appendChild(renderer.domElement);

    // Subtle Lighting for 3D Moving Objects
    const ambientLight = new THREE.AmbientLight(0x94a3b8, 0.65);
    scene.add(ambientLight);

    const coreLight = new THREE.PointLight(0x7dd3fc, 4.5, 28);
    coreLight.position.set(0, 0, 0);
    scene.add(coreLight);

    const rimLight = new THREE.DirectionalLight(0x818cf8, 1.2);
    rimLight.position.set(8, 6, 10);
    scene.add(rimLight);

    // Master Blackhole Group (tilted for cinematic 3D angle)
    const blackholeGroup = new THREE.Group();
    blackholeGroup.position.set(isMobile ? 0 : 1.6, isMobile ? 0.6 : 0.1, 0);
    scene.add(blackholeGroup);

    // 1. Event Horizon (Pitch-Black Core)
    const horizonGeo = new THREE.SphereGeometry(1.55, 48, 48);
    const horizonMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
    const eventHorizon = new THREE.Mesh(horizonGeo, horizonMat);
    blackholeGroup.add(eventHorizon);

    // 2. Photon Ring & Gravitational Lensing Halo (Camera-facing Sprite)
    const photonTex = createPhotonRingTexture();
    const photonMat = new THREE.SpriteMaterial({
      map: photonTex,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const photonSprite = new THREE.Sprite(photonMat);
    photonSprite.scale.set(9.6, 9.6, 1);
    blackholeGroup.add(photonSprite);

    // 3. 3D Tilted Accretion Disk (Keplerian Orbiting Particles)
    const diskGroup = new THREE.Group();
    diskGroup.rotation.x = Math.PI * 0.37;
    diskGroup.rotation.z = -Math.PI * 0.12;
    blackholeGroup.add(diskGroup);

    const particleTex = createSoftGlowTexture(
      "rgba(255,255,255,1)",
      "rgba(186,230,253,0.5)",
      "rgba(0,0,0,0)"
    );

    const diskCount = isMobile ? 1600 : 2600;
    const diskPositions = new Float32Array(diskCount * 3);
    const diskColors = new Float32Array(diskCount * 3);
    const diskRadii = new Float32Array(diskCount);
    const diskAngles = new Float32Array(diskCount);
    const diskHeights = new Float32Array(diskCount);

    const colorHot = new THREE.Color(0xf8fafc);
    const colorCyan = new THREE.Color(0x38bdf8);
    const colorIndigo = new THREE.Color(0x4f46e5);

    for (let i = 0; i < diskCount; i++) {
      const t = Math.pow(Math.random(), 1.45);
      const radius = 1.95 + t * 5.6;
      const angle = Math.random() * Math.PI * 2;
      const thickness = (1 - t) * 0.28 + 0.06;
      const y = (Math.random() - 0.5) * thickness;

      diskRadii[i] = radius;
      diskAngles[i] = angle;
      diskHeights[i] = y;

      diskPositions[i * 3] = Math.cos(angle) * radius;
      diskPositions[i * 3 + 1] = y;
      diskPositions[i * 3 + 2] = Math.sin(angle) * radius;

      const c = new THREE.Color();
      if (t < 0.28) {
        c.lerpColors(colorHot, colorCyan, t / 0.28);
      } else {
        c.lerpColors(colorCyan, colorIndigo, (t - 0.28) / 0.72);
      }
      diskColors[i * 3] = c.r;
      diskColors[i * 3 + 1] = c.g;
      diskColors[i * 3 + 2] = c.b;
    }

    const diskGeo = new THREE.BufferGeometry();
    diskGeo.setAttribute("position", new THREE.BufferAttribute(diskPositions, 3));
    diskGeo.setAttribute("color", new THREE.BufferAttribute(diskColors, 3));

    const diskMat = new THREE.PointsMaterial({
      size: isMobile ? 0.15 : 0.13,
      map: particleTex,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const accretionDisk = new THREE.Points(diskGeo, diskMat);
    diskGroup.add(accretionDisk);

    // 4. Vertical Gravitational Lensing Arch (Gargantua Bend)
    const archGroup = new THREE.Group();
    archGroup.rotation.z = -Math.PI * 0.12;
    blackholeGroup.add(archGroup);

    const archCount = isMobile ? 650 : 1000;
    const archPositions = new Float32Array(archCount * 3);
    const archColors = new Float32Array(archCount * 3);

    for (let i = 0; i < archCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const r = 1.85 + Math.pow(Math.random(), 2) * 1.9;
      const zSpread = (Math.random() - 0.5) * 0.35;

      archPositions[i * 3] = Math.cos(angle) * r;
      archPositions[i * 3 + 1] = Math.sin(angle) * r;
      archPositions[i * 3 + 2] = zSpread;

      const blend = Math.min(1, (r - 1.85) / 1.9);
      const c = new THREE.Color().lerpColors(colorHot, colorCyan, blend);
      archColors[i * 3] = c.r;
      archColors[i * 3 + 1] = c.g;
      archColors[i * 3 + 2] = c.b;
    }

    const archGeo = new THREE.BufferGeometry();
    archGeo.setAttribute("position", new THREE.BufferAttribute(archPositions, 3));
    archGeo.setAttribute("color", new THREE.BufferAttribute(archColors, 3));

    const archMat = new THREE.PointsMaterial({
      size: isMobile ? 0.12 : 0.1,
      map: particleTex,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const lensingArch = new THREE.Points(archGeo, archMat);
    archGroup.add(lensingArch);

    // 5. Autonomous Moving 3D Objects (Floating & Orbiting Polyhedra / Debris)
    const orbitingObjects: OrbitingObject[] = [];
    const geometries = [
      new THREE.IcosahedronGeometry(0.28, 0),
      new THREE.OctahedronGeometry(0.24, 0),
      new THREE.BoxGeometry(0.26, 0.26, 0.26),
      new THREE.TetrahedronGeometry(0.26, 0),
      new THREE.TorusGeometry(0.22, 0.055, 10, 24),
    ];

    const solidMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      metalness: 0.8,
      roughness: 0.25,
      emissive: 0x0ea5e9,
      emissiveIntensity: 0.15,
    });

    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x7dd3fc,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });

    const objectCount = isMobile ? 12 : 18;
    for (let i = 0; i < objectCount; i++) {
      const geo = geometries[i % geometries.length];
      const holder = new THREE.Group();

      const solidMesh = new THREE.Mesh(geo, solidMat);
      const wireMesh = new THREE.Mesh(geo, wireMat);
      wireMesh.scale.setScalar(1.06);

      holder.add(solidMesh);
      holder.add(wireMesh);

      const scale = 0.55 + Math.random() * 1.15;
      holder.scale.setScalar(scale);

      const radius = 4.2 + Math.random() * 6.5;
      const angle = (i / objectCount) * Math.PI * 2 + Math.random() * 0.5;
      const inclination = (Math.random() - 0.5) * 1.1;
      const yOffset = (Math.random() - 0.5) * 3.8;

      blackholeGroup.add(holder);

      orbitingObjects.push({
        mesh: holder,
        radius,
        angle,
        speed: (0.09 + Math.random() * 0.16) * (i % 2 === 0 ? 1 : -1),
        inclination,
        yOffset,
        rotSpeedX: (Math.random() - 0.5) * 0.9,
        rotSpeedY: (Math.random() - 0.5) * 0.9,
        rotSpeedZ: (Math.random() - 0.5) * 0.6,
      });
    }

    // 6. Deep-Space Starfield
    const starCount = isMobile ? 750 : 1200;
    const starPositions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      starPositions[i * 3] = (Math.random() - 0.5) * 70;
      starPositions[i * 3 + 1] = (Math.random() - 0.5) * 55;
      starPositions[i * 3 + 2] = (Math.random() - 0.5) * 50 - 12;
    }

    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
    const starMat = new THREE.PointsMaterial({
      color: 0xcbd5e1,
      size: 0.08,
      transparent: true,
      opacity: 0.55,
      depthWrite: false,
    });
    const stars = new THREE.Points(starGeo, starMat);
    scene.add(stars);

    // Subtle Mouse Parallax
    const pointer = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handleMouseMove = (e: MouseEvent) => {
      pointer.targetX = (e.clientX / window.innerWidth - 0.5) * 1.4;
      pointer.targetY = (e.clientY / window.innerHeight - 0.5) * 0.9;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    const handleResize = () => {
      const mobileNow = window.innerWidth < 768;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.position.z = mobileNow ? 14.5 : 11.2;
      blackholeGroup.position.x = mobileNow ? 0 : 1.6;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // Animation Loop
    const clock = new THREE.Clock();
    let animationId = 0;

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const delta = Math.min(clock.getDelta(), 0.05);
      const elapsed = clock.getElapsedTime();

      // Keplerian rotation of accretion disk particles
      const posAttr = diskGeo.attributes.position as THREE.BufferAttribute;
      const arr = posAttr.array as Float32Array;
      for (let i = 0; i < diskCount; i++) {
        const r = diskRadii[i];
        const angularVel = (2.1 / Math.pow(r, 1.35)) * delta;
        diskAngles[i] += angularVel;

        const a = diskAngles[i];
        arr[i * 3] = Math.cos(a) * r;
        arr[i * 3 + 1] = diskHeights[i] + Math.sin(elapsed * 1.2 + a * 2) * 0.03;
        arr[i * 3 + 2] = Math.sin(a) * r;
      }
      posAttr.needsUpdate = true;

      // Rotate gravitational lensing arch slowly
      archGroup.rotation.z = -Math.PI * 0.12 + Math.sin(elapsed * 0.25) * 0.04;
      lensingArch.rotation.z -= delta * 0.22;

      // Autonomous 3D moving objects
      for (const obj of orbitingObjects) {
        obj.angle += obj.speed * delta;
        const x = Math.cos(obj.angle) * obj.radius;
        const z = Math.sin(obj.angle) * obj.radius;
        const y =
          Math.sin(obj.angle * 1.5 + obj.inclination) * 1.8 +
          obj.yOffset +
          Math.cos(elapsed * 0.7 + obj.radius) * 0.25;

        obj.mesh.position.set(x, y, z);
        obj.mesh.rotation.x += obj.rotSpeedX * delta;
        obj.mesh.rotation.y += obj.rotSpeedY * delta;
        obj.mesh.rotation.z += obj.rotSpeedZ * delta;
      }

      // Autonomous deep-space drift + smooth pointer parallax
      stars.rotation.y += delta * 0.015;
      stars.rotation.x += delta * 0.006;

      pointer.x += (pointer.targetX - pointer.x) * 0.04;
      pointer.y += (pointer.targetY - pointer.y) * 0.04;

      const autoX = Math.sin(elapsed * 0.18) * 0.55;
      const autoY = Math.cos(elapsed * 0.14) * 0.35;

      camera.position.x = autoX + pointer.x;
      camera.position.y = 1.2 + autoY - pointer.y;
      camera.lookAt(blackholeGroup.position.x * 0.4, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      horizonGeo.dispose();
      horizonMat.dispose();
      photonTex.dispose();
      photonMat.dispose();
      particleTex.dispose();
      diskGeo.dispose();
      diskMat.dispose();
      archGeo.dispose();
      archMat.dispose();
      starGeo.dispose();
      starMat.dispose();
      solidMat.dispose();
      wireMat.dispose();
      geometries.forEach((g) => g.dispose());
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#03050a]">
      <div ref={containerRef} className="w-full h-full" />
      {/* Subtle readability vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#03050a]/55 via-transparent to-[#03050a]/85" />
    </div>
  );
}
