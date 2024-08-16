
import { useProducts } from "../../Hooks/useProducts";
import SingleProduct from "./SingleProduct";

export default function AllProducts() {
  
  const {products} = useProducts()
 
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-3 mt-8">
      {products &&
        products.map((product) => (
          <SingleProduct key={product._id} product={product} />
        ))}
    </div>
  );
}
