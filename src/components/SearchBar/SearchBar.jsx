import { useState } from "react";
import useAxios from "../../Hooks/useAxios";
import Modal from "./Modal";
import SingleProduct from "../AllProducts/SingleProduct";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const axios = useAxios();

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/search?name=${searchTerm}`);
      setFilteredProducts(response.data);
      setIsModalOpen(true);
    } catch (error) {
      console.error('Error searching products:', error);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div>
        <input
          className="outline-none border-2 rounded-l-md border-green-100 text-sm pl-3 pr-12 md:pr-48 py-3"
          placeholder="search products..."
          type="text"
          name="name"
          id="name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch} className="clr bg-green-100 p-3 rounded-r-md">
          Search
        </button>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="text-xl font-bold mb-4">Search Results</h2>
        {filteredProducts.length > 0 ? (
            
                filteredProducts.map(product => (
               <SingleProduct product={product} key={product._id}></SingleProduct>
            ))
          
        ) : (
          <p>No products found.</p>
        )}
      </Modal>
    </div>
  );
}
