
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
    <Card className="flower-card overflow-hidden max-w-md w-full mx-auto animate-fade-in">
      <CardHeader className="bg-gradient-to-r from-flora-petal/40 to-flora-lavender/30 pb-2">
        <div className="flex items-center gap-2 mb-1">
          <Flower className="h-5 w-5 text-flora-rose" />
          <CardTitle className="font-display text-lg">{flowerInfo.commonName}</CardTitle>
        </div>
        <CardDescription className="italic">{flowerInfo.scientificName}</CardDescription>
      </CardHeader>
      
      {flowerInfo.imageUrl && (
        <div className="w-full h-48 overflow-hidden">
          <img 
            src={flowerInfo.imageUrl} 
            alt={flowerInfo.commonName} 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <CardContent className="pt-4 space-y-3 text-sm">
        <div>
          <p className="font-medium text-flora-text flex items-center gap-1">
            <span className="text-flora-lavender">🌿</span> Family
          </p>
          <p>{flowerInfo.family}</p>
        </div>
        
        <Separator className="!my-3 bg-flora-leaf/10" />
        
        <div>
          <p className="font-medium text-flora-text flex items-center gap-1">
            <span className="text-flora-lavender">🗺️</span> Native Region
          </p>
          <p>{flowerInfo.nativeRegion}</p>
        </div>
        
        <Separator className="!my-3 bg-flora-leaf/10" />
        
        <div>
          <p className="font-medium text-flora-text flex items-center gap-1">
            <span className="text-flora-lavender">📅</span> Flowering Season
          </p>
          <p>{flowerInfo.floweringSeason}</p>
        </div>
        
        <Separator className="!my-3 bg-flora-leaf/10" />
        
        <div>
          <p className="font-medium text-flora-text flex items-center gap-1">
            <span className="text-flora-lavender">💌</span> Symbolic Meaning
          </p>
          <p>{flowerInfo.symbolicMeaning}</p>
        </div>
        
        <Separator className="!my-3 bg-flora-leaf/10" />
        
        <div>
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
