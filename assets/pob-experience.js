(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function initReveal() {
    var items = document.querySelectorAll("[data-reveal]");
    if (!items.length) return;

    if (!("IntersectionObserver" in window) || reduceMotion) {
      items.forEach(function (item) { item.classList.add("is-visible"); });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px" });

    items.forEach(function (item) { observer.observe(item); });
  }

  function initSystemMap() {
    var nodes = Array.from(document.querySelectorAll("[data-system-node]"));
    var detail = document.querySelector("[data-system-detail]");
    if (!nodes.length || !detail) return;

    var content = {
      strategy: {
        title: "Chiến lược & điều phối",
        body: "Growth map, mục tiêu, phân khúc, offer và backlog ưu tiên giúp cả đội biết điều gì cần làm trước — và điều gì chưa nên làm."
      },
      content: {
        title: "Nội dung & phân phối",
        body: "Brand context, content pillars, brief, lịch nội dung và checklist biên tập biến AI thành trợ lý có tiêu chuẩn thay vì máy viết đại trà."
      },
      performance: {
        title: "Quảng cáo & thử nghiệm",
        body: "Media plan, tracking, creative hypothesis và testing log nối dữ liệu từ Meta, TikTok, Google, Shopee và Zalo với quyết định ngân sách."
      },
      live: {
        title: "Live Commerce Operations",
        body: "Scene map, run of show, phân vai, offer, checklist kỹ thuật và dashboard hậu kiểm giúp mỗi phiên live là một vòng học có thể cải thiện."
      },
      ops: {
        title: "Analytics & Marketing Operations",
        body: "Dashboard, owner, cadence, decision rule, SOP và knowledge base giữ hệ thống chạy được ngay cả khi Founder không đứng giữa từng việc."
      }
    };

    nodes.forEach(function (node) {
      node.addEventListener("click", function () {
        var key = node.getAttribute("data-system-node");
        var item = content[key];
        if (!item) return;
        nodes.forEach(function (candidate) {
          candidate.classList.toggle("is-active", candidate === node);
          candidate.setAttribute("aria-pressed", String(candidate === node));
        });
        detail.querySelector("strong").textContent = item.title;
        detail.querySelector("p").textContent = item.body;
      });
    });
  }

  function initServiceSwitcher() {
    var root = document.querySelector("[data-service-switcher]");
    if (!root) return;
    var tabs = Array.from(root.querySelectorAll("[data-service-tab]"));
    var panels = Array.from(root.querySelectorAll("[data-service-panel]"));

    function activate(key, focus) {
      tabs.forEach(function (tab) {
        var active = tab.getAttribute("data-service-tab") === key;
        tab.classList.toggle("is-active", active);
        tab.setAttribute("aria-selected", String(active));
        tab.tabIndex = active ? 0 : -1;
        if (active && focus) tab.focus();
      });
      panels.forEach(function (panel) {
        var active = panel.getAttribute("data-service-panel") === key;
        panel.classList.toggle("is-active", active);
        panel.hidden = !active;
      });
    }

    tabs.forEach(function (tab, index) {
      tab.addEventListener("click", function () {
        activate(tab.getAttribute("data-service-tab"), false);
      });
      tab.addEventListener("keydown", function (event) {
        if (event.key !== "ArrowDown" && event.key !== "ArrowUp" && event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
        event.preventDefault();
        var direction = event.key === "ArrowDown" || event.key === "ArrowRight" ? 1 : -1;
        var next = (index + direction + tabs.length) % tabs.length;
        activate(tabs[next].getAttribute("data-service-tab"), true);
      });
    });

    if (tabs[0]) activate(tabs[0].getAttribute("data-service-tab"), false);
  }

  function initServicePageTabs() {
    var tablist = document.querySelector("[data-page-tabs]");
    if (!tablist) return;
    var tabs = Array.from(tablist.querySelectorAll("[data-page-tab]"));
    var panels = Array.from(document.querySelectorAll("[data-page-panel]"));

    function activate(key, updateUrl, focus) {
      var found = false;
      tabs.forEach(function (tab) {
        var active = tab.getAttribute("data-page-tab") === key;
        if (active) found = true;
        tab.classList.toggle("is-active", active);
        tab.setAttribute("aria-selected", String(active));
        tab.tabIndex = active ? 0 : -1;
        if (active && focus) tab.focus();
      });
      if (!found) return false;
      panels.forEach(function (panel) {
        var active = panel.getAttribute("data-page-panel") === key;
        panel.classList.toggle("is-active", active);
        panel.hidden = !active;
      });
      if (updateUrl) window.history.replaceState(window.history.state, "", "#" + key);
      return true;
    }

    tabs.forEach(function (tab, index) {
      tab.addEventListener("click", function () {
        activate(tab.getAttribute("data-page-tab"), true, false);
        window.scrollTo({ top: tablist.offsetTop - 90, behavior: reduceMotion ? "auto" : "smooth" });
      });
      tab.addEventListener("keydown", function (event) {
        if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
        event.preventDefault();
        var next = (index + (event.key === "ArrowRight" ? 1 : -1) + tabs.length) % tabs.length;
        activate(tabs[next].getAttribute("data-page-tab"), true, true);
      });
    });

    var initial = window.location.hash.slice(1);
    if (!activate(initial, false, false) && tabs[0]) activate(tabs[0].getAttribute("data-page-tab"), false, false);

    window.addEventListener("hashchange", function () {
      activate(window.location.hash.slice(1), false, false);
    });
  }

  function initVoiceCarousel() {
    var track = document.querySelector("[data-voice-track]");
    if (!track) return;
    var previous = document.querySelector("[data-voice-prev]");
    var next = document.querySelector("[data-voice-next]");
    var cards = track.querySelectorAll(".xp-voice-card");
    var step = function () {
      var card = cards[0];
      return card ? card.getBoundingClientRect().width + 14 : 320;
    };

    if (previous) previous.addEventListener("click", function () {
      track.scrollBy({ left: -step(), behavior: reduceMotion ? "auto" : "smooth" });
    });
    if (next) next.addEventListener("click", function () {
      var nearEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - step() * 0.5;
      track.scrollTo({ left: nearEnd ? 0 : track.scrollLeft + step(), behavior: reduceMotion ? "auto" : "smooth" });
    });

    if (!reduceMotion && cards.length > 2) {
      var timer = window.setInterval(function () {
        if (document.hidden || track.matches(":hover")) return;
        var nearEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - step() * 0.5;
        track.scrollTo({ left: nearEnd ? 0 : track.scrollLeft + step(), behavior: "smooth" });
      }, 5200);
      window.addEventListener("pagehide", function () { window.clearInterval(timer); }, { once: true });
    }
  }

  function initElearningDemo() {
    var buttons = Array.from(document.querySelectorAll("[data-lesson-title]"));
    var title = document.querySelector("[data-current-lesson]");
    var module = document.querySelector("[data-current-module]");
    var duration = document.querySelector("[data-current-duration]");
    var outcome = document.querySelector("[data-current-outcome]");
    if (!buttons.length || !title) return;

    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        buttons.forEach(function (candidate) { candidate.classList.toggle("is-active", candidate === button); });
        title.textContent = button.getAttribute("data-lesson-title") || "Bài học";
        if (module) module.textContent = button.getAttribute("data-module") || "Module";
        if (duration) duration.textContent = button.getAttribute("data-duration") || "—";
        if (outcome) outcome.textContent = button.getAttribute("data-outcome") || "Đầu ra thực hành";
      });
    });
  }

  function closeMenusOnNavigate() {
    document.addEventListener("click", function (event) {
      var link = event.target instanceof Element ? event.target.closest(".mobile-menu a, .site-header nav details a") : null;
      if (!link) return;
      document.querySelectorAll(".site-header details[open]").forEach(function (details) {
        details.removeAttribute("open");
      });
    });
  }

  function init() {
    initReveal();
    initSystemMap();
    initServiceSwitcher();
    initServicePageTabs();
    initVoiceCarousel();
    initElearningDemo();
    closeMenusOnNavigate();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
