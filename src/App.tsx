import Button from "./components/ui/Button";
import ProductCard from "./components/ProductCard";
import Modal from "./components/ui/Modal";
import { productList, formInputsList } from "./data";
import { ChangeEvent, useState } from "react";
import Input from "./components/ui/Input";
import { IProduct } from "./interfaces";

const App = () => {
    //! ------- STATES ------------
    const [isOpen, setIsOpen] = useState(false);
    const [product, setProduct] = useState<IProduct>({
        title: "",
        description: "",
        imgURL: "",
        price: "",
        colors: [],
        category: {
            name: "",
            imageURL: "",
        },
    });

    //! ------- HANDLER ------------

    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target;
        setProduct({
            ...product,
            [name]: value,
        });
    };

    //! ------ RENDERS ------------
    //* Render product list
    const renderProductList = productList.map((product) => {
        return <ProductCard key={product.id} product={product} />;
    });
    //* Render form input list
    const renderFormInputList = formInputsList.map((input) => {
        const { id, type, name, label } = input;
        return (
            <div key={id} className="text-black flex flex-col mt-3">
                <label htmlFor={input.id} className="text-md">
                    {label}
                </label>
                <Input
                    id={id}
                    type={type}
                    name={name}
                    value={product[input.name]}
                    onChange={onChangeHandler}
                />
            </div>
        );
    });

    return (
        <main className="container mx-auto">
            <Button className="bg-indigo-600 text-white" onClick={open}>
                Add
            </Button>
            <div className="m-5 p-2 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 rounded-md">
                {renderProductList}
            </div>
            <Modal close={close} isOpen={isOpen} title="Add a new product">
                <form>
                    {renderFormInputList}
                    <div className="flex space-x-2 mt-5">
                        <Button className="bg-indigo-600 text-white">
                            Cancel
                        </Button>
                        <Button className="bg-lime-900 text-white">
                            Submit
                        </Button>
                    </div>
                </form>
            </Modal>
        </main>
    );
};

export default App;
