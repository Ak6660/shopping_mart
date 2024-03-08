// src/components/ProductCard.js
import PropTypes from "prop-types";
import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../cartSlice/cartSlice";
import Spinner from "./Spinner";

// eslint-disable-next-line react/display-name
const ProductCard = memo(({ product }) => {
  const [isVisible, setVisible] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cardObserver = useRef(null);
  const navigateToDetails = () => {
    navigate(`/products/${product.id}`);
  };

  const handleAddToCart = useCallback((e) => {
    e.stopPropagation();
    dispatch(addToCart(product));
  }, []);

  const visible = useMemo(() => {
    return (
      <div className="overflow-hidden relative">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-64 object-cover object-center"
        />
        <div className="p-4">
          <h2 className="text-xl truncate font-bold mb-2">{product.title}</h2>
          <p className="text-gray-700 h-6 truncate ">{product.description}</p>
          <div className="pt-10 flex items-end justify-between">
            <span className="font-bold text-xl">${product.price}</span>
            {/* Button positioned at bottom right */}
            <button
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
            <button
              className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
              onClick={navigateToDetails}
            >
              Details
            </button>
          </div>
        </div>
      </div>
    );
  }, [product, handleAddToCart]);

  useEffect(() => {
    const curObs = cardObserver.current;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setVisible(true);
      }
    });
    observer.observe(curObs);

    return () => {
      observer.unobserve(curObs);
    };
  }, []);

  return product ? (
    <div
      ref={cardObserver}
      className="w-[100%] mx-auto bg-white shadow-md rounded-lg overflow-hidden"
    >
      {isVisible && visible}
    </div>
  ) : (
    <Spinner />
  );
});

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductCard;
