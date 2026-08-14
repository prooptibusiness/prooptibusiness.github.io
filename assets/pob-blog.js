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

  function initializeBlog() {
    setupBlogFilters();
    setupShareButton();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeBlog, { once: true });
  } else {
    initializeBlog();
  }
})();
