---
layout: post
title: "MarTech Stack là gì? Cách thiết kế hệ công cụ Marketing không bị chồng chéo"
slug: martech-stack-la-gi
description: "MarTech Stack là gì? Hướng dẫn thiết kế lớp CMS, CRM, Ads, Analytics, Automation, Data và Integration theo use case, source of truth và governance."
answer_summary: "MarTech Stack là tập hợp các công cụ và hệ thống Marketing được tổ chức theo vai trò, dữ liệu và workflow để cùng hỗ trợ mục tiêu kinh doanh. Một stack tốt không phải stack nhiều tool nhất mà là stack có ownership rõ, ít trùng chức năng, dữ liệu đi đúng chiều, integration có kiểm soát và chi phí phù hợp với mức sử dụng thực."
target_query: "MarTech Stack là gì?"
date: 2026-08-19T10:52:00+07:00
date_modified: 2026-08-19T10:52:00+07:00
category: martech-automation
category_label: "MarTech & Automation"
tags: ["MarTech Stack","MarTech","CRM","Automation","Data Architecture"]
image: /assets/blog/martech-stack-la-gi-2026.svg
image_alt: "Minh họa 2D MarTech Stack theo lớp CMS CRM Ads Analytics Automation Data Integration"
author: Hoàng Nguyễn Quốc Khánh
author_role: Digital Performance Marketing & Growth Lead · Founder PoB
read_time: 11
featured: false
published: true
faq:
  - question: "MarTech Stack nên có những lớp nào?"
    answer: "Tùy use case, nhưng thường có content/CMS, CRM/lifecycle, paid media, analytics, automation, data warehouse/CDP và integration. SME không nhất thiết cần đủ mọi lớp."
  - question: "Một tool làm nhiều chức năng có tốt hơn nhiều tool chuyên dụng không?"
    answer: "Không có đáp án chung. Suite giảm integration nhưng có thể kém linh hoạt; best-of-breed mạnh từng lớp nhưng tăng complexity. Quyết định nên dựa trên use case, data ownership và team capability."
  - question: "Làm sao phát hiện tool overlap?"
    answer: "Lập inventory theo use case thay vì tên tool. Nếu hai công cụ cùng gửi email, cùng quản lý contact hoặc cùng tạo dashboard mà không có lý do rõ, có thể đang overlap."
  - question: "Có cần vẽ sơ đồ MarTech Stack không?"
    answer: "Có. Một sơ đồ đơn giản cho biết source, destination, data owner và sync direction giúp onboarding, audit và troubleshooting dễ hơn nhiều."
---

## MarTech Stack là gì?

**MarTech Stack là kiến trúc các công cụ Marketing được sắp theo vai trò và cách chúng trao đổi dữ liệu.** Nó không phải danh sách logo. Một stack chỉ hữu ích khi team biết tool nào làm gì, dữ liệu nào nằm ở đâu và workflow nào phụ thuộc vào integration nào.

Nếu mới bắt đầu, đọc [MarTech là gì?](/blog/martech-la-gi/) trước.

## 7 lớp thường gặp trong MarTech Stack

1. **CMS/Content:** Website, landing page, asset.
2. **CRM:** Lead, customer, pipeline và lifecycle.
3. **Paid Media:** Ad platforms và campaign data.
4. **Analytics:** Web/product analytics, dashboard.
5. **Automation:** Email, workflow, notification.
6. **Data:** Warehouse, CDP, transformation.
7. **Integration:** API, webhook, connector, iPaaS.

Một SME có thể gộp nhiều lớp trong cùng platform nếu use case còn đơn giản.

## Bắt đầu bằng Use Case Map

Liệt kê 10–20 use case thật:

- Form lead → CRM;
- Lead qualified → notify Sales;
- Purchase → update lifecycle;
- Ads cost → dashboard;
- Product catalog → website/marketplace;
- Customer status → audience;
- Content published → social distribution;
- Refund → suppress retention campaign.

Sau đó map tool vào use case. Cách này giúp tránh mua tool chỉ vì tính năng nghe hay.

## Source of Truth cần được chỉ định

Ví dụ:

| Domain | Source of Truth gợi ý |
|---|---|
| Customer profile | CRM/CDP/Warehouse tùy kiến trúc |
| Order | Commerce/ERP |
| Product | ERP/PIM |
| Content | CMS |
| Ads spend | Ad platform/raw warehouse |
| KPI model | Data mart/warehouse |

Không nhất thiết mọi domain nằm cùng một nơi, nhưng phải biết hệ nào được ưu tiên khi dữ liệu xung đột.

## Data Flow cần vẽ chiều đi

Một sơ đồ tốt ghi:

**Source → Transform → Destination → Action**

Ví dụ:

Ads + GA4 + CRM + Orders → BigQuery → Data model → Dashboard + Audience sync.

Đọc [Marketing Data Pipeline](/blog/marketing-data-pipeline-la-gi/) để hiểu luồng này.

## Suite hay Best-of-breed?

### Suite

Ưu điểm:

- Integration sẵn;
- Permission thống nhất;
- Support đơn giản.

Nhược điểm:

- Lock-in cao hơn;
- Một số module có thể không mạnh;
- Cost tăng theo package.

### Best-of-breed

Ưu điểm:

- Chọn tool tốt nhất từng use case;
- Linh hoạt thay từng lớp.

Nhược điểm:

- Nhiều integration;
- Data model phức tạp;
- Governance khó hơn.

Không có lựa chọn tuyệt đối. Team nhỏ thường nên ưu tiên simplicity.

## Cách đánh giá một tool mới

Hỏi 8 câu:

1. Use case nào thật sự cần?
2. Tool hiện tại không làm được gì?
3. Data có export được không?
4. API/webhook có đủ không?
5. Permission có granular không?
6. Pricing scale theo user/contact/event ra sao?
7. Ai sẽ owner?
8. Nếu bỏ tool thì migration thế nào?

## Tool Overlap gây hại gì?

- Contact data lệch;
- Hai workflow cùng gửi message;
- Cost subscription tăng;
- Reporting không thống nhất;
- Team không biết dùng tool nào;
- Integration loop hoặc duplicate record.

Tool overlap không phải luôn xấu, nhưng phải có lý do rõ như redundancy có chủ đích hoặc use case khác nhau.

## Governance của MarTech Stack

Tối thiểu cần:

- Tool owner;
- Admin access list;
- Data owner;
- API key/secret owner;
- Renewal date;
- Monthly cost;
- Integration map;
- Change log;
- Backup/export procedure.

Đây là một phần của [Marketing Operations](/blog/marketing-operations-la-gi/).

## Audit Stack mỗi quý

Xếp từng tool vào bốn nhóm:

- Keep;
- Consolidate;
- Replace;
- Retire.

Dựa trên usage, cost, reliability, overlap, data access và business value.

## Sai lầm phổ biến

- Mua tool trước khi có process;
- Không tính integration cost;
- Dùng spreadsheet làm middleware lâu dài nhưng không owner;
- Không có data dictionary;
- Admin account dùng chung;
- Không kiểm tra API limit;
- Dashboard phụ thuộc manual export;
- Không có deprecation plan.

MarTech Stack tốt giúp team **thấy rõ hệ thống và thay đổi từng lớp có kiểm soát**, thay vì mỗi tool là một silo mới.

### Nguồn tham khảo chính

- [Salesforce — Marketing Technology](https://www.salesforce.com/marketing/martech/)
- [HubSpot — Marketing Technology](https://blog.hubspot.com/marketing/marketing-technology)
- [Google Cloud — Marketing Analytics](https://cloud.google.com/solutions/marketing-analytics)
