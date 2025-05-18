
import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Flower } from "lucide-react";
import type { FlowerInfo } from "./flower-model";

interface FlowerCardProps {
  flowerInfo: FlowerInfo;
}

const FlowerCard: React.FC<FlowerCardProps> = ({ flowerInfo }) => {
  return (
    <Card className="flower-card overflow-hidden max-w-md w-full mx-auto animate-fade-in hover:scale-[1.02] transition-all duration-500 border-2 border-flora-petal/30 relative">
      <div className="absolute -right-12 -top-12 opacity-5 z-0">
        <Flower className="h-32 w-32 text-flora-leaf animate-spin-slow" style={{animationDuration: "20s"}} />
      </div>
      
      <CardHeader className="bg-gradient-to-r from-flora-petal/40 to-flora-lavender/30 pb-2 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-20 h-20 bg-flora-rose/5 rounded-full blur-xl"></div>
        <div className="flex items-center gap-2 mb-1">
          <div className="p-1.5 bg-white rounded-full shadow-sm animate-pulse-gentle relative group">
            <Flower className="h-5 w-5 text-flora-rose transition-transform duration-700 group-hover:rotate-180" />
            <span className="absolute inset-0 rounded-full bg-white opacity-80 group-hover:opacity-0 transition-opacity duration-300"></span>
          </div>
          <CardTitle className="font-display text-lg animate-fade-in">{flowerInfo.commonName}</CardTitle>
        </div>
        <CardDescription className="italic animate-fade-in" style={{ animationDelay: "0.1s" }}>{flowerInfo.scientificName}</CardDescription>
      </CardHeader>
      
      {flowerInfo.imageUrl && (
        <div className="w-full h-52 overflow-hidden relative group">
          <img 
            src={flowerInfo.imageUrl} 
            alt={flowerInfo.commonName} 
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
            loading="lazy"
            onError={(e) => {
              // Fallback image if the original one fails to load
              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=500&q=60";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
            <div className="bg-white/80 backdrop-blur-sm p-1 rounded-full">
              <Flower className="h-4 w-4 text-flora-rose animate-pulse-gentle" />
            </div>
          </div>
        </div>
      )}
      
      <CardContent className="pt-4 space-y-3 text-sm relative z-10">
        <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <p className="font-medium text-flora-text flex items-center gap-1">
            <span className="text-flora-lavender">🌿</span> Family
          </p>
          <p>{flowerInfo.family}</p>
        </div>
        
        <Separator className="!my-3 bg-flora-leaf/10" />
        
        <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <p className="font-medium text-flora-text flex items-center gap-1">
            <span className="text-flora-lavender">🗺️</span> Native Region
          </p>
          <p>{flowerInfo.nativeRegion}</p>
        </div>
        
        <Separator className="!my-3 bg-flora-leaf/10" />
        
        <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <p className="font-medium text-flora-text flex items-center gap-1">
            <span className="text-flora-lavender">📅</span> Flowering Season
          </p>
          <p>{flowerInfo.floweringSeason}</p>
        </div>
        
        <Separator className="!my-3 bg-flora-leaf/10" />
        
        <div className="animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <p className="font-medium text-flora-text flex items-center gap-1">
            <span className="text-flora-lavender">💌</span> Symbolic Meaning
          </p>
          <p>{flowerInfo.symbolicMeaning}</p>
        </div>
        
        <Separator className="!my-3 bg-flora-leaf/10" />
        
        <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <p className="font-medium text-flora-text flex items-center gap-1">
            <span className="text-flora-lavender">📚</span> Fun Fact
          </p>
          <p>{flowerInfo.funFact}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default FlowerCard;
