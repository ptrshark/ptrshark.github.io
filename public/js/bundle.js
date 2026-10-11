(() => {
  // <stdin>
  (function() {
    "use strict";
    window.addEventListener("DOMContentLoaded", () => {
      const menu = document.getElementById("nav-dropdown-menu");
      const menu_btn = document.getElementById("nav-dropdown-button");
      menu_btn.addEventListener("click", (e) => {
        e.preventDefault();
        menu.classList.toggle("hidden");
      });
      var toggle_side_pane = (e) => {
        e.preventDefault();
        aside.classList.toggle("shown");
        overlay.classList.toggle("shown");
        aside_btn.classList.toggle("hidden");
      };
      var hide_side_pane = (e) => {
        aside.classList.remove("shown");
        overlay.classList.remove("shown");
        aside_btn.classList.remove("hidden");
      };
      const aside = document.getElementById("side-pane");
      const overlay = document.getElementById("aside-overlay");
      const aside_btn = document.getElementById("aside-toggle-button");
      aside_btn.addEventListener("click", toggle_side_pane);
      overlay.addEventListener("click", toggle_side_pane);
      window.addEventListener("hashchange", hide_side_pane);
    });
  })();
  (function() {
    "use strict";
    const getCachedTheme = () => {
      const cachedTheme = localStorage.getItem("color-scheme");
      const preferDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      return cachedTheme || (preferDark ? "dark" : "light");
    };
    document.documentElement.setAttribute("color-scheme", getCachedTheme());
    window.addEventListener("DOMContentLoaded", () => {
      requestAnimationFrame(() => document.body.classList.remove("notransition"));
      document.getElementById("theme-switcher").addEventListener("click", (e) => {
        e.preventDefault();
        const state = getCachedTheme() === "light" ? "dark" : "light";
        document.documentElement.setAttribute("color-scheme", state);
        localStorage.setItem("color-scheme", state);
      });
    });
  })();
})();
