import { useState } from 'react';

export const usePilotMode = () => {
  const [isPilotMode, setIsPilotMode] = useState(false);

  const togglePilotMode = () => {
    setIsPilotMode((prev) => !prev);
  };

  return { isPilotMode, togglePilotMode };
};