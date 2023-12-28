import { useQuery } from "@tanstack/react-query";
import { Toast } from "flowbite-react";
import { getLastNotification } from "../data/Notifications";
import { FaBell } from "react-icons/fa";
import { useEffect, useState } from "react";
import bellSound from "../assets/notificationsound.mp3";

function NotificationToast() {
  const [showToast, setShowToast] = useState<boolean>(false);

  const querylastNotification = useQuery({
    queryKey: ["lastNotification"],
    queryFn: getLastNotification,
    refetchInterval: 5000,
  });

  useEffect(() => {
    // Display the toast when there is a new notification
    if (querylastNotification.data) {
      const audio = new Audio(bellSound);
      audio.play();
      setShowToast(true);
      // Hide the toast after 3000 milliseconds (3 seconds)
      const timeoutId = setTimeout(() => {
        setShowToast(false);
      }, 4000);

      // Cleanup the timeout when the component unmounts or a new notification comes in
      return () => clearTimeout(timeoutId);
    }
  }, [querylastNotification.data]);

  console.log(querylastNotification.data?.productId);
  return (
    <>
      {showToast && (
        <Toast className="w-auto h-24">
          <div className="flex flex-row justify-between items-start gap-4">
            <div className="text-cyan-600 dark:text-cyan-500">
              <FaBell className="h-5 w-5" />
            </div>
            <div className="flex flex-col">
              <p className="font-semibold text-red">
                {querylastNotification.data?.description}
              </p>
              <p className="font-medium text-black">
                Product :{querylastNotification.data?.productId}
              </p>
            </div>
          </div>
        </Toast>
      )}
    </>
  );
}

export default NotificationToast;
