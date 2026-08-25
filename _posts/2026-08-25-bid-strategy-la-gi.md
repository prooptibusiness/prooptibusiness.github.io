---
layout: post
title: "Bid Strategy là gì? Cách chọn Maximize Conversions, Target CPA và Target ROAS"
slug: bid-strategy-la-gi
description: "Bid Strategy là gì, cách chọn Maximize Conversions, Target CPA, Maximize Conversion Value, Target ROAS và khi nào nên ưu tiên volume hay value trong Google Ads."
answer_summary: "Bid Strategy là cách nền tảng quyết định mức bid để tham gia mỗi auction theo mục tiêu campaign. Trong Google Ads, Smart Bidding gồm Maximize Conversions, Target CPA, Maximize Conversion Value và Target ROAS. Chọn chiến lược đúng phải bắt đầu từ business objective, chất lượng conversion, value tracking và economics thay vì chọn target chỉ vì muốn CPA hoặc ROAS đẹp hơn."
target_query: "Bid Strategy là gì?"
date: 2026-08-25T12:06:00+07:00
date_modified: 2026-08-25T12:06:00+07:00
category: performance
category_label: "Performance"
tags: ["Bid Strategy","Smart Bidding","Target CPA","Target ROAS","Google Ads"]
image: /assets/blog/bid-strategy-2026.svg
image_alt: "Minh họa 2D Bid Strategy với auction, conversions, conversion value, Target CPA và Target ROAS"
author: Hoàng Nguyễn Quốc Khánh
author_role: Digital Performance Marketing & Growth Lead · Founder PoB
read_time: 12
featured: false
published: true
faq:
  - question: "Target CPA khác Maximize Conversions thế nào?"
    answer: "Maximize Conversions cố gắng lấy nhiều conversions nhất trong ngân sách; Target CPA thêm mục tiêu chi phí trung bình mong muốn để hệ thống cân bằng volume và cost efficiency."
  - question: "Khi nào nên dùng Target ROAS?"
    answer: "Khi conversions có giá trị khác nhau và conversion value được đo đủ tốt, Target ROAS giúp hệ thống ưu tiên giá trị thay vì chỉ tối đa số lượng conversions."
  - question: "ROAS target càng cao càng tốt đúng không?"
    answer: "Không. Target quá cao có thể hạn chế auction eligibility, volume hoặc spend. Target phải phản ánh economics và mức trade-off giữa efficiency với scale."
  - question: "Có cần nhiều conversion trước khi dùng Smart Bidding không?"
    answer: "Không nên dùng một ngưỡng cứng cho mọi case. Dữ liệu conversion càng ổn định và goal càng đúng thì model càng có tín hiệu tốt; volume, conversion delay, campaign type và value quality đều cần được xem xét."
---

## Bid Strategy là gì?

**Bid Strategy là cơ chế quyết định nền tảng sẽ bid như thế nào trong auction để đạt mục tiêu đã chọn.**

Trong Google Ads, Smart Bidding sử dụng machine learning ở auction-time để tối ưu cho conversions hoặc conversion value.

Các chiến lược chính hiện gồm:

- Maximize Conversions;
- Target CPA;
- Maximize Conversion Value;
- Target ROAS.

Google đã thay đổi cách hiển thị nhãn từ tháng 6/2026: “Maximize Conversions with Target CPA” được hiển thị thành **Target CPA**, còn “Maximize Conversion Value with Target ROAS” thành **Target ROAS**; logic bidding cốt lõi không thay đổi.

## Chọn bid strategy theo business objective

Một mapping đơn giản:

| Business goal | Bid strategy thường phù hợp |
|---|---|
| Tối đa số conversions trong budget | Maximize Conversions |
| Kiểm soát CPA trung bình | Target CPA |
| Tối đa conversion value trong budget | Maximize Conversion Value |
| Kiểm soát hiệu quả value/spend | Target ROAS |

Điểm quan trọng: **strategy phải khớp với loại dữ liệu mà business thực sự tin được.**

Nếu revenue/value tracking sai, Target ROAS có thể tối ưu rất chính xác cho một dữ liệu sai.

## Maximize Conversions dùng khi nào?

Phù hợp khi:

- Business ưu tiên volume;
- Mỗi conversion có giá trị gần nhau;
- Budget rõ;
- Conversion tracking tương đối ổn;
- Chưa cần ép một CPA target chặt.

Rủi ro thường gặp:

- Hệ thống có thể dùng hết budget;
- CPA có thể dao động;
- Nếu conversion action quá nông, volume tăng nhưng quality xấu.

Đọc [CPA là gì?](/blog/cpa-la-gi/) để đặt outcome đúng trước khi tối ưu bidding.

## Target CPA dùng khi nào?

Target CPA phù hợp khi muốn **tối đa conversions quanh một mức CPA trung bình mục tiêu**.

Target không phải trần cứng của mọi conversion.

Một số conversions có thể đắt hơn, số khác rẻ hơn; hệ thống tối ưu ở mức trung bình theo auction opportunities.

