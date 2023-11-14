const notificationButton = document.querySelector("#btn .button");
if ("Notification" in window) {
  notificationButton.addEventListener("click", (e) => {
    e.stopPropagation(); // Stop the event from propagating to parent elements
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        new Notification("Demo Notification Title", {
          body: "This is a demo notification from the web browser.",
        });
      }
    });
  });
}
