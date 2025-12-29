import { useEffect, useState } from "react";
import { Capacitor } from "@capacitor/core";
import { PushNotifications, Token, PushNotificationSchema, ActionPerformed } from "@capacitor/push-notifications";
import { toast } from "sonner";

interface UsePushNotificationsReturn {
  isSupported: boolean;
  isRegistered: boolean;
  token: string | null;
  requestPermission: () => Promise<boolean>;
  notifications: PushNotificationSchema[];
}

export const usePushNotifications = (): UsePushNotificationsReturn => {
  const [isSupported, setIsSupported] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [notifications, setNotifications] = useState<PushNotificationSchema[]>([]);

  useEffect(() => {
    // Check if running on native platform
    const platform = Capacitor.getPlatform();
    const supported = platform === "ios" || platform === "android";
    setIsSupported(supported);

    if (!supported) {
      console.log("Push notifications are only supported on iOS and Android");
      return;
    }

    // Set up listeners
    const setupListeners = async () => {
      // On registration success
      await PushNotifications.addListener("registration", (token: Token) => {
        console.log("Push registration success, token: " + token.value);
        setToken(token.value);
        setIsRegistered(true);
        // Here you would typically send this token to your backend
      });

      // On registration error
      await PushNotifications.addListener("registrationError", (err) => {
        console.error("Registration error: ", err.error);
        toast.error("Failed to register for push notifications");
      });

      // When a notification is received while app is in foreground
      await PushNotifications.addListener("pushNotificationReceived", (notification: PushNotificationSchema) => {
        console.log("Push notification received: ", notification);
        setNotifications((prev) => [...prev, notification]);
        
        // Show toast for foreground notifications
        toast.info(notification.title || "New Notification", {
          description: notification.body,
        });
      });

      // When user taps on a notification
      await PushNotifications.addListener("pushNotificationActionPerformed", (action: ActionPerformed) => {
        console.log("Push notification action performed: ", action);
        
        // Handle notification tap - navigate to relevant page based on data
        const data = action.notification.data;
        if (data?.type === "message") {
          window.location.href = "/portal/messages";
        } else if (data?.type === "agreement") {
          window.location.href = "/portal/agreements";
        }
      });
    };

    setupListeners();

    // Cleanup listeners on unmount
    return () => {
      PushNotifications.removeAllListeners();
    };
  }, []);

  const requestPermission = async (): Promise<boolean> => {
    if (!isSupported) {
      toast.error("Push notifications are only available on mobile devices");
      return false;
    }

    try {
      // Check current permission status
      let permStatus = await PushNotifications.checkPermissions();

      if (permStatus.receive === "prompt") {
        // Request permission
        permStatus = await PushNotifications.requestPermissions();
      }

      if (permStatus.receive !== "granted") {
        toast.error("Push notification permission denied");
        return false;
      }

      // Register with Apple/Google to receive push notifications
      await PushNotifications.register();
      toast.success("Push notifications enabled!");
      return true;
    } catch (error) {
      console.error("Error requesting push permission:", error);
      toast.error("Failed to enable push notifications");
      return false;
    }
  };

  return {
    isSupported,
    isRegistered,
    token,
    requestPermission,
    notifications,
  };
};
