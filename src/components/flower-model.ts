
// This file contains the functions for flower information retrieval

// List of flowers the bot can provide information about
export const flowerClasses = [
  "rose", "tulip", "daisy", "sunflower", "lily", "orchid", "daffodil", 
  "carnation", "dahlia", "iris", "peony", "marigold", "chrysanthemum", "hibiscus",
  "lavender", "lotus", "magnolia", "camellia", "poppy", "zinnia", "anemone",
  "jasmine", "geranium", "gardenia", "hydrangea", "violet", "snapdragon", 
  "begonia", "azalea", "freesia"
];

// Reliable image sources for flowers that were having issues
const reliableImages = {
  "lily": "https://images.unsplash.com/photo-1588635655481-e1c1b8abb08c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGlseXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=80",
  "orchid": "https://images.unsplash.com/photo-1566907225058-deb03ee6b871?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b3JjaGlkfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=80",
  "daffodil": "https://images.unsplash.com/photo-1583738891460-8a671a513ccd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGFmZm9kaWx8ZW58MHx8MHx8fDA%3D%3D&auto=format&fit=crop&w=500&q=80",
  "marigold": "https://images.unsplash.com/photo-1602738328654-51ab2ae6aead?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFyaWdvbGR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=80",
  "lotus": "https://images.unsplash.com/photo-1606293926249-9390013c6d2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
};

