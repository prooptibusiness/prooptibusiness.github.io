---
layout: post
title: "CAC và LTV là gì? Cách tính chi phí mua khách và giá trị vòng đời"
slug: cac-ltv-la-gi
description: "CAC và LTV là gì? Hướng dẫn cách tính Customer Acquisition Cost, Lifetime Value, LTV/CAC, payback và các lỗi khiến unit economics bị hiểu sai."
answer_summary: "CAC là chi phí để có được một khách hàng mới; LTV là giá trị kinh tế kỳ vọng mà một khách hàng tạo ra trong suốt quan hệ với doanh nghiệp. Hai chỉ số cần được tính trên cùng cohort và cùng định nghĩa chi phí, doanh thu hoặc gross profit. LTV/CAC chỉ hữu ích khi retention và margin đủ đáng tin, không nên dùng forecast lạc quan để biện minh cho acquisition đang lỗ."
target_query: "CAC và LTV là gì?"
date: 2026-08-19T10:00:00+07:00
date_modified: 2026-08-19T10:00:00+07:00
category: analytics
category_label: "Analytics"
tags: ["CAC","LTV","Customer Acquisition Cost","Lifetime Value","Unit Economics"]
image: /pob-learning-lab.webp
image_alt: "Minh họa CAC LTV payback và unit economics của khách hàng"
author: Hoàng Nguyễn Quốc Khánh
author_role: Digital Performance Marketing & Growth Lead · Founder PoB
read_time: 10
featured: false
published: true
faq:
  - question: "CAC tính như thế nào?"
    answer: "Công thức cơ bản là tổng chi phí acquisition chia cho số khách hàng mới trong cùng kỳ/cohort. Cần ghi rõ chi phí chỉ gồm media hay full acquisition cost gồm agency, sales, tool và nhân sự."
  - question: "LTV tính như thế nào?"
    answer: "Cách tính phụ thuộc business model. Một cách đơn giản là doanh thu hoặc gross profit trung bình mỗi khách nhân với thời gian/chu kỳ duy trì; mô hình tốt hơn dùng cohort retention và margin thực tế."
  - question: "LTV/CAC bao nhiêu là tốt?"
    answer: "Không có tỷ lệ universal. Ngưỡng phù hợp phụ thuộc cash flow, gross margin, retention, tốc độ tăng trưởng và payback. Đừng dùng một benchmark chung thay cho unit economics thật."
  - question: "CAC và CPA có giống nhau không?"
    answer: "Không hoàn toàn. CPA có thể là chi phí cho bất kỳ action nào như lead hoặc purchase. CAC tập trung chi phí để có một khách hàng mới và có thể bao gồm chi phí ngoài Ads tùy định nghĩa."
---

## CAC và LTV là gì?

**CAC (Customer Acquisition Cost) cho biết doanh nghiệp tốn bao nhiêu để có một khách hàng mới; LTV (Lifetime Value) ước tính giá trị kinh tế mà khách hàng đó tạo ra trong suốt quan hệ.** Đây là hai chỉ số nền tảng để biết tăng trưởng có bền về economics hay không.

## Công thức CAC

Công thức đơn giản:

`CAC = Tổng chi phí acquisition / Số khách hàng mới`

Nhưng cần chốt phạm vi chi phí.

### Media CAC

`Ad Spend / New Customers attributed`

Hữu ích để đọc hiệu quả paid media.

### Blended CAC

`Tổng Marketing + Sales acquisition cost / Tổng new customers`

Có thể gần economics toàn doanh nghiệp hơn nhưng phải định nghĩa khoản nào được tính.

Nếu Finance tính full-loaded CAC còn Marketing dùng media CAC, hai số không nên được so trực tiếp.

## LTV nên dùng doanh thu hay gross profit?

Revenue LTV cho biết tổng doanh thu kỳ vọng; gross-profit/contribution LTV hữu ích hơn khi quyết định acquisition affordability.

Một mô hình đơn giản cho subscription:

`LTV ≈ ARPU × Gross Margin × Average Customer Lifetime`

Một mô hình e-commerce có thể dùng:

`LTV = Tổng gross profit tích lũy theo cohort / Số khách hàng trong cohort`

Cohort-based LTV thường đáng tin hơn một phép chia từ churn trung bình nếu hành vi khách hàng thay đổi mạnh theo thời gian.

## Vì sao cohort quan trọng?

Khách được mua trong tháng khuyến mãi có thể repeat kém hơn khách organic. Nếu gom toàn bộ lịch sử, LTV trung bình có thể che chất lượng cohort mới.

