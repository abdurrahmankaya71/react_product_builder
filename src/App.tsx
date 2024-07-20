import ProductCard from "./components/ProductCard";
import { productList } from "./data";

const App = () => {
    //! Renders
    const renderProductList = productList.map((product) => {
        return <ProductCard key={product.id} product={product} />;
    });
    return (
        <main className="container mx-auto">
            <div className="m-5 p-2 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 rounded-md">
                {renderProductList}
            </div>
        </main>
    );
};

export default App;
