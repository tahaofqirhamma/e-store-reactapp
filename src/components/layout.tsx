import { Outlet } from "react-router-dom";
import Sidenav from "./Sidenav";

function layout() {
  return (
    <section className="flex flex-row h-screen">
      <Sidenav />

      <div className="flex-grow">
        <Outlet />
      </div>
    </section>
  );
}

export default layout;
