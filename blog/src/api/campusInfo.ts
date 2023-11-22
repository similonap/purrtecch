export interface CampusInfo {
    title: string;
    text: string;
    cover: string;
}

export const campusInfo: CampusInfo[] = [
    {
        title: "Our Staff",
        text: "At Purrtecch University, our staff is a unique blend of esteemed feline scholars and dedicated human professionals. Our cat professors, renowned for their wisdom and curiosity, lead various departments, bringing innovative teaching methods and fresh perspectives. They are supported by a team of human staff who facilitate a seamless educational experience. Together, they create a nurturing environment, fostering academic excellence and groundbreaking research. Our staff's commitment to education and research has established Purrtecch as a beacon of knowledge in the academic world, where diversity and collaboration are the cornerstones of our success.",
        cover: "/staff.png"
    },
    {
        title: "Our Students",
        text: "The student body at Purrtecch University is as diverse and dynamic as it is innovative. Comprising both human and feline learners, our students are at the heart of our university's vibrant academic life. They bring a wide array of perspectives, contributing to a rich learning environment. Feline students excel in agility and reflex-based studies, while their human counterparts offer depth in analytical thinking and creative problem-solving. This synergy creates a unique educational atmosphere where interdisciplinary learning and mutual respect thrive. Together, they embark on a journey of discovery, shaping the future of academia and beyond.",
        cover: "/graduating.png"
    },
    {
        title: "Our Campus",
        text: "Our campus is designed with both human and cat needs in mind. Key features include the 'Whisker Workshop', a high-tech lab where students and professors collaborate on cutting-edge research. The 'Purrfect Library' houses a vast collection of academic and leisure reading, complete with cozy napping spots on sunlit window sills. The 'Meow Meadows', our outdoor green space, offers a serene environment for both relaxation and outdoor experiments. For fitness enthusiasts, the 'Feline Fitness Center' boasts agility courses and climbing structures, ensuring a healthy mind and body. Not to forget, our 'Cat Café', serving the finest catnip tea and snacks for both humans and their feline companions. Every corner of Purrtecch University brims with innovation and comfort, creating an unparalleled learning environment.",
        cover: "/classroom.png"
    }
]

export const getCampusInfo = async (): Promise<CampusInfo[]> => {
    return campusInfo;
}





