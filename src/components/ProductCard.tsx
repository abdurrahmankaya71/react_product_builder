// interface IProps {}

import Image from "./Image";

const ProductCard = () => {
    return (
        <div className="border rounded-md p-2 flex flex-col">
            <Image
                imageURL="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Nike shoes"
                className="rounded-md mb-2"
            />
            <h3>Lorem Ipsum</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                nemo eum, quam illum ut debitis vel officiis hic, id architecto
                ipsa dolorem qui. Eius, odio? Modi labore expedita dolorum
                voluptates.
            </p>
            <div className="flex items-center my-3 basis-5 space-x-2">
                <span className="w-5 h-5 bg-red-600 rounded-full cursor-pointer" />
                <span className="w-5 h-5 bg-indigo-600 rounded-full cursor-pointer" />
                <span className="w-5 h-5 bg-teal-700 rounded-full cursor-pointer" />
            </div>
            <div className="flex items-center justify-between">
                <span>$120.00</span>
                <Image
                    imageURL="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Nike shoes"
                    className="w-10 h-10 rounded-full object-fill"
                />
            </div>
            <div className="flex items-center justify-between gap-3 mt-5">
                <button className="bg-indigo-600 flex-1 rounded-md text-white p-1">
                    Edit
                </button>
                <button className="bg-red-700 flex-1 rounded-md text-white p-1">
                    Delete
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
