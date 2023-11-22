import { CampusInfo, getCampusInfo } from '@/api/campusInfo';
import { GetStaticProps } from 'next';
import React from 'react';

interface AboutProps {
    campusInfo: CampusInfo[]
}

export const getStaticProps: GetStaticProps<AboutProps> = async () => {
    let campusInfo = await getCampusInfo();
    return {
        props: {
            campusInfo: campusInfo
        }
    }
}

const About = ({ campusInfo }: AboutProps) => {

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

            {campusInfo.map((line, index) => (
                <div className="w-full rounded overflow-hidden shadow-lg text-black border-gray border-2 mt-10">
                    <img src={line.cover} className="w-full object-cover" />
                    <div className="p-10">
                        <h2 className="text-2xl font-bold mb-4 text-black">{line.title}</h2>
                        <p className="text-black text-lg">
                            {line.text}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default About;