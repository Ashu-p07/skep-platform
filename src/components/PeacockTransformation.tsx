
import React, { useState, useEffect } from 'react';

const PeacockTransformation = () => {
  const [visible, setVisible] = useState(true);
  const [animationPhase, setAnimationPhase] = useState(0);
  
  useEffect(() => {
    const hasSeenAnimation = localStorage.getItem('hasSeenPeacockAnimation');
    
    if (hasSeenAnimation) {
      setVisible(false);
      return;
    }
    
    // Phase 1: Initial feather appearance (small)
    const phaseOneTimer = setTimeout(() => {
      setAnimationPhase(1);
    }, 500);
    
    // Phase 2: Expand to cover screen
    const phaseTwoTimer = setTimeout(() => {
      setAnimationPhase(2);
    }, 1500);
    
    // Phase 3: Fade out and reveal main content
    const phaseThreeTimer = setTimeout(() => {
      setAnimationPhase(3);
    }, 3500);
    
    // Complete animation and hide
    const completeTimer = setTimeout(() => {
      setVisible(false);
      localStorage.setItem('hasSeenPeacockAnimation', 'true');
    }, 4500);
    
    return () => {
      clearTimeout(phaseOneTimer);
      clearTimeout(phaseTwoTimer);
      clearTimeout(phaseThreeTimer);
      clearTimeout(completeTimer);
    };
  }, []);
  
  if (!visible) return null;
  
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white overflow-hidden">
      <div className="relative w-full h-full">
        <div className="absolute inset-0 flex items-center justify-center">
          <div 
            className={`transform origin-center transition-all duration-1500 ease-in-out ${
              animationPhase === 0 ? 'scale-[0.3] opacity-0' : 
              animationPhase === 1 ? 'scale-[0.8] opacity-100' :
              animationPhase === 2 ? 'scale-[2.5] opacity-100' :
              'scale-[3] opacity-0'
            }`}
          >
            <div className="relative">
              {/* Individual feathers radiating outward */}
              {[...Array(24)].map((_, i) => (
                <div 
                  key={i} 
                  className="absolute top-0 left-0"
                  style={{ 
                    transform: `rotate(${i * 15}deg)`,
                    transformOrigin: 'center',
                    opacity: animationPhase >= 1 ? 0.9 : 0,
                    transition: 'opacity 0.5s ease-out',
                    transitionDelay: `${i * 0.05}s`
                  }}
                >
                  <img 
                    src="/lovable-uploads/0317cecc-c04d-4054-a111-3417b4fa6c5f.png" 
                    alt="Peacock feather" 
                    className="h-64 w-auto transform -translate-y-48"
                  />
                </div>
              ))}
              
              {/* Center logo */}
              <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                <div className="bg-white rounded-full p-4 shadow-lg z-10">
                  <img 
                    src="/lovable-uploads/f000cc74-21aa-4706-b577-a875d9c46b84.png" 
                    alt="Shree Krishna Edu Plaza Logo" 
                    className="h-24 w-24 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeacockTransformation;
