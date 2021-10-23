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