import { useQuery } from "@tanstack/react-query";
import { getNotifications } from "../data/Notifications";

function NotificationsList() {
  const { data: notifications } = useQuery({
    queryKey: ["notification"],
    queryFn: getNotifications,
    refetchInterval: 3000,
  });
  return (
    <section className="flex flex-col">
      {notifications?.map((notification) => (
        <div
          key={notification.notificationId}
          className="flex flex-row justify-between"
        >
          <div className="flex flex-col">
            <p className="font-semibold text-red">{notification.description}</p>
            <p className="font-medium text-black">{notification.productId}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default NotificationsList;
