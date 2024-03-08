import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    (async () => {
      const res = await (
        await fetch(`https://dummyjson.com/products/${id}`)
      ).json();
      setProduct(res);
      setLoading(false);
    })();
  }, []);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === product.images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1,
    );
  };

  return (
    !loading && (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Images */}
          <div>
            <img
              src={product.images[currentImageIndex]}
              alt={product.title}
              className="w-full mb-4 h-80 object-scale-down"
            />

            <div className="flex w-10 h-10 gap-4 items-center">
              <a className="prev cursor-pointer" onClick={prevSlide}>
                ❮
              </a>
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Image ${index + 1}`}
                  className="w-full cursor-pointer"
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
              <a className="next cursor-pointer" onClick={nextSlide}>
                ❯
              </a>
            </div>
          </div>
          {/* Product Details */}
          <div>
            <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <div className="flex items-center mb-4">
              <span className="text-xl font-semibold text-gray-800">
                ${product.price}
              </span>
              <span className="text-sm text-gray-500 ml-2">
                ({product.discountPercentage}% off)
              </span>
            </div>
            <div className="flex items-center mb-4">
              <span className="text-gray-800 mr-2">Rating:</span>
              <div className="flex items-center">
                {[...Array(Math.floor(product.rating))].map((_, index) => (
                  <svg
                    key={index}
                    className="w-5 h-5 text-yellow-500 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.475 2 2 6.475 2 12s4.475 10 10 10 10-4.475 10-10S17.525 2 12 2zm1.893 15.993c-.137.476-.633.809-1.177.809-.545 0-1.043-.333-1.179-.809l-.837-2.893a1.308 1.308 0 0 1-.03-1.054l.806-2.475c.132-.414.499-.709.926-.709.429 0 .799.296.932.709l.807 2.475c.132.414.096.748-.079 1.06l-.836 2.893zM12 15.178c-.413 0-.779-.256-.929-.647l-.65-2.247-1.998.012c-.418.003-.774-.313-.832-.729L7.02 7.352l-1.97-.152c-.45-.034-.836-.347-.971-.781L3.435 4.74c-.244-.582.15-1.21.758-1.387l2.51-.77-1.89-1.72c-.433-.394-.591-1.037-.393-1.607.196-.57.71-.972 1.316-1.026L9.82.528c.586-.064 1.126.343 1.312.903l1.577 4.305 4.263.33c.614.048 1.135.472 1.27 1.054l1.045 3.384c.097.314-.022.652-.303.878l-3.138 2.424-.93 2.71c-.146.423-.48.73-.897.824l-2.98.806c-.16.044-.325.067-.487.067zm0 0" />
                  </svg>
                ))}
                {[...Array(5 - Math.floor(product.rating))].map((_, index) => (
                  <svg
                    key={index}
                    className="w-5 h-5 text-gray-300 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.475 2 2 6.475 2 12s4.475 10 10 10 10-4.475 10-10S17.525 2 12 2zm1.893 15.993c-.137.476-.633.809-1.177.809-.545 0-1.043-.333-1.179-.809l-.837-2.893a1.308 1.308 0 0 1-.03-1.054l.806-2.475c.132-.414.499-.709.926-.709.429 0 .799.296.932.709l.807 2.475c.132.414.096.748-.079 1.06l-.836 2.893zM12 15.178c-.413 0-.779-.256-.929-.647l-.65-2.247-1.998.012c-.418.003-.774-.313-.832-.729L7.02 7.352l-1.97-.152c-.45-.034-.836-.347-.971-.781L3.435 4.74c-.244-.582.15-1.21.758-1.387l2.51-.77-1.89-1.72c-.433-.394-.591-1.037-.393-1.607.196-.57.71-.972 1.316-1.026L9.82.528c.586-.064 1.126.343 1.312.903l1.577 4.305 4.263.33c.614.048 1.135.472 1.27 1.054l1.045 3.384c.097.314-.022.652-.303.878l-3.138 2.424-.93 2.71c-.146.423-.48.73-.897.824l-2.98.806c-.16.044-.325.067-.487.067zm0 0" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-gray-600 mb-4">Brand: {product.brand}</p>
            <p className="text-gray-600 mb-4">Category: {product.category}</p>
            <p className="text-gray-600 mb-4">Stock: {product.stock}</p>
            <button className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-700">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    )
  );
};

ProductDetails.propTypes = {
  product: PropTypes.object,
};

export default ProductDetails;
