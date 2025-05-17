
// This file contains the functions for the flower classification model

import { toast } from "sonner";

// List of flowers the model can identify
export const flowerClasses = [
  "rose", "tulip", "daisy", "sunflower", "lily", "orchid", "daffodil", 
  "carnation", "dahlia", "iris", "peony", "marigold", "chrysanthemum", "hibiscus"
];

// Flower database with detailed information
export const flowerDatabase: Record<string, FlowerInfo> = {
  "rose": {
    commonName: "Rose",
    scientificName: "Rosa",
    family: "Rosaceae",
    nativeRegion: "Various regions across Europe, Asia, and North America",
    floweringSeason: "Spring to Fall",
    symbolicMeaning: "Symbol of beauty, honor, and appreciation",
    funFact: "Roses are among the oldest flowers in cultivation, with fossil evidence dating back 35 million years."
  },
  "tulip": {
    commonName: "Tulip",
    scientificName: "Tulipa",
    family: "Liliaceae",
    nativeRegion: "Central Asia, Turkey, and Iran",
    floweringSeason: "Spring",
    symbolicMeaning: "Perfect happiness, prosperity, and good wishes",
    funFact: "During the 'Tulip Mania' in the 1600s, tulip bulbs were more valuable than gold in the Netherlands."
  },
  "daisy": {
    commonName: "Daisy",
    scientificName: "Bellis perennis",
    family: "Asteraceae",
    nativeRegion: "Europe and Asia",
    floweringSeason: "Spring to Summer",
    symbolicMeaning: "Innocence, purity, and new beginnings",
    funFact: "The name 'daisy' comes from 'day's eye' as the flower opens at dawn."
  },
  "sunflower": {
    commonName: "Sunflower",
    scientificName: "Helianthus annuus",
    family: "Asteraceae",
    nativeRegion: "North and Central America",
    floweringSeason: "Summer to Early Fall",
    symbolicMeaning: "Adoration, loyalty, and longevity",
    funFact: "Sunflowers track the sun's movement from east to west, a behavior called heliotropism."
  },
  "lily": {
    commonName: "Lily",
    scientificName: "Lilium",
    family: "Liliaceae",
    nativeRegion: "Northern Hemisphere in Asia, Europe, and North America",
    floweringSeason: "Summer",
    symbolicMeaning: "Purity, rebirth, and renewal",
    funFact: "Some lily species can grow up to 8 feet tall in the wild."
  },
  "orchid": {
    commonName: "Orchid",
    scientificName: "Orchidaceae",
    family: "Orchidaceae",
    nativeRegion: "Every continent except Antarctica",
    floweringSeason: "Varies by species",
    symbolicMeaning: "Beauty, luxury, strength, and refinement",
    funFact: "Orchids have the smallest seeds in the world, resembling dust particles."
  },
  "daffodil": {
    commonName: "Daffodil",
    scientificName: "Narcissus",
    family: "Amaryllidaceae",
    nativeRegion: "Europe and North Africa",
    floweringSeason: "Early Spring",
    symbolicMeaning: "Rebirth, new beginnings, and prosperity",
    funFact: "Daffodils contain a substance called lycorine that makes them toxic to most animals, which is why squirrels and deer avoid them."
  },
  "carnation": {
    commonName: "Carnation",
    scientificName: "Dianthus caryophyllus",
    family: "Caryophyllaceae",
    nativeRegion: "Mediterranean region",
    floweringSeason: "Spring to Summer",
    symbolicMeaning: "Fascination, distinction, and admiration",
    funFact: "Carnations have been cultivated for over 2,000 years and are one of the oldest cultivated flowers."
  },
  "dahlia": {
    commonName: "Dahlia",
    scientificName: "Dahlia",
    family: "Asteraceae",
    nativeRegion: "Mexico and Central America",
    floweringSeason: "Summer to Fall",
    symbolicMeaning: "Elegance, inner strength, and dignity",
    funFact: "Dahlias were originally grown as food crops by the Aztecs for their sweet potato-like tubers."
  },
  "iris": {
    commonName: "Iris",
    scientificName: "Iris",
    family: "Iridaceae",
    nativeRegion: "Europe, Middle East, North Africa, Asia, and North America",
    floweringSeason: "Spring to Early Summer",
    symbolicMeaning: "Faith, wisdom, and courage",
    funFact: "The iris got its name from the Greek goddess of the rainbow, due to the many colors these flowers display."
  },
  "peony": {
    commonName: "Peony",
    scientificName: "Paeonia",
    family: "Paeoniaceae",
    nativeRegion: "Asia, Europe, and Western North America",
    floweringSeason: "Late Spring to Early Summer",
    symbolicMeaning: "Honor, prosperity, and compassion",
    funFact: "Peonies can live for over 100 years if properly cared for."
  },
  "marigold": {
    commonName: "Marigold",
    scientificName: "Tagetes",
    family: "Asteraceae",
    nativeRegion: "North and South America",
    floweringSeason: "Spring to Fall",
    symbolicMeaning: "Creativity and the warmth of the rising sun",
    funFact: "Marigolds are used in many cultures as natural insect repellents in gardens and farms."
  },
  "chrysanthemum": {
    commonName: "Chrysanthemum",
    scientificName: "Chrysanthemum",
    family: "Asteraceae",
    nativeRegion: "Asia and northeastern Europe",
    floweringSeason: "Fall",
    symbolicMeaning: "Loyalty, joy, and long life",
    funFact: "Chrysanthemums have been cultivated in China since the 15th century BC."
  },
  "hibiscus": {
    commonName: "Hibiscus",
    scientificName: "Hibiscus",
    family: "Malvaceae",
    nativeRegion: "Tropical and subtropical regions worldwide",
    floweringSeason: "Summer to Fall",
    symbolicMeaning: "Delicate beauty, glory, and fame",
    funFact: "Some hibiscus varieties are used to make tea that is rich in vitamin C."
  }
};

export interface FlowerInfo {
  commonName: string;
  scientificName: string;
  family: string;
  nativeRegion: string;
  floweringSeason: string;
  symbolicMeaning: string;
  funFact: string;
}

// Simulate flower classification using the @huggingface/transformers library
export async function classifyFlowerImage(imageFile: File): Promise<string | null> {
  try {
    // In a real implementation, this would use a pre-trained model
    // For now, we'll use a mock implementation
    
    // Return a promise that resolves after a short delay to simulate model processing
    return new Promise((resolve) => {
      toast.info("Analyzing your flower...");
      
      // This is where we would actually process the image
      setTimeout(() => {
        // For demonstration purposes, we're selecting a random flower
        // In production, this would be the result from a real ML model
        const randomIndex = Math.floor(Math.random() * flowerClasses.length);
        const flowerType = flowerClasses[randomIndex];
        
        toast.success("Flower identified!");
        resolve(flowerType);
      }, 2000);
    });
  } catch (error) {
    console.error("Error classifying flower:", error);
    toast.error("Failed to classify your flower. Please try again.");
    return null;
  }
}

// Function to get flower information by name (for text-based queries)
export function getFlowerInfo(flowerName: string): FlowerInfo | null {
  // Normalize the input and check against our database
  const normalizedName = flowerName.toLowerCase().trim();
  
  // Check for direct match
  if (normalizedName in flowerDatabase) {
    return flowerDatabase[normalizedName];
  }
  
  // Check for partial matches
  const possibleMatch = Object.keys(flowerDatabase).find(key => 
    key.includes(normalizedName) || normalizedName.includes(key)
  );
  
  if (possibleMatch) {
    return flowerDatabase[possibleMatch];
  }
  
  return null;
}
