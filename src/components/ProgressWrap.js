import React, { useEffect } from 'react';

const ProgressWrap = () => {
  useEffect(() => {
    const progressPath = document.querySelector('.progress-wrap path');
    
    if (!progressPath) return; // Exit if the progress path element is not found

    const pathLength = progressPath.getTotalLength();
    
    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    
    // Reflow for a smooth animation
    progressPath.getBoundingClientRect();
    
    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';

    // Function to update progress on scroll
    const updateProgress = () => {
      const scroll = window.scrollY; // Current scroll position
      const height = document.documentElement.scrollHeight - window.innerHeight; // Total scrollable height
      const progress = pathLength - (scroll * pathLength / height); // Calculate stroke dash offset based on scroll
      progressPath.style.strokeDashoffset = progress;
    };

    // Add scroll event listener
    window.addEventListener('scroll', updateProgress);

    // Update progress on initial load
    updateProgress();

    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', updateProgress);
    };
  }, []);

  return (
    <div className="progress-wrap">
      <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
      </svg>
    </div>
  );
};

export default ProgressWrap;
