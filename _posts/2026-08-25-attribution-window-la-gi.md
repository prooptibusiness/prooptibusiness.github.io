---
layout: post
title: "Attribution Window là gì? Phân biệt Conversion Window và Lookback Window"
slug: attribution-window-la-gi
description: "Attribution Window là gì, cách phân biệt conversion window, lookback window và attribution model; cách chọn cửa sổ đo lường theo purchase cycle và conversion delay."
answer_summary: "Attribution Window thường được dùng để nói khoảng thời gian mà ad interaction còn có thể nhận credit cho conversion. Trong Google Ads cần phân biệt Conversion Window — thời gian sau interaction mà conversion được ghi nhận — với Lookback Window trong Attribution reports — khoảng nhìn ngược từ conversion để xem các touchpoint đủ điều kiện nhận credit. Hai khái niệm liên quan nhưng không giống nhau."
target_query: "Attribution Window là gì?"
date: 2026-08-25T12:16:00+07:00
date_modified: 2026-08-25T12:16:00+07:00
category: performance
category_label: "Performance"
tags: ["Attribution Window","Conversion Window","Lookback Window","Attribution","Measurement"]
image: /assets/blog/attribution-window-2026.svg
image_alt: "Minh họa 2D Attribution Window với ad click, touchpoints, conversion và cửa sổ thời gian đo lường"
author: Hoàng Nguyễn Quốc Khánh
author_role: Digital Performance Marketing & Growth Lead · Founder PoB
read_time: 12
featured: false
published: true
faq:
  - question: "Attribution Window và Conversion Window có giống nhau không?"
    answer: "Trong cách nói đời thường chúng đôi khi bị dùng lẫn, nhưng trong Google Ads Conversion Window là khoảng thời gian sau ad interaction mà conversion được ghi nhận; Lookback Window trong Attribution reports là khoảng thời gian nhìn ngược từ conversion để xét touchpoint."
  - question: "Conversion Window càng dài càng tốt đúng không?"
    answer: "Không. Window dài có thể ghi nhận nhiều conversions hơn nhưng cũng làm báo cáo rộng hơn so với purchase cycle thực. Window nên phản ánh time-to-convert và mục tiêu đo lường."
  - question: "Đổi Conversion Window có áp dụng ngược cho dữ liệu cũ không?"
    answer: "Google Ads cho biết thay đổi window áp dụng cho conversions được ghi nhận từ thời điểm thay đổi trở đi; không nên giả định toàn bộ lịch sử sẽ được tính lại như cũ."
  - question: "Attribution Model và Attribution Window khác nhau thế nào?"
    answer: "Window quyết định touchpoint/conversion có nằm trong phạm vi thời gian được xét hay không; attribution model quyết định cách phân bổ credit giữa các touchpoints đủ điều kiện."
---

## Attribution Window là gì?

**Attribution Window là khái niệm về khoảng thời gian mà một interaction quảng cáo còn được xét khi ghi nhận hoặc phân bổ credit cho conversion.**

Trong thực tế các nền tảng dùng thuật ngữ khác nhau, nên cần tách ít nhất ba lớp:

1. **Conversion Window** — conversion có còn được ghi nhận sau interaction không?
2. **Lookback Window** — attribution report nhìn ngược bao xa từ conversion?
3. **Attribution Model** — credit được chia như thế nào giữa touchpoints?

Nếu trộn ba lớp này, team rất dễ so dashboard sai.

## Conversion Window là gì?

Google Ads định nghĩa Conversion Window là khoảng thời gian sau một ad interaction — như click hoặc video view — mà conversion vẫn được ghi nhận.

Ví dụ:

- Click ngày 1;
- Window 30 ngày;
- Purchase ngày 20;

→ conversion có thể được ghi nhận nếu đáp ứng các điều kiện tracking khác.

Nếu purchase xảy ra ngoài window, conversion đó không được ghi vào Google Ads cho interaction này.

Google Ads cho phép thiết lập window khác nhau tùy conversion source/type, trong phạm vi hỗ trợ của từng loại.

## Lookback Window là gì?

Trong Attribution reports, Lookback Window quyết định **nhìn ngược từ conversion bao nhiêu ngày để xét các ad interactions trong path**.

Ví dụ conversion xảy ra ngày 30/8, lookback 30 ngày:

- Touchpoint từ 1/8 trở đi có thể nằm trong path;
- Touchpoint tháng 6 không nằm trong phạm vi report đó.

Google Ads lưu ý Lookback Window **khác Conversion Window**.

Đây là khác biệt rất quan trọng khi team đọc assisted paths.

## Attribution Model là gì?

Attribution Model quyết định credit được phân bổ giữa các interactions đủ điều kiện.

Google Ads hiện hỗ trợ các mô hình phù hợp theo conversion action, trong đó Data-Driven Attribution dùng dữ liệu tài khoản để ước tính đóng góp của các interactions; Last Click là một mô hình rules-based.

Model ảnh hưởng đến:

- Reporting conversion credit;
- Conversions column;
- Automated bidding sử dụng conversion data.

Đọc [Attribution Marketing](/blog/attribution-marketing-last-click-data-driven-incrementality/) để đi sâu model comparison và incrementality.

