/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

  API Assignment 2
  Joshua Gable


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

"use strict";
const modal = document.querySelector(".popUp");
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

  Utils

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

// Set a cookie
const setCookie = (name, value, days = {}) => {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = `; expires=${date.toUTCString()}`;
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
};

// Get a cookie
const getCookie = (name) => {
  let nameEQ = name + "=";
  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

// Delete a cookie
const deleteCookie = (name) => {
  document.cookie = name + "=; Max-Age=-99999;";
};

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

  Body

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

document.cookie = `items=7; path=/; max-age=15; SameSite=Lax`;

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

  Popup Modal

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

// Get the modal




