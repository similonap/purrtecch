import { address } from '@/data';
import React from 'react';

const Contact = () => {

    return (
        <div>
            
            <div className="w-full mb-10 bg-gradient-to-t from-gray-700 to-gray-900 rounded-md p-10 mt-10">
                <p className="text-white text-2xl">
                    {address.map((line, index) => (
                        <p key={index}>{line}</p>
                    ))}
                </p>
            </div>
            <img src="/map.png" className="w-full" />
        </div>
    );
}

export default Contact;