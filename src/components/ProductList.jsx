// src/components/ProductList.js
import ProductCard from "./ProductCard";
import PropTypes from "prop-types";

const ProductList = ({ products }) => {
  return (
    <div className="container px-2 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductList;
