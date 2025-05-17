
import React from "react";
import { Flower } from "lucide-react";

const FloraHeader: React.FC = () => {
  return (
    <header className="py-5 px-4 md:px-8 flex items-center justify-center bg-gradient-to-r from-flora-petal/50 to-flora-lavender/30 shadow-sm">
      <div className="flex items-center gap-3 animate-float">
        <div className="bg-white p-2.5 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 animate-pulse-slow">
          <Flower className="h-8 w-8 text-flora-rose animate-spin-slow" />
        </div>
        <div>
          <h1 className="text-2xl md:text-3xl font-display font-bold tracking-tight text-flora-text">
            <span className="text-flora-rose animate-bounce-gentle">Flora</span>Bot
          </h1>
          <p className="text-xs md:text-sm text-flora-text/70">
            Your botanical information assistant
          </p>
        </div>
      </div>
    </header>
  );
};

export default FloraHeader;
