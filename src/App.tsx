import Button from "./components/ui/Button";
import ProductCard from "./components/ProductCard";
import Modal from "./components/ui/Modal";
// import Modal from "./components/ui/Modal";
import { productList, formInputsList } from "./data";
import { useState } from "react";
import Input from "./components/ui/Input";

const App = () => {
    //! ------- STATES ------------
    const [isOpen, setIsOpen] = useState(false);

    //! ------- HANDLER ------------

    function open() {
        setIsOpen(true);
    }

    function close() {
        setIsOpen(false);
    }

    //! ------ RENDERS ------------
    //* Render product list
    const renderProductList = productList.map((product) => {
        return <ProductCard key={product.id} product={product} />;
    });
    //* Render form input list
    const renderFormInputList = formInputsList.map((input) => {
        return (
            <div className="text-black flex flex-col mt-3">
                <label htmlFor={input.id} className="text-md">
                    {input.label}
                </label>
                <Input id={input.id} type={input.type} name={input.name} />
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
