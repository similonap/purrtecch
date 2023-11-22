export interface StaffMember {
  id: number;
  name: string;
  species: string;
  role: string;
  department: string;
  description: string;
  image: string;
  classes: Class[];
}

export interface Class {
  id: number;
  name: string;
  description: string;
  semester: number;
}

export const staff: StaffMember[] = [
  {
    id: 1,
    name: "Barkley Goldentail",
    species: "Dog",
    role: "Dean",
    department: "Administrative Affairs",
    description: "A wise and gentle Golden Retriever with a knack for leading and maintaining harmony among the staff.",
    image: "/barkley-goldtail.png",
    classes: []
  },
  {
    id: 2,
    name: "Whiskers Siame",
    species: "Cat",
    role: "Professor",
    department: "Paws-itive Psychology",
    description: "An intelligent and inquisitive Siamese cat, known for innovative approaches in Paws-itive Psychology.",
    image: "/whiskers-siame.png",
    classes: [
      { id: 201, name: "Mindful Meowing", description: "Exploring mindfulness techniques for felines", semester: 1 },
      { id: 202, name: "Purr-spective Psychology", description: "Understanding the feline psyche", semester: 2 }
    ]
  },
  {
    id: 3,
    name: "Meowy Coon",
    species: "Cat",
    role: "Professor",
    department: "Feline Fine Arts",
    description: "A creative and expressive Maine Coon, inspiring students in the Feline Fine Arts with a flair for the dramatic.",
    image: "/meowy-coon.png",
    classes: [
      { id: 301, name: "Claw-tography", description: "Capturing the world through a feline lens", semester: 1 },
      { id: 302, name: "Paw-trait Painting", description: "Expressive painting techniques for cats", semester: 2 }
    ]
  },
  {
    id: 4,
    name: "Purrsey Short",
    species: "Cat",
    role: "Professor",
    department: "Cat-culus",
    description: "A meticulous and detail-oriented British Shorthair, excelling in the precise world of Cat-culus.",
    image: "/purrsey-short.png",
    classes: [
      { id: 401, name: "Feline Fractions", description: "Fundamentals of feline fractions and figures", semester: 1 },
      { id: 402, name: "Whisker Widgets", description: "Advanced calculations with a feline twist", semester: 2 }
    ]
  },
  {
    id: 5,
    name: "Clawsy Blue",
    species: "Cat",
    role: "Professor",
    department: "Hisstory",
    description: "A wise and reflective Russian Blue, bringing the past to life in Hisstory classes with engaging storytelling.",
    image: "/clawsy-blue.png",
    classes: []
  },
  {
    id: 6,
    name: "Fuzzy Persia",
    species: "Cat",
    role: "Professor",
    department: "Naptime Sciences",
    description: "A relaxed and easy-going Persian cat, an expert in the restful and rejuvenating art of Naptime Sciences.",
    image: "/fuzzy-persia.png",
    classes: []
  },
  {
    id: 7,
    name: "Tabitha Stripes",
    species: "Cat",
    role: "Professor",
    department: "Litter-ature",
    description: "A witty and well-read Tabby, adept at exploring the depths of Litter-ature with a playful twist.",
    image: "/tabitha-stripes.png",
    classes: []
  }
];

export const getStaff = async (): Promise<StaffMember[]> => {
  return staff;
}

export const getStaffMemberById = async (id: number): Promise<StaffMember | undefined> => {
  return staff.find((member) => member.id === id);
}