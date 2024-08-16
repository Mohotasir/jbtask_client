import useAxios from "../../Hooks/useAxios";
import SingleProduct from "./SingleProduct";
import { useState, useEffect, useRef } from "react";

export default function AllProducts({ products }) {
  const [isSticky, setIsSticky] = useState(false);
  const [priceOrder, setPriceOrder] = useState("");
  const [isLatestFirst, setIsLatestFirst] = useState(false);
  const [sortedproduct, setProducts] = useState([]);
  const [isSortingApplied, setIsSortingApplied] = useState(false);/////////////
  const sidebarRef = useRef(null);
  const placeholderRef = useRef(null);
  const axios = useAxios();

  const fetchSortedProducts = async () => {
    try {
      const response = await axios.get("/sortProducts", {
        params: {
          priceOrder,
          isLatestFirst,
        },
      });
      setProducts(response.data);
      setIsSortingApplied(true); // Indicate that sorting has been applied
    } catch (error) {
      console.error("Error fetching sorted products:", error);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (sidebarRef.current && placeholderRef.current) {
        const placeholderTop = placeholderRef.current.getBoundingClientRect().top;
        const shouldStick = placeholderTop <= 0;
        setIsSticky(shouldStick);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    fetchSortedProducts();
  }, [priceOrder, isLatestFirst]);

  const handleRadioChange = (e) => {
    setPriceOrder(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    setIsLatestFirst(e.target.checked);
  };

  return (
    <div className="flex gap-4">
      <div className="w-3/4">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3 mt-8">
          {(isSortingApplied ? sortedproduct : products).map((product) => (
            <SingleProduct key={product._id} product={product} />
          ))}
        </div>
      </div>
      <div className="w-1/4">
        <div
          ref={placeholderRef}
          style={{
            height: isSticky ? `${sidebarRef.current.offsetHeight}px` : "auto",
          }}
        />
        <div
          ref={sidebarRef}
          className={`transition-all duration-300 ${
            isSticky ? "fixed top-0 w-[25%]" : ""
          }`}
        >
          <div className="border rounded-lg h-full mt-8 p-4">
            <h1 className="text-lg font-semibold mb-2 border-b">Sort By :</h1>
            <div>
              <label className="flex mb-2">
                <input
                  type="radio"
                  name="priceOrder"
                  value="High to Low Price"
                  className="mr-2 text-xl"
                  onChange={handleRadioChange}
                />
                High to Low Price
              </label>
              <label className="flex mb-2">
                <input
                  type="radio"
                  name="priceOrder"
                  value="Low to High Price"
                  className="mr-2 text-xl"
                  onChange={handleRadioChange}
                />
                Low to High Price
              </label>
              <label className="flex mb-2">
                <input
                  type="checkbox"
                  className="mr-2 text-xl"
                  onChange={handleCheckboxChange}
                />
                Latest to Old product
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
