import { useState, useCallback } from 'react';

export const usePreview = () => {
  const [isPreviewMode, setIsPreviewMode] = useState(false);

  const togglePreview = useCallback(() => {
    setIsPreviewMode(prev => !prev);
  }, []);

  return { isPreviewMode, togglePreview };
};