import { Outlet } from "react-router-dom";
import Nav from "../components/Navbar/Nav";

export default function Layout() {
  return (
    <div>
         <Nav></Nav>
         <Outlet></Outlet>
         
    </div>
  )
}
