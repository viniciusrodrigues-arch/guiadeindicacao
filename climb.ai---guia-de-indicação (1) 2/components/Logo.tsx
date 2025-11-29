import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "h-8 md:h-12" }) => {
  return (
    <img 
      src="https://grupoclimb.ai/lovable-uploads/3c896251-e383-44b9-82d5-fc4b33ca8d10.png?w=480" 
      alt="Climb AI" 
      className={`object-contain ${className}`} 
    />
  );
};