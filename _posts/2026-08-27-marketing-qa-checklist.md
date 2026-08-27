---
layout: post
title: "Marketing QA Checklist gồm những gì? Quy trình kiểm tra trước khi launch"
slug: marketing-qa-checklist
description: "Marketing QA Checklist gồm những gì, cách kiểm tra copy, creative, link, tracking, landing page, offer, audience, campaign setup và approval trước khi launch."
answer_summary: "Marketing QA Checklist là bộ kiểm tra trước khi publish hoặc launch nhằm giảm lỗi có thể phòng tránh như sai giá, link hỏng, crop ảnh, tracking không firing, UTM sai, targeting lệch hoặc asset chưa duyệt. Checklist tốt được chia theo risk layer và có owner ký xác nhận; nó không thay tư duy chuyên môn, nhưng giúp team không dựa vào trí nhớ ở những bước lặp lại."
target_query: "Marketing QA Checklist gồm những gì?"
date: 2026-08-27T10:16:00+07:00
date_modified: 2026-08-27T10:16:00+07:00
category: van-hanh
category_label: "Operations"
tags: ["Marketing QA","QA Checklist","Campaign Launch","Tracking QA","Marketing Operations"]
image: /assets/blog/marketing-qa-checklist-2026.svg
image_alt: "Minh họa 2D Marketing QA Checklist với copy, creative, link, tracking, campaign setup và final approval"
author: Hoàng Nguyễn Quốc Khánh
author_role: Digital Performance Marketing & Growth Lead · Founder PoB
read_time: 13
featured: false
published: true
faq:
  - question: "Marketing QA có phải chỉ kiểm tra chính tả không?"
    answer: "Không. QA nên bao phủ message, offer, creative, landing page, link, tracking, campaign settings, audience, budget, compliance và approval tùy loại launch."
  - question: "Ai chịu trách nhiệm QA campaign?"
    answer: "Nên có owner rõ theo từng lớp và một final launch owner xác nhận checklist hoàn tất. Người tự setup có thể self-QA, nhưng các hạng mục rủi ro cao nên có second pair of eyes."
  - question: "Checklist càng dài càng tốt đúng không?"
    answer: "Không. Checklist nên bám lỗi có xác suất hoặc tác động đáng kể. Danh sách quá dài với các mục ít giá trị khiến team tick máy móc và bỏ qua lỗi quan trọng."
  - question: "Có nên QA sau khi launch không?"
    answer: "Có. Pre-launch QA giảm lỗi trước khi chạy; post-launch verification xác nhận hệ thống thực tế đang phân phối, tracking, routing và reporting đúng sau khi publish."
---

## Marketing QA Checklist là gì?

**Marketing QA Checklist là danh sách kiểm tra có cấu trúc trước khi một campaign, asset, landing page, email hoặc automation được publish/launch.**

Mục tiêu của QA (Quality Assurance - Đảm bảo chất lượng) là giảm lỗi **có thể phòng tránh**.

Ví dụ:

- Sai giá;
- Sai ngày khuyến mãi;
- Link 404;
- CTA dẫn nhầm trang;
- Mobile crop mất chữ;
- Pixel không firing;
- UTM sai naming;
- Campaign chạy nhầm audience;
- Budget gấp 10 lần dự kiến;
- Email gửi nhầm segment;
- Asset chưa được approve.

Những lỗi này không đòi hỏi một chiến lược mới. Chúng đòi hỏi **quy trình kiểm tra tốt hơn**.

## QA khác Review và Approval thế nào?

### Review

Đánh giá chất lượng chuyên môn hoặc strategic fit.

### Approval

Quyết định asset có được phép đi tiếp hay không.

### QA

Kiểm tra deliverable có đúng tiêu chuẩn, setup và điều kiện kỹ thuật trước launch không.

Ba lớp có thể chồng nhau nhưng không hoàn toàn giống nhau.

Ví dụ một banner đã được Creative Director approve nhưng link trong ad vẫn có thể sai. Vì vậy approval không thay technical QA.

Đọc [Approval Workflow là gì?](/blog/approval-workflow-la-gi/) để nối hai lớp này.

## Marketing QA nên chia theo risk layer

Thay vì một checklist 100 dòng không có priority, hãy chia thành các lớp.

### Layer 1 — Business Critical

Sai có thể gây mất tiền, mất uy tín hoặc vi phạm.

- Giá;
- Offer;
- Deadline;
- Budget;
- Legal claim;
- Audience;
- Conversion event;
- Payment/checkout.

### Layer 2 — Performance Critical

Sai làm campaign kém hiệu quả.

- Tracking;
- Landing page;
- Creative format;
- CTA;
- UTM;
- Product feed;
- Bidding/optimization goal.

### Layer 3 — Experience / Polish

Sai ảnh hưởng UX hoặc thương hiệu nhưng thường ít nghiêm trọng hơn.

- Spelling;
- Alignment;
- Caption format;
- Image crop;
- Accessibility;
- Visual consistency.

Risk-based QA giúp team ưu tiên đúng khi deadline gấp.

## Checklist Copy và Content

Trước publish, kiểm tra:

- **Thông tin đúng:** Giá, ngày, feature, thông số.
- **Message đúng brief:** Không tự đổi promise.
- **CTA rõ:** Người dùng biết bước tiếp theo.
- **Spelling/grammar:** Không lỗi cơ bản.
- **Tone of voice:** Khớp brand.
- **Claims:** Có bằng chứng nếu cần.
- **Disclaimer:** Đúng vị trí và wording.
- **Link text:** Không gây hiểu nhầm.
- **Localization:** Đúng ngôn ngữ/thị trường.

Nếu content có nhiều stakeholder, dùng [Marketing Brief](/blog/marketing-brief-la-gi/) làm source of truth.

## Checklist Creative

- Đúng dimensions/ratio;
- Text nằm trong safe area;
- Mobile preview ổn;
- Logo/brand đúng;
- Font đúng;
- Không crop subject quan trọng;
- Thumbnail rõ ở kích thước nhỏ;
- Video có subtitle/caption khi cần;
- Audio/music có quyền sử dụng;
- Export quality phù hợp;
- File naming/version đúng;
- Asset đúng bản approved.

Đừng QA chỉ trên màn hình designer. Hãy preview trong **placement thực tế**.

## Checklist Landing Page

### Content

- Headline khớp ad promise;
- Offer đúng;
- CTA rõ;
- Proof đầy đủ;
- FAQ/policy đúng.

### Functional

- CTA click được;
- Form gửi được;
- Validation hoạt động;
- Thank-you page đúng;
- Email/SMS confirmation đúng;
- Checkout hoàn tất được.

### Responsive

- Desktop;
- Tablet;
- Mobile;
- Small-screen mobile.

### Technical

- HTTPS;
- Không broken asset;
- Page load hợp lý;
- Canonical/indexing theo nhu cầu;
- Cookie/consent nếu áp dụng;
- Tracking firing.

Đọc [Landing Page Optimization](/blog/landing-page-optimization-la-gi/) để đi sâu phần conversion.

## Checklist Link và UTM

Mỗi URL nên kiểm:

- Destination đúng;
- Không redirect bất ngờ;
- UTM source đúng;
- UTM medium đúng;
- UTM campaign đúng naming;
- UTM content/term dùng nhất quán;
- Không có khoảng trắng/ký tự lỗi;
- Link hoạt động ở mobile;
- Deep link hoạt động nếu có.

Có thể đối chiếu với [UTM là gì?](/blog/utm-la-gi-quy-chuan-dat-ten/).

## Checklist Tracking

Tracking QA nên kiểm bằng hành động thực, không chỉ nhìn code đã cài.

- Pageview/event firing;
- Conversion event đúng trigger;
- Value/currency đúng;
- Event name đúng;
- Parameter đúng;
- Duplicate event không xảy ra;
- Consent mode/permission đúng theo setup;
- CRM nhận lead;
- Source/campaign được lưu;
- Test transaction/lead xuất hiện trong downstream system.

Đọc [Tracking Plan GA4](/blog/tracking-plan-ga4/) và [Data Quality Audit](/blog/data-quality-audit-marketing/) để xây hệ đo lường ổn định hơn.

## Checklist Paid Ads trước launch

### Campaign level

- Objective đúng;
- Buying/bid strategy đúng;
- Budget đúng đơn vị và chu kỳ;
- Schedule đúng timezone;
- Geo đúng;
- Conversion goal đúng.

