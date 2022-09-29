/* DOM ELEMENTS */

const notificationsContainer = document.querySelector(".notifications-container");
let unreadIndex = document.querySelector('.unreadIndex');
let allRead = document.querySelector(".set-read");

/* FUNCTIONS */

// Handles header's notification counter
const unreadNotificationsCounter = () => {
    let notificationsBanner = document.querySelector(".notificationsBanner");
    let notificationsBannerHidden = document.querySelector(".notificationsBannerHidden");
    let noOfUnread = document.querySelectorAll(".unread").length;
    
    if (noOfUnread === 1) {
        unreadIndex.textContent = noOfUnread;
    } else if (noOfUnread === 0) {
        notificationsBanner.style.display = "none";
        notificationsBannerHidden.style.display = "block";
    } else {
        unreadIndex.textContent = noOfUnread;
    }
}

// Handles header's Mark all as read
const markAllAsRead = () => {
    let unreadNotifications = document.getElementsByClassName("notification");
    let notificationsBanner = document.querySelector(".notificationsBanner");
    let notificationsBannerHidden = document.querySelector(".notificationsBannerHidden");
    for (let i = 0; i < unreadNotifications.length; i++) {
        unreadNotifications[i].setAttribute("class", "notification read");
    }
    notificationsBanner.style.display = "none";
    notificationsBannerHidden.style.display = "block";
}

// Toggles the response message element of the notification
const toggleMsg = () => {
    let msg = document.querySelector('.msg');
    
    if (msg.style.display === 'block') {
        msg.style.display = 'none';
    } else {
        msg.style.display = 'block';
    }
}

/* EVENT LISTENERS */

// Marks clicked notification as read
let notifications = Array.from(notificationsContainer.children);

notifications.forEach(notification => notification.addEventListener('click', () => {
    notification.setAttribute("class", "notification read");
    notification.removeEventListener('click', () => {
        notification.setAttribute("class", "notification read");
    })
}));

// Finds the No of unread notifications
window.onload = unreadNotificationsCounter();
notifications.forEach(notification => notification.addEventListener('click', unreadNotificationsCounter));

// Shows every notification as read
allRead.addEventListener('click', markAllAsRead);

// Toggles the 4th's notification response message apperance
document.querySelector(".fourth").addEventListener('click', toggleMsg)