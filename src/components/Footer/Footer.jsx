

export default function Footer() {
  return (
    <div className="flex justify-between mt-12 py-12 bg-green-50 pr-12 pl-6">
       <div>
            <h1 className="text-4xl font-bold ">MYSHOP</h1>
            <p className="text-gray-400 text-lg">choose your desire
            product.</p>
       </div>
       <div className="text-lg text-gray-700 flex flex-col gap-2">
            <p>Home</p>
            <p>Products</p>
            <p>Contact</p>
            <p>FAQ</p>
       </div>
       <div>
           <p className="font-semibold text-lg text-gray-500">Helpline !!!</p>
           <p className="text-xl my-3">+880 12345678</p>
           <p className="text-gray-800 font-semibold text-lg">Dhaka , Bangladesh</p>
       </div>
    </div>
  )
}
