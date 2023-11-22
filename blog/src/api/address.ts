export interface Address {
    address: string[],
    mapUrl: string;
}

export const address: Address = {
    address: [
        "Purrtecch University",
        "101 Whisker Way",
        "Feline Fields, Catopia, 4422-PURR"
    ],
    mapUrl: "/map.png"
}

export const getAddress = async (): Promise<Address> => {
    return address;
}