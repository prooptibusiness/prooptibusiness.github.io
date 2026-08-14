(function () {
  "use strict";

  function buildArticleDock() {
    if (document.querySelector(".pob-article-dock")) return;

    var bookIcon = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v16H6.5A2.5 2.5 0 0 0 4 21.5v-16ZM20 5.5A2.5 2.5 0 0 0 17.5 3H13v16h4.5a2.5 2.5 0 0 1 2.5 2.5v-16Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>';
    var dock = document.createElement("aside");
    dock.className = "pob-article-dock";
    dock.setAttribute("aria-label", "Bài viết mới từ ProOptiBusiness");
    dock.innerHTML =
      '<div class="pob-article-panel" id="pob-article-panel" hidden>' +
        '<div class="pob-article-panel-head"><div><span>POB AI BRIEFING</span><strong>Bài mới để đọc tiếp</strong></div><a href="/blog/">Xem tất cả →</a></div>' +
        '<div class="pob-article-list" aria-live="polite"><a href="/blog/"><small>THƯ VIỆN POB</small><strong>Khám phá bài viết Marketing, AI và Growth</strong><span>Vào chuyên mục →</span></a></div>' +
      '</div>' +
      '<button class="pob-article-toggle" type="button" aria-controls="pob-article-panel" aria-expanded="false">' +
        '<span class="pob-article-toggle-icon">' + bookIcon + '</span>' +
        '<span class="pob-article-toggle-copy"><small>BÀI AI MỚI</small><strong>Đọc briefing mới nhất</strong></span>' +
        '<i aria-hidden="true">↑</i>' +
      '</button>';
    document.body.appendChild(dock);

    var toggle = dock.querySelector(".pob-article-toggle");
    var panel = dock.querySelector(".pob-article-panel");
    var list = dock.querySelector(".pob-article-list");
    var toggleTitle = dock.querySelector(".pob-article-toggle-copy strong");

    function setPanel(open) {
      panel.hidden = !open;
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Đóng danh sách bài viết mới" : "Mở danh sách bài viết mới");
    }

    setPanel(false);
    toggle.addEventListener("click", function () {
      setPanel(toggle.getAttribute("aria-expanded") !== "true");
    });

    document.addEventListener("click", function (event) {
      if (!dock.contains(event.target)) setPanel(false);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setPanel(false);
        toggle.focus();
      }
    });

    window.fetch("/blog/posts.json", { headers: { "Accept": "application/json" } })
      .then(function (response) {
        if (!response.ok) throw new Error("Không tải được danh sách bài viết");
        return response.json();
      })
      .then(function (posts) {
        if (!Array.isArray(posts) || !posts.length) return;
        list.textContent = "";
        posts.slice(0, 5).forEach(function (post, index) {
          var link = document.createElement("a");
          var meta = document.createElement("small");
          var title = document.createElement("strong");
          var action = document.createElement("span");
          link.href = post.url || "/blog/";
          meta.textContent = (post.category || "BÀI VIẾT") + (post.readTime ? " · " + post.readTime + " phút" : "");
          title.textContent = post.title || "Bài viết mới từ PoB";
          action.textContent = "Đọc bài →";
          link.appendChild(meta);
          link.appendChild(title);
          link.appendChild(action);
          list.appendChild(link);
          if (index === 0) toggleTitle.textContent = post.title;
        });
      })
      .catch(function () {
        toggleTitle.textContent = "Mở thư viện bài viết";
      });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", buildArticleDock, { once: true });
  } else {
    window.requestAnimationFrame(buildArticleDock);
  }
})();
