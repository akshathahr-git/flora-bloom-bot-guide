
import React from "react";
import { Flower } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface ChatMessageProps {
  message: string;
  isBot: boolean;
  timestamp: Date;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, isBot, timestamp }) => {
  const formattedTime = timestamp.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <div className={cn(
      "flex w-full gap-3 my-4 animate-fade-in",
      isBot ? "justify-start" : "justify-end"
    )}>
      {isBot && (
        <Avatar className="h-8 w-8 bg-white border border-flora-leaf/30 shadow-sm">
          <AvatarFallback className="bg-white">
            <Flower className="h-4 w-4 text-flora-rose" />
          </AvatarFallback>
        </Avatar>
      )}
      
      <div className={cn(
        "rounded-2xl px-4 py-2 max-w-[80%] shadow-sm relative",
        isBot 
          ? "bg-white border border-gray-100" 
          : "bg-flora-rose text-white ml-auto"
      )}>
        <p className="text-sm whitespace-pre-wrap">{message}</p>
        <span className={cn(
          "text-[10px] absolute bottom-0.5 right-2",
          isBot ? "text-gray-400" : "text-white/70"
        )}>
          {formattedTime}
        </span>
      </div>
      
      {!isBot && (
        <Avatar className="h-8 w-8 bg-flora-rose/20 border border-flora-rose/30 shadow-sm">
          <AvatarFallback className="bg-flora-rose/20 text-flora-rose">
            U
          </AvatarFallback>
        </Avatar>
      )}
    </div>
  );
};

export default ChatMessage;
