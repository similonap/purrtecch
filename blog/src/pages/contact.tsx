
import { type Address, getAddress } from '@/api/address';
import { GetStaticProps } from 'next';
import React from 'react';
import Image from 'next/image'

interface ContactProps {
    address: Address
}

export const getStaticProps : GetStaticProps<ContactProps> = async() => {
    let address = await getAddress();
    return {
        props: {
            address: address
        }
    }
}

const Contact = ({address} : ContactProps) => {
    return (
        <div>
            <div className="w-full mb-10 bg-gradient-to-t from-gray-700 to-gray-900 rounded-md p-10 mt-10">
                <div className="text-white text-2xl">
                    {address.address.map((line, index) => (
                        <p key={index}>{line}</p>
                    ))}
                </div>
            </div>
            <Image src={address.mapUrl} className="w-full" alt="map"/>
        </div>
    );
}

export default Contact;