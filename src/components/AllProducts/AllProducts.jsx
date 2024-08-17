import useAxios from "../../Hooks/useAxios";
import SingleProduct from "./SingleProduct";
import { useState, useEffect, useRef } from "react";

export default function AllProducts({ products }) {
  const [isSticky, setIsSticky] = useState(false);
  const [priceOrder, setPriceOrder] = useState("");
  const [isLatestFirst, setIsLatestFirst] = useState(false);
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortedProducts, setProducts] = useState([]);
  const [isSortingApplied, setIsSortingApplied] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const sidebarRef = useRef(null);
  const placeholderRef = useRef(null);
  const axios = useAxios();

  const fetchSortedProducts = async () => {
    try {
      const response = await axios.get("/sortProducts", {
        params: {
          priceOrder,
          isLatestFirst,
          brand,
          category,
          minPrice,
          maxPrice,
          page,
          limit: 10,
        },
      });
      setProducts(response.data.products);
      setTotalPages(response.data.totalPages);
      setIsSortingApplied(true);
    } catch (error) {
      console.error("Error fetching sorted products:", error);
    }
  };

  useEffect(() => {
    fetchSortedProducts();
  }, [priceOrder, isLatestFirst, brand, category, minPrice, maxPrice, page]);

  const handleRadioChange = (e) => {
    setPriceOrder(e.target.value);
    setPage(1);
  };

  const handleCheckboxChange = (e) => {
    setIsLatestFirst(e.target.checked);
    setPage(1);
  };

  const handleFilterChange = (setter) => (e) => {
    setter(e.target.value);
    setPage(1);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4">
      <div className="lg:w-3/4">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 mt-8">
          {products ? (
            (isSortingApplied ? sortedProducts : products).map((product) => (
              <SingleProduct key={product._id} product={product} />
            ))
          ) : (
            <div>
              <h1 className="text-5xl font-bold text-gray-500">NOT FOUND</h1>
            </div>
          )}
        </div>
        <div className="flex justify-center mt-4">
          <button
            disabled={page === 1}
            onClick={() => handlePageChange(page - 1)}
            className="border w-[80px] p-1 mx-3 bg-green-200 rounded text-sm cursor-pointer font-semibold"
          >
            Previous
          </button>
          <span className="mx-2">
            Page {page} of {totalPages}
          </span>
          <button
            disabled={page === totalPages}
            onClick={() => handlePageChange(page + 1)}
            className="border w-[80px] p-1 mx-3 bg-green-200 rounded text-sm cursor-pointer font-semibold"
          >
            Next
          </button>
        </div>
      </div>
      <div className="md:w-1/4">
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
            <h1 className="text-lg font-semibold mb-2 border-b">Filter By:</h1>
            <div className="flex flex-col gap-2">
              <label className="flex mb-2 ">
                <span>Category:</span>
                <select
                  onChange={handleFilterChange(setCategory)}
                  className="ml-2"
                >
                  <option value="">All</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Clothing">Clothing</option>
                  <option value="Personal Care">Personal Care</option>
                  <option value="Wearables">Wearables</option>
                  <option value="Audio">Audio</option>
                  <option value="Kitchen Appliances">Kitchen Appliances</option>
                  <option value="Computers">Computers</option>
                  <option value="Smart Home">Smart Home</option>
                  <option value="Photography">Photography</option>
                  <option value="Transportation">Transportation</option>
                  {/* Add more categories here */}
                </select>
              </label>
              <label className="flex mb-2">
                <span>Brand:</span>
                <select
                  onChange={handleFilterChange(setBrand)}
                  className="ml-2"
                >
                  <option value="">All</option>
                  <option value="SoundWave">SoundWave</option>
                  <option value="VisionPlus">VisionPlus</option>
                  <option value="EcoWear">EcoWear</option>
                  <option value="HydroMax">HydroMax</option>
                  <option value="ChefMaster">ChefMaster</option>
                  {/* Add more brands here */}
                </select>
              </label>

              <label className="flex flex-col mb-2">
                <span>Price Range:</span>
                <div className="flex justify-around gap-2 mt-3">
                  <input
                    type="number"
                    placeholder="Min"
                    value={minPrice}
                    onChange={handleFilterChange(setMinPrice)}
                    className="w-[110px] rounded  border outline-none text-md px-2"
                  />
                  <h1 className="font-semibold text-gray-400">To</h1>
                  <input
                    type="number"
                    placeholder="Max"
                    value={maxPrice}
                    onChange={handleFilterChange(setMaxPrice)}
                    className="w-[110px]  rounded  border outline-none text-md px-2"
                  />
                </div>
              </label>
              <h1 className="text-lg mt-4 font-semibold mb-2 border-b">Sort By:</h1>
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
