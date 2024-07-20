import Button from "./components/ui/Button";
import ProductCard from "./components/ProductCard";
import Modal from "./components/ui/Modal";
// import Modal from "./components/ui/Modal";
import { productList } from "./data";
import { useState } from "react";

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

    //! Renders
    const renderProductList = productList.map((product) => {
        return <ProductCard key={product.id} product={product} />;
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
                <div className="flex space-x-2">
                    <Button className="bg-indigo-600 text-white">Cancel</Button>
                    <Button className="bg-lime-900 text-white">Submit</Button>
                </div>
            </Modal>
        </main>
    );
};

export default App;
