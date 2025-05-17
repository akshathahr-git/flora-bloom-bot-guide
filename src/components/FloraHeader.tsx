
import React from "react";
import { Flower } from "lucide-react";

const FloraHeader: React.FC = () => {
  return (
    <header className="py-4 px-4 md:px-8 flex items-center justify-center bg-gradient-to-r from-flora-petal/50 to-flora-lavender/30">
      <div className="flex items-center gap-3 animate-float">
        <div className="bg-white p-2.5 rounded-full shadow-md">
          <Flower className="h-8 w-8 text-flora-rose animate-pulse-gentle" />
        </div>
        <div>
          <h1 className="text-2xl md:text-3xl font-display font-bold tracking-tight text-flora-text">
            <span className="text-flora-rose">Flora</span>Bot
          </h1>
          <p className="text-xs md:text-sm text-flora-text/70">
            Your intelligent flower guide
          </p>
        </div>
      </div>
    </header>
  );
};

export default FloraHeader;
