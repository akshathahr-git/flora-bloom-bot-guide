
import React from "react";
import { Flower } from "lucide-react";

const FloraHeader: React.FC = () => {
  return (
    <header className="py-5 px-4 md:px-8 flex items-center justify-center bg-gradient-to-r from-flora-petal via-flora-lavender/30 to-flora-leaf/20 shadow-lg relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* More floating flowers with increased animation variety */}
        {[...Array(12)].map((_, i) => (
          <div 
            key={i} 
            className="absolute opacity-10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${15 + Math.random() * 15}s`,
              animationDelay: `${Math.random() * 5}s`,
              transform: `rotate(${Math.random() * 360}deg) scale(${0.7 + Math.random() * 0.6})`
            }}
          >
            <Flower 
              className={`h-${8 + Math.floor(Math.random() * 12)} w-${8 + Math.floor(Math.random() * 12)} text-flora-${['rose', 'leaf', 'sunflower', 'lavender'][Math.floor(Math.random() * 4)]} ${Math.random() > 0.5 ? 'animate-spin-slow' : 'animate-float'}`} 
              style={{ filter: "drop-shadow(0 0 3px rgba(255,255,255,0.5))" }}
            />
          </div>
        ))}
        
        <div className="absolute -top-10 -left-10 opacity-20">
          <Flower className="h-28 w-28 text-flora-rose animate-spin-slow" style={{animationDuration: "15s"}} />
        </div>
        <div className="absolute top-8 right-12 opacity-15">
          <Flower className="h-20 w-20 text-flora-leaf animate-pulse-slow" style={{animationDuration: "12s"}} />
        </div>
        <div className="absolute bottom-5 left-1/4 opacity-15">
          <Flower className="h-16 w-16 text-flora-sunflower animate-float" style={{animationDuration: "18s"}} />
        </div>
      </div>
      
      <div className="flex items-center gap-3 animate-float z-10">
        <div className="relative">
          <div className="absolute -top-2 -right-2 w-5 h-5 bg-flora-leaf rounded-full animate-ping opacity-75"></div>
          <div className="bg-white p-3 rounded-full shadow-lg transition-all duration-500 hover:shadow-xl hover:scale-110 group">
            <Flower 
              className="h-10 w-10 text-flora-rose transform transition-all duration-700 group-hover:rotate-180" 
              style={{ filter: "drop-shadow(0 0 8px rgba(255,107,129,0.7))" }}
            />
          </div>
        </div>
        <div>
          <h1 className="text-2xl md:text-4xl font-display font-bold tracking-tight text-flora-text relative">
            {['F', 'l', 'o', 'r', 'a', 'B', 'o', 't'].map((letter, i) => (
              <span 
                key={i}
                className={`inline-block ${
                  letter === 'F' ? 'text-flora-rose animate-bounce-gentle' : 
                  letter === 'B' ? 'text-flora-leaf animate-pulse-gentle' : 
                  i % 2 === 0 ? 'animate-float' : 'animate-pulse-slow'
                }`} 
                style={{ 
                  animationDelay: `${i * 0.1}s`,
                  textShadow: '0 0 5px rgba(255,255,255,0.5)'
                }}
              >
                {letter}
              </span>
            ))}
            <div className="absolute -top-3 -right-6 animate-spin-slow" style={{animationDuration: "10s"}}>
              <Flower className="h-5 w-5 text-flora-leaf/70" />
            </div>
            <div className="absolute top-2 -left-4 animate-float" style={{animationDelay: "0.4s"}}>
              <Flower className="h-3 w-3 text-flora-rose/60" />
            </div>
          </h1>
          <p className="text-xs md:text-sm text-flora-text/70 animate-fade-in relative">
            <span className="relative group inline-block">
              <span className="bg-gradient-to-r from-flora-rose via-flora-lavender to-flora-leaf bg-clip-text text-transparent font-semibold">
                Your botanical information assistant
              </span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-flora-rose to-flora-leaf scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></span>
            </span>
          </p>
        </div>
      </div>
    </header>
  );
};

export default FloraHeader;
