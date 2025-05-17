
import React, { useState, FormEvent } from "react";
import { Search, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, isLoading }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full max-w-md mx-auto">
      <div className="flex">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask about any flower..."
            className="pl-10 pr-10 py-6"
            disabled={isLoading}
          />
        </div>
        <Button 
          type="submit" 
          className="ml-2 bg-flora-rose hover:bg-flora-rose/90 text-white"
          disabled={!message.trim() || isLoading}
        >
          <ArrowUp className="h-4 w-4" />
          <span className="sr-only">Send</span>
        </Button>
      </div>
    </form>
  );
};

export default ChatInput;
