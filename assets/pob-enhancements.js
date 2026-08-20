(function () {
  "use strict";

  var root = document.documentElement;
  var THEME_KEY = "pob-theme";
  var STORE_TOAST_KEY = "pob-store-toast-count";
  var messengerUrl = "https://m.me/Prooptibusiness";
  var emailAddress = "stevekhanh2404@gmail.com";
  var storeUrl = "/store/";

  function ensureStoreStyles() {
    if (document.querySelector('link[data-pob-store-global]')) return;
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "/assets/pob-store-global.css?v=20260820-1";
    link.setAttribute("data-pob-store-global", "");
    document.head.appendChild(link);
  }

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
      try { localStorage.setItem(THEME_KEY, theme); } catch (error) {}
    }
    var toggle = document.querySelector(".pob-theme-toggle");
    if (toggle) {
      var nextTheme = theme === "dark" ? "sáng" : "tối";
      toggle.setAttribute("aria-label", "Chuyển sang giao diện " + nextTheme);
      toggle.title = "Giao diện " + nextTheme;
    }
  }

  ensureStoreStyles();
  applyTheme(root.dataset.theme || preferredTheme(), false);

  function handleInsightAnchor(event) {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    var source = event.target instanceof Element ? event.target.closest('.article-index a[href^="#"]') : null;
    if (!source) return;
    var hash = source.getAttribute("href");
    if (!hash || hash.length < 2) return;
    var id;
    try { id = decodeURIComponent(hash.slice(1)); } catch (error) { id = hash.slice(1); }
    var target = document.getElementById(id);
    if (!target) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    window.history.replaceState(window.history.state, "", window.location.pathname + window.location.search + hash);
    target.scrollIntoView({behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start"});
  }
  document.addEventListener("click", handleInsightAnchor, true);

  function icon(name) {
    var icons = {
      moon: '<svg class="pob-icon-moon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 15.2A8.4 8.4 0 0 1 8.8 4 8.5 8.5 0 1 0 20 15.2Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
      sun: '<svg class="pob-icon-sun" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="3.5" stroke="currentColor" stroke-width="1.8"/><path d="M12 2.5v2M12 19.5v2M4.5 12h-2M21.5 12h-2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M18.7 5.3l-1.4 1.4M6.7 17.3l-1.4 1.4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
      up: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 19V5M6.5 10.5 12 5l5.5 5.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
      chat: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 11.4a7.6 7.6 0 0 1-8 7.6 9 9 0 0 1-3.2-.6L4 20l1.6-4.1A7.4 7.4 0 0 1 4 11.4a7.6 7.6 0 0 1 8-7.6 7.6 7.6 0 0 1 8 7.6Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M8.3 11.7h.1M12 11.7h.1M15.7 11.7h.1" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>',
      messenger: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M21 11.5c0 4.8-4 8.5-9 8.5-1 0-2-.2-2.9-.4L5 21.8l.7-3.9A8.1 8.1 0 0 1 3 11.5C3 6.7 7 3 12 3s9 3.7 9 8.5Z" fill="currentColor"/><path d="m7.2 14 3.1-3.3 2.1 1.7 4.4-2.5-3.1 3.3-2.1-1.7L7.2 14Z" fill="white"/></svg>',
      email: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="3" stroke="currentColor" stroke-width="1.8"/><path d="m5 8 7 5 7-5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
      store: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 9.5V20h16V9.5" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M3 4h18l-1.5 5.2a3 3 0 0 1-5.5.7 3 3 0 0 1-4 0 3 3 0 0 1-5.5-.7L3 4Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M9 20v-6h6v6" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>'
    };
    return icons[name] || "";
  }

  function scheduleStoreToast(toast) {
    if (!toast || window.location.pathname.indexOf("/store") === 0) return;
    var count = 0;
    try { count = parseInt(sessionStorage.getItem(STORE_TOAST_KEY) || "0", 10) || 0; } catch (error) {}
    if (count >= 2) return;
    var messages = [
      "Kế hoạch Content Marketing tổng thể — pillar, format, CTA và KPI trong một file.",
      "Marketing Master Plan 12 tháng — từ business goal đến budget và nhịp review.",
      "Kế hoạch quảng cáo đa kênh — Meta, Google, TikTok theo funnel và decision rule.",
      "Live Commerce Runbook — Run of Show, RACI, tech check, KPI và hậu kiểm.",
      "CRM Lead Pipeline & SLA — nhìn rõ lead đang ở đâu và ai phải xử lý tiếp."
    ];
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var index = Math.floor(Math.random() * messages.length);
    function showOnce() {
      var current = 0;
      try { current = parseInt(sessionStorage.getItem(STORE_TOAST_KEY) || "0", 10) || 0; } catch (error) {}
      if (current >= 2) return;
      var copy = toast.querySelector("[data-pob-store-toast-copy]");
      if (copy) copy.textContent = messages[index % messages.length];
      toast.hidden = false;
      window.requestAnimationFrame(function(){ toast.classList.add("is-visible"); });
      try { sessionStorage.setItem(STORE_TOAST_KEY, String(current + 1)); } catch (error) {}
      window.setTimeout(function(){
        toast.classList.remove("is-visible");
        window.setTimeout(function(){ toast.hidden = true; }, reduce ? 0 : 260);
      }, 4800);
      index += 1;
      if (current + 1 < 2) window.setTimeout(showOnce, 26000);
    }
    window.setTimeout(showOnce, reduce ? 8000 : 5600);
  }

  function buildFloatingTools() {
    if (document.querySelector(".pob-floating-tools")) return;
    var tools = document.createElement("aside");
    tools.className = "pob-floating-tools";
    tools.setAttribute("aria-label", "Tiện ích website");
    tools.innerHTML =
      '<a class="pob-store-toast" href="' + storeUrl + '" hidden><small>PoB Template Store</small><strong data-pob-store-toast-copy></strong><span>Xem →</span></a>' +
      '<button class="pob-float-button pob-back-to-top" type="button" aria-label="Trở về đầu trang" title="Trở về đầu trang">' + icon("up") + '</button>' +
      '<a class="pob-float-button pob-store-button" href="' + storeUrl + '" aria-label="Mở PoB Template Store" title="Template Store">' + icon("store") + '</a>' +
      '<button class="pob-float-button pob-theme-toggle" type="button">' + icon("moon") + icon("sun") + '</button>' +
      '<div class="pob-contact-panel" id="pob-contact-panel" hidden>' +
        '<div class="pob-contact-head"><strong>Chào bạn, PoB đây 👋</strong><small>Chọn kênh thuận tiện để trao đổi bài toán.</small></div>' +
        '<div class="pob-contact-actions">' +
          '<a class="pob-contact-action pob-contact-action-messenger" href="' + messengerUrl + '" target="_blank" rel="noreferrer">' + icon("messenger") + '<span><strong>Messenger</strong><small>Nhắn fanpage ProOptiBusiness</small></span><i aria-hidden="true">↗</i></a>' +
          '<a class="pob-contact-action pob-contact-action-email" href="mailto:' + emailAddress + '">' + icon("email") + '<span><strong>Email</strong><small>' + emailAddress + '</small></span><i aria-hidden="true">→</i></a>' +
        '</div>' +
      '</div>' +
      '<button class="pob-float-button pob-contact-toggle" type="button" aria-controls="pob-contact-panel" aria-expanded="false">' + icon("chat") + '<span>Liên hệ</span></button>';

    document.body.appendChild(tools);
    var backToTop = tools.querySelector(".pob-back-to-top");
    var themeToggle = tools.querySelector(".pob-theme-toggle");
    var contactToggle = tools.querySelector(".pob-contact-toggle");
    var panel = tools.querySelector(".pob-contact-panel");
    var toast = tools.querySelector(".pob-store-toast");
    applyTheme(root.dataset.theme || preferredTheme(), false);

    var scrollFrame = 0;
    function updateBackToTop() { backToTop.classList.toggle("is-visible", window.scrollY > Math.max(420, window.innerHeight * 0.65)); }
    window.addEventListener("scroll", function(){
      if (scrollFrame) return;
      scrollFrame = window.requestAnimationFrame(function(){ scrollFrame = 0; updateBackToTop(); });
    }, {passive:true});
    backToTop.addEventListener("click", function(){ window.scrollTo({top:0,behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"}); });
    updateBackToTop();
    themeToggle.addEventListener("click", function(){ applyTheme(root.dataset.theme === "dark" ? "light" : "dark", true); });

    function setPanel(open) {
      panel.hidden = !open;
      contactToggle.setAttribute("aria-expanded", String(open));
      contactToggle.setAttribute("aria-label", open ? "Đóng bảng liên hệ" : "Mở bảng liên hệ");
    }
    setPanel(false);
    contactToggle.addEventListener("click", function(){ setPanel(contactToggle.getAttribute("aria-expanded") !== "true"); });
    document.addEventListener("click", function(event){ if (!tools.contains(event.target)) setPanel(false); });
    document.addEventListener("keydown", function(event){ if(event.key === "Escape"){ setPanel(false); contactToggle.focus(); }});
    scheduleStoreToast(toast);
  }

  function insertAfter(reference, node) {
    if (!reference || !reference.parentNode) return;
    reference.parentNode.insertBefore(node, reference.nextSibling);
  }

  function buildBlogNavigation() {
    var desktopMenu = document.querySelector(".site-header nav details > div");
    var blogLink = desktopMenu && desktopMenu.querySelector('a[href="/blog"], a[href="/blog/"]');
    if (desktopMenu && !blogLink) {
      blogLink = document.createElement("a");
      blogLink.href = "/blog";
      blogLink.innerHTML = "<strong>Bài viết</strong><small>Marketing, AI, Growth &amp; Operations</small>";
      desktopMenu.insertBefore(blogLink, desktopMenu.firstChild);
    }
    if (desktopMenu && !desktopMenu.querySelector('a[href="/store"], a[href="/store/"]')) {
      var storeLink = document.createElement("a");
      storeLink.href = storeUrl;
      storeLink.innerHTML = "<strong>Template Store</strong><small>25 mẫu Plan, Content, Ads, Live &amp; Operations</small>";
      insertAfter(blogLink, storeLink);
    }
    if (desktopMenu && !desktopMenu.querySelector('a[href="/membership"], a[href="/membership/"]')) {
      var membershipLink = document.createElement("a");
      membershipLink.href = "/membership";
      membershipLink.innerHTML = "<strong>PoB Membership</strong><small>Hệ sinh thái học, làm và review</small>";
      desktopMenu.appendChild(membershipLink);
    }
    if (desktopMenu && !desktopMenu.querySelector('a[href="/elearning"], a[href="/elearning/"]')) {
      var elearningLink = document.createElement("a");
      elearningLink.href = "/elearning";
      elearningLink.innerHTML = "<strong>E-learning</strong><small>Bản mô phỏng không gian học trực tuyến</small>";
      desktopMenu.appendChild(elearningLink);
    }

    var mobileMenu = document.querySelector(".mobile-menu > div");
    var mobileBlog = mobileMenu && mobileMenu.querySelector('a[href="/blog"], a[href="/blog/"]');
    if (mobileMenu && !mobileBlog) {
      mobileBlog = document.createElement("a");
      mobileBlog.href = "/blog";
      mobileBlog.innerHTML = 'Bài viết <i aria-hidden="true">→</i>';
      mobileMenu.insertBefore(mobileBlog, mobileMenu.querySelector('a[href="/insights"]'));
    }
    if (mobileMenu && !mobileMenu.querySelector('a[href="/store"], a[href="/store/"]')) {
      var mobileStore = document.createElement("a");
      mobileStore.href = storeUrl;
      mobileStore.innerHTML = 'Template Store <i aria-hidden="true">→</i>';
      insertAfter(mobileBlog, mobileStore);
    }
    if (mobileMenu && !mobileMenu.querySelector('a[href="/membership"], a[href="/membership/"]')) {
      var mobileMembership = document.createElement("a");
      mobileMembership.href = "/membership";
      mobileMembership.innerHTML = 'PoB Membership <i aria-hidden="true">→</i>';
      mobileMenu.insertBefore(mobileMembership, mobileMenu.querySelector('a[href="/insights"]'));
    }
    if (mobileMenu && !mobileMenu.querySelector('a[href="/elearning"], a[href="/elearning/"]')) {
      var mobileElearning = document.createElement("a");
      mobileElearning.href = "/elearning";
      mobileElearning.innerHTML = 'E-learning <i aria-hidden="true">→</i>';
      mobileMenu.insertBefore(mobileElearning, mobileMenu.querySelector('a[href="/insights"]'));
    }

    var footerLinks = document.querySelector(".site-footer > div");
    var footerBlog = footerLinks && footerLinks.querySelector('a[href="/blog"], a[href="/blog/"]');
    if (footerLinks && !footerBlog) {
      footerBlog = document.createElement("a");
      footerBlog.href = "/blog";
      footerBlog.textContent = "Bài viết";
      footerLinks.insertBefore(footerBlog, footerLinks.querySelector('a[href="/insights"]'));
    }
    if (footerLinks && !footerLinks.querySelector('a[href="/store"], a[href="/store/"]')) {
      var footerStore = document.createElement("a");
      footerStore.href = storeUrl;
      footerStore.textContent = "Template Store";
      insertAfter(footerBlog, footerStore);
    }
    if (footerLinks && !footerLinks.querySelector('a[href="/membership"], a[href="/membership/"]')) {
      var footerMembership = document.createElement("a");
      footerMembership.href = "/membership";
      footerMembership.textContent = "Membership";
      footerLinks.insertBefore(footerMembership, footerLinks.querySelector('a[href="/insights"]'));
    }
    if (footerLinks && !footerLinks.querySelector('a[href="/elearning"], a[href="/elearning/"]')) {
      var footerElearning = document.createElement("a");
      footerElearning.href = "/elearning";
      footerElearning.textContent = "E-learning";
      footerLinks.insertBefore(footerElearning, footerLinks.querySelector('a[href="/insights"]'));
    }
  }

  function initializeEnhancements() {
    window.requestAnimationFrame(buildFloatingTools);
    window.setTimeout(buildBlogNavigation, 1200);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initializeEnhancements, {once:true});
  else initializeEnhancements();

  var colorPreference = window.matchMedia("(prefers-color-scheme: dark)");
  colorPreference.addEventListener && colorPreference.addEventListener("change", function(event){
    try { if (!localStorage.getItem(THEME_KEY)) applyTheme(event.matches ? "dark" : "light", false); } catch (error) {}
  });
})();