### Target CPA quá thấp có thể gây gì?

- Giảm spend;
- Giảm volume;
- Bỏ lỡ auction;
- Learning khó hơn;
- Campaign nhìn “rẻ” nhưng không scale.

Target nên xuất phát từ economics và performance thực tế, không từ mong muốn chủ quan.

## Maximize Conversion Value khác Maximize Conversions thế nào?

Maximize Conversions hỏi:

> Làm sao lấy nhiều conversions nhất?

Maximize Conversion Value hỏi:

> Làm sao lấy tổng value cao nhất trong ngân sách?

Ví dụ một cửa hàng bán sản phẩm 300.000đ và 5.000.000đ. Hai purchase không có giá trị giống nhau.

Nếu tracking revenue tốt, value-based bidding có thể phù hợp hơn conversion-count bidding.

## Target ROAS dùng khi nào?

Target ROAS phù hợp khi:

- Conversion value đáng tin;
- Order/revenue mix khác nhau;
- Business có ROAS/economics target;
- Campaign cần trade-off giữa scale và return.

Công thức:

**ROAS = Conversion Value / Ad Spend**

Nhưng business nên dùng **break-even ROAS** làm neo, không dùng một target đẹp theo cảm giác.

Đọc [ROAS là gì?](/blog/roas-la-gi/) và [Break-even ROAS](/blog/break-even-roas-cach-tinh/).

## Bid strategy và conversion goal phải khớp nhau

Google Ads cho phép campaign tối ưu dựa trên conversion goals/actions.

Nếu business đổi goal từ:

- Add to Cart → Purchase;
- Lead → Qualified Lead;
- Revenue → Profit proxy;

thì hệ thống đang học một objective mới.

Không nên đổi conversion goal liên tục rồi đánh giá bid strategy ngay lập tức.

## Khi nào nên chuyển từ volume bidding sang value bidding?

Cân nhắc khi:

- Có đủ variation về conversion value;
- Revenue/value tracking đáng tin;
- Business không muốn coi mọi conversion như nhau;
- Margin/quality có thể được phản ánh bằng value hoặc adjustment;
- Reporting đã reconcile với backend.

Nếu value data chưa tốt, conversion-based bidding có thể dễ kiểm soát hơn.

## Bid Strategy và Learning Phase

Sau thay đổi lớn về:

- Bid strategy;
- Target;
- Conversion goals;
- Budget;
- Tracking;

performance có thể cần thời gian để hệ thống thích nghi.

Không nên chỉnh target mỗi ngày vì thấy CPA/ROAS dao động ngắn hạn.

Đọc [Learning Phase là gì?](/blog/learning-phase-quang-cao-la-gi/) để hiểu nguyên tắc ổn định dữ liệu.

## Những lỗi phổ biến khi chọn Bid Strategy

- **Dùng Target ROAS khi value tracking sai:** Model học sai objective.
- **Đặt target quá chặt:** Mất volume.
- **Đổi strategy liên tục:** Không tạo baseline ổn định.
- **Chỉ nhìn platform ROAS:** Bỏ qua margin, refund, new customer mix.
- **Tối ưu lead nhưng không đo qualified lead:** CPA đẹp nhưng Sales yếu.
- **Không tính conversion delay:** Đánh giá quá sớm.
- **Copy target từ account khác:** Không cùng economics.

## Framework chọn Bid Strategy

### Câu 1: Outcome là volume hay value?

Nếu volume → Maximize Conversions / Target CPA.

Nếu value → Maximize Conversion Value / Target ROAS.

### Câu 2: Dữ liệu có đáng tin không?

Nếu không, sửa measurement trước.

### Câu 3: Business ưu tiên scale hay efficiency?

Target chặt hơn thường giảm room phân phối.

### Câu 4: Economics cho phép gì?

CPA target và ROAS target phải đi từ margin/LTV/profit.

### Câu 5: Conversion delay bao lâu?

Đánh giá theo cửa sổ đủ dài.

## Checklist trước khi đổi Bid Strategy

- Conversion action đúng chưa?
- Value đúng chưa?
- Backend có reconcile không?
- CPA/ROAS baseline là bao nhiêu?
- Break-even là bao nhiêu?
- Budget có đủ room không?
- Conversion delay bao lâu?
- Thay đổi này giải quyết vấn đề gì?
- Rule rollback là gì?

Bid Strategy tốt không phải strategy có tên “nâng cao” nhất. Đó là strategy **khớp nhất với dữ liệu, mục tiêu và economics hiện tại của doanh nghiệp**.

### Nguồn tham khảo chính

- [Google Ads Help — Your guide to Smart Bidding](https://support.google.com/google-ads/answer/11095984)
- [Google Ads Help — Pick the right bid strategy](https://support.google.com/google-ads/answer/6167148)
- [Google Ads Help — Changes to how Smart Bidding strategies are organized](https://support.google.com/google-ads/answer/10353027)
