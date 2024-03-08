import ProductList from "../components/ProductList";
import { useDispatch, useSelector } from "react-redux";
import {
  filterProduct,
  searchProducts,
  sortingProduct,
} from "../productSlice/productSlice";
import Filter from "../components/Filter";

const Products = () => {
  const dispatch = useDispatch();
  const { products, categories, filter, sort } = useSelector(
    (state) => state.products,
  );

  const categoryChange = (e) => {
    const { value } = e.target;
    dispatch(filterProduct(value));
    dispatch(sortingProduct(""));
    dispatch(searchProducts(""));
  };
  const sortingChange = (e) => {
    const { value } = e.target;
    dispatch(sortingProduct(value));
  };

  return (
    <div>
      <main className="pb-8">
        <Filter
          sort={sort}
          sortingChange={sortingChange}
          filter={filter}
          categories={categories}
          categoryChange={categoryChange}
        />
        <ProductList products={products} />
      </main>
    </div>
  );
};

export default Products;
