import Image from "./ui/Image";
import Button from "./ui/Button";
import { IProduct } from "../interfaces";
import { textSlicer } from "../utils/function";

interface IProps {
    product: IProduct;
}

const ProductCard = ({ product }: IProps) => {
    //! destructuring
    const { description, imgURL, title, price, category } = product;
    return (
        <div className="max-w-sm md:max-w-lg mx-auto border rounded-md p-2 flex flex-col ">
            <Image
                imageURL={imgURL}
                alt="Nike shoes"
                className="rounded-md mb-2"
            />
            <h3 className="font-semibold">{title}</h3>
            <p>{textSlicer(description)}</p>
            <div className="flex items-center my-3 basis-5 space-x-2">
                <span className="w-5 h-5 bg-red-600 rounded-full cursor-pointer" />
                <span className="w-5 h-5 bg-indigo-600 rounded-full cursor-pointer" />
                <span className="w-5 h-5 bg-teal-700 rounded-full cursor-pointer" />
            </div>
            <div className="flex items-center justify-between">
                <span className="text-indigo-800 font-bold">${price}</span>
                <Image
                    imageURL={category.imageURL}
                    alt={category.name}
                    className="w-10 h-10 rounded-full object-fill"
                />
            </div>
            <div className="flex items-center justify-between gap-3 mt-5">
                <Button
                    className="bg-indigo-600"
                    onClick={() => {
                        console.log("clicked");
                    }}
                >
                    Edit
                </Button>
                <Button className="bg-red-700 ">Delete</Button>
            </div>
        </div>
    );
};

export default ProductCard;
