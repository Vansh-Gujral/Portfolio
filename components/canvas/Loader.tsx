

import React from 'react';
import { Html, useProgress } from '@react-three/drei';

const CanvasLoader: React.FC = () => {
  const { progress } = useProgress();
  return (
    <Html center>
      <span className="text-green-500">{progress.toFixed(2)}% loaded</span>
    </Html>
  );
};

export default CanvasLoader;