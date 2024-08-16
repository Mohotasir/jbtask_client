import { useContext, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
export default function Nav() {
  const [visible, setVisible] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const handleVisible = () => {
    setVisible(!visible);
  };
  const handleSignOut = () => {
    logOut()
      .then()
      .catch((error) => alert(error.message));
  };

  return (
    <div className="py-3 md:py-4 mx-auto bg-white">
      {/* desktop menu */}

      <div className="hidden md:flex relative justify-between items-center my-3">
        <div className="">
          <h1 className="text-2xl font-bold p-2 font-sans  ">MYSHOP</h1>
        </div>
        <SearchBar></SearchBar>
        <div className="flex justify-between text-gray-600 items-center gap-4 lg:gap-12">
          <div className="flex list-none gap-8 text-sm">
            <li>Home</li>
            <li>Products</li>
            <li>FAQ</li>
            <li>Contact</li>
          </div>
          {user ? (
            <div className="flex justify-center items-center gap-2">
              <img className="w-[40px] rounded-full" src={user.photoURL} alt="" />
              <Link
                onClick={handleSignOut}
                className="border  text-sm font-semibold rounded-md px-3 py-1 clr border-green-400 text-white"
              >
                Log out
              </Link>
            </div>
          ) : (
            <div className="flex gap-3">
              <Link
                to="/login"
                className="border rounded-md px-4 py-2 btnClr text-white"
              >
                Log in
              </Link>
              <Link
                to="/signup"
                className="border rounded-md px-4 py-2 clr border-green-400 text-white"
              >
                Sign up
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* mobile menu */}
      <div className=" flex flex-col  my-3 md:hidden">
        <div className="flex justify-between">
          <h1 className="text-xl font-bold p-2 ">MYSHOP</h1>
          <SearchBar></SearchBar>
          <div onClick={handleVisible} className="">
            <h1 className="text-xl font-bold cursor-pointer">|||</h1>
          </div>
        </div>
        <div
          className={`${
            visible ? "translate-x-0" : "translate-x-full"
          } absolute bg-green-50 top-0 py-24 right-0 h-full w-[50%] text-gray-600 overflow-x-hidden transition-transform duration-500 ease-in-out`}
        >
          <div
            onClick={handleVisible}
            className="absolute top-0 p-4 rounded-br-full rounded-tr-full bg-green-200 text-xl font-semibold hover:bg-white transition-colors duration-500 ease-in-out cursor-pointer"
          >
            X
          </div>
          <div className="flex justify-center items-center flex-col list-none gap-4">
            <li className="border-b-2 pb-3 w-full text-center">Home</li>
            <li className="border-b-2 pb-3 w-full text-center">Products</li>
            <li className="border-b-2 pb-3 w-full text-center">FAQ</li>
            <li className="border-b-2 pb-3 w-full text-center">Contact</li>
          </div>
          {user ? (
            <div className="flex justify-center items-center gap-2">
              <img className="w-[40px] rounded-full" src={user.photoURL} alt="" />
              <Link
                onClick={handleSignOut}
                className="border  text-sm font-semibold rounded-md px-3 py-1 clr border-green-400 text-white"
              >
                Log out
              </Link>
            </div>
          ) : (
            <div className="flex gap-3">
              <Link
                to="/login"
                className="border rounded-md px-4 py-2 btnClr text-white"
              >
                Log in
              </Link>
              <Link
                to="/signup"
                className="border rounded-md px-4 py-2 clr border-green-400 text-white"
              >
                Sign up
              </Link>
            </div>
          )}
          
        </div>
      </div>
    </div>
  );
}
