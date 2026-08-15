---
layout: post
title: "Marketing dashboard nên có gì? Cây KPI từ doanh thu"
slug: marketing-dashboard-cay-kpi
description: "Cách thiết kế Marketing dashboard theo cây KPI: outcome, driver, guardrail, segment, owner và decision cadence; kèm layout cho executive và channel team."
answer_summary: "Marketing dashboard nên bắt đầu từ quyết định và cây KPI, không từ danh sách chart. Lớp đầu là outcome tài chính/khách hàng; lớp hai là driver acquisition, conversion, retention; lớp ba là diagnostic; guardrail bảo vệ margin, quality và dữ liệu. Mỗi metric cần định nghĩa, owner, target, độ trễ và hành động khi vượt ngưỡng."
target_query: "Marketing dashboard nên có những KPI nào?"
date: 2026-08-15T00:19:00+07:00
date_modified: 2026-08-15T00:19:00+07:00
category: analytics
category_label: "Analytics"
tags: ["Marketing Dashboard","KPI Tree","Marketing Analytics","Data Visualization"]
image: /assets/blog/marketing-dashboard-cay-kpi.webp
image_alt: "Minh họa marketing dashboard nên có gì? cây kpi từ doanh thu"
author: Hoàng Nguyễn Quốc Khánh
author_role: Digital Performance Marketing & Growth Lead · Founder PoB
read_time: 11
featured: false
published: true
faq:
  - question: "Dashboard Marketing nên có bao nhiêu KPI?"
    answer: "Executive view thường chỉ cần 5–9 KPI cốt lõi; drill-down có thể nhiều hơn. Mỗi KPI phải gắn quyết định hoặc câu hỏi, tránh biến dashboard thành kho số."
  - question: "Nên cập nhật dashboard realtime không?"
    answer: "Chỉ khi quyết định cần realtime và dữ liệu đủ ổn định. Nhiều chỉ số như revenue net, qualified lead hoặc refund có độ trễ; realtime giả tạo dễ gây phản ứng quá mức."
  - question: "Vanity metric có nên bỏ hoàn toàn?"
    answer: "Không nhất thiết. Reach, view hay CTR hữu ích ở diagnostic; vấn đề là dùng chúng như outcome thay cho value, conversion hoặc profit."
  - question: "Ai sở hữu dashboard?"
    answer: "Analytics/Data có thể sở hữu pipeline; business owner sở hữu định nghĩa và quyết định. Hai vai trò cần chung metric contract và change process."
---

## Marketing dashboard nên có gì?

**Marketing dashboard nên chứa ít metric đủ để phát hiện thay đổi, giải thích nút thắt và ra quyết định trong một nhịp cụ thể.** Nó không phải bản sao mọi báo cáo nền tảng.

Một dashboard tốt trả lời theo thứ tự:

1. Kết quả kinh doanh có đạt không?
2. Driver nào làm kết quả đổi?
3. Phân khúc/kênh/cohort nào tạo thay đổi?
4. Dữ liệu đủ tin để hành động không?
5. Ai làm gì tiếp theo?

## Xây cây KPI từ trên xuống

Ví dụ cho e-commerce:

`Contribution profit = Net revenue − COGS − fulfillment − payment fees − marketing spend`

`Net revenue = traffic × conversion rate × AOV − refunds`

`New customer revenue = qualified visits × new-customer CVR × new AOV`

Đây là identity tree để chẩn đoán, chưa phải causal model. Nó giúp xác định nhánh cần đào sâu thay vì nhìn 30 chart ngang hàng.

| Lớp | Ví dụ | Nhịp |
|---|---|---|
| Outcome | net revenue, contribution, new customers | tuần/tháng |
| Driver | qualified traffic, CVR, AOV, retention | ngày/tuần |
| Diagnostic | CPM, CTR, page speed, form error | gần realtime/ngày |
| Guardrail | margin, refund, invalid lead, data freshness | luôn theo dõi |

## Layout executive một màn hình

### Hàng 1 — Outcome và forecast

Actual vs target vs prior comparable period; hiển thị absolute và % change. Nếu seasonality mạnh, đừng chỉ so ngày trước.

