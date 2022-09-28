const notificationsContainer = document.querySelector(".notifications-container");

// Reads notifications
let notifications = Array.from(notificationsContainer.children);

notifications.forEach(notification => notification.addEventListener('click', () => {
    notification.setAttribute("class", "notification read");
    notification.removeEventListener('click', () => {
        notification.setAttribute("class", "notification read");
    })
}));

// Handles header's notification counter

const unreadNotifications = () => {
    let header = document.querySelector(".header");
    let noOfUnread = document.querySelectorAll(".unread").length;
    //console.log(noOfUnread)
    if (noOfUnread === 1) {
        return header.innerHTML = `Notification 1`;
    } else if (noOfUnread === 0) {
        return header.innerHTML = `All read`;
    } else {
        return header.innerHTML = `Notifications ${noOfUnread}`;
    }
}

document.querySelector(".header").innerHTML = unreadNotifications();

notifications.forEach(notification => notification.addEventListener('click', unreadNotifications));

// Handles header's Mark all as read

const markAllAsRead = () => {
    let unreadNotifications = document.getElementsByClassName("notification");
    for (let i = 0; i < unreadNotifications.length; i++) {
        unreadNotifications[i].setAttribute("class", "notification read");
    }
    return document.querySelector(".header").innerHTML = `All read`;
}

let allRead = document.querySelector(".set-read");
allRead.addEventListener('click', markAllAsRead);
// BREAKDOWN OF unreadNotifications

// notificationsContainer.children returns an array-like obj which cannot be iterated by forEach
// so it is converted to an array with Array.from


//document.querySelector('.set-read').addEventListener('click', );
