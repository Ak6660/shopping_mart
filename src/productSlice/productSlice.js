import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  cachedProducts: [],
  categories: [],
  filter: "",
  sort: "",
  search: "",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, actions) => {
      state.products.push(actions.payload);
      state.cachedProducts.push(actions.payload);
    },

    fetchData: (state, actions) => {
      state.products = actions.payload;
      state.cachedProducts = actions.payload;
      state.categories = [...new Set(actions.payload.map((pr) => pr.category))];
    },

    filterProduct: (state, actions) => {
      state.filter = actions.payload;
      if (actions.payload === "") {
        state.products = state.cachedProducts;
      } else {
        state.products = state.cachedProducts.filter(
          (pr) => pr.category === actions.payload,
        );
      }
    },

    sortingProduct: (state, actions) => {
      state.sort = actions.payload;
      switch (actions.payload) {
        case "A-Z":
          state.products = state.products.sort((a, b) =>
            a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 0,
          );
          break;
        case "Z-A":
          state.products = state.products.sort((a, b) =>
            b.title.toLowerCase() < a.title.toLowerCase() ? -1 : 0,
          );
          break;
        case "Low-High":
          state.products = state.products.sort((a, b) => a.price - b.price);
          break;
        case "High-Low":
          state.products = state.products.sort((a, b) => b.price - a.price);
          break;

        default:
          if (state.filter) {
            state.products = state.cachedProducts.filter(
              (pr) => pr.category === state.filter,
            );
          } else {
            state.products = state.cachedProducts;
          }
          break;
      }
    },

    searchProducts: (state, actions) => {
      state.search = actions.payload;
      if (!actions.payload) {
        state;
      } else {
        state.products = state.cachedProducts.filter(
          (pr) =>
            pr.title.toLowerCase().includes(actions.payload.toLowerCase()) ||
            pr.description
              .toLowerCase()
              .includes(actions.payload.toLowerCase()),
        );
      }
    },
  },
});

export function fetchData(skip, limit) {
  return async function (dispatch) {
    const { products } = await (
      await fetch(`https://dummyjson.com/products?skip=${skip}&limit=${limit}`)
    ).json();
    localStorage.setItem("products", JSON.stringify(products));
    dispatch({ type: "product/fetchData", payload: products });
  };
}

// console.log(productSlice.reducer)

export default productSlice.reducer;
export const { addProduct, filterProduct, sortingProduct, searchProducts } =
  productSlice.actions;
