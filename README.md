# Frontend Mentor - Notifications page solution

[![Pull Requests Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](https://github.com/kostas23Github/qr-code-component)

## Table of contents

- [Frontend Mentor - Notifications page solution](#frontend-mentor---notifications-page-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [Screenshot](#screenshot)
    - [Links](#links)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
  - [Author](#author)

## Overview
A social media notifications page. The user can see the notifications, the number of them that he/she hasn't read, mark the all as read with a button, and see their content fi they have one.

### Screenshot

[Desktop View](./assets/images/Screenshot_1.png)
[Mobile View](./assets/images/Screenshot_2.png)
### Links

- [Solution URL](https://github.com/kostas23Github/notifications-page-main)
- [Live Site URL](https://kostas23github.github.io/notifications-page-main/)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Desktop-first workflow
- JavaScript

### What I learned

The code snipet
```
element.children;
```
returns an array-like obj which in order to manipulate like an array it needs to be converted to one
```
Array.from(element.children);
```
An event-handler function that takes an event as an argument, when it is called as a 2nd argument in addEventListener, it is called without it's argument
```
const eventHandler = (event) => {};
event.target.addEventListener('event', eventHandler);
```

### Continued development

Add more interactivity. In this stage when the page is loaded all notifications are shown unread. Show a random number as unread. Currently only the 4th notification can interact with a response msg since it is the only one with one.

## Author

- Github - [kostas](https://github.com/kostas23Github)
- Frontend Mentor - [@kostas23Github](https://www.frontendmentor.io/profile/kostas23Github)
