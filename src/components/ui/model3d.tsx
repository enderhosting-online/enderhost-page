// 'use client';

// import { Canvas, useFrame } from '@react-three/fiber';
// import { useGLTF } from '@react-three/drei';
// import { useRef } from 'react';
// import { type Object3D } from 'three';

// export function ModelGLB({ url }: { url: string }) {
//   const { scene } = useGLTF(url);
//   const ref = useRef<Object3D>(null);
//   useFrame(() => {
//     if (ref.current) {
//       ref.current.rotation.y += 0.007;
//     }
//   });

//   return <primitive object={scene} ref={ref} scale={0.090} position={[0, 0, 0]} />;
// }

// export function Mineral3D() {
//   return (
//     <Canvas
//       camera={{ position: [0, 40, 80], fov: 20 }}
//       style={{ width: '100%', aspectRatio: 16 / 12 }}
//     >
//       <ambientLight intensity={0.8} />
//       <directionalLight position={[2, 2, 2]} />
//       <ModelGLB url="/models/minecraft_diamond_block.glb" />
//     </Canvas>
//   );
// }
