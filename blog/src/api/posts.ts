import { StaffMember, staff } from "./staff";

export interface Post {
    id: number,
    title: string;
    short: string;
    image: string;
    fullText: string;
    date: string;
    author: StaffMember
}

const posts = [
    {
        "id": 1,
        "title": "Feline Physics: Unraveling the Mystery of Cat Leaps",
        "short": "Understanding the astounding agility and physics behind cat jumps.",
        "fullText": "# Feline Physics: Unraveling the Mystery of Cat Leaps\n\nIn this **fascinating study**, **Purrtecch University’s physics department** examines the biomechanics and physical principles behind the **extraordinary jumping abilities of cats**. Using high-speed cameras and motion analysis technology, our cat scientists reveal the secrets of **feline agility** and how it can inspire advancements in **robotics and biomechanics**.",
        "date": "2023-10-10T23:45:00.000Z",
        "image": "/blog-id-1.png",
        "author": staff[0]
    },
    {
        "id": 2,
        "title": "The Purrfect Chemistry: Catnip and Feline Behavior",
        "short": "Exploring the molecular magic behind catnip’s effect on cats.",
        "fullText": "# The Purrfect Chemistry: Catnip and Feline Behavior\n\nJoin our **cat chemists** as they delve into the **compounds of catnip** and their effects on **feline behavior**. This article discusses the neurochemical reactions caused by catnip, providing a unique perspective on how certain substances can **alter animal behavior**.",
        "date": "2023-10-11T23:45:00.000Z",
        "image": "/blog-id-2.png",
        "author": staff[1]
    },
    {
        "id": 3,
        "title": "Whisker Technology: Sensory Innovation Inspired by Cats",
        "short": "How cat whiskers are inspiring the next generation of sensory tech.",
        "fullText": "# Whisker Technology: Sensory Innovation Inspired by Cats\n\n**Purrtecch University’s engineering department** presents groundbreaking research on **bio-inspired sensors** modeled after cat whiskers. Learn about how the sensitivity and functionality of cat whiskers are being mimicked to develop advanced tactile sensors for robots, enhancing their ability to **navigate and interact** with their environment.",
        "date": "2023-10-12T23:45:00.000Z",
        "image": "/blog-id-3.png",
        "author": staff[2]
    },
    {
        "id": 4,
        "title": "Meowlogies: Understanding Cat Communication",
        "short": "Decoding the complex language of cats.",
        "fullText": "# Meowlogies: Understanding Cat Communication\n\nIn this **intriguing research**, **Purrtecch University’s linguistics and animal behavior experts** investigate the various forms of **cat communication**. From vocalizations to body language, this comprehensive study provides insight into how cats convey **messages and emotions**, offering a deeper understanding of **interspecies communication**.",
        "date": "2023-10-13T23:45:00.000Z",
        "image": "/blog-id-4.png",
        "author": staff[3]
    },
    {
        "id": 5,
        "title": "Catronomy: Feline Perspectives on the Cosmos",
        "short": "Astronomical discoveries guided by the night vision of cats.",
        "fullText": "# Catronomy: Feline Perspectives on the Cosmos\n\nExplore the universe through the **eyes of cats** in this innovative research from **Purrtecch University’s astronomy department**. Utilizing the superior night vision of cats, our feline astronomers provide unique observations of celestial bodies and phenomena, shedding new light on the **mysteries of space**.",
        "date": "2023-10-14T23:45:00.000Z",
        "image": "/blog-id-5.png",
        "author": staff[4]
    }
]

export const getPosts = async (): Promise<Post[]> => {
    return posts;
}

export const getPostById = async (id: number): Promise<Post | undefined> => {
    return posts.find(post => post.id === id);
}