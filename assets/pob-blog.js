(function () {
  "use strict";

  function setupBlogFilters() {
    var grid = document.querySelector("[data-blog-grid]");
    if (!grid) return;

    var cards = Array.prototype.slice.call(grid.querySelectorAll("[data-blog-card]"));
    var input = document.querySelector("[data-blog-search]");
    var buttons = Array.prototype.slice.call(document.querySelectorAll("[data-blog-filter]"));
    var empty = document.querySelector("[data-blog-empty]");
    var activeCategory = "all";

    function normalize(value) {
      return String(value || "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim();
    }

    function update() {
      var query = normalize(input ? input.value : "");
      var visible = 0;

      cards.forEach(function (card) {
        var categoryMatch = activeCategory === "all" || card.getAttribute("data-category") === activeCategory;
        var searchMatch = !query || normalize(card.getAttribute("data-search")).indexOf(query) !== -1;
        var show = categoryMatch && searchMatch;
        card.hidden = !show;
        if (show) visible += 1;
      });

      if (empty) empty.hidden = visible !== 0;
    }

    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        activeCategory = button.getAttribute("data-blog-filter") || "all";
        buttons.forEach(function (item) {
          item.classList.toggle("active", item === button);
        });
        update();
      });
    });

    if (input) input.addEventListener("input", update);
    update();
  }

  function setupShareButton() {
    var button = document.querySelector(".post-share-button");
    if (!button) return;

    button.addEventListener("click", function () {
      var title = button.getAttribute("data-share-title") || document.title;
      var url = button.getAttribute("data-share-url") || window.location.href;

      if (navigator.share) {
        navigator.share({ title: title, url: url }).catch(function () {});
        return;
      }

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).then(function () {
          var original = button.firstChild ? button.firstChild.nodeValue : "Chia sẻ bài viết ";
          if (button.firstChild) button.firstChild.nodeValue = "Đã sao chép link ";
          window.setTimeout(function () {
            if (button.firstChild) button.firstChild.nodeValue = original;
          }, 1800);
        }).catch(function () {});
      }
    });
  }

  function slugifyHeading(value) {
    return String(value || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .replace(/Đ/g, "D")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "muc-bai-viet";
  }

  function setupTableOfContents() {
    var article = document.querySelector(".post-content");
    if (!article) return;

    var headings = Array.prototype.slice.call(article.querySelectorAll("h2, h3"));
    var lists = Array.prototype.slice.call(document.querySelectorAll("[data-post-toc-list]"));
    var desktopToc = document.querySelector(".post-toc");
    var mobileToc = document.querySelector(".post-toc-mobile");

    if (headings.length < 2) {
      if (desktopToc) desktopToc.hidden = true;
      if (mobileToc) mobileToc.hidden = true;
      return;
    }

    var used = {};
    headings.forEach(function (heading) {
      var base = heading.id || slugifyHeading(heading.textContent);
      var id = base;
      var number = 2;
      while (used[id] || (document.getElementById(id) && document.getElementById(id) !== heading)) {
        id = base + "-" + number;
        number += 1;
      }
      used[id] = true;
      heading.id = id;
    });

    lists.forEach(function (list) {
      headings.forEach(function (heading) {
        var item = document.createElement("li");
        var link = document.createElement("a");
        item.className = heading.tagName === "H3" ? "toc-level-3" : "toc-level-2";
        link.href = "#" + heading.id;
        link.textContent = heading.textContent;
        link.setAttribute("data-toc-target", heading.id);
        item.appendChild(link);
        list.appendChild(item);
      });
    });

    var tocLinks = Array.prototype.slice.call(document.querySelectorAll("[data-toc-target]"));
    function setActive(id) {
      tocLinks.forEach(function (link) {
        var active = link.getAttribute("data-toc-target") === id;
        link.classList.toggle("is-active", active);
        if (active) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    }

    tocLinks.forEach(function (link) {
      link.addEventListener("click", function (event) {
        var target = document.getElementById(link.getAttribute("data-toc-target"));
        if (!target) return;
        event.preventDefault();
        window.history.pushState(null, "", "#" + target.id);
        target.scrollIntoView({
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
          block: "start"
        });
        setActive(target.id);
        if (mobileToc) mobileToc.open = false;
      });
    });

    var ticking = false;
    function updateActiveHeading() {
      var current = headings[0];
      var marker = Math.min(window.innerHeight * 0.32, 190);
      headings.forEach(function (heading) {
        if (heading.getBoundingClientRect().top <= marker) current = heading;
      });
      setActive(current.id);
      ticking = false;
    }

    window.addEventListener("scroll", function () {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(updateActiveHeading);
      }
    }, { passive: true });
    updateActiveHeading();
  }

  function initializeBlog() {
    setupBlogFilters();
    setupShareButton();
    setupTableOfContents();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeBlog, { once: true });
  } else {
    initializeBlog();
  }
})();
