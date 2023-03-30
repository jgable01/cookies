/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

  API Assignment 2
  Joshua Gable


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

"use strict";
const modal = document.querySelector(".modal");
const modalSettings = document.querySelector(".modalSettings");
const acceptBtn = document.querySelector(".accept");
const settingsBtn = document.querySelector(".settings");
const toggleBrowser = document.querySelector(".browser");
const toggleOS = document.querySelector(".os");
const toggleSW = document.querySelector(".sw");
const toggleSH = document.querySelector(".sh");

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

  Utils

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

// Set a cookie
const setCookie = (name, value, seconds = {}) => {
  let expires = "";
  if (seconds) {
    const date = new Date();
    date.setTime(date.getTime() + seconds * 1000);
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

function getBrowser() {
  if (
    (navigator.userAgent.indexOf("Opera") ||
      navigator.userAgent.indexOf("OPR")) != -1
  ) {
    return "Opera";
  } else if (navigator.userAgent.indexOf("Edg") != -1) {
    return "Edge";
  } else if (navigator.userAgent.indexOf("Chrome") != -1) {
    return "Chrome";
  } else if (navigator.userAgent.indexOf("Safari") != -1) {
    return "Safari";
  } else if (navigator.userAgent.indexOf("Firefox") != -1) {
    return "Firefox";
  } else if (
    navigator.userAgent.indexOf("MSIE") != -1 || //checking browser mode to determine IE version
    !!document.documentMode == true
  ) {
    //IF IE > 10
    return "IE";
  } else {
    return "Unknown";
  }
}

function getOS() {
  let OSName = "Unknown";
  if (window.navigator.userAgent.indexOf("Windows NT 10.0") != -1) {
    OSName = "Windows 10";
  }
  if (window.navigator.userAgent.indexOf("Windows NT 6.3") != -1) {
    OSName = "Windows 8.1";
  }
  if (window.navigator.userAgent.indexOf("Windows NT 6.2") != -1) {
    OSName = "Windows 8";
  }
  if (window.navigator.userAgent.indexOf("Windows NT 6.1") != -1) {
    OSName = "Windows 7";
  }
  if (window.navigator.userAgent.indexOf("Windows NT 6.0") != -1) {
    OSName = "Windows Vista";
  }
  if (window.navigator.userAgent.indexOf("Windows NT 5.1") != -1) {
    OSName = "Windows XP";
  }
  if (window.navigator.userAgent.indexOf("Windows NT 5.0") != -1) {
    OSName = "Windows 2000";
  }
  if (window.navigator.userAgent.indexOf("Mac") != -1) {
    OSName = "Mac/iOS";
  }
  if (window.navigator.userAgent.indexOf("X11") != -1) {
    OSName = "UNIX";
  }
  if (window.navigator.userAgent.indexOf("Linux") != -1) {
    OSName = "Linux";
  }
  return OSName;
}

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

  Popup Modal

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

function displayModal() {
  if (
    getCookie("browser") ||
    getCookie("operatingSystem") ||
    getCookie("ScreenWidth") ||
    getCookie("ScreenHeight") ||
    getCookie("enabled")
  ) {
    console.log("Cookies are present");
  displayCookies();
  } else {
    console.log("no cookies");
    modal.classList.remove("hide");
  }
}
setTimeout(() => {
  displayModal();
}, 1500);

function acceptCookies() {
  setCookie("browser", getBrowser(), 15);
  setCookie("operatingSystem", getOS(), 15);
  setCookie("ScreenWidth", window.screen.availWidth, 15);
  setCookie("ScreenHeight", window.screen.availHeight, 15);
  displayCookies();
  modal.classList.add("hide");
}

function openSettings() {
  modal.classList.add("hide");
  modalSettings.classList.remove("hide");
}

function savePref() {
  modalSettings.classList.add("hide");
  enabledCookies();
  displayCookies();
}

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

  Functions

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

function displayCookies() {
  if(getCookie('browser') !== null) {
    console.log(`Browser: ${getCookie('browser')}`);
  }
  if(getCookie('operatingSystem') !== null) {
    console.log(`OS: ${getCookie('operatingSystem')}`);
  }
  if(getCookie('ScreenWidth') !== null) {
    console.log(`SW: ${getCookie('ScreenWidth')}`);
  }
  if(getCookie('ScreenHeight') !== null) {
    console.log(`SH: ${getCookie('ScreenHeight')}`);
  }
  if(getCookie('enabled') !== null) {
    console.log(`Enabled: ${getCookie('enabled')}`);
  }
}

function enabledCookies() {
  toggleBrowser.checked
    ? setCookie("browser", getBrowser(), 15)
    : deleteCookie("browser");
  toggleOS.checked
    ? setCookie("operatingSystem", getOS(), 15)
    : deleteCookie("operatingSystem");
  toggleSW.checked
    ? setCookie("ScreenWidth", window.screen.availWidth, 15)
    : deleteCookie("ScreenWidth");
  toggleSH.checked
    ? setCookie("ScreenHeight", window.screen.availHeight, 15)
    : deleteCookie("ScreenHeight");
  if (
    !toggleBrowser.checked &&
    !toggleOS.checked &&
    !toggleSW.checked &&
    !toggleSH.checked
  ) {
    setCookie("enabled", "false", 15);
  }
}


