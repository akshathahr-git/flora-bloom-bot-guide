
import React from "react";
import { Flower } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-flora-background leaf-pattern-bg">
      <div className="text-center max-w-md px-6">
        <div className="flex justify-center mb-4">
          <div className="relative">
            <Flower className="h-20 w-20 text-flora-rose/50 animate-float" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span className="text-2xl font-bold text-flora-text">404</span>
            </div>
          </div>
        </div>
        <h1 className="text-4xl font-display font-bold mb-4 text-flora-text">Page Not Found</h1>
        <p className="text-xl text-flora-text/70 mb-6">
          Oops! We couldn't find the page you're looking for.
        </p>
        <Button asChild className="bg-flora-rose hover:bg-flora-rose/90">
          <Link to="/">
            Return to Garden
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
