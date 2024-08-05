// ** productObj === errorsObj (TITILE, DESCRIPTION, IMAGE, PRICE)
export const productValidation = (product: {
    title: string;
    description: string;
    imgURL: string;
    price: string;
}) => {
    // ** Returns an object
    const errors: {
        title: string;
        description: string;
        imgURL: string;
        price: string;
    } = {
        title: "",
        description: "",
        imgURL: "",
        price: "",
    };

    const validUrl = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(
        product.imgURL
    );

    if (
        !product.title.trim() ||
        product.title.length < 10 ||
        product.title.length > 80
    ) {
        errors.title = "Product title must be between 10 and 80 characters!";
    }
    if (
        !product.description.trim() ||
        product.description.length < 10 ||
        product.description.length > 900
    ) {
        errors.description =
            "Product description must be between 10 and 900 characters!";
    }
    if (!product.imgURL.trim() || !validUrl) {
        errors.imgURL = "Valid image url is required!";
    }
    if (!product.price.trim() || isNaN(Number(product.price))) {
        errors.price = "Valid price is required!";
    }

    return errors;
};
