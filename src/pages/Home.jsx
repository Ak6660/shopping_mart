import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  // Slider settings

  const sliderSettings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 300,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // Dummy categories data
  const categories = [
    { id: 1, name: "Skin Care", image: "./assets/skin-care.jpg" },
    { id: 2, name: "Laptops", image: "./assets/laptop.jpg" },
    { id: 3, name: "Clothes", image: "./assets/clothes.jpg" },
    { id: 4, name: "Mobiles", image: "./assets/mobiles.jpg" },
    // Add more categories as needed
  ];
  const handleClick = () => {
    navigate("/products");
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 overflow-hidden">
        <Slider {...sliderSettings}>
          <div className="relative">
            <img
              src="./assets/mobiles.jpg"
              className="w-full h-full object-cover"
              alt="Slide 1"
            />
            <div className="absolute inset-0 flex flex-col justify-start px-4 py-12 bg-black bg-opacity-50">
              <h3 className="text-xl text-violet-600 ">Deals of the Day</h3>
              <p className="text-white">
                Amazing discounts on various products!
              </p>
              <button className="bg-violet-600  text-white px-4 py-2 rounded mt-2">
                Shop Now
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src="./assets/skin-care.jpg"
              className="w-full h-full object-cover"
              alt="Slide 1"
            />
            <div className="absolute inset-0 flex flex-col justify-start px-4 py-12 bg-black bg-opacity-50">
              <h3 className="text-xl text-violet-600  ">Deals of the Day</h3>
              <p className="text-white">
                Amazing discounts on various products!
              </p>
              <button className="bg-violet-600  text-white px-4 py-2 rounded mt-2">
                Shop Now
              </button>
            </div>
          </div>
          {/* Add more slides as needed */}
        </Slider>
      </div>
      <div className="flex-1 bg-gray-200 flex justify-center items-center">
        <div className="max-w-4xl w-full px-4">
          <h2 className="text-3xl font-semibold mb-8">Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {categories.map((category) => (
              <div key={category.id} className="text-center">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-32 h-32 object-cover mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold">{category.name}</h3>
                <button
                  className="bg-indigo-500 text-white px-4 py-2 rounded mt-2"
                  onClick={handleClick}
                >
                  Shop Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
