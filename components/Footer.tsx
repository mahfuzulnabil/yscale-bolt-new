import React from 'react';
import { Logo } from './Logo';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const Footer: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <footer className="w-full bg-white py-12 border-t border-gray-100">
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Logo */}
        <div className="flex items-center">
          <Logo />
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-8">
          <a href="https://www.linkedin.com/company/yscalestudio/" target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-gray-900 hover:text-brand-orange transition-colors">Linkedin</a>
          <a href="https://www.instagram.com/yscalestudio/" target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-gray-900 hover:text-brand-orange transition-colors">Instagram</a>
          <a href="https://dribbble.com/yscalestudio" target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-gray-900 hover:text-brand-orange transition-colors">Dribbble</a>
          <a href="https://www.behance.net/yscalestudio" target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-gray-900 hover:text-brand-orange transition-colors">Behance</a>
        </div>
      </div>
    </footer>
  );
};