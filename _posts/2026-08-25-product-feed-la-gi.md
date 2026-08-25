---
layout: post
title: "Product Feed là gì? Cách chuẩn hóa dữ liệu sản phẩm cho Shopping và Dynamic Ads"
slug: product-feed-la-gi
description: "Product Feed là gì, cấu trúc ID, title, price, availability, image, product type và cách QA dữ liệu để Shopping, Performance Max và Dynamic Ads hoạt động ổn định."
answer_summary: "Product Feed là tập dữ liệu có cấu trúc mô tả sản phẩm bằng các thuộc tính như ID, title, price, availability, image, link và category để nền tảng quảng cáo hoặc commerce hiểu và phân phối đúng sản phẩm. Feed tốt không chỉ 'đủ field' mà phải đồng bộ với website, event tracking, stock và nội dung sản phẩm để giảm lỗi và tăng khả năng match."
target_query: "Product Feed là gì?"
date: 2026-08-25T12:14:00+07:00
date_modified: 2026-08-25T12:14:00+07:00
category: performance
category_label: "Performance"
tags: ["Product Feed","Google Merchant Center","Shopping Ads","Dynamic Ads","E-commerce"]
image: /assets/blog/product-feed-2026.svg
image_alt: "Minh họa 2D Product Feed với ID, title, price, stock, image và các kênh Shopping Dynamic Ads"
author: Hoàng Nguyễn Quốc Khánh
author_role: Digital Performance Marketing & Growth Lead · Founder PoB
read_time: 12
featured: false
published: true
faq:
  - question: "Product Feed có phải file Excel không?"
    answer: "Không nhất thiết. Feed có thể đến từ file, Google Sheets, XML, API, website crawl hoặc integration platform. Quan trọng là dữ liệu được chuẩn hóa đúng schema và cập nhật đáng tin."
  - question: "ID sản phẩm trong feed có quan trọng không?"
    answer: "Rất quan trọng vì ID thường là khóa dùng để liên kết dữ liệu sản phẩm với event, reporting và dynamic remarketing. ID thay đổi tùy tiện có thể làm mất continuity và match."
  - question: "Title sản phẩm nên viết cho SEO hay Ads?"
    answer: "Nên mô tả rõ sản phẩm bằng thông tin người dùng thực sự cần, đồng thời tuân thủ specification của nền tảng. Không nên keyword stuffing hoặc thêm claim không có trên landing page."
  - question: "Feed lỗi có làm Dynamic Ads sai sản phẩm không?"
    answer: "Có thể. Nếu product ID, availability, price hoặc event mapping không khớp, hệ thống có thể giảm match, từ chối item hoặc phân phối sản phẩm không đúng context."
---

## Product Feed là gì?

**Product Feed là tập dữ liệu có cấu trúc mô tả catalog sản phẩm để nền tảng quảng cáo, marketplace hoặc commerce hiểu mỗi item là gì và trạng thái hiện tại ra sao.**

Một feed điển hình có các trường:

- ID;
- Title;
- Description;
- Product link;
- Image link;
- Price;
- Availability;
- Brand;
- GTIN/MPN khi áp dụng;
- Product type/category;
- Shipping hoặc các thuộc tính liên quan.

Feed là **data layer**, không chỉ là file upload.

## Product Feed dùng ở đâu?

Feed thường được dùng cho:

- Google Shopping;
- Performance Max retail;
- Dynamic remarketing;
- Meta catalog/dynamic ads;
- Marketplace integrations;
- Comparison engines;
- Affiliate/product listing systems.

Một catalog tốt giúp nền tảng nối **user intent → product data → landing page**.

## Vì sao Product ID là trường quan trọng nhất?

ID thường là khóa liên kết:

**Website Product → Feed Item → Event Tracking → Dynamic Ad → Reporting**

Nếu website gửi event với content ID `SKU-123` nhưng feed dùng ID `123-blue-m`, match có thể thất bại nếu mapping không được xử lý.

Hệ quả:

- Dynamic retargeting kém chính xác;
- Product view không map đúng item;
- Reporting khó reconcile;
- Feed item bị tạo mới khi ID thay đổi;
- Learning/history có thể bị phân mảnh.

Quy tắc tốt: **ID ổn định, có governance và không đổi chỉ vì sửa title.**

## Title sản phẩm nên tối ưu thế nào?

Title nên giúp hệ thống và người dùng hiểu nhanh item.

Một cấu trúc có thể là:

**Brand + Product Type + Model/Variant + Attribute quan trọng**

Nhưng thứ tự phụ thuộc ngành.

Ví dụ thời trang:

> Áo sơ mi linen nam Regular Fit – Trắng

Ví dụ điện tử:

> Logitech MX Master 3S – Chuột không dây – Graphite

Không nên:

- Nhồi keyword;
- Viết toàn chữ hoa;
- Thêm khuyến mãi không có thật;
- Gắn claim “rẻ nhất” không chứng minh;
- Đưa thông tin không khớp landing page.

## Price và Availability phải đồng bộ ra sao?

Feed và landing page cần khớp các trường quan trọng như:

- Giá;
- Currency;
- Stock;
- Variant;
- Shipping condition khi áp dụng.

Nếu feed báo `in_stock` nhưng website hết hàng, user experience xấu và platform có thể cảnh báo/disapprove tùy hệ thống.

Với catalog lớn, nên tự động hóa cập nhật thay vì chỉnh tay.

## Image trong Product Feed nên tối ưu thế nào?

Ảnh cần:

- Rõ sản phẩm;
- Đúng variant;
- Không mờ;
- Không crop mất item;
- Không dùng overlay gây hiểu sai;
- Đúng yêu cầu kích thước/nội dung của nền tảng.

Creative asset và product image không phải một thứ.

Product feed image ưu tiên **nhận diện item chính xác**, trong khi creative ad có thể kể chuyện rộng hơn.

## Product Type và Category khác nhau thế nào?

### Product Type

Do merchant tự tổ chức taxonomy nội bộ.

Ví dụ:

`Ô tô > Phụ kiện > Rèm che nắng`

### Platform category

Taxonomy do nền tảng cung cấp hoặc suy luận.

Product Type hữu ích cho:

- Campaign segmentation;
- Reporting;
- Custom labels;
- Feed rules;
- Budget strategy.

Taxonomy nội bộ nên ổn định và có logic business.

## Custom Label dùng để làm gì?

Trong Google Merchant Center/Shopping, custom labels có thể giúp nhóm sản phẩm theo logic không có trong taxonomy chuẩn, ví dụ:

- Margin cao/thấp;
- Bestseller;
- Season;
- Inventory age;
- Price band;
- Promotion tier.

Sau đó media team có thể dùng để:

- Phân tích;
- Chia campaign;
- Ưu tiên budget;
- Theo dõi economics.

Không nên dùng custom label như nơi ghi chú tùy tiện không có governance.

## Feed và Dynamic Retargeting phải khớp thế nào?

Dynamic retargeting cần ít nhất ba lớp đồng bộ:

1. **Feed ID:** Item trong catalog.
2. **Event ID:** Product user đã xem/cart/purchase.
3. **Landing URL:** Trang đúng variant/item.

Nếu một lớp lệch:

- Match rate giảm;
- Dynamic ad không render đúng;
- Retargeting mất relevance.

Đọc [Retargeting là gì?](/blog/retargeting-la-gi/) để nối feed với audience intent.

## Google Merchant Center thay đổi specification ra sao?

Google cập nhật Product Data Specification hằng năm.

Năm 2026 có thêm một số thuộc tính shipping cấp sản phẩm như `handling_cutoff_time`, `minimum_order_value` và loyalty-related labels trong shipping context.

Điều này nhắc một nguyên tắc quan trọng: **feed schema không phải tài liệu viết một lần rồi để đó.**

Team cần review specification định kỳ.

## Quy trình Feed QA

### Hằng ngày

- Disapproved items;
- Price mismatch;
- Availability mismatch;
- Broken images/URLs;
- Feed fetch error.

### Hằng tuần

- Top spend items;
- Zero-impression items;
- Title quality;
- Missing identifiers;
- Custom label coverage.

### Hằng tháng

- Taxonomy;
- Margin labels;
- Stock logic;
- New attributes;
- Event ID mapping;
- Landing page consistency.

## Những lỗi Product Feed phổ biến

- **ID thay đổi liên tục:** Mất continuity.
- **Title quá chung:** Platform khó hiểu item.
- **Price mismatch:** Dễ bị cảnh báo/disapprove.
- **Variant map sai:** User click nhầm màu/size.
- **Out-of-stock vẫn quảng cáo:** Lãng phí.
- **Image lỗi:** Giảm trải nghiệm.
- **Không dùng margin/custom labels:** Media tối ưu doanh thu nhưng không tối ưu lợi nhuận.
- **Feed và event không match:** Dynamic ads yếu.

## Checklist Product Feed

- ID có ổn định không?
- Title có mô tả đúng item không?
- Price/stock có sync không?
- Variant có rõ không?
- Image đúng sản phẩm không?
- Landing URL có đúng không?
- GTIN/brand/MPN có đủ khi cần không?
- Product type có taxonomy không?
- Custom labels có phục vụ business decision không?
- Event ID có match feed không?
- Feed diagnostics có được review định kỳ không?

Product Feed tốt là **hạ tầng dữ liệu sản phẩm** giúp cả platform, media team và người dùng cùng nhìn đúng một phiên bản sự thật về catalog.

### Nguồn tham khảo chính

- [Google Merchant Center Help — Product data specification](https://support.google.com/merchants/answer/7052112)
- [Google Merchant Center Help — Product data specification update 2026](https://support.google.com/merchants/answer/16989427)
- [Google Ads Help — Dynamic remarketing](https://support.google.com/google-ads/answer/3124536)
