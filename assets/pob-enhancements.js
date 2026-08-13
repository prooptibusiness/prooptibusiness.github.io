(function () {
  "use strict";

  var root = document.documentElement;
  var THEME_KEY = "pob-theme";
  var messengerUrl = "https://m.me/Prooptibusiness";
  var emailAddress = "stevekhanh2404@gmail.com";

  function preferredTheme() {
    try {
      var saved = localStorage.getItem(THEME_KEY);
      if (saved === "light" || saved === "dark") return saved;
    } catch (error) {}
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function updateThemeColor(theme) {
    var meta = document.querySelector('meta[name="theme-color"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "theme-color";
      document.head.appendChild(meta);
    }
    meta.content = theme === "dark" ? "#0b0d19" : "#f7f6fc";
  }

  function applyTheme(theme, persist) {
    root.dataset.theme = theme;
    root.style.colorScheme = theme;
    updateThemeColor(theme);
    if (persist) {
      try {
        localStorage.setItem(THEME_KEY, theme);
      } catch (error) {}
    }

    var toggle = document.querySelector(".pob-theme-toggle");
    if (toggle) {
      var nextTheme = theme === "dark" ? "sáng" : "tối";
      toggle.setAttribute("aria-label", "Chuyển sang giao diện " + nextTheme);
      toggle.title = "Giao diện " + nextTheme;
    }
  }

  applyTheme(root.dataset.theme || preferredTheme(), false);

  function handleInsightAnchor(event) {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) return;

    var source = event.target instanceof Element ? event.target.closest('.article-index a[href^="#"]') : null;
    if (!source) return;

    var hash = source.getAttribute("href");
    if (!hash || hash.length < 2) return;

    var id;
    try {
      id = decodeURIComponent(hash.slice(1));
    } catch (error) {
      id = hash.slice(1);
    }

    var target = document.getElementById(id);
    if (!target) return;

    event.preventDefault();
    event.stopImmediatePropagation();

    var nextUrl = window.location.pathname + window.location.search + hash;
    window.history.replaceState(window.history.state, "", nextUrl);
    target.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      block: "start"
    });
  }

  document.addEventListener("click", handleInsightAnchor, true);

  function icon(name) {
    var icons = {
      moon: '<svg class="pob-icon-moon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 15.2A8.4 8.4 0 0 1 8.8 4 8.5 8.5 0 1 0 20 15.2Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
      sun: '<svg class="pob-icon-sun" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="3.5" stroke="currentColor" stroke-width="1.8"/><path d="M12 2.5v2M12 19.5v2M4.5 12h-2M21.5 12h-2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M18.7 5.3l-1.4 1.4M6.7 17.3l-1.4 1.4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
      chat: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 11.4a7.6 7.6 0 0 1-8 7.6 9 9 0 0 1-3.2-.6L4 20l1.6-4.1A7.4 7.4 0 0 1 4 11.4a7.6 7.6 0 0 1 8-7.6 7.6 7.6 0 0 1 8 7.6Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M8.3 11.7h.1M12 11.7h.1M15.7 11.7h.1" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>',
      messenger: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M21 11.5c0 4.8-4 8.5-9 8.5-1 0-2-.2-2.9-.4L5 21.8l.7-3.9A8.1 8.1 0 0 1 3 11.5C3 6.7 7 3 12 3s9 3.7 9 8.5Z" fill="currentColor"/><path d="m7.2 14 3.1-3.3 2.1 1.7 4.4-2.5-3.1 3.3-2.1-1.7L7.2 14Z" fill="white"/></svg>',
      email: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="3" stroke="currentColor" stroke-width="1.8"/><path d="m5 8 7 5 7-5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>'
    };
    return icons[name] || "";
  }

  function buildFloatingTools() {
    if (document.querySelector(".pob-floating-tools")) return;

    var tools = document.createElement("aside");
    tools.className = "pob-floating-tools";
    tools.setAttribute("aria-label", "Tiện ích website");
    tools.innerHTML =
      '<button class="pob-float-button pob-theme-toggle" type="button">' + icon("moon") + icon("sun") + '</button>' +
      '<div class="pob-contact-panel" id="pob-contact-panel" hidden>' +
        '<div class="pob-contact-head"><strong>Chào bạn, PoB đây 👋</strong><small>Chọn kênh thuận tiện để trao đổi bài toán.</small></div>' +
        '<div class="pob-contact-actions">' +
          '<a class="pob-contact-action pob-contact-action-messenger" href="' + messengerUrl + '" target="_blank" rel="noreferrer">' +
            icon("messenger") + '<span><strong>Messenger</strong><small>Nhắn fanpage ProOptiBusiness</small></span><i aria-hidden="true">↗</i>' +
          '</a>' +
          '<a class="pob-contact-action pob-contact-action-email" href="mailto:' + emailAddress + '">' +
            icon("email") + '<span><strong>Email</strong><small>' + emailAddress + '</small></span><i aria-hidden="true">→</i>' +
          '</a>' +
        '</div>' +
      '</div>' +
      '<button class="pob-float-button pob-contact-toggle" type="button" aria-controls="pob-contact-panel" aria-expanded="false">' +
        icon("chat") + '<span>Liên hệ</span>' +
      '</button>';

    document.body.appendChild(tools);

    var themeToggle = tools.querySelector(".pob-theme-toggle");
    var contactToggle = tools.querySelector(".pob-contact-toggle");
    var panel = tools.querySelector(".pob-contact-panel");

    applyTheme(root.dataset.theme || preferredTheme(), false);

    themeToggle.addEventListener("click", function () {
      applyTheme(root.dataset.theme === "dark" ? "light" : "dark", true);
    });

    function setPanel(open) {
      panel.hidden = !open;
      contactToggle.setAttribute("aria-expanded", String(open));
      contactToggle.setAttribute("aria-label", open ? "Đóng bảng liên hệ" : "Mở bảng liên hệ");
    }

    setPanel(false);
    contactToggle.addEventListener("click", function () {
      setPanel(contactToggle.getAttribute("aria-expanded") !== "true");
    });

    document.addEventListener("click", function (event) {
      if (!tools.contains(event.target)) setPanel(false);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        setPanel(false);
        contactToggle.focus();
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      window.requestAnimationFrame(buildFloatingTools);
    }, { once: true });
  } else {
    window.requestAnimationFrame(buildFloatingTools);
  }

  var colorPreference = window.matchMedia("(prefers-color-scheme: dark)");
  colorPreference.addEventListener && colorPreference.addEventListener("change", function (event) {
    try {
      if (!localStorage.getItem(THEME_KEY)) applyTheme(event.matches ? "dark" : "light", false);
    } catch (error) {}
  });
})();
