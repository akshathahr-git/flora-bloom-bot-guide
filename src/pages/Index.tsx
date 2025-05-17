
import React, { useState, useEffect } from "react";
import { Flower } from "lucide-react";
import { toast } from "sonner";

// Components
import FloraHeader from "@/components/FloraHeader";
import ImageUploader from "@/components/ImageUploader";
import FlowerCard from "@/components/FlowerCard";
import ChatInput from "@/components/ChatInput";
import ChatMessage from "@/components/ChatMessage";

// Model utils
import { classifyFlowerImage, getFlowerInfo, FlowerInfo } from "@/components/flower-model";

interface Message {
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const Index = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hello! I'm FloraBot. Upload a flower image or ask me about any flower!",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [identifiedFlower, setIdentifiedFlower] = useState<FlowerInfo | null>(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(null);
  
  // Auto scroll to bottom when messages update
  useEffect(() => {
    const chatContainer = document.getElementById('chat-container');
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }, [messages]);

  // Handle image upload
  const handleImageSelected = async (file: File) => {
    setIsLoading(true);
    
    // Create a temporary URL for preview
    const previewUrl = URL.createObjectURL(file);
    setUploadedImageUrl(previewUrl);
    
    try {
      // Add a user message with the image
      setMessages(prev => [
        ...prev,
        {
          text: "I uploaded a flower image for identification.",
          isBot: false,
          timestamp: new Date()
        }
      ]);

      // Classify the flower image
      const flowerType = await classifyFlowerImage(file);
      
      if (flowerType) {
        // Get flower information from the database
        const flowerInfo = getFlowerInfo(flowerType);
        
        if (flowerInfo) {
          setIdentifiedFlower(flowerInfo);
          
          // Add a bot response
          setMessages(prev => [
            ...prev,
            {
              text: `I identified this as a ${flowerInfo.commonName} (${flowerInfo.scientificName}).`,
              isBot: true,
              timestamp: new Date()
            }
          ]);
        } else {
          toast.error("I couldn't find detailed information about this flower.");
          
          setMessages(prev => [
            ...prev,
            {
              text: "I recognized this flower, but I don't have detailed information about it.",
              isBot: true,
              timestamp: new Date()
            }
          ]);
        }
      } else {
        toast.error("Failed to identify the flower. Please try another image.");
        
        setMessages(prev => [
          ...prev,
          {
            text: "I couldn't identify this flower. Please try uploading a clearer image.",
            isBot: true,
            timestamp: new Date()
          }
        ]);
      }
    } catch (error) {
      console.error("Error processing image:", error);
      toast.error("There was an error processing your image.");
      
      setMessages(prev => [
        ...prev,
        {
          text: "Sorry, there was an error processing your image.",
          isBot: true,
          timestamp: new Date()
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

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
      // Process the message to see if it's asking about a specific flower
      const messageText = message.toLowerCase();
      
      // Enhanced pattern matching to extract flower names
      const flowerMatches = messageText.match(/(?:about|what|is|are|tell me about|the) ([a-z ]+?)(?:\?|$|\s+)/);
      let flowerName = flowerMatches ? flowerMatches[1].trim() : null;
      
      // If no specific pattern match, try to extract any word that might be a flower
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
          setUploadedImageUrl(null); // Clear any previous uploaded image
          
          // Create a scientific response without occasion-related information
          setMessages(prev => [
            ...prev,
            {
              text: `The ${flowerInfo.commonName} (${flowerInfo.scientificName}) belongs to the ${flowerInfo.family} family. Native to ${flowerInfo.nativeRegion}, it typically flowers during ${flowerInfo.floweringSeason}. ${flowerInfo.funFact}`,
              isBot: true,
              timestamp: new Date()
            }
          ]);
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
            text: "I can help you identify flowers from images or provide information about specific flowers. Try uploading a flower image or ask me about a particular flower like 'Tell me about daffodils'.",
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
          <div className="flex-grow overflow-auto p-4 rounded-lg bg-gray-50/70 backdrop-blur-sm" id="chat-container">
            {messages.map((msg, index) => (
              <ChatMessage
                key={index}
                message={msg.text}
                isBot={msg.isBot}
                timestamp={msg.timestamp}
              />
            ))}
            
            {isLoading && (
              <div className="flex items-center gap-2 p-3">
                <div className="flex gap-1">
                  <span className="h-2 w-2 bg-flora-rose rounded-full animate-pulse"></span>
                  <span className="h-2 w-2 bg-flora-rose rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></span>
                  <span className="h-2 w-2 bg-flora-rose rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></span>
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
          <ImageUploader onImageSelected={handleImageSelected} />
          
          {identifiedFlower && (
            <FlowerCard flowerInfo={identifiedFlower} imageUrl={uploadedImageUrl} />
          )}
          
          {!identifiedFlower && (
            <div className="mt-8 text-center flex flex-col items-center justify-center p-8 rounded-lg bg-white/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300">
              <div className="relative">
                <div className="absolute -top-10 -right-10">
                  <Flower className="h-16 w-16 text-flora-leaf/20 animate-sway" />
                </div>
                <div className="absolute -bottom-6 -left-6">
                  <Flower className="h-10 w-10 text-flora-rose/20 animate-sway" style={{animationDelay: '0.5s'}} />
                </div>
                <h2 className="font-display text-2xl text-flora-text mb-3">Welcome to FloraBot!</h2>
              </div>
              <p className="text-flora-text/70 max-w-sm">
                Upload a flower image for identification or ask questions about specific flowers to get detailed information.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Index;
