
import React, { useState, useEffect } from "react";
import { Flower } from "lucide-react";
import { toast } from "sonner";

// Components
import FloraHeader from "@/components/FloraHeader";
import FlowerCard from "@/components/FlowerCard";
import ChatInput from "@/components/ChatInput";
import ChatMessage from "@/components/ChatMessage";

// Model utils
import { getFlowerInfo, FlowerInfo, flowerDatabase } from "@/components/flower-model";

interface Message {
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const Index = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hello! I'm FloraBot. Ask me about any flower like rose, tulip, lily, or others and I'll provide detailed information!",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [identifiedFlower, setIdentifiedFlower] = useState<FlowerInfo | null>(null);
  
  // Featured flowers - only showing the 5 specified flowers
  const featuredFlowers = ["rose", "tulip", "daisy", "sunflower", "iris"];
  
  // Auto scroll to bottom when messages update
  useEffect(() => {
    const chatContainer = document.getElementById('chat-container');
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }, [messages]);

  // Handle text messages
  const handleSendMessage = async (message: string) => {
    // Add user message
    setMessages(prev => [
      ...prev,
      {
        text: message,
        isBot: false,
        timestamp: new Date()
      }
    ]);
    
    setIsLoading(true);
    
    try {
      // Process the message to identify flower names
      const messageText = message.toLowerCase();
      
      // List of common flower names to look for
      const commonFlowerNames = [
        "rose", "tulip", "lily", "orchid", "daisy", "sunflower", "peony", 
        "carnation", "chrysanthemum", "lavender", "marigold", "lotus", 
        "hibiscus", "magnolia", "camellia", "poppy", "zinnia", 
        "daffodil", "anemone", "iris", "jasmine", "geranium", 
        "gardenia", "hydrangea", "violet", "snapdragon", "begonia", 
        "azalea", "dahlia", "freesia"
      ];
      
      // Check for flower names in the message
      let flowerName = null;
      for (const name of commonFlowerNames) {
        if (messageText.includes(name)) {
          flowerName = name;
          break;
        }
      }
      
      // If no specific flower found, try extracting words
      if (!flowerName) {
        const words = messageText.split(/\s+/);
        for (const word of words) {
          const cleanWord = word.replace(/[.,?!]/g, '').toLowerCase();
          if (cleanWord.length > 3) { // Avoid very short words
            const info = getFlowerInfo(cleanWord);
            if (info) {
              flowerName = cleanWord;
              break;
            }
          }
        }
      }
      
      if (flowerName) {
        const flowerInfo = getFlowerInfo(flowerName);
        
        if (flowerInfo) {
          setIdentifiedFlower(flowerInfo);
          
          // Create a scientific response
          setMessages(prev => [
            ...prev,
            {
              text: `The ${flowerInfo.commonName} (${flowerInfo.scientificName}) belongs to the ${flowerInfo.family} family. Native to ${flowerInfo.nativeRegion}, it typically flowers during ${flowerInfo.floweringSeason}. ${flowerInfo.funFact}`,
              isBot: true,
              timestamp: new Date()
            }
          ]);
          
          // Show a toast notification
          toast.success(`Found information about ${flowerInfo.commonName}!`, {
            position: "top-right",
          });
        } else {
          setMessages(prev => [
            ...prev,
            {
              text: `I'm sorry, I don't have information about "${flowerName}". Try asking about roses, tulips, daisies, sunflowers, or other common flowers.`,
              isBot: true,
              timestamp: new Date()
            }
          ]);
        }
      } else {
        // General response for non-specific queries
        setMessages(prev => [
          ...prev,
          {
            text: "I can provide information about specific flowers. Try asking me about a particular flower like 'Tell me about daffodils' or just type a flower name like 'Rose' or 'Lily'.",
            isBot: true,
            timestamp: new Date()
          }
        ]);
      }
    } catch (error) {
      console.error("Error processing message:", error);
      
      setMessages(prev => [
        ...prev,
        {
          text: "I'm sorry, I encountered an error processing your message. Please try again.",
          isBot: true,
          timestamp: new Date()
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-flora-background leaf-pattern-bg">
      <FloraHeader />
      
      <main className="flex-1 container py-6 px-4 md:px-8 grid md:grid-cols-2 gap-8">
        <div className="flex flex-col h-[calc(100vh-200px)] md:order-2">
          <div className="flex-grow overflow-auto p-4 rounded-lg bg-white/80 backdrop-blur-sm shadow-lg" id="chat-container">
            {messages.map((msg, index) => (
              <ChatMessage
                key={index}
                message={msg.text}
                isBot={msg.isBot}
                timestamp={msg.timestamp}
              />
            ))}
            
            {isLoading && (
              <div className="flex items-center gap-2 p-3 animate-pulse">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 bg-flora-rose rounded-full animate-bounce" style={{ animationDelay: '0s' }}></span>
                  <span className="h-2.5 w-2.5 bg-flora-leaf rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                  <span className="h-2.5 w-2.5 bg-flora-lavender rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                </div>
                <span className="text-xs text-gray-500">FloraBot is thinking...</span>
              </div>
            )}
          </div>
          
          <div className="mt-4">
            <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
          </div>
        </div>
        
        <div className="flex flex-col gap-6 md:order-1">
          {identifiedFlower ? (
            <FlowerCard flowerInfo={identifiedFlower} />
          ) : (
            <div className="mt-4 text-center p-6 rounded-lg bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in">
              <div className="relative p-2">
                <div className="absolute -top-10 -right-10">
                  <Flower className="h-16 w-16 text-flora-leaf/30 animate-spin-slow" />
                </div>
                <div className="absolute -bottom-6 -left-6">
                  <Flower className="h-10 w-10 text-flora-rose/30 animate-spin-slow" style={{animationDelay: '0.5s'}} />
                </div>
                <h2 className="font-display text-2xl text-flora-text mb-3 animate-fade-in">Welcome to FloraBot!</h2>
                <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
                  <p className="text-flora-text/70 max-w-sm mx-auto mb-6">
                    Ask me about any flower to get detailed information with beautiful photos!
                  </p>
                </div>
                
                {/* Updated grid layout for better alignment of 5 flowers */}
                <div className="grid grid-cols-3 gap-4 max-h-[400px] overflow-y-auto p-2">
                  {featuredFlowers.map((flowerKey, index) => {
                    const flower = flowerDatabase[flowerKey];
                    return (
                      <div 
                        key={flowerKey}
                        onClick={() => handleSendMessage(flower.commonName)}
                        className={`flower-sample group rounded-lg overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-500 animate-fade-in hover:scale-105 ${index === featuredFlowers.length - 1 && featuredFlowers.length % 3 !== 0 ? 'col-span-2' : ''}`}
                        style={{ animationDelay: `${Math.random() * 0.5}s` }}
                      >
                        <div className="relative h-32 overflow-hidden">
                          <img 
                            src={flower.imageUrl} 
                            alt={flower.commonName}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            loading="eager"
                            onError={(e) => {
                              // Fallback image if the original one fails to load
                              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=500&q=60";
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent/30 flex items-end">
                            <span className="text-white font-medium p-3 text-base group-hover:text-flora-petal transition-colors">
                              {flower.commonName}
                            </span>
                          </div>
                          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="bg-white/80 p-1.5 rounded-full transform rotate-0 group-hover:rotate-180 transition-all duration-700">
                              <Flower className="h-4 w-4 text-flora-rose" />
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  
                  {/* "Explore More Flowers" card to fill the gap */}
                  <div 
                    className="flower-sample group rounded-lg overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-500 animate-fade-in hover:scale-105 bg-gradient-to-br from-flora-rose/20 to-flora-leaf/30"
                    onClick={() => handleSendMessage("Tell me about different types of flowers")}
                  >
                    <div className="relative h-32 overflow-hidden flex items-center justify-center">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="animate-pulse-gentle">
                          <Flower className="h-12 w-12 text-flora-rose/70 animate-spin-slow" />
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                        <span className="text-white font-medium p-3 text-base group-hover:text-flora-petal transition-colors w-full text-center">
                          Explore More Flowers!
                        </span>
                      </div>
                      <div className="absolute top-2 left-2 animate-float">
                        <Flower className="h-4 w-4 text-flora-leaf/70" />
                      </div>
                      <div className="absolute bottom-10 right-4 animate-float" style={{animationDelay: '0.3s'}}>
                        <Flower className="h-3 w-3 text-flora-sunflower/70" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Index;
