
import React from "react";
import { Flower } from "lucide-react";

const FloraHeader: React.FC = () => {
  return (
    <header className="py-5 px-4 md:px-8 flex items-center justify-center bg-gradient-to-r from-flora-petal/50 via-flora-lavender/20 to-flora-leaf/10 shadow-sm relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -left-10 opacity-10">
          <Flower className="h-28 w-28 text-flora-rose animate-spin-slow" style={{animationDuration: "15s"}} />
        </div>
        <div className="absolute top-8 right-12 opacity-10">
          <Flower className="h-20 w-20 text-flora-leaf animate-spin-slow" style={{animationDuration: "12s", animationDirection: "reverse"}} />
        </div>
        <div className="absolute bottom-5 left-1/4 opacity-10">
          <Flower className="h-16 w-16 text-flora-sunflower animate-spin-slow" style={{animationDuration: "18s"}} />
        </div>
      </div>
      
      <div className="flex items-center gap-3 animate-float z-10">
        <div className="relative">
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-flora-leaf rounded-full animate-ping opacity-75"></div>
          <div className="bg-white p-2.5 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-110 group">
            <Flower 
              className="h-8 w-8 text-flora-rose transform transition-all duration-700 group-hover:rotate-180" 
              style={{ filter: "drop-shadow(0 0 3px rgba(255,107,129,0.5))" }}
            />
          </div>
        </div>
        <div>
          <h1 className="text-2xl md:text-3xl font-display font-bold tracking-tight text-flora-text relative">
            <span className="inline-block text-flora-rose animate-bounce-gentle">F</span>
            <span className="inline-block animate-float" style={{ animationDelay: "0.1s" }}>l</span>
            <span className="inline-block animate-float" style={{ animationDelay: "0.2s" }}>o</span>
            <span className="inline-block animate-float" style={{ animationDelay: "0.3s" }}>r</span>
            <span className="inline-block animate-float" style={{ animationDelay: "0.4s" }}>a</span>
            <span className="inline-block text-flora-leaf animate-pulse-gentle">B</span>
            <span className="inline-block animate-float" style={{ animationDelay: "0.5s" }}>o</span>
            <span className="inline-block animate-float" style={{ animationDelay: "0.6s" }}>t</span>
            <div className="absolute -top-3 -right-6">
              <Flower className="h-5 w-5 text-flora-leaf/50 animate-spin-slow" />
            </div>
            <div className="absolute top-2 -left-4">
              <Flower className="h-3 w-3 text-flora-rose/40 animate-spin-slow" style={{animationDelay: "0.4s"}} />
            </div>
          </h1>
          <p className="text-xs md:text-sm text-flora-text/70 animate-fade-in relative">
            <span className="relative inline-block">
              Your botanical information assistant
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-flora-rose to-flora-leaf scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></span>
            </span>
          </p>
        </div>
      </div>
    </header>
  );
};

export default FloraHeader;
