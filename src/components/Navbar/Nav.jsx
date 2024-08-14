import { useState } from "react";

export default function Nav() {
    const [visible ,setVisible] = useState(false)
    const handleVisible = ()=>{
        setVisible(!visible)
    }
  return (
    <div>
      {/* desktop menu */}

      <div className="hidden md:flex relative justify-between items-center mx-3 md:mx-12 my-3">
        <div>
          <h1 className="text-xl font-bold p-2 border">logo</h1>
        </div>
        <div className="flex justify-between text-gray-600 items-center gap-4 lg:gap-12">
          <div className="flex list-none gap-8 text-md ">
            <li>Home</li>
            <li>Products</li>
            <li>FAQ</li>
            <li>Contact</li>
          </div>
          <div className="flex gap-3">
            <button className="border rounded-md px-4 py-2 btnClr text-white">
              Log in
            </button>
            <button className="border rounded-md px-4 py-2 clr border-green-400 text-white">
              Sign up
            </button>
          </div>
        </div>
      </div>

      {/* mobile menu */}
      <div className="flex flex-col  mx-4 md:mx-12 my-3 md:hidden">
        <div className="flex justify-between">
          <h1 className="text-xl font-bold p-2 border">logo</h1>
          <div onClick={handleVisible} className="">
            <h1 className="text-xl font-bold cursor-pointer">|||</h1>
          </div>
        </div>
        <div className={`${visible ? 'absolute' : 'hidden'}  bg-green-50 top-0  py-24 right-0  h-full w-[50%]  text-gray-600`}>
          <div onClick={handleVisible} className="absolute top-0 p-4 rounded-br-full rounded-tr-full bg-green-200 text-xl font-semibold hover:bg-white transition-colors duration-500 ease-in-out cursor-pointer">X</div>


          <div className="flex  justify-center items-center flex-col list-none gap-4 ">
            <li className="border-b-2 pb-3 w-full text-center">Home</li>
            <li className="border-b-2 pb-3 w-full text-center">Products</li>
            <li className="border-b-2 pb-3 w-full text-center">FAQ</li>
            <li className="border-b-2 pb-3 w-full text-center">Contact</li>
          </div>
          <div className="gap-3 mt-6 flex flex-col px-2">
            <button className="border rounded-md px-4 py-2 btnClr text-white">
              Log in
            </button>
            <button className="border rounded-md px-4 py-2 clr border-green-400 text-white">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
