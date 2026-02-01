import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float, Line } from '@react-three/drei';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'framer-motion';

const NeuralNetwork = () => {
  const pointsRef = useRef<THREE.Points>(null!);
  const lineGroupRef = useRef<THREE.Group>(null!);

  const count = 100;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, [count]);

  const connections = useMemo(() => {
    const lines = [];
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dx = positions[i * 3] - positions[j * 3];
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < 2.5) {
          lines.push(
            new THREE.Vector3(positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2]),
            new THREE.Vector3(positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2])
          );
        }
      }
    }
    return lines;
  }, [positions]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    pointsRef.current.rotation.y = time * 0.1;
    pointsRef.current.rotation.x = time * 0.05;
    lineGroupRef.current.rotation.y = time * 0.1;
    lineGroupRef.current.rotation.x = time * 0.05;
  });

  return (
    <group>
      <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#10b981"
          size={0.08}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
      <group ref={lineGroupRef}>
        {Array.from({ length: Math.floor(connections.length / 2) }).map((_, i) => (
          <Line
            key={i}
            points={[connections[i * 2], connections[i * 2 + 1]]}
            color="#10b981"
            lineWidth={0.5}
            transparent
            opacity={0.15}
          />
        ))}
      </group>
    </group>
  );
};

const specializations = [
  "High-Concurrency Python Backends",
  "Self-Supervised Research (JEPA)",
  "Multi-Agent LLM Orchestration",
  "Production-Scale ML Infrastructure",
  "Distributed Fog-Cloud Systems"
];

export const Hero: React.FC = () => {
  const [index, setIndex] = useState(0);

  // Cycle through specializations every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % specializations.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#09090b]">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
          <ambientLight intensity={0.5} />
          <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <NeuralNetwork />
          </Float>
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex flex-col items-center mb-10">
            <span className="text-zinc-500 font-mono text-sm tracking-[0.3em] uppercase mb-2">Vansh Gujral</span>
            <div className="w-12 h-px bg-emerald-500/30"></div>
          </div>
          
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white mb-8">
            Intelligence, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-600">
              Architected.
            </span>
          </h1>
          
          <div className="mb-12 min-h-[100px]">
            <h2 className="text-zinc-400 text-lg md:text-xl font-medium tracking-tight max-w-2xl mx-auto mb-4">
              Engineering the Foundations of Autonomous Intelligence.
            </h2>
            
            <div className="flex items-center justify-center gap-3 text-emerald-500 font-mono text-sm md:text-base">
              <span className="text-zinc-600 italic uppercase tracking-widest text-xs">Executing:</span>
              <div className="h-6 overflow-hidden flex items-center">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="font-bold tracking-wider uppercase whitespace-nowrap"
                  >
                    {specializations[index]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(16,185,129,0.4)" }}
              whileTap={{ scale: 0.98 }}
              href="#projects"
              className="px-10 py-4 bg-emerald-500 text-black font-bold rounded-2xl transition-all w-full sm:w-auto text-sm tracking-widest"
            >
              VIEW WORK
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.05)', borderColor: '#10b981' }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="px-10 py-4 border border-zinc-700 text-zinc-300 font-bold rounded-2xl hover:text-white transition-all w-full sm:w-auto backdrop-blur-sm text-sm tracking-widest"
            >
              CONTACT ME
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Decorative Gradients */}
      <div className="absolute -bottom-48 -left-48 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-12 -right-12 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
    </div>
  );
};