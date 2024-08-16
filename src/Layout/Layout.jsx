import { Outlet } from "react-router-dom";
import Nav from "../components/Navbar/Nav";

export default function Layout() {
  return (
    <div className="mx-3 lg:mx-12">
        <div className="h-[120px]">
        <Nav></Nav>
        </div>
         <Outlet></Outlet>
         
    </div>
  )
}
