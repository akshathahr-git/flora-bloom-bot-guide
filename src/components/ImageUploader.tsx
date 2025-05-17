
import React, { useState, useRef } from "react";
import { Image, Camera, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";

interface ImageUploaderProps {
  onImageSelected: (file: File) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageSelected }) => {
  const [dragActive, setDragActive] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      handleFile(file);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      handleFile(file);
    }
  };

  const handleFile = (file: File) => {
    // Check if file is an image
    if (!file.type.startsWith("image/")) {
      toast.error("Please upload an image file");
      return;
    }

    // Create preview URL
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    
    // Pass the file to parent component
    onImageSelected(file);
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <Card className="p-6 flex flex-col items-center">
      <h3 className="text-lg font-medium mb-4">Upload a Flower Image</h3>
      
      <div
        className={`upload-area w-full max-w-md h-48 border-2 border-dashed rounded-lg flex flex-col items-center justify-center cursor-pointer transition-all mb-4 ${
          dragActive ? "border-flora-rose bg-flora-rose/5" : "border-gray-300"
        } ${previewUrl ? "p-2" : "p-6"}`}
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDrop={handleDrop}
        onClick={handleButtonClick}
      >
        {previewUrl ? (
          <div className="w-full h-full flex items-center justify-center">
            <img 
              src={previewUrl} 
              alt="Flower preview" 
              className="max-h-full max-w-full object-contain rounded"
            />
          </div>
        ) : (
          <>
            <Image className="w-12 h-12 text-muted-foreground mb-2" />
            <p className="text-sm text-center text-muted-foreground">
              Drag & drop your flower image here, or click to select
            </p>
          </>
        )}
        
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleChange}
          className="hidden"
        />
      </div>
      
      <div className="flex gap-3 mt-2">
        <Button 
          variant="outline" 
          className="flex items-center gap-2 border-flora-leaf text-flora-leaf hover:text-flora-leaf/80"
          onClick={handleButtonClick}
        >
          <Upload size={16} />
          Upload Image
        </Button>
        
        <Button 
          variant="outline" 
          className="flex items-center gap-2 border-flora-rose text-flora-rose hover:text-flora-rose/80"
          onClick={handleButtonClick}
        >
          <Camera size={16} />
          Take Photo
        </Button>
      </div>
    </Card>
  );
};

export default ImageUploader;
