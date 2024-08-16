
import { useProducts } from "../Hooks/useProducts";
import AllProducts from "./AllProducts/AllProducts";
import Hero from "./Hero/Hero";


export default function Home() {
  
    const { products } = useProducts();
  return (
    <div>
      <Hero />
      <div className="flex gap-6">
        <div className="">
          <AllProducts products={products} />
        </div>
        
      </div>
    </div>
  );
}