// Flower database with detailed information
export const flowerDatabase: Record<string, FlowerInfo> = {
  "rose": {
    commonName: "Rose",
    scientificName: "Rosa",
    family: "Rosaceae",
    nativeRegion: "Various regions across Europe, Asia, and North America",
    floweringSeason: "Spring to Fall",
    symbolicMeaning: "Symbol of beauty, honor, and appreciation",
    funFact: "Roses are among the oldest flowers in cultivation, with fossil evidence dating back 35 million years.",
    imageUrl: "https://images.unsplash.com/photo-1559563362-c667ba5f5480?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9zZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=80"
  },
  "tulip": {
    commonName: "Tulip",
    scientificName: "Tulipa",
    family: "Liliaceae",
    nativeRegion: "Central Asia, Turkey, and Iran",
    floweringSeason: "Spring",
    symbolicMeaning: "Perfect happiness, prosperity, and good wishes",
    funFact: "During the 'Tulip Mania' in the 1600s, tulip bulbs were more valuable than gold in the Netherlands.",
    imageUrl: "https://images.unsplash.com/photo-1589994160839-163cd867cfe8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHVsaXB8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=80"
  },
  "daisy": {
    commonName: "Daisy",
    scientificName: "Bellis perennis",
    family: "Asteraceae",
    nativeRegion: "Europe and Asia",
    floweringSeason: "Spring to Summer",
    symbolicMeaning: "Innocence, purity, and new beginnings",
    funFact: "The name 'daisy' comes from 'day's eye' as the flower opens at dawn.",
    imageUrl: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGFpc3l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=80"
  },
  "sunflower": {
    commonName: "Sunflower",
    scientificName: "Helianthus annuus",
    family: "Asteraceae",
    nativeRegion: "North and Central America",
    floweringSeason: "Summer to Early Fall",
    symbolicMeaning: "Adoration, loyalty, and longevity",
    funFact: "Sunflowers track the sun's movement from east to west, a behavior called heliotropism.",
    imageUrl: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VuZmxvd2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=80"
  },
  "lily": {
    commonName: "Lily",
    scientificName: "Lilium",
    family: "Liliaceae",
    nativeRegion: "Northern Hemisphere in Asia, Europe, and North America",
    floweringSeason: "Summer",
    symbolicMeaning: "Purity, rebirth, and renewal",
    funFact: "Some lily species can grow up to 8 feet tall in the wild.",
    imageUrl: reliableImages.lily
  },
  "orchid": {
    commonName: "Orchid",
    scientificName: "Orchidaceae",
    family: "Orchidaceae",
    nativeRegion: "Every continent except Antarctica",
    floweringSeason: "Varies by species",
    symbolicMeaning: "Beauty, luxury, strength, and refinement",
    funFact: "Orchids have the smallest seeds in the world, resembling dust particles.",
    imageUrl: reliableImages.orchid
  },
  "daffodil": {
    commonName: "Daffodil",
    scientificName: "Narcissus",
    family: "Amaryllidaceae",
    nativeRegion: "Europe and North Africa",
    floweringSeason: "Early Spring",
    symbolicMeaning: "Rebirth, new beginnings, and prosperity",
    funFact: "Daffodils contain a substance called lycorine that makes them toxic to most animals, which is why squirrels and deer avoid them.",
    imageUrl: reliableImages.daffodil
  },
  "carnation": {
    commonName: "Carnation",
    scientificName: "Dianthus caryophyllus",
    family: "Caryophyllaceae",
    nativeRegion: "Mediterranean region",
    floweringSeason: "Spring to Summer",
    symbolicMeaning: "Fascination, distinction, and admiration",
    funFact: "Carnations have been cultivated for over 2,000 years and are one of the oldest cultivated flowers.",
    imageUrl: "https://images.unsplash.com/photo-1589123053646-4e8c49a14940?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FybmF0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=80"
  },
  "dahlia": {
    commonName: "Dahlia",
    scientificName: "Dahlia",
    family: "Asteraceae",
    nativeRegion: "Mexico and Central America",
    floweringSeason: "Summer to Fall",
    symbolicMeaning: "Elegance, inner strength, and dignity",
    funFact: "Dahlias were originally grown as food crops by the Aztecs for their sweet potato-like tubers.",
    imageUrl: "https://images.unsplash.com/photo-1610397648930-477b8c7f0943?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGFobGlhfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=80"
  },
  "iris": {
    commonName: "Iris",
    scientificName: "Iris",
    family: "Iridaceae",
    nativeRegion: "Europe, Middle East, North Africa, Asia, and North America",
    floweringSeason: "Spring to Early Summer",
    symbolicMeaning: "Faith, wisdom, and courage",
    funFact: "The iris got its name from the Greek goddess of the rainbow, due to the many colors these flowers display.",
    imageUrl: "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXJpc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=80"
  },
  "peony": {
    commonName: "Peony",
    scientificName: "Paeonia",
    family: "Paeoniaceae",
    nativeRegion: "Asia, Europe, and Western North America",
    floweringSeason: "Late Spring to Early Summer",
    symbolicMeaning: "Honor, prosperity, and compassion",
    funFact: "Peonies can live for over 100 years if properly cared for.",
    imageUrl: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvbnl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=80"
  },
  "marigold": {
    commonName: "Marigold",
    scientificName: "Tagetes",
    family: "Asteraceae",
    nativeRegion: "North and South America",
    floweringSeason: "Spring to Fall",
    symbolicMeaning: "Creativity and the warmth of the rising sun",
    funFact: "Marigolds are used in many cultures as natural insect repellents in gardens and farms.",
    imageUrl: reliableImages.marigold
  },
  "chrysanthemum": {
    commonName: "Chrysanthemum",
    scientificName: "Chrysanthemum",
    family: "Asteraceae",
    nativeRegion: "Asia and northeastern Europe",
    floweringSeason: "Fall",
    symbolicMeaning: "Loyalty, joy, and long life",
    funFact: "Chrysanthemums have been cultivated in China since the 15th century BC.",
    imageUrl: "https://images.unsplash.com/photo-1635320896349-fdeda0cb4ee9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hyeXNhbnRoZW11bXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=80"
  },
  "hibiscus": {
    commonName: "Hibiscus",
    scientificName: "Hibiscus",
    family: "Malvaceae",
    nativeRegion: "Tropical and subtropical regions worldwide",
    floweringSeason: "Summer to Fall",
    symbolicMeaning: "Delicate beauty, glory, and fame",
    funFact: "Some hibiscus varieties are used to make tea that is rich in vitamin C.",
    imageUrl: "https://images.unsplash.com/photo-1591825729269-caeb344f6df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGliaXNjdXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=80"
  },
  "lavender": {
    commonName: "Lavender",
    scientificName: "Lavandula",
    family: "Lamiaceae",
    nativeRegion: "Mediterranean region, parts of Africa, Europe, and Asia",
    floweringSeason: "Summer",
    symbolicMeaning: "Purity, silence, devotion, and serenity",
    funFact: "Lavender was used in ancient Egypt during the mummification process.",
    imageUrl: "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?auto=format&fit=crop&w=500&q=80"
  },
  "lotus": {
    commonName: "Lotus",
    scientificName: "Nelumbo nucifera",
    family: "Nelumbonaceae",
    nativeRegion: "Asia and Australia",
    floweringSeason: "Summer",
    symbolicMeaning: "Purity, enlightenment, rebirth, and strength",
    funFact: "Lotus seeds can remain viable for over 1,000 years, making them among the oldest viable seeds.",
    imageUrl: reliableImages.lotus
  },
  "magnolia": {
    commonName: "Magnolia",
    scientificName: "Magnolia",
    family: "Magnoliaceae",
    nativeRegion: "North America, Central America, Southeast Asia, and the West Indies",
    floweringSeason: "Spring",
    symbolicMeaning: "Nobility, perseverance, and dignity",
    funFact: "Magnolias are ancient plants that evolved before bees existed; they were pollinated by beetles.",
    imageUrl: "https://images.unsplash.com/photo-1615039717793-6d2034397eea?auto=format&fit=crop&w=500&q=80"
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
  imageUrl?: string;
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
