import { AsyncStorage } from "react-native";
import { Notifications, Permissions, Constants } from "expo";

const NOTIFICATION_KEY = "MobileFlashcards:notifications";

// i believe this is called to clear the notify prompt for the day
export function clearLocalNotifications() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY).then(
    Notifications.cancelAllScheduledNotificationsAsync
  );
}

// this returns a JS object that represents/models our notification
function createNotification() {
  return {
    title: "What time is it? It's QUIZZING time!",
    body: "👋 Don't forget to check your flashcards today!",
    ios: {
      sound: true
    },
    android: {
      sound: true,
      priority: "high",
      sticky: false,
      vibrate: true
    }
  };
}

// i believe this is always forward looking to set for tomorrow. Once the person does the quiz for the day you clear it for that day and then set for tomorrow
export function setLocalNotification() {
  console.log("From inside setLocalNotifcations: I ran!"  )
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then(data => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
          if (Constants.isDevice === false && status === "granted") {
            console.log("Notification permissions granted")
            Notifications.cancelAllScheduledNotificationsAsync();

            let tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            // tomorrow.setDate(tomorrow.getDate());
            tomorrow.setHours(20);
            tomorrow.setMinutes(0);

            Notifications.scheduleLocalNotificationAsync(createNotification(), {
              time: tomorrow,
              repeat: "day"
            });

            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
          }
        });
      }
    });
}