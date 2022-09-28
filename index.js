const notificationsContainer = document.querySelector(".notifications-container");

// Reads notifications
let notifications = Array.from(notificationsContainer.children);
console.log(notifications)
notifications.forEach(notification=> notification.addEventListener('click', () => {
    notification.classList = "notification read";
    //console.log(notification)
    notification.removeEventListener('click', () => {
        notification.classList = "notification read";
    })
}));

// Handles header (all notifications)
/*
// Function that finds the number of unread notifications
const unreadNotifications = () => {
    let noOfUnread = 0;
    let notifications = Array.from(notificationsContainer.children);
    notifications.forEach(notification=> {
        let status = notification.className.split(' ').find(name=> name === "unread")
        if (status) {
            noOfUnread++;
        }
    })

    if (noOfUnread === 1) {
        return `Notification 1`;
    } else if (noOfUnread === 0) {
        return 'y'
    } else {
        return `Notifications ${noOfUnread}`;
    }
}

document.querySelector(".header").innerHTML = unreadNotifications();

// BREAKDOWN OF unreadNotifications

// notificationsContainer.children returns an array-like obj which cannot be iterated by forEach
// so it is converted to an array with Array.from
// status is either true(unread) or false(read) is the status of the notification.

const readAllNotifications = () => {

}

//document.querySelector('.set-read').addEventListener('click', );
*/