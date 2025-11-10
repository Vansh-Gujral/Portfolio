import React, { useRef } from 'react';
import * as THREE from 'three';
// Fix: Replaced incorrect type imports with `ThreeElements` from '@react-three/fiber' to resolve module export errors.
import {
  useFrame,
  useThree,
  type ThreeElements,
} from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { lerp } from 'maath/misc';

// Fix: Updated JSX intrinsic element declarations to use `ThreeElements` for correct type inference.
declare global {
  namespace JSX {
    interface IntrinsicElements {
      primitive: ThreeElements['primitive'];
      ambientLight: ThreeElements['ambientLight'];
      directionalLight: ThreeElements['directionalLight'];
      pointLight: ThreeElements['pointLight'];
      hemisphereLight: ThreeElements['hemisphereLight'];
    }
  }
}

const GhastModel = () => {
  const ref = useRef<THREE.Group>(null!);
  // Using a spooky ghost model as a substitute for the Minecraft Ghast
  // Switched to a working model URL to fix the 404 error.
  const { scene } = useGLTF('https://cdn.glitch.global/6a51079b-6063-47a3-b54a-c6371c1f2113/ghost_w_top_hat.glb?v=1649110444648');
  const { mouse } = useThree();

  useFrame(() => {
    if (ref.current) {
      // Smoothly interpolate the model's rotation to follow the mouse cursor
      ref.current.rotation.y = lerp(ref.current.rotation.y, mouse.x * 0.5, 0.05);
      ref.current.rotation.x = lerp(ref.current.rotation.x, -mouse.y * 0.5, 0.05);
    }
  });

  // Clone the scene to avoid mutation issues if the model is reused
  // Adjusted scale and position for the new model.
  return <primitive object={scene.clone()} ref={ref} scale={1.5} position={[0, -2.5, 0]} />;
};

// Kept component name 'Atom' to avoid breaking imports, but it now renders the new model.
const Atom: React.FC = () => {
  return (
    <>
      <ambientLight intensity={1.5} />
      <directionalLight position={[5, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.75} />
      <hemisphereLight intensity={0.5} groundColor="black" />
      <GhastModel />
    </>
  );
};

// Preload the model for faster loading
useGLTF.preload('https://cdn.glitch.global/6a51079b-6063-47a3-b54a-c6371c1f2113/ghost_w_top_hat.glb?v=1649110444648');

export default Atom;
