export interface IProduct {
    id?: string | undefined;
    title: string;
    description: string;
    imgURL: string;
    price: string;
    colors: string[];
    category: {
        name: string;
        imageURL: string;
    };
}
