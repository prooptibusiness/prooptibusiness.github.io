---
layout: post
title: "Webhook là gì? Cách gửi sự kiện real-time giữa CRM, E-commerce và Automation"
slug: webhook-la-gi
description: "Webhook là gì? Hiểu event, endpoint, payload, signature, retry, idempotency và cách webhook kết nối CRM, commerce, form, payment và automation."
answer_summary: "Webhook là cơ chế một hệ thống chủ động gửi thông tin tới một endpoint khác khi sự kiện xảy ra, ví dụ order created, form submitted hoặc customer updated. So với việc liên tục gọi API để hỏi có gì mới, webhook giúp workflow phản ứng nhanh hơn, nhưng cần xử lý xác thực, retry, duplicate event, ordering, logging và lỗi endpoint."
target_query: "Webhook là gì?"
date: 2026-08-19T10:56:00+07:00
date_modified: 2026-08-19T10:56:00+07:00
category: martech-automation
category_label: "MarTech & Automation"
tags: ["Webhook","API","Automation","Integration","Event-driven"]
image: /assets/blog/webhook-la-gi-2026.svg
image_alt: "Minh họa 2D webhook đẩy event từ hệ nguồn qua endpoint đến workflow automation"
author: Hoàng Nguyễn Quốc Khánh
author_role: Digital Performance Marketing & Growth Lead · Founder PoB
read_time: 10
featured: false
published: true
faq:
  - question: "Webhook khác API thế nào?"
    answer: "API thường được client gọi khi cần dữ liệu hoặc action; webhook là server gửi event tới endpoint đã đăng ký khi sự việc xảy ra. Hai cơ chế thường dùng cùng nhau."
  - question: "Webhook có luôn real-time không?"
    answer: "Webhook thường near-real-time nhưng không nên giả định tuyệt đối. Queue, retry, network và provider processing có thể tạo độ trễ."
  - question: "Tại sao webhook có thể gửi trùng event?"
    answer: "Provider có thể retry khi không nhận được acknowledgement hoặc khi network lỗi. Consumer nên có idempotency/deduplication thay vì giả định event chỉ đến một lần."
  - question: "Webhook có phù hợp cho dữ liệu lịch sử không?"
    answer: "Không phải lựa chọn chính. Webhook phù hợp event mới; historical/backfill thường nên lấy qua API hoặc export rồi reconcile."
---

## Webhook là gì?

**Webhook là một thông báo máy-đến-máy được gửi khi event xảy ra.** Thay vì automation cứ vài phút hỏi “có order mới chưa?”, commerce platform có thể gửi payload tới webhook endpoint ngay khi order được tạo.

Webhook rất hữu ích cho Marketing Automation vì nhiều workflow bắt đầu từ event.

## Cấu trúc một Webhook Flow

Một flow phổ biến:

**Event Source → Webhook POST → Endpoint → Validate → Queue/Process → Action → Log**

Ví dụ:

Order completed → Webhook → Automation → cập nhật CRM → thêm lifecycle tag → gửi event vào warehouse.

## Webhook khác Polling thế nào?

### Polling

Hệ thống A định kỳ hỏi hệ B có dữ liệu mới không.

Ưu điểm: Dễ kiểm soát schedule.

Nhược điểm: Chậm hơn, tốn request và dễ đụng rate limit.

### Webhook

Hệ B gửi event khi có thay đổi.

Ưu điểm: Phản ứng nhanh, ít request dư.

Nhược điểm: Cần endpoint luôn sẵn sàng, retry và dedupe.

## Payload của Webhook gồm gì?

Payload có thể chứa:

- Event type;
- Event ID;
- Timestamp;
- Resource ID;
- Updated fields;
- Customer/order data;
- Metadata.

Không nên giả định payload luôn chứa toàn bộ record. Nhiều design chỉ gửi ID rồi consumer gọi API để lấy dữ liệu đầy đủ.

## Xác thực Webhook

Các provider thường có cơ chế như:

- Shared secret;
- Signature/HMAC;
- Token/header;
- IP allowlist trong một số trường hợp.

Consumer nên verify request trước khi xử lý action quan trọng.

## Retry và Duplicate Event

Webhook có thể được gửi lại khi endpoint timeout hoặc trả lỗi. Vì vậy consumer cần **idempotent** khi có thể.

Ví dụ nếu event `order_123_paid` tới hai lần, workflow không nên cộng doanh thu hai lần hoặc gửi hai lifecycle message giống nhau.

Có thể lưu event ID đã xử lý để dedupe.

## Event Ordering

Trong hệ phân tán, event có thể đến không đúng thứ tự hoàn hảo. Ví dụ update sau có thể tới trước event cũ do retry.

Nên dùng:

- Timestamp/version;
- State reconciliation;
- Last-write rule có kiểm soát;
- API fetch lại resource khi cần.

## Webhook trong CRM và Marketing

Use case phổ biến:

- Form submitted;
- Lead stage changed;
- Order created/paid;
- Subscription renewed;
- Content published;
- Support ticket resolved;
- Customer property updated.

Webhook giúp kích hoạt [Marketing Automation](/blog/marketing-automation-la-gi/) nhanh hơn polling.

## Webhook và Data Warehouse

Webhook phù hợp ingest event mới, nhưng warehouse cần thêm:

- Raw event table;
- Deduplication;
- Schema evolution;
- Retry/dead-letter;
- Reconciliation với source;
- Backfill bằng API/export.

Đọc [Marketing Data Pipeline](/blog/marketing-data-pipeline-la-gi/).

## Logging cần có gì?

- Event ID;
- Source;
- Received at;
- Payload hash hoặc safe metadata;
- Validation result;
- Processing status;
- Retry count;
- Error message;
- Downstream action ID.

Không nên log credential hoặc dữ liệu nhạy cảm không cần thiết.

## No-code Webhook

Các automation platform thường cung cấp webhook URL để nhận event. Đây là cách SME nhanh chóng nối form, CMS hoặc app custom.

Nhưng khi volume tăng cần để ý:

- Task quota;
- Payload size;
- Concurrency;
- Timeout;
- Retry behavior;
- Data retention;
- Error alert.

Đọc [No-code Automation là gì?](/blog/no-code-automation-la-gi/).

## Sai lầm phổ biến

- Không verify signature;
- Không dedupe;
- Endpoint trả response quá chậm;
- Business logic nặng chạy trực tiếp trước acknowledgement;
- Không có retry queue;
- Không reconcile với source;
- Hard-code schema;
- Không alert khi endpoint fail.

Webhook tốt giúp hệ thống Marketing chuyển từ **schedule-based sang event-driven**, nhưng production reliability cần nhiều hơn một URL nhận payload.

### Nguồn tham khảo chính

- [GitHub Docs — Webhooks](https://docs.github.com/en/webhooks)
- [Stripe Docs — Webhooks](https://docs.stripe.com/webhooks)
- [MDN — HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP)
