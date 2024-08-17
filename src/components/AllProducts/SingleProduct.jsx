import { FaStar } from "react-icons/fa";

export default function SingleProduct({product}) {
    const {name ,image ,description,price,category,ratings,creationDateTime} = product
  return (
    <div className="lg:max-w-[440px] lg:max-h-[450px] rounded-lg border p-3 hover:bg-green-50">
          <img className="md:w-48 md:h-48 text-center mx-auto mb-2" src={image} alt="" />
         <h1 className="text-lg font-semibold ">{name}</h1>
         <h1 className="my-1 font-mono"> category: <span className="font-sans">{category}</span></h1>
         <p className="text-gray-700">{description}</p>
         <div className="flex justify-between">
         <h1 className="font-bold"> <span className="clr font-bold">Price: </span> ${price}</h1>
         <h1 className="text-lg font-semibold flex justify-center items-center gap-2">{ratings} <span className="text-yellow-500"><FaStar /></span></h1>
         </div>
    </div>
  )
}
