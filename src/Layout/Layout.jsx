import { Outlet } from "react-router-dom";
import Nav from "../components/Navbar/Nav";
import Footer from "../components/Footer/Footer";

export default function Layout() {
  return (
    <div className="">
      <div className="mx-3 lg:mx-12">
        <div className="h-[120px]">
          <Nav></Nav>
        </div>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
}
