import Button from "./components/ui/Button";
import ProductCard from "./components/ProductCard";
import Modal from "./components/ui/Modal";
import { productList, formInputsList, colors } from "./data";
import { ChangeEvent, FormEvent, useState } from "react";
import Input from "./components/ui/Input";
import { IProduct } from "./interfaces";
import { productValidation } from "./validation";
import ErrorMessage from "./components/ui/ErrorMessage";
import CircleColor from "./components/ui/CircleColor";
import { v4 as uuid } from "uuid";

const App = () => {
    //! ------- STATES ------------
    const defaultProductObj = {
        title: "",
        description: "",
        imgURL: "",
        price: "",
        colors: [],
        category: {
            name: "",
            imageURL: "",
        },
    };
    const [isOpen, setIsOpen] = useState(false);
    const [errors, setErrors] = useState({
        title: "",
        description: "",
        imgURL: "",
        price: "",
    });
    const [products, setProducts] = useState<IProduct[]>(productList);
    const [product, setProduct] = useState<IProduct>(defaultProductObj);
    const [tempColors, setTempColors] = useState<string[]>([]);

    //! ------- HANDLER ------------

    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target;
        setErrors({
            ...errors,
            [name]: "",
        });
        setProduct({
            ...product,
            [name]: value,
        });
    };
    const onCancel = () => {
        setProduct(defaultProductObj);
        setTempColors([]);
    };
    const submitHandler = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        const { title, description, imgURL, price } = product;
        const errors = productValidation({
            title,
            description,
            imgURL,
            price,
        });
        // close();
        // ** Check if any property has a value "" && chek if all properties have a value of ""
        const hasErrorMsg =
            Object.values(errors).some((value) => value === "") &&
            Object.values(errors).every((value) => value === "");

        if (!hasErrorMsg) {
            setErrors(errors);
            return;
        }
        setProducts((prev) => [
            { ...product, id: uuid(), colors: tempColors },
            ...prev,
        ]);
        setProduct(defaultProductObj);
        setTempColors([]);
        close();

        console.log("Urun basarili bir sekilde eklendi");
    };

    //! ------ RENDERS ------------
    //* Render product list
    const renderProductList = products.map((product) => {
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
                <ErrorMessage msg={errors[input.name]} />
            </div>
        );
    });
    //* Render product colors
    const renderProdColors = colors.map((color) => (
        <CircleColor
            key={color}
            color={color}
            onClick={() => {
                if (tempColors.includes(color)) {
                    setTempColors((prev) =>
                        prev.filter((item) => item !== color)
                    );
                    return;
                }
                setTempColors((prev) => [...prev, color]);
            }}
        />
    ));

    //! ---------- RETURN -------------
    return (
        <main className="container mx-auto">
            <Button
                className="bg-indigo-600 text-white mx-auto p-2 my-5"
                onClick={open}
            >
                Add Product
            </Button>
            <div className="m-5 p-2 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 rounded-md">
                {renderProductList}
            </div>
            <Modal close={close} isOpen={isOpen} title="Add a new product">
                <form className="space-y-3" onSubmit={submitHandler}>
                    {renderFormInputList}
                    <div className="flex items-center my-3 basis-5 space-x-2">
                        {renderProdColors}
                    </div>
                    <div className="flex items-center my-3 basis-5 space-x-2">
                        {tempColors.map((color) => (
                            <span
                                className="text-white rounded-md p-1 mr-1 text-sm"
                                key={color}
                                style={{ backgroundColor: color }}
                            >
                                {color}
                            </span>
                        ))}
                    </div>
                    <div className="flex space-x-2 mt-5">
                        <Button
                            className="bg-indigo-600 text-white"
                            onClick={onCancel}
                        >
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
