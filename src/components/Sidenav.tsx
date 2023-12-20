import { Sidebar } from "flowbite-react";
import { ImCart, ImHome } from "react-icons/im";
import { BsPersonLinesFill } from "react-icons/bs";
import { FaBox, FaMoneyBillTrendUp } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Sidenav() {
  return (
    <Sidebar aria-label="">
      <Sidebar.Items>
        <Sidebar.ItemGroup className="flex flex-col gap-4">
          <Sidebar.Item href="#" icon={ImCart}>
            E-store-app
          </Sidebar.Item>
          <Link to={`/Home`}>
            <Sidebar.Item icon={ImHome}>Home</Sidebar.Item>
          </Link>
          <Link to={`/clients`}>
            <Sidebar.Item icon={BsPersonLinesFill}>Clients</Sidebar.Item>
          </Link>
          <Link to={`/products`}>
            <Sidebar.Item href="products" icon={FaBox}>
              Products
            </Sidebar.Item>
          </Link>
          <Link to={`/sales`}>
            <Sidebar.Item href="#" icon={FaMoneyBillTrendUp}>
              Sales
            </Sidebar.Item>
          </Link>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

export default Sidenav;
