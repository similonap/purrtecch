import React from 'react';

const About = () => {

    return (
        <div>
            <div className="flex flex-col md:flex-row items-center md:items-start">
                <img src="/purrtecch.png" alt="PurrTech University Logo" className="w-full md:w-1/4" />

                <div className="md:w-3/4 p-4">
                    <h1 className="text-2xl font-bold mb-4 text-justify">About PurrTech University</h1>
                    <p className="text-lg mb-4 text-justify">Welcome to PurrTech University, where curiosity didn't kill the cat, it just got them a degree! At PurrTech, we believe in the power of 'pawsitive' thinking and infusing a bit of fun into the serious business of education.</p>
                    <p className="text-lg mb-4 text-justify">Our campus is renowned for its state-of-the-art catnapping facilities and world-class laser pointer physics labs. Whether you're here to study the intricacies of yarn ball dynamics or the art of the perfect purr, PurrTech is the place where your dreams (and daydreams) come true.</p>
                    <p className="text-lg mb-4 text-justify">Don't worry about being the 'cat's whiskers' here; we value curiosity over perfection. So, sharpen your claws on the tree of knowledge and join us on this adventure. Remember, at PurrTech, it's okay to let curiosity lead the way – just watch out for the occasional hairball!</p>
                </div>
            </div>

            <div className="w-full bg-gradient-to-t from-red-700 to-red-900 rounded-md p-10 mt-10">
                <h2 className="text-2xl font-bold mb-4 text-white">Our Staff</h2>
                <p className="text-white ">
                    At Purrtecch University, our staff is a unique blend of esteemed feline scholars and dedicated human professionals. Our cat professors, renowned for their wisdom and curiosity, lead various departments, bringing innovative teaching methods and fresh perspectives. They are supported by a team of human staff who facilitate a seamless educational experience. Together, they create a nurturing environment, fostering academic excellence and groundbreaking research. Our staff's commitment to education and research has established Purrtecch as a beacon of knowledge in the academic world, where diversity and collaboration are the cornerstones of our success.
                </p>
            </div>

            <div className="w-full bg-gradient-to-t from-blue-700 to-blue-900 rounded-md p-10 mt-10">
                <h2 className="text-2xl font-bold mb-4 text-white">Our Students</h2>
                <p className="text-white ">
                    The student body at Purrtecch University is as diverse and dynamic as it is innovative. Comprising both human and feline learners, our students are at the heart of our university's vibrant academic life. They bring a wide array of perspectives, contributing to a rich learning environment. Feline students excel in agility and reflex-based studies, while their human counterparts offer depth in analytical thinking and creative problem-solving. This synergy creates a unique educational atmosphere where interdisciplinary learning and mutual respect thrive. Together, they embark on a journey of discovery, shaping the future of academia and beyond.
                </p>
            </div>


            <div className="w-full bg-gradient-to-t from-gray-700 to-gray-900 rounded-md p-10 mt-10">
                <h2 className="text-2xl font-bold mb-4 text-white">Our Campus Facilities</h2>
                <p className="text-white ">
                Our campus is designed with both human and cat needs in mind. Key features include the 'Whisker Workshop', a high-tech lab where students and professors collaborate on cutting-edge research. The 'Purrfect Library' houses a vast collection of academic and leisure reading, complete with cozy napping spots on sunlit window sills. The 'Meow Meadows', our outdoor green space, offers a serene environment for both relaxation and outdoor experiments. For fitness enthusiasts, the 'Feline Fitness Center' boasts agility courses and climbing structures, ensuring a healthy mind and body. Not to forget, our 'Cat Café', serving the finest catnip tea and snacks for both humans and their feline companions. Every corner of Purrtecch University brims with innovation and comfort, creating an unparalleled learning environment.

                </p>
            </div>

        </div>
    );
}

export default About;