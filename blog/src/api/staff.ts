export interface Staff {
  name: string;
  species: string;
  role: string;
  department: string;
  description: string;
  image: string;
}

export const staff: Staff[] = [
  {
    name: "Barkley Goldentail",
    species: "Dog",
    role: "Dean",
    department: "Administrative Affairs",
    description: "A wise and gentle Golden Retriever with a knack for leading and maintaining harmony among the staff.",
    image: "/barkley-goldtail.png"
  },
  {
    name: "Whiskers Siame",
    species: "Cat",
    role: "Professor",
    department: "Paws-itive Psychology",
    description: "An intelligent and inquisitive Siamese cat, known for innovative approaches in Paws-itive Psychology.",
    image: "/whiskers-siame.png"
  },
  {
    name: "Meowy Coon",
    species: "Cat",
    role: "Professor",
    department: "Feline Fine Arts",
    description: "A creative and expressive Maine Coon, inspiring students in the Feline Fine Arts with a flair for the dramatic.",
    image: "/meowy-coon.png"
  },
  {
    name: "Purrsey Short",
    species: "Cat",
    role: "Professor",
    department: "Cat-culus",
    description: "A meticulous and detail-oriented British Shorthair, excelling in the precise world of Cat-culus.",
    image: "/purrsey-short.png"
  },
  {
    name: "Clawsy Blue",
    species: "Cat",
    role: "Professor",
    department: "Hisstory",
    description: "A wise and reflective Russian Blue, bringing the past to life in Hisstory classes with engaging storytelling.",
    image: "/clawsy-blue.png"
  },
  {
    name: "Fuzzy Persia",
    species: "Cat",
    role: "Professor",
    department: "Naptime Sciences",
    description: "A relaxed and easy-going Persian cat, an expert in the restful and rejuvenating art of Naptime Sciences.",
    image: "/fuzzy-persia.png"
  },
  {
    name: "Tabitha Stripes",
    species: "Cat",
    role: "Professor",
    department: "Litter-ature",
    description: "A witty and well-read Tabby, adept at exploring the depths of Litter-ature with a playful twist.",
    image: "/tabitha-stripes.png"
  }
];

export const getStaff = async (): Promise<Staff[]> => {
  return staff;
}