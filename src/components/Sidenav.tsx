import { Sidebar } from "flowbite-react";
import { ImHome } from "react-icons/im";
import { BsPersonLinesFill } from "react-icons/bs";
import { FaBox, FaMoneyBillTrendUp } from "react-icons/fa6";
import { RiLogoutBoxFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { handelLogout } from "../lib/auth/KeyCloak";
import { getRoles } from "../lib/auth/Roles";

function Sidenav() {
  const isAdmin = getRoles();
  return (
    <Sidebar aria-label="">
      <Sidebar.Items>
        <Sidebar.ItemGroup className="flex flex-col gap-4">
          <Link to={`/Home/welcome`}>
            <Sidebar.Item icon={ImHome}>Home</Sidebar.Item>
          </Link>
          <Link to={`/Home/clients`}>
            <Sidebar.Item icon={BsPersonLinesFill}>
              {isAdmin ? "Clients" : "My profile"}
            </Sidebar.Item>
          </Link>
          <Link to={`/Home/products`}>
            <Sidebar.Item href="products" icon={FaBox}>
              Products
            </Sidebar.Item>
          </Link>
          <Link to={`/Home/sales`}>
            <Sidebar.Item href="#" icon={FaMoneyBillTrendUp}>
              {isAdmin ? "Sales" : "My sales"}
            </Sidebar.Item>
          </Link>

          <Sidebar.Item icon={RiLogoutBoxFill}>
            <button onClick={handelLogout}>logout</button>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

export default Sidenav;
