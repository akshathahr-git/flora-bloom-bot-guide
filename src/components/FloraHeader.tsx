
import React from "react";
import { Flower } from "lucide-react";

const FloraHeader: React.FC = () => {
  return (
    <header className="py-5 px-4 md:px-8 flex items-center justify-center bg-gradient-to-r from-flora-petal/50 to-flora-lavender/30 shadow-sm">
      <div className="flex items-center gap-3 animate-float">
        <div className="relative">
          <div className="absolute -top-2 -right-2 w-3 h-3 bg-flora-leaf rounded-full animate-ping opacity-75"></div>
          <div className="bg-white p-2.5 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-110 group">
            <Flower className="h-8 w-8 text-flora-rose animate-spin-slow transform transition-transform group-hover:rotate-45" />
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
          </h1>
          <p className="text-xs md:text-sm text-flora-text/70 animate-fade-in">
            Your botanical information assistant
          </p>
        </div>
      </div>
    </header>
  );
};

export default FloraHeader;
