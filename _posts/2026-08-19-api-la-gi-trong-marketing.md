---
layout: post
title: "API là gì trong Marketing? Cách hệ thống trao đổi dữ liệu và tự động hóa"
slug: api-la-gi-trong-marketing
description: "API là gì trong Marketing? Hiểu request, endpoint, authentication, rate limit và cách API kết nối Ads, CRM, CMS, analytics, commerce và automation."
answer_summary: "API (Application Programming Interface) là giao diện có quy tắc cho phép hai hệ thống phần mềm trao đổi dữ liệu hoặc yêu cầu hành động. Trong Marketing, API giúp kết nối Ads, CRM, CMS, analytics, commerce và automation. Để dùng an toàn và ổn định, cần hiểu authentication, endpoint, payload, rate limit, error handling, permission và logging."
target_query: "API là gì trong Marketing?"
date: 2026-08-19T10:55:00+07:00
date_modified: 2026-08-19T10:55:00+07:00
category: martech-automation
category_label: "MarTech & Automation"
tags: ["API","Marketing API","Integration","Automation","MarTech"]
image: /assets/blog/api-la-gi-trong-marketing-2026.svg
image_alt: "Minh họa 2D API kết nối Ads CRM CMS Analytics và Commerce qua request response"
author: Hoàng Nguyễn Quốc Khánh
author_role: Digital Performance Marketing & Growth Lead · Founder PoB
read_time: 10
featured: false
published: true
faq:
  - question: "API có phải là database không?"
    answer: "Không. Database lưu dữ liệu; API là giao diện để một hệ thống đọc, ghi hoặc yêu cầu hành động theo rule được cho phép. API có thể đứng trước database nhưng không đồng nghĩa database."
  - question: "API Key là gì?"
    answer: "API Key là một kiểu credential dùng để nhận diện hoặc cấp quyền cho request trong một số API. Nhiều API hiện đại dùng OAuth hoặc token với scope chi tiết hơn."
  - question: "Rate Limit là gì?"
    answer: "Rate Limit giới hạn số request trong một khoảng thời gian để bảo vệ hệ thống. Integration cần xử lý quota, retry và backoff thay vì gọi liên tục."
  - question: "No-code tool có cần hiểu API không?"
    answer: "Không phải lúc nào cũng cần code, nhưng hiểu API concept giúp debug connector, mapping field, authentication và error khi workflow phức tạp."
---

## API là gì trong Marketing?

**API là một hợp đồng giao tiếp giữa các hệ thống.** Một hệ thống cung cấp endpoint và rule; hệ thống khác gửi request đúng format để lấy dữ liệu hoặc thực hiện action.

Trong Marketing, API là nền của rất nhiều workflow tưởng như “tự động”: lấy Ads spend, tạo CRM contact, cập nhật order, sync audience hoặc publish content.

## Request và Response hoạt động thế nào?

Một request thường có:

- URL/endpoint;
- HTTP method;
- Authentication;
- Headers;
- Parameters;
- Body/payload.

Response thường có:

- Status code;
- Data;
- Error message;
- Metadata/pagination.

No-code tool thường ẩn phần này, nhưng logic vẫn tồn tại phía dưới.

## Các HTTP Method cơ bản

### GET

Đọc dữ liệu.

### POST

Tạo record/action mới.

### PUT/PATCH

Cập nhật record.

### DELETE

Xóa nếu API cho phép.

Không phải API nào cũng hỗ trợ đầy đủ các method.

## Authentication trong API

Các kiểu thường gặp:

- API key;
- Bearer token;
- OAuth 2.0;
- Service account;
- Signed request.

Credential nên được lưu trong secret manager hoặc nơi quản lý phù hợp, không hard-code công khai trong spreadsheet hay repo public.

## API dùng trong Marketing ở đâu?

### Ads Reporting

Lấy campaign, cost, clicks, conversions về warehouse/dashboard.

### CRM Integration

Tạo/update lead, lifecycle stage, owner hoặc activity.

### Commerce

Đọc order, product, inventory và customer data.

### CMS

Tạo hoặc cập nhật content từ workflow đã kiểm duyệt.

### Analytics

Gửi event hoặc lấy reporting data.

### Automation

No-code/iPaaS gọi API để nối nhiều app.

## API khác Webhook thế nào?

API thường theo mô hình **request khi cần**. Webhook thường là **hệ thống gửi event khi sự việc xảy ra**.

Ví dụ:

- API: Automation hỏi CRM “lead này status gì?”.
- Webhook: CRM chủ động báo “lead vừa chuyển Qualified”.

Hai cơ chế thường dùng cùng nhau. Đọc [Webhook là gì?](/blog/webhook-la-gi/).

## Pagination là gì?

API thường không trả hàng triệu record trong một response. Dữ liệu được chia page/cursor.

Integration phải lặp qua pagination đúng cách, nếu không dashboard có thể chỉ lấy page đầu và thiếu dữ liệu mà không ai biết.

## Rate Limit và Retry

Một integration ổn định cần:

1. Đọc quota/rate limit;
2. Batch request nếu API hỗ trợ;
3. Retry lỗi tạm thời;
4. Exponential backoff;
5. Không retry lỗi validation vô hạn;
6. Log request ID/error.

Đây là khác biệt giữa demo chạy được và production workflow đáng tin.

## API Versioning

Platform có thể thay API version và deprecate field/endpoint. Vì vậy cần:

- Ghi version đang dùng;
- Theo dõi deprecation;
- Test trước migration;
- Không phụ thuộc undocumented field;
- Có owner cho integration.

## Data Mapping

CRM gọi `email`, commerce gọi `customer_email`, warehouse có `email_address`. Integration cần mapping và type rõ.

Nên có data dictionary:

- Source field;
- Destination field;
- Type;
- Required/optional;
- Transformation;
- Default;
- Owner.

## API trong Marketing Data Pipeline

Pattern phổ biến:

**API Source → Raw Table → Transformation → Data Mart → Dashboard/Activation**

Đọc [Marketing Data Pipeline](/blog/marketing-data-pipeline-la-gi/) và [BigQuery cho Marketing](/blog/bigquery-cho-marketing-la-gi/).

## Sai lầm phổ biến

- Public API key;
- Không xử lý pagination;
- Không log error;
- Retry vô hạn;
- Không pin API version;
- Gọi full history mỗi lần sync;
- Không dedupe record;
- Không kiểm tra timezone;
- Dùng admin token cho workflow chỉ cần read.

API giúp MarTech **trao đổi dữ liệu theo hợp đồng rõ**, nhưng integration production cần governance hơn một request thành công trong demo.

### Nguồn tham khảo chính

- [MDN — HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP)
- [Google Cloud — APIs](https://cloud.google.com/apis/docs/overview)
- [GitHub Docs — REST API](https://docs.github.com/en/rest)