Nên theo dõi:

- Revenue 30/60/90/180 ngày;
- Gross profit tích lũy;
- Repeat rate;
- Churn/retention;
- Refund;
- Acquisition source;
- New customer segment.

## LTV/CAC là gì?

`LTV/CAC = LTV / CAC`

Tỷ lệ này giúp so giá trị dài hạn với chi phí mua khách. Tuy nhiên, một tỷ lệ đẹp có thể gây hiểu lầm nếu:

- LTV dự báo quá xa;
- Retention chưa đủ lịch sử;
- Gross margin giảm;
- CAC chỉ tính media còn LTV tính full value;
- Cash payback quá lâu.

Vì vậy LTV/CAC phải được đọc cùng payback period.

## Payback Period là gì?

Payback cho biết mất bao lâu để gross/contribution profit tích lũy bù CAC.

Nếu CAC = 1 triệu và khách tạo 250.000 đồng contribution mỗi tháng, payback lý thuyết khoảng 4 tháng nếu contribution ổn định. Thực tế cần tính theo cohort và cash flow.

Một business có LTV/CAC cao nhưng payback 24 tháng vẫn có thể căng tiền nếu phải trả Ads ngay hôm nay.

## CAC khác CPA và ROAS thế nào?

| Chỉ số | Câu hỏi |
|---|---|
| CPA | Một action tốn bao nhiêu? |
| CAC | Một khách hàng mới tốn bao nhiêu? |
| ROAS | Mỗi đồng Ads tạo bao nhiêu conversion value/revenue? |
| LTV | Một khách tạo bao nhiêu giá trị trong vòng đời? |
| Payback | Bao lâu thu hồi CAC? |

Đọc [ROAS là gì?](/blog/roas-la-gi/) và [Break-even ROAS](/blog/break-even-roas-cach-tinh/) để nối media metrics với economics.

## Cách tính CAC cho B2B

B2B sales cycle dài nên CAC thường phải gồm:

- Paid media/content acquisition;
- SDR/BDR/Sales effort tùy model;
- Agency/tool costs phân bổ;
- Event/outbound cost;
- New customers won trong cohort phù hợp.

Nếu tháng này chi acquisition nhưng deal chốt sau ba tháng, tính theo calendar month đơn giản có thể méo. Cohort theo lead/opportunity creation thường hữu ích hơn.

## Cách dùng CAC và LTV để ra quyết định

### Quyết định ngân sách

Nếu marginal CAC tăng nhưng LTV cohort mới vẫn tốt và payback chịu được, doanh nghiệp có thể tiếp tục scale.

### Quyết định segment

Một segment có CAC cao hơn nhưng retention/gross profit tốt hơn có thể đáng ưu tiên.

### Quyết định offer

Bundle/subscription có thể thay đổi AOV, retention và servicing cost, do đó thay LTV.

### Quyết định channel

Platform ROAS không đủ; hãy so new-customer CAC và downstream LTV theo source khi dữ liệu cho phép.

## Những lỗi phổ biến

- **Dùng total customers thay new customers trong CAC.**
- **Trộn revenue LTV với gross-profit CAC decision.**
- **Forecast LTV từ cohort quá trẻ.**
- **Không tính refund/churn.**
- **Không tách organic/paid khi cần.**
- **Dùng benchmark LTV/CAC như luật.**
- **Bỏ qua payback và cash flow.**

## Checklist unit economics

1. **CAC definition:** Media hay full-loaded?
2. **New customer:** Definition có thống nhất không?
3. **Cohort:** Theo acquisition month/source/segment?
4. **LTV:** Revenue hay gross/contribution profit?
5. **Horizon:** 30/90/180 ngày hay lifetime modeled?
6. **Payback:** Bao lâu thu hồi?
7. **Confidence:** Có đủ lịch sử retention không?
8. **Guardrail:** CAC tăng đến đâu thì dừng scale?

CAC và LTV hữu ích nhất khi giúp doanh nghiệp biết **mua tăng trưởng ở mức giá nào vẫn tạo giá trị**, thay vì chỉ biến thành một ratio đẹp trong deck.

### Nguồn tham khảo chính

- [Stripe — Customer acquisition cost](https://stripe.com/resources/more/customer-acquisition-cost)
- [Shopify — Customer lifetime value](https://www.shopify.com/blog/customer-lifetime-value)
- [Google Ads Help — Customer acquisition goals](https://support.google.com/google-ads/answer/12077475?hl=en)