### Audience / Ad group / Ad set

- Targeting đúng;
- Exclusion đúng;
- Retargeting window đúng;
- Placement đúng;
- Frequency control nếu có;
- Audience overlap/risk đã review.

### Ad level

- Creative đúng;
- Copy đúng;
- CTA đúng;
- Destination URL đúng;
- Tracking parameters đúng;
- Preview placement ổn.

Đặc biệt với budget, nên có **second-person check** vì lỗi số 0 có thể gây thiệt hại lớn.

## Checklist Email / CRM Automation

- Segment đúng;
- Suppression list đúng;
- Subject/preheader đúng;
- Personalization fallback có;
- Link đúng;
- Unsubscribe hoạt động;
- Send time/timezone đúng;
- Automation trigger đúng;
- Delay/wait step đúng;
- Exit criteria đúng;
- Test contact đi qua flow đúng.

Automation sai có thể scale lỗi rất nhanh, nên QA phải mạnh hơn manual send.

## Pre-launch và Post-launch QA khác nhau thế nào?

### Pre-launch

Mục tiêu: bắt lỗi trước khi người dùng thấy.

### Post-launch Verification

Sau khi live, kiểm lại:

- Ad/campaign đang delivery;
- URL thật hoạt động;
- Tracking có dữ liệu;
- Lead/order vào system;
- Budget/spend hợp lý;
- Approval status đúng;
- No major rendering issue.

Một số lỗi chỉ xuất hiện khi hệ thống thực sự live.

## Cách thiết kế QA Ownership

Một mô hình tốt:

- **Creator:** Self-QA;
- **Specialist:** Technical QA theo domain;
- **Approver:** Confirm business/brand risk;
- **Launch Owner:** Final checklist sign-off.

Không nên giao QA chung chung cho “team”.

Mỗi checklist item quan trọng cần biết **ai tick và bằng chứng ở đâu**.

## QA Log nên lưu gì?

Với launch quan trọng, lưu:

- Date/time;
- Version;
- Checker;
- Item;
- Result;
- Evidence/link;
- Issue;
- Resolution;
- Final sign-off.

Log giúp retrospective và audit, đặc biệt khi có incident.

## 8 lỗi phổ biến khi dùng checklist

### Checklist quá dài

Mọi mục đều trở thành noise.

### Tick mà không test

“Tracking checked” nhưng không chạy test conversion.

### Không phân risk

Sai dấu chấm được đối xử ngang sai budget.

### Không cập nhật checklist

Lỗi mới lặp lại nhưng SOP không đổi.

### Không có owner

Ai cũng nghĩ người khác đã kiểm.

### QA chỉ trước launch

Không verify live system.

### Checklist không theo campaign type

Email, Ads và Landing có risk khác nhau.

### Không lưu evidence

Sau incident không biết đã kiểm gì.

## Mẫu Marketing QA Checklist tối giản

### Business

- Offer đúng;
- Price đúng;
- Date đúng;
- Approval đầy đủ.

### Content/Creative

- Copy đúng;
- Format đúng;
- Mobile preview ổn;
- Version approved.

### Destination

- URL hoạt động;
- Landing responsive;
- Form/checkout hoạt động.

### Measurement

- UTM đúng;
- Event firing;
- Value/source lưu đúng.

### Delivery

- Objective;
- Audience;
- Budget;
- Schedule;
- Geo;
- Bidding.

### Post-launch

- Delivery;
- Tracking;
- Lead/order routing;
- Spend sanity check.

## Checklist để cải tiến chính checklist

Mỗi khi có lỗi production, hỏi:

- Lỗi này đã có trong checklist chưa?
- Nếu có, tại sao vẫn lọt?
- Nếu chưa, có nên thêm không?
- Root cause là thiếu knowledge, ownership hay tool?
- Có thể tự động hóa validation không?

Checklist tốt **tiến hóa từ incident thật**, không phải copy một template dài trên Internet rồi giữ nguyên mãi.

### Nguồn tham khảo chính

- [Google Tag Manager Help — Preview and debug containers](https://support.google.com/tagmanager/answer/6107056)
- [Google Analytics Help — DebugView](https://support.google.com/analytics/answer/7201382)
- [Google Ads Help — Troubleshoot conversion tracking](https://support.google.com/google-ads/answer/1722021)
