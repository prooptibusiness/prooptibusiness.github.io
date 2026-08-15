---
layout: post
title: "Technical SEO checklist 2026: crawl, index và Core Web Vitals"
slug: technical-seo-checklist-2026
description: "Checklist Technical SEO 2026 từ status code, robots, sitemap, canonical, rendering, structured data đến LCP, INP, CLS và quy trình QA khi phát hành."
answer_summary: "Technical SEO 2026 bảo đảm URL có giá trị được khám phá, crawl, render, index và phục vụ nhanh, trong khi URL trùng hoặc riêng tư được kiểm soát. Checklist cốt lõi gồm kiến trúc/link crawlable, status code, robots, sitemap, canonical, rendering, metadata/schema, mobile, Core Web Vitals, log/Search Console và release monitoring."
target_query: "Technical SEO checklist 2026 gồm những gì?"
date: 2026-08-15T00:24:00+07:00
date_modified: 2026-08-15T00:24:00+07:00
category: content-seo
category_label: "Content & SEO"
tags: ["Technical SEO 2026","Core Web Vitals","Crawl Index","Canonical"]
image: /assets/blog/technical-seo-checklist-2026.webp
image_alt: "Minh họa technical seo checklist 2026: crawl, index và core web vitals"
author: Hoàng Nguyễn Quốc Khánh
author_role: Digital Performance Marketing & Growth Lead · Founder PoB
read_time: 13
featured: false
published: true
faq:
  - question: "robots.txt chặn URL có xóa URL khỏi Google không?"
    answer: "Không bảo đảm. Robots.txt ngăn crawl nhưng URL vẫn có thể được biết qua link; để kiểm soát index cần phương pháp phù hợp như noindex trên trang crawl được hoặc authentication cho nội dung riêng tư."
  - question: "Sitemap có giúp mọi URL được index không?"
    answer: "Không. Sitemap là tín hiệu giúp discovery, không bảo đảm crawl/index. Chỉ nên đưa URL canonical, indexable và có giá trị."
  - question: "Core Web Vitals ngưỡng tốt là bao nhiêu?"
    answer: "Google nêu LCP trong 2,5 giây, INP dưới 200 ms và CLS dưới 0,1 ở percentile 75 để được đánh giá tốt, xét riêng mobile/desktop."
  - question: "Canonical có phải chỉ thị bắt buộc không?"
    answer: "Canonical là tín hiệu. Google có thể chọn canonical khác nếu các tín hiệu mâu thuẫn; cần đồng bộ redirect, internal link, sitemap và rel=canonical."
---

## Technical SEO 2026 là gì?

**Technical SEO là công việc giúp công cụ tìm kiếm khám phá, truy cập, hiểu, lập chỉ mục và phục vụ đúng URL, đồng thời giữ website nhanh, an toàn và nhất quán.** Nó tạo điều kiện cho nội dung được tìm thấy; không bù được nội dung thiếu giá trị.

