---
layout: post
title: "Data quality audit cho Marketing: 12 kiểm tra bắt buộc"
slug: data-quality-audit-marketing
description: "Checklist data quality audit Marketing: 12 kiểm tra về freshness, completeness, duplicate, consistency, reconciliation, consent và lineage trước khi tin dashboard."
answer_summary: "Data quality audit Marketing là quy trình kiểm tra dữ liệu có đầy đủ, đúng, kịp thời, duy nhất, nhất quán và truy vết được trước khi ra quyết định. Mười hai kiểm tra nên bao phủ nguồn, schema, volume, null, duplicate, range, identity, attribution, reconciliation tài chính, consent, lineage và alert; lỗi phải có severity, owner và SLA xử lý."
target_query: "Cách audit chất lượng dữ liệu Marketing trước khi dùng dashboard?"
date: 2026-08-15T00:20:00+07:00
date_modified: 2026-08-15T00:20:00+07:00
category: analytics
category_label: "Analytics"
tags: ["Data Quality Audit","Marketing Data","Analytics QA","Data Governance"]
image: /assets/blog/data-quality-audit-marketing.webp
image_alt: "Minh họa data quality audit cho marketing: 12 kiểm tra bắt buộc"
author: Hoàng Nguyễn Quốc Khánh
author_role: Digital Performance Marketing & Growth Lead · Founder PoB
read_time: 12
featured: false
published: true
faq:
  - question: "Data quality có nghĩa dữ liệu phải khớp 100% giữa mọi nền tảng?"
    answer: "Không. Nguồn có attribution, scope và latency khác nhau nên có chênh lệch hợp lệ. Audit cần tolerance và lý do đã biết, không ép số giống tuyệt đối."
  - question: "Bao lâu nên audit dữ liệu Marketing?"
    answer: "Kiểm tra critical có thể chạy hàng ngày/tự động; reconciliation sâu theo tuần/tháng; full audit khi đổi tracking, CRM, consent hoặc dashboard trọng yếu."
  - question: "Ai chịu trách nhiệm lỗi dữ liệu?"
    answer: "Mỗi data product/metric cần business owner và technical owner. Không nên coi mọi lỗi là việc riêng của analyst nếu nguồn phát sinh nằm ở website, CRM hoặc quy trình nhập liệu."
  - question: "Làm sao ưu tiên sửa lỗi?"
    answer: "Chấm severity theo tác động quyết định, phạm vi, thời gian, khả năng phục hồi và compliance. Purchase trùng hoặc consent sai ưu tiên cao hơn typo ở dimension ít dùng."
---

## Data quality audit Marketing là gì?

**Data quality audit Marketing là kiểm tra có hệ thống xem dữ liệu có đủ tin cậy cho quyết định cụ thể hay không.** “Dashboard chạy được” chỉ chứng minh pipeline có output; không chứng minh event đúng, doanh thu không trùng hoặc attribution được hiểu đúng.

## 12 kiểm tra trước khi tin dashboard

### 1. Freshness

Dữ liệu mới nhất đến khi nào? So actual latency với SLA; hiển thị timestamp ngay trên dashboard.

### 2. Volume anomaly

Event/record tăng giảm bất thường theo baseline ngày trong tuần, seasonality và traffic. Tăng 3 lần có thể do campaign, bot hoặc tag bắn trùng.

### 3. Completeness

Tỷ lệ null/missing ở required fields: transaction_id, value, currency, source, owner, stage.

### 4. Uniqueness

Kiểm duplicate key ở order, lead, event. [GA4 event reference](https://developers.google.com/analytics/devguides/collection/protocol/ga4/reference/events) nhấn mạnh transaction ID cho purchase dedup; vẫn cần kiểm ở warehouse/ERP.

### 5. Validity

Type, enum, regex, range hợp lệ: currency theo danh sách, value không âm trừ refund rule, timestamp không ở tương lai.

### 6. Consistency

Cùng khái niệm có định nghĩa giống giữa CRM, warehouse và dashboard không? Ví dụ MQL date là lúc đạt điều kiện lần đầu hay trạng thái hiện tại?

### 7. Referential integrity

Mọi line item có order, mọi opportunity có account, mọi campaign ID map được taxonomy. Orphan record làm segment sai.

### 8. Identity và dedup

Một người nhiều email/device được xử lý ra sao? Lead merge có làm mất source không? Không hứa “single customer view” nếu identity chỉ là heuristic.

### 9. Attribution/scope

[GA4 traffic-source attribution](https://developers.google.com/analytics/bigquery/traffic-attribution-data) phân biệt user, session và event scope. Audit query/dashboard có dùng đúng scope và cửa sổ không.

### 10. Financial reconciliation

So count và value của purchase theo ngày/order ID với payment/ERP. Tách gross, net, tax, refund, cancel, timezone và currency. Đặt tolerance, điều tra phần vượt.

### 11. Consent và data minimization

Kiểm tag có tôn trọng consent state, không gửi PII vào analytics và suppression được áp dụng. [Google Consent Mode](https://developers.google.com/tag-platform/security/guides/consent) cung cấp cơ chế điều chỉnh tag; governance doanh nghiệp vẫn phải xác định yêu cầu.

### 12. Lineage và change log

Metric đi qua nguồn, transform và dashboard nào? Ai đổi schema, ngày nào, tác động gì? Không có lineage thì incident bị sửa bằng phỏng đoán.

## Scorecard mẫu

| Rule | Target | Severity | Owner | Action |
|---|---:|---|---|---|
| purchase freshness | < 2 giờ | P1 | Data Eng | kiểm pipeline |
| transaction duplicate | < 0,1% | P1 | Analytics/Eng | quarantine + dedup |
| lead owner null | < 2% | P2 | RevOps | routing queue |
| unknown utm_medium | < 1% | P3 | MarOps | taxonomy audit |
| revenue vs ERP | ±2% sau 72h | P1 | Finance/Data | reconcile orders |

Target là ví dụ; phải điều chỉnh theo volume, latency và rủi ro.

## Quy trình incident dữ liệu

1. Phát hiện và xác nhận alert.
2. Đánh severity/tác động quyết định.
3. Dán cảnh báo trên dashboard, tạm dừng automation nếu cần.
4. Khoanh vùng source–transform–output.
5. Sửa và backfill có kiểm soát.
6. Reconcile, ghi root cause và prevention.
7. Cập nhật test/SOP/owner.

Không âm thầm backfill rồi để stakeholder dùng số cũ trong slide.

## Audit theo tầng nguồn

- **Collection:** tag/event/consent.
- **Transport:** request, API, queue, retry.
- **Storage:** schema, partition, duplicate.
- **Transformation:** join, filter, currency, attribution.
- **Serving:** dashboard, export, access.
- **Decision:** metric có bị hiểu sai hoặc vượt phạm vi không.

## Sampling audit và kiểm tra thủ công

Test tự động bắt tốt schema, null và range nhưng khó biết một event có phản ánh đúng hành vi. Mỗi tuần lấy mẫu ngẫu nhiên một số order/lead từ dashboard, truy ngược qua raw event, CRM và hệ thống tài chính; đồng thời chọn thêm mẫu rủi ro như refund, multi-currency, offline close và record merge.

Với mỗi mẫu, lưu expected, actual, bằng chứng và root-cause category. Tỷ lệ lỗi phải đi kèm cỡ mẫu; 0 lỗi trong 10 record không chứng minh tỷ lệ lỗi bằng 0. Khi phát hiện lỗi có hệ thống, mở rộng phạm vi và quarantine dữ liệu bị ảnh hưởng trước khi backfill. Sampling cũng giúp tìm lỗi ngữ nghĩa — ví dụ lead có owner nhưng owner không thuộc territory đúng — mà rule completeness không nhìn thấy.

## Kết luận

Chất lượng dữ liệu không phải trạng thái “sạch/bẩn” chung; nó là mức phù hợp với một quyết định. Đặt test tự động cho metric quan trọng, reconciliation với source of truth và owner/SLA rõ; khi lỗi, hiển thị uncertainty trước khi tối ưu campaign bằng số sai.

### Nguồn tham khảo chính

- [Google Analytics — Measurement Protocol events](https://developers.google.com/analytics/devguides/collection/protocol/ga4/reference/events)
- [Google Analytics — Traffic-source attribution](https://developers.google.com/analytics/bigquery/traffic-attribution-data)
- [Google Tag Platform — Consent mode](https://developers.google.com/tag-platform/security/guides/consent)
- [Google Analytics — Recommended events](https://developers.google.com/analytics/devguides/collection/ga4/reference/recommended-events)
