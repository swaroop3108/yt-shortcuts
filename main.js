//? ik there is a better way to this but dont judge me 😏 i like to do work that i dont have to

"use strict";
!(function () {

  document.addEventListener("DOMContentLoaded", () => {
    fetch(`${window.location.href}`).then(e => {
      return document.innerHTML = e.text()
    })
  })

  window.addEventListener("keyup", function (e) {
    if (e.altKey) {
      if (e.key.toLocaleLowerCase() === "x") {
        const BASE_KEY = "#top-level-buttons-computed > ytd-toggle-button-renderer:nth-child(1) > a"
        const con = document.querySelector(BASE_KEY) !== undefined || document.querySelector(BASE_KEY) !== null

        if (con) {
          document.querySelector(BASE_KEY).click()

          e.stopPropagation()
          fetch(`${window.location.href}`).then(e => {
            return document.innerHTML = e.text()
          })
        }
      }
      if (e.key.toLocaleLowerCase() === "z") {
        const con = document.querySelector("#top-level-buttons-computed > ytd-toggle-button-renderer:nth-child(2) > a") !== undefined || document.querySelector("#top-level-buttons-computed > ytd-toggle-button-renderer:nth-child(2) > a") !== null

        if (con) {
          document.querySelector("#top-level-buttons-computed > ytd-toggle-button-renderer:nth-child(2) > a").click()
        }
      }
      if (e.key.toLocaleLowerCase() === "s") {
        const con = document.querySelector("#top-level-buttons-computed > ytd-button-renderer:nth-child(3) > a") !== undefined || document.querySelector("#top-level-buttons-computed > ytd-button-renderer:nth-child(3) > a") !== null

        if (con) {
          document.querySelector("#top-level-buttons-computed > ytd-button-renderer:nth-child(3) > a").click()
        }
      }
      if (e.key.toLocaleLowerCase() === "c") {
        const con = document.querySelector("#text-container.style-scope.ytd-channel-name > yt-formatted-string > a") !== undefined || document.querySelector("#text-container.style-scope.ytd-channel-name > yt-formatted-string > a") !== null

        if (con) {
          document.querySelector("#text-container.style-scope.ytd-channel-name > yt-formatted-string > a").click()
        }
      }
      if (e.key.toLocaleLowerCase() === "r") {
        location.reload()
      }
    }
  })

})();

/*
<button id="button" class="style-scope yt-icon-button" aria-label="like this video along with 276,835 other people" aria-pressed="false"><yt-icon class="style-scope ytd-toggle-button-renderer"><svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon"><path d="M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11H3v10h4h1h9.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z M7,20H4v-8h3V20z M19.98,13.17l-1.34,6 C18.54,19.65,18.03,20,17.43,20H8v-8.61l5.6-6.06C13.79,5.12,14.08,5,14.38,5c0.26,0,0.5,0.11,0.63,0.3 c0.07,0.1,0.15,0.26,0.09,0.47l-1.52,4.94L13.18,12h1.35h4.23c0.41,0,0.8,0.17,1.03,0.46C19.92,12.61,20.05,12.86,19.98,13.17z" class="style-scope yt-icon"></path></g></svg><!--css-build:shady--></yt-icon></button>
*/