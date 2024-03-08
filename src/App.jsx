import Header from "./components/Header";
import { lazy, Suspense, useEffect, useLayoutEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Spinner from "./components/Spinner";
import { fetchData } from "./productSlice/productSlice";
import { useDispatch } from "react-redux";
import { login } from "./userSlice/userSlice";

const SignIn = lazy(() => import("./pages/SignIn"));
const Products = lazy(() => import("./pages/Products"));
const Cart = lazy(() => import("./pages/Cart"));
const UserProfile = lazy(() => import("./pages/userProfile"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));
const Home = lazy(() => import("./pages/Home"));

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [curUser, setCurUser] = useState({});

  useLayoutEffect(() => {
    const savedItems = [];
    const orderHistory = [];
    const user = JSON.parse(localStorage.getItem("userData"));
    // console.log(user)
    if (!user) {
      navigate("/sign-in");
    } else {
      dispatch(login({ user, savedItems, orderHistory }));
      setCurUser(user);
    }
  }, [navigate]);

  useEffect(() => {
    dispatch(fetchData(0, 30));
  }, [dispatch]);

  return (
    <div className="bg-gray-300">
      <Header user={curUser} />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
