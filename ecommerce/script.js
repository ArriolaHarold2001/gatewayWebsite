"use strict";

const primaryNav = document.querySelector(".nav-section_spacer");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", function () {
  const visibility = primaryNav.getAttribute("data-visible");
  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
  } else {
    primaryNav.setAttribute("data-visible", false);
  }
});
