import { Outlet } from "react-router-dom";
import Sidenav from "./Sidenav";
import NotificationToast from "./NotificationToast";
import { getRoles } from "../lib/auth/Roles";
import Navbar from "./Navbar";

function layout() {
  const isAdmin = getRoles();
  console.log(isAdmin);
  return (
    <section className="flex flex-col h-screen">
      {isAdmin == true ? <Navbar /> : null}
      <div className="flex flex-row justify-between h-full">
        <Sidenav />
        <div className="flex flex-col w-full">
          <Outlet />
        </div>
      </div>
      <div className="flex flex-row justify-end w-full bg-[#f9fafb] px-4 py-2">
        <NotificationToast />
      </div>
    </section>
  );
}

export default layout;
