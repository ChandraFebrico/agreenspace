"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function MovableBackground() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // ✅ Store the ref's current value immediately
    const mountEl = mountRef.current;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountEl.appendChild(renderer.domElement);

    // Lights
    const sunlight = new THREE.DirectionalLight(0xffffff, 1);
    sunlight.position.set(10, 20, 10);
    sunlight.castShadow = true;
    sunlight.shadow.mapSize.width = 2048;
    sunlight.shadow.mapSize.height = 2048;
    scene.add(sunlight);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Placeholder scenery reference
    let scenery: THREE.Object3D | null = null;

    // Load GLB model
    const loader = new GLTFLoader();
    loader.load(
      "/models/Nature.glb",
      (gltf) => {
        scenery = gltf.scene;
        scenery.scale.set(80, 80, 80);
        scenery.position.set(0, -20, -50);
        scene.add(scenery);
      },
      undefined,
      (error) => {
        console.error("Error loading model:", error);
      }
    );

    camera.position.z = 0;

    let mouseX = 0;
    let mouseY = -10;

    const onMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 + 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onMouseMove);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      if (scenery) {
        scenery.position.x += (mouseX * 10 - scenery.position.x) * 0.02;
        scenery.position.y += (mouseY * 5 - scenery.position.y) * 0.02;
      }

      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onWindowResize);

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onWindowResize);
      // ✅ Use the stored element for cleanup
      mountEl.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1, // Behind everything
      }}
    />
  );
}