[Google Search — Crawling and indexing](https://developers.google.com/search/docs/crawling-indexing) tập hợp tài liệu về URL discovery, sitemap, robots, canonical, JavaScript, mobile và nhiều kiểm soát. Dùng tài liệu chính thức làm baseline vì behavior có thể đổi.

## Checklist 1 — Discovery và kiến trúc

- URL quan trọng có link HTML crawlable `<a href>`.
- Không có orphan page chỉ nằm trong sitemap.
- Click depth hợp lý theo tầm quan trọng.
- URL ổn định, mô tả, không tạo vô hạn parameter/filter.
- Breadcrumb và internal anchor có ngữ cảnh.
- Pagination/filter có chiến lược crawl/index riêng.

## Checklist 2 — Status code và redirect

- 200 Cho nội dung hợp lệ.
- 301/308 Cho di chuyển lâu dài; 302/307 cho tạm thời đúng nghĩa.
- Không redirect chain/loop.
- 404/410 Thật cho nội dung mất.
- Soft 404 không trả 200 với trang rỗng.
- Redirect old URL đến trang liên quan, không dồn mọi thứ về homepage.

[Google — Site moves with URL changes](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes) khuyến nghị mapping URL cũ sang URL mới liên quan và tránh redirect hàng loạt không phù hợp.

## Checklist 3 — robots, noindex và quyền truy cập

- Robots.txt không chặn asset cần render.
- Staging/admin/cart/search/filter được kiểm soát đúng.
- Noindex chỉ dùng trên trang crawler có thể đọc.
- Nội dung riêng tư dùng authentication, không dựa vào robots.txt.
- Kiểm tra rule theo user-agent và môi trường.

## Checklist 4 — Sitemap XML

[Google — Build and submit a sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap) quy định format/giới hạn và cách khai báo. Thực hành:

- Chỉ URL canonical, indexable, status 200;
- Dùng absolute URL cùng host/protocol;
- Lastmod phản ánh cập nhật đáng kể;
- Chia sitemap theo loại/nếu vượt giới hạn;
- Khai báo trong robots/Search Console;
- Monitor submitted vs indexed, không coi index gap luôn là lỗi kỹ thuật.

## Checklist 5 — Canonical và duplicate

- Self-canonical cho URL chính.
- Internal links và sitemap trỏ canonical.
- Redirect protocol/www/trailing slash nhất quán.
- Hreflang (nếu có) trỏ URL canonical và reciprocal.
- Parameter, print, sort, tracking không tạo duplicate indexable.
- Canonical không trỏ trang khác intent/ngôn ngữ.

## Checklist 6 — Rendering và JavaScript

- Nội dung/links quan trọng tồn tại sau render.
- Server/client error không để trang trắng.
- Title/meta/canonical không bị JS ghi đè sai.
- Lazy-loaded content kích hoạt bằng viewport đúng, không cần click.
- Blocked API/CORS/auth không phá bot render.
- Test URL Inspection/rendered HTML khi release lớn.

## Checklist 7 — Metadata và structured data

- Title/description riêng và đúng intent.
- H1 cùng ngôn ngữ với nội dung.
- Canonical, robots, OG/Twitter nhất quán.
- Structured data hợp lệ, phản ánh nội dung hiển thị.
- Author/dateModified/image đầy đủ cho article khi phù hợp.

Schema tăng khả năng hệ thống hiểu/đủ điều kiện cho feature, không bảo đảm hiển thị. Tuân [Google structured data policies](https://developers.google.com/search/docs/appearance/structured-data/sd-policies).

## Checklist 8 — Core Web Vitals và UX

[Google Core Web Vitals](https://developers.google.com/search/docs/appearance/core-web-vitals) nêu ngưỡng “good” ở percentile 75: **LCP ≤ 2,5 giây, INP < 200 ms, CLS < 0,1**, đánh giá riêng mobile/desktop.

- LCP: tối ưu server, preload đúng hero, kích thước ảnh, cache/CDN.
- INP: giảm long task, JS không cần, handler nặng.
- CLS: đặt width/height, reserve slot, font strategy.
- Ưu tiên field data; lab dùng chẩn đoán.
- Không bỏ accessibility/UX chỉ để đạt điểm tool.

## Checklist 9 — Monitoring và release QA

- Search Console indexing/CWV/security/manual actions.
- Sitemap errors và crawl stats.
- Log sampling cho bot/status nếu có.
- Alert 5xx, robots/canonical/noindex thay đổi.
- Regression test template trước deploy.
- Annotate migration/release trên dashboard.

## Kết luận

Technical SEO tốt là quản trị URL và trải nghiệm qua vòng đời. Làm sạch discovery, status, robots, sitemap và canonical trước; sau đó tối ưu rendering/CWV và đặt monitoring để lỗi release không tồn tại hàng tuần.

### Nguồn tham khảo chính

- [Google Search — Crawling and indexing](https://developers.google.com/search/docs/crawling-indexing)
- [Google Search — Build and submit a sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- [Google Search — Core Web Vitals](https://developers.google.com/search/docs/appearance/core-web-vitals)
- [Google Search — Structured data policies](https://developers.google.com/search/docs/appearance/structured-data/sd-policies)