### Hàng 2 — Driver tree

Traffic/qualified pipeline → conversion/win rate → value/AOV → retention. Dùng waterfall hoặc contribution breakdown khi cần giải thích thay đổi.

### Hàng 3 — Segment quan trọng

New/returning, product, region, channel group, campaign/offer. Chỉ hiển thị segment có đủ volume và hành động được.

### Hàng 4 — Guardrail và data health

Margin, refund, spam lead, consent rate, event loss, data freshness. Dashboard không nên trông xanh khi tracking đã hỏng.

## Metric card phải có context

Mỗi KPI cần:

- Định nghĩa và công thức;
- Source và timestamp refresh;
- Scope/filter;
- Target và owner;
- So sánh phù hợp;
- Threshold/cảnh báo;
- Link drill-down;
- Known limitation.

[Google Analytics Data API schema](https://developers.google.com/analytics/devguides/reporting/data/v1/api-schema) cho thấy mỗi dimension/metric có tên và compatibility riêng. Đừng trộn metric từ scope không tương thích hoặc gọi cùng tên nhưng công thức khác giữa GA, ad platform và finance.

## Ba dashboard cho ba quyết định

### Executive dashboard

Outcome, forecast, portfolio allocation, major risk; review tuần/tháng.

### Growth/Performance dashboard

Funnel, channel, campaign, creative, marginal economics; review hàng ngày/tuần.

### Data quality dashboard

Event volume, freshness, null, duplicate, reconciliation, consent; review tự động + incident.

Không bắt CEO dùng dashboard 80 cột của analyst, cũng không bắt media buyer ra quyết định bằng một KPI tổng công ty.

## Thiết kế cảnh báo để tránh alert fatigue

- Ngưỡng absolute + relative;
- Minimum volume;
- Seasonality baseline;
- Persistence 2–3 kỳ nếu không khẩn cấp;
- Severity và owner;
- Runbook/link điều tra;
- Cooldown sau alert.

Ví dụ purchase rơi 90% trong 30 phút là incident tracking; CPA tăng 12% một buổi có thể chỉ là noise.

## Nguyên tắc trực quan để không làm sai câu chuyện

Dùng line cho xu hướng, bar cho so sánh nhóm, table cho giá trị cần tra cứu và waterfall khi giải thích đóng góp. Trục nên bắt đầu từ 0 với bar khi chiều dài biểu diễn quy mô; nếu cắt trục ở line chart, ghi rõ. Không dùng hai trục Y nếu người đọc dễ nhầm tương quan thành nguyên nhân.

Màu cần mang nghĩa nhất quán: đỏ cho cảnh báo, không phải cho một kênh ngẫu nhiên; target/baseline phải phân biệt với actual. Hiển thị mẫu số cạnh tỷ lệ — CVR 50% từ 2 phiên không nên có sức nặng ngang 12% từ 20.000 phiên. Khi dữ liệu có latency hoặc estimate, thêm chú thích ngay trên chart thay vì chôn trong tài liệu. Dashboard càng “đẹp” càng cần chống cảm giác chắc chắn giả.

## Review dashboard theo decision log

Mỗi phiên review ghi: signal, giả thuyết, quyết định, owner, ngày kiểm tra lại. Sau một tháng, đối chiếu dự đoán với kết quả để cải thiện cách đọc dữ liệu. Dashboard không tạo giá trị nếu chỉ được chụp màn hình gửi nhóm chat.

## Kết luận

Bắt đầu dashboard từ outcome và cây driver, thêm guardrail cùng data health, rồi cắt mọi chart không phục vụ quyết định. Mỗi audience cần độ chi tiết và nhịp riêng; điều thống nhất phải là metric dictionary và nguồn sự thật.

### Nguồn tham khảo chính

- [Google Analytics Data API — Dimensions & metrics](https://developers.google.com/analytics/devguides/reporting/data/v1/api-schema)
- [Google Analytics — Traffic-source attribution](https://developers.google.com/analytics/bigquery/traffic-attribution-data)
- [Google Analytics — Recommended events](https://developers.google.com/analytics/devguides/collection/ga4/reference/recommended-events)
