import { Dropdown } from "flowbite-react";
import { FaBell } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { getNotifications } from "../data/Notifications";

function Navbar() {
  const { data: notifications } = useQuery({
    queryKey: ["notification"],
    queryFn: getNotifications,
    refetchInterval: 3000,
  });
  console.log(notifications);
  return (
    <div className="flex flex-row items-center justify-end bg-[#f9fafb] h-12 w-full p-4">
      <div className="mx-4">
        <Dropdown label="Notifications">
          {notifications?.map((notification) => (
            <Dropdown.Item key={notification.clientId}>
              <div
                key={notification.notificationId}
                className="flex flex-row justify-between"
              >
                <div className="text-cyan-600 dark:text-cyan-500">
                  <FaBell className="h-5 w-5" />
                </div>
                <div className="flex flex-col">
                  <p className="font-semibold text-red">
                    {notification.description}
                  </p>
                  <p className="font-medium text-black">
                    {notification.productId}
                  </p>
                </div>
              </div>
            </Dropdown.Item>
          ))}
        </Dropdown>
      </div>
    </div>
  );
}

export default Navbar;
