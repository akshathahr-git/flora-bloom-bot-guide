
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
    <Card className="flower-card overflow-hidden max-w-md w-full mx-auto animate-fade-in hover:scale-[1.01] transition-all duration-300 border-2 border-flora-petal/30">
      <CardHeader className="bg-gradient-to-r from-flora-petal/40 to-flora-lavender/30 pb-2 relative overflow-hidden">
        <div className="absolute -right-6 -top-6 opacity-10">
          <Flower className="h-20 w-20 text-flora-leaf animate-spin-slow" />
        </div>
        <div className="flex items-center gap-2 mb-1">
          <div className="p-1 bg-white rounded-full shadow-sm animate-pulse-gentle">
            <Flower className="h-5 w-5 text-flora-rose" />
          </div>
          <CardTitle className="font-display text-lg animate-fade-in">{flowerInfo.commonName}</CardTitle>
        </div>
        <CardDescription className="italic animate-fade-in" style={{ animationDelay: "0.1s" }}>{flowerInfo.scientificName}</CardDescription>
      </CardHeader>
      
      {flowerInfo.imageUrl && (
        <div className="w-full h-48 overflow-hidden relative group">
          <img 
            src={flowerInfo.imageUrl} 
            alt={flowerInfo.commonName} 
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      )}
      
      <CardContent className="pt-4 space-y-3 text-sm">
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
