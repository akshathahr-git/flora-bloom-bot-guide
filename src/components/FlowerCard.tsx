
import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Flower } from "lucide-react";
import type { FlowerInfo } from "./flower-model";

interface FlowerCardProps {
  flowerInfo: FlowerInfo;
}

const FlowerCard: React.FC<FlowerCardProps> = ({ flowerInfo }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Enhanced reliable fallback images for flowers that tend to have issues
  const fallbackImages: Record<string, string> = {
    "lily": "https://images.unsplash.com/photo-1588635655481-e1c1b8abb08c?auto=format&fit=crop&w=500&q=80",
    "orchid": "https://images.unsplash.com/photo-1566907225058-deb03ee6b871?auto=format&fit=crop&w=500&q=80",
    "daffodil": "https://images.unsplash.com/photo-1583738891460-8a671a513ccd?auto=format&fit=crop&w=500&q=80",
    "marigold": "https://images.unsplash.com/photo-1602738328654-51ab2ae6aead?auto=format&fit=crop&w=500&q=80",
    "lotus": "https://images.unsplash.com/photo-1606293926249-9390013c6d2a?auto=format&fit=crop&w=500&q=80",
    "carnation": "https://images.unsplash.com/photo-1589123053646-4e8c49a14940?auto=format&fit=crop&w=500&q=80",
    "dahlia": "https://images.unsplash.com/photo-1610397648930-477b8c7f0943?auto=format&fit=crop&w=500&q=80",
    "hibiscus": "https://images.unsplash.com/photo-1591825729269-caeb344f6df2?auto=format&fit=crop&w=500&q=80",
  };

  // Get image source with enhanced fallback logic
  const getImageSource = () => {
    const flowerNameLower = flowerInfo.commonName.toLowerCase();
    
    // First check our specific fallbacks
    if (fallbackImages[flowerNameLower]) {
      return fallbackImages[flowerNameLower];
    }
    
    // Then use the image from the flower database if available
    if (flowerInfo.imageUrl && flowerInfo.imageUrl.length > 10) {
      return flowerInfo.imageUrl;
    }
    
    // Default fallback
    return "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=500&q=80";
  };

  return (
    <Card 
      className="flower-card overflow-hidden max-w-md w-full mx-auto animate-fade-in hover:scale-[1.02] transition-all duration-500 border-2 border-flora-petal/30 relative"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Enhanced animated background elements */}
      <div className="absolute -right-12 -top-12 opacity-5 z-0">
        <Flower 
          className={`h-32 w-32 text-flora-leaf ${isHovering ? 'animate-spin-slow' : 'animate-pulse-gentle'}`} 
          style={{animationDuration: "20s"}} 
        />
      </div>
      <div className="absolute -left-16 -bottom-16 opacity-5 z-0">
        <Flower 
          className="h-40 w-40 text-flora-rose animate-spin-slow" 
          style={{
            animationDuration: "25s", 
            animationDirection: "reverse",
            transform: isHovering ? "scale(1.1)" : "scale(1)",
            transition: "transform 1.5s ease-in-out"
          }} 
        />
      </div>
      
      {/* Added floating petals when hovering */}
      {isHovering && (
        <>
          {[...Array(6)].map((_, i) => (
            <div 
              key={i}
              className="absolute z-20 opacity-40"
              style={{
                top: `${20 + Math.random() * 60}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${5 + Math.random() * 8}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`,
                transform: `rotate(${Math.random() * 360}deg) scale(${0.4 + Math.random() * 0.4})`
              }}
            >
              <Flower 
                className={`h-5 w-5 text-flora-${['rose', 'leaf', 'petal', 'lavender'][Math.floor(Math.random() * 4)]}`}
              />
            </div>
          ))}
        </>
      )}
      
      <CardHeader className="bg-gradient-to-r from-flora-petal/40 to-flora-lavender/30 pb-2 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-20 h-20 bg-flora-rose/5 rounded-full blur-xl"></div>
        <div className="flex items-center gap-2 mb-1">
          <div className="p-1.5 bg-white rounded-full shadow-sm animate-pulse-gentle relative group">
            <Flower 
              className={`h-6 w-6 text-flora-rose transition-transform duration-700 ${isHovering ? 'rotate-180' : 'rotate-0'}`} 
            />
            <span className={`absolute inset-0 rounded-full bg-white transition-all duration-500 ${isHovering ? 'opacity-0 scale-150' : 'opacity-80 scale-100'}`}></span>
          </div>
          <CardTitle className="font-display text-xl animate-fade-in">
            {flowerInfo.commonName.split('').map((letter, i) => (
              <span 
                key={i}
                className="inline-block transition-all hover:text-flora-rose"
                style={{ 
                  animationDelay: `${i * 0.05}s`,
                  transform: isHovering ? `translateY(${Math.sin(i) * 3}px)` : 'none',
                  transition: `transform 0.5s ease-in-out ${i * 0.05}s`
                }}
              >
                {letter}
              </span>
            ))}
          </CardTitle>
        </div>
        <CardDescription className="italic animate-fade-in" style={{ animationDelay: "0.1s" }}>{flowerInfo.scientificName}</CardDescription>
      </CardHeader>
      
      <div className="w-full h-60 overflow-hidden relative group">
        <div className={`absolute inset-0 bg-gradient-to-br from-flora-leaf/20 to-flora-petal/20 flex items-center justify-center ${imageLoaded ? 'hidden' : 'flex'}`}>
          <div className="flex flex-col items-center">
            <Flower className="h-10 w-10 text-flora-rose/50 animate-spin-slow" />
            <p className="text-sm text-flora-text/60 mt-2">Loading beautiful flower...</p>
          </div>
        </div>
        <img 
          src={getImageSource()}
          alt={flowerInfo.commonName} 
          className={`w-full h-full object-cover transition-all duration-1000 ${imageLoaded ? 'opacity-100' : 'opacity-0'} ${isHovering ? 'scale-110 rotate-1' : 'scale-100 rotate-0'}`}
          loading="eager"
          onLoad={() => setImageLoaded(true)}
          onError={(e) => {
            console.log(`Error loading image for ${flowerInfo.commonName}`);
            // Enhanced fallback strategy
            const fallbackUrl = "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=500&q=80";
            if ((e.target as HTMLImageElement).src !== fallbackUrl) {
              (e.target as HTMLImageElement).src = fallbackUrl;
            }
          }}
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-black/50 to-transparent transition-opacity duration-500 flex items-end justify-end p-3 ${isHovering ? 'opacity-100' : 'opacity-0'}`}>
          <div className={`bg-white/90 backdrop-blur-sm p-2 rounded-full transition-all duration-500 ${isHovering ? 'translate-y-0 rotate-180' : 'translate-y-10 rotate-0'}`}>
            <Flower className="h-5 w-5 text-flora-rose animate-pulse-gentle" />
          </div>
        </div>
      </div>
      
      <CardContent className="pt-4 space-y-3 text-sm relative z-10">
        {[
          { label: "Family", value: flowerInfo.family, icon: "🌿", delay: 0.2 },
          { label: "Native Region", value: flowerInfo.nativeRegion, icon: "🗺️", delay: 0.3 },
          { label: "Flowering Season", value: flowerInfo.floweringSeason, icon: "📅", delay: 0.4 },
          { label: "Symbolic Meaning", value: flowerInfo.symbolicMeaning, icon: "💌", delay: 0.5 },
          { label: "Fun Fact", value: flowerInfo.funFact, icon: "📚", delay: 0.6 }
        ].map((item, index) => (
          <React.Fragment key={index}>
            {index > 0 && 
              <Separator 
                className={`!my-3 ${isHovering ? 'bg-gradient-to-r from-flora-rose/30 via-flora-leaf/40 to-flora-lavender/30' : 'bg-flora-leaf/10'} transition-colors duration-700`} 
              />
            }
            <div 
              className="animate-fade-in" 
              style={{ 
                animationDelay: `${item.delay}s`,
                transform: isHovering ? `translateX(${index % 2 === 0 ? 2 : -2}px)` : 'translateX(0)',
                transition: 'transform 0.5s ease-out'
              }}
            >
              <p className="font-medium text-flora-text flex items-center gap-1">
                <span className={`${isHovering ? 'animate-bounce-gentle' : ''} text-flora-lavender`} style={{ animationDelay: `${index * 0.1}s` }}>
                  {item.icon}
                </span> 
                {item.label}
              </p>
              <p className="mt-1 hover:text-flora-rose transition-colors duration-300">{item.value}</p>
            </div>
          </React.Fragment>
        ))}
      </CardContent>
    </Card>
  );
};

export default FlowerCard;