## Vì sao Attribution Window ảnh hưởng số conversion?

Window ngắn hơn có thể loại những conversions có conversion lag dài.

Ví dụ:

### Sản phẩm giá thấp

Khách thường mua trong 1–3 ngày.

Window 30 ngày có thể rộng hơn nhiều so với hành vi thực, dù vẫn hữu ích để quan sát tail.

### B2B high-ticket

Khách có thể cần 30–90 ngày hoặc hơn.

Window quá ngắn sẽ bỏ các conversions đến muộn và làm paid media nhìn yếu hơn.

Vì vậy window phải đi từ **purchase cycle**, không đi từ default UI.

## Cách chọn Conversion Window theo dữ liệu

### 1. Xem Time Lag

Google Ads Attribution reports có Time Lag để hiểu khoảng cách giữa interaction và conversion.

### 2. Xem purchase cycle thực

CRM/order data quan trọng hơn chỉ nhìn Ads Manager.

### 3. Tách conversion type

Lead submit có thể xảy ra nhanh, closed deal xảy ra chậm.

Hai conversion actions có thể cần logic window khác nhau.

### 4. Đọc theo platform

Không giả định Meta, Google, TikTok có cùng default hoặc cùng cơ chế click/view attribution.

## Click-through, Engaged-view và View-through khác nhau thế nào?

Google Ads tách các loại window theo interaction.

### Click-through conversion window

Theo dõi conversion sau click.

### Engaged-view conversion window

Dùng trong video context khi user xem đủ mức engagement rồi convert sau đó mà không click theo logic hỗ trợ.

### View-through conversion window

Theo dõi conversion sau impression mà không có click phù hợp theo định nghĩa platform.

Các window này không nên gộp thành một con số duy nhất khi phân tích incrementality.

## Vì sao Window dài dễ làm platform ROAS nhìn đẹp hơn?

Window dài có nhiều cơ hội nhận credit hơn.

Đặc biệt với:

- Retargeting;
- Brand search;
- Existing customer-heavy campaigns;
- View-through attribution.

Một conversion có thể vốn sẽ xảy ra do organic/direct nhưng vẫn nằm trong window của ad interaction.

Đây là lý do platform attribution không đồng nghĩa causal incrementality.

## Retargeting và Attribution Window

Retargeting thường chạm người ở gần conversion hơn.

Nếu dùng window dài:

- Retargeting có thể nhận credit cho nhiều purchase;
- ROAS nhìn rất cao;
- Prospecting có vẻ kém hơn;
- Budget dễ bị dồn về lower funnel.

Đọc [Retargeting là gì?](/blog/retargeting-la-gi/) để tránh tối ưu chỉ theo last-touch outcome.

## Bid Strategy có bị ảnh hưởng bởi Attribution Model/Window không?

Có thể.

Google Ads nêu rõ attribution model tác động đến conversion data và các bid strategies sử dụng cột Conversions.

Conversion window cũng quyết định conversion nào được ghi nhận và dùng trong optimization theo phạm vi hỗ trợ.

Vì vậy đổi model/window không chỉ là “đổi báo cáo”. Nó có thể làm dataset mà bidding nhìn vào thay đổi.

## Khi đổi Window cần làm gì?

- Ghi log ngày thay đổi;
- Không so trước/sau như thể definition giống nhau;
- Theo dõi conversion delay;
- Không đổi model/window cùng lúc nếu không cần;
- Reconcile CRM/backend;
- Cập nhật dashboard definitions;
- Báo cho stakeholder biết metric definition đã đổi.

Google Ads cho biết thay đổi conversion window áp dụng cho conversions được ghi nhận về sau theo rule mới, nên history có thể không hoàn toàn comparable.

## Những lỗi Attribution Window phổ biến

- **Dùng default mà không xem time lag:** Không phản ánh cycle.
- **So platform khác window:** Apple-to-orange.
- **Nhầm lookback với conversion window:** Sai interpretation.
- **Window dài để làm đẹp ROAS:** Không giải quyết incrementality.
- **Đổi window giữa campaign test:** Mất comparability.
- **Không tách click/view:** Credit quality khác nhau.
- **Không document setting:** Team không biết số thay đổi vì đâu.

## Checklist Attribution Window

- Conversion cycle trung vị là bao lâu?
- 80–90% conversions xảy ra trong bao nhiêu ngày?
- Click/view/engaged-view đang dùng window gì?
- Lookback report là bao nhiêu?
- Attribution model hiện tại là gì?
- Window có khác giữa platforms không?
- Bidding có dùng conversion action này không?
- Retargeting có đang nhận quá nhiều credit không?
- CRM/backend có confirm conversion timing không?

Attribution Window tốt không phải window “rộng nhất”, mà là **window đủ để phản ánh hành trình thực nhưng vẫn giữ báo cáo có ý nghĩa cho quyết định media**.

### Nguồn tham khảo chính

- [Google Ads Help — About conversion windows](https://support.google.com/google-ads/answer/3123169)
- [Google Ads Help — About attribution models](https://support.google.com/google-ads/answer/6259715)
- [Google Ads Help — About attribution reports](https://support.google.com/google-ads/answer/1722023)
