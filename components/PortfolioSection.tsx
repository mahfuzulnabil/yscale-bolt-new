
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PortfolioCard {
  id: number;
  images: string[];
  alt: string;
}

export const PortfolioSection: React.FC = () => {
  const portfolioImages = [
    '/orc.png',
    '/roam.png',
    '/vidro.png',
  ];

  const cards: PortfolioCard[] = Array.from({ length: 9 }, (_, i) => ({
    id: i,
    images: [portfolioImages[i % 3]],
    alt: `Portfolio image ${(i % 3) + 1}`,
  }));

  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: number]: number }>(
    cards.reduce((acc, card) => ({ ...acc, [card.id]: 0 }), {})
  );

  const handlePrevious = (cardId: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex(prev => ({
      ...prev,
      [cardId]: prev[cardId] > 0 ? prev[cardId] - 1 : cards.find(c => c.id === cardId)!.images.length - 1
    }));
  };

  const handleNext = (cardId: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex(prev => ({
      ...prev,
      [cardId]: (prev[cardId] + 1) % cards.find(c => c.id === cardId)!.images.length
    }));
  };

  return (
    <section className="w-full bg-white py-12 px-4 md:px-8">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl text-gray-900 text-center mb-4">
          Portfolio
        </h2>
        <p className="text-sm text-gray-500 text-center mb-12">
          Three-card preview — duplicated for a smooth gallery
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {cards.map((card) => (
            <div
              key={card.id}
              className="relative group rounded-[10px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-200 aspect-[16/10] bg-gray-100"
            >
              <img
                src={card.images[currentImageIndex[card.id]]}
                alt={card.alt}
                className="w-full h-full object-cover transition-opacity duration-[220ms]"
              />

              <button
                onClick={(e) => handlePrevious(card.id, e)}
                aria-label="Previous image"
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center border border-gray-200 opacity-0 group-hover:opacity-100 hover:scale-105 transition-all duration-200 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-orange-500 touch-manipulation min-w-[44px] min-h-[44px]"
              >
                <ChevronLeft size={20} className="text-gray-700" />
              </button>

              <button
                onClick={(e) => handleNext(card.id, e)}
                aria-label="Next image"
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-11 h-11 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center border border-gray-200 opacity-0 group-hover:opacity-100 hover:scale-105 transition-all duration-200 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-orange-500 touch-manipulation min-w-[44px] min-h-[44px]"
              >
                <ChevronRight size={20} className="text-gray-700" />
              </button>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2">
          {[0, 1, 2].map((page) => (
            <div
              key={page}
              className="w-2 h-2 rounded-full bg-gray-300 transition-colors"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
