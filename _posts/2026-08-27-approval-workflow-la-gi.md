---
layout: post
title: "Approval Workflow là gì? Thiết kế luồng duyệt không gây nghẽn Marketing"
slug: approval-workflow-la-gi
description: "Approval Workflow là gì, cách thiết kế owner, reviewer, SLA, version control và escalation để asset được duyệt nhanh mà vẫn kiểm soát chất lượng."
answer_summary: "Approval Workflow là luồng quy định ai tạo, ai review, ai có quyền duyệt cuối, duyệt theo tiêu chí nào và trong bao lâu. Một luồng duyệt tốt giảm vòng sửa, tránh feedback mâu thuẫn và ngăn asset nằm chờ không rõ trách nhiệm. Mục tiêu không phải thêm nhiều lớp kiểm soát, mà đưa đúng quyết định đến đúng người ở đúng thời điểm."
target_query: "Approval Workflow là gì?"
date: 2026-08-27T10:04:00+07:00
date_modified: 2026-08-27T10:04:00+07:00
category: van-hanh
category_label: "Operations"
tags: ["Approval Workflow","Marketing Operations","Creative Review","Workflow","Governance"]
image: /assets/blog/approval-workflow-2026.svg
image_alt: "Minh họa 2D Approval Workflow với creator, reviewer, approver, SLA và vòng revision"
author: Hoàng Nguyễn Quốc Khánh
author_role: Digital Performance Marketing & Growth Lead · Founder PoB
read_time: 12
featured: false
published: true
faq:
  - question: "Reviewer và Approver khác nhau thế nào?"
    answer: "Reviewer đóng góp chuyên môn hoặc kiểm tra một khía cạnh; Approver có quyền quyết định cuối để asset đi tiếp. Nếu nhiều người đều tưởng mình là approver, workflow rất dễ nghẽn."
  - question: "Approval Workflow nên có bao nhiêu lớp duyệt?"
    answer: "Ít nhất có thể nhưng đủ để kiểm soát rủi ro. Asset low-risk có thể chỉ cần một approver; nội dung pháp lý, tài chính hoặc brand-sensitive có thể cần thêm specialist review."
  - question: "Làm sao giảm vòng sửa qua lại?"
    answer: "Khóa brief, tiêu chí duyệt và owner trước production; gom feedback theo một vòng; dùng một source of truth và phân biệt must-fix với preference."
  - question: "Nếu người duyệt phản hồi trễ thì sao?"
    answer: "Workflow nên có SLA, reminder và escalation path. Nếu approval là dependency trên critical path, thời gian chờ duyệt phải được quản trị như một phần của project chứ không xem là thời gian 'ngoài quy trình'."
---

## Approval Workflow là gì?

**Approval Workflow là luồng quy định asset hoặc quyết định phải đi qua ai, theo thứ tự nào, dựa trên tiêu chí gì và trong bao lâu trước khi được xem là approved.**

Một workflow đơn giản có thể là:

**Creator → Reviewer → Final Approver → Publish**

Một workflow phức tạp hơn có thể là:

**Creator → Marketing Review → Brand Review → Legal Review → Final Approver → Publish**

Điểm quan trọng không phải có nhiều bước. Điểm quan trọng là mỗi bước **có purpose, owner và exit criteria rõ**.

Nếu không, “duyệt” dễ biến thành vùng xám nơi asset nằm im trong chat, mỗi người feedback một kiểu và không ai biết khi nào đủ điều kiện publish.

## Vì sao Approval Workflow thường trở thành bottleneck?

### Không phân biệt Reviewer và Approver

Reviewer có thể góp ý. Approver có quyền chốt.

Nếu 5 reviewer đều có quyền veto ngầm, asset gần như không có final decision owner.

### Feedback đến theo nhiều kênh

Một người comment Figma, một người nhắn Zalo, một người email, một người gọi điện.

Creator phải tự tổng hợp và có nguy cơ bỏ sót.

### Không có SLA

Không ai biết “duyệt sớm” nghĩa là bao lâu.

### Không có tiêu chí duyệt

Feedback chuyển thành sở thích:

- “Màu này chưa sang.”
- “Chữ này hơi to.”
- “Tôi thấy chưa wow.”

Trong khi mục tiêu đáng ra là kiểm tra brand, message, offer, format và compliance.

### Brief thay đổi trong lúc review

Asset bị đánh giá theo một bài toán mới mà creator chưa từng nhận.

## Cách phân vai trong luồng duyệt

Một mô hình thực tế:

| Vai trò | Trách nhiệm |
|---|---|
| Creator | Tạo deliverable theo brief |
| Reviewer | Kiểm tra chuyên môn được giao |
| Consolidator | Gom feedback thành một bộ thống nhất |
| Approver | Chốt pass/revise/reject |
| Publisher | Thực hiện publish/launch sau approval |

Trong team nhỏ, một người có thể giữ nhiều vai trò. Nhưng **vai trò logic vẫn nên rõ**, đặc biệt giữa reviewer và approver.

Có thể kết hợp với [RACI trong Marketing](/blog/raci-trong-marketing/) để tránh “tất cả cùng chịu trách nhiệm”.

## Approval Criteria nên được viết thế nào?

Thay vì duyệt bằng cảm giác, hãy chia criteria theo lớp.

### Strategy Fit

- Đúng objective chưa?
- Đúng audience chưa?
- Message có đúng brief không?
- CTA có đúng funnel stage không?

### Brand Fit

- Tone of voice đúng chưa?
- Visual có đúng guideline không?
- Logo, font, màu, cách gọi sản phẩm có chuẩn không?

### Accuracy

- Giá, ngày, thông số, ưu đãi có đúng không?
- Claims có nguồn không?
- Link có đúng không?

### Compliance

- Có cần legal disclaimer không?
- Có nội dung nhạy cảm hoặc claim rủi ro không?
- Platform policy có yêu cầu gì?

### Technical QA

- Kích thước đúng placement chưa?
- File naming đúng chưa?
- Mobile crop ổn không?
- Tracking/link/UTM đúng chưa?

Khi criteria rõ, feedback dễ chuyển từ “tôi thích/không thích” sang “pass/fail theo tiêu chuẩn”.

## Approval Workflow 5 trạng thái đủ dùng

Một trạng thái quá chi tiết làm board rối. Nhiều team chỉ cần:

1. **Draft** — Đang sản xuất.
2. **Ready for Review** — Creator xác nhận đủ điều kiện review.
3. **In Review** — Reviewer/approver đang xử lý.
4. **Changes Requested** — Có yêu cầu sửa cụ thể.
5. **Approved** — Có thể publish/launch.

Nếu cần thêm, có thể có **Blocked** hoặc **Legal Review** cho use case đặc thù.

## Cách xử lý feedback mâu thuẫn

Creator không nên tự làm trọng tài giữa hai stakeholder ngang quyền.

Workflow nên có **Feedback Consolidator** hoặc Final Approver chịu trách nhiệm resolve conflict.

Ví dụ:

- Brand muốn tone mềm;
- Performance muốn hook trực diện;
- Legal muốn giảm claim.

Final decision cần dựa trên hierarchy:

**Compliance → Business/Strategy → Brand → Optimization preference.**

Thứ tự có thể khác theo doanh nghiệp, nhưng phải được biết trước.

## SLA trong Approval Workflow nên đặt ra sao?

SLA (Service Level Agreement - Cam kết mức dịch vụ) không cần quá phức tạp.

Ví dụ:

- Social post thường: 1 ngày làm việc;
- Ad creative launch gấp: 4 giờ;
- Landing page: 2 ngày;
- Legal-sensitive asset: 3 ngày.

Quan trọng là:

- Clock bắt đầu khi nào?
- Asset phải đủ điều kiện gì mới vào SLA?
- Ai được nhắc?
- Khi quá hạn escalate tới ai?

Đọc thêm [SLA Marketing–Sales là gì?](/blog/sla-marketing-sales-la-gi/) để hiểu logic service expectation giữa các team.

## Version Control trong duyệt asset

Một approval system tốt cần một **single source of truth**.

Tránh:

- `final.psd`
- `final_v2.psd`
- `final_v2_revised.psd`
- `final_v2_revised_OK.psd`
- `final_v2_revised_OK_LAST.psd`

Nên dùng version rõ:

- V0.1 — First draft;
- V0.2 — Revised;
- V1.0 — Approved for launch;
- V1.1 — Minor approved update.

Mỗi approval nên gắn với **đúng version**. Một asset V1.0 approved không đồng nghĩa V1.1 tự động approved nếu nội dung thay đổi đáng kể.

## Approval Workflow cho campaign nhanh nên thiết kế thế nào?

Speed không đến từ bỏ kiểm soát. Speed đến từ **giảm decision latency**.

Một fast-track workflow có thể là:

- Brief đã khóa;
- One owner;
- One approver;
- Feedback gom một lần;
- SLA 2–4 giờ;
- Pre-approved brand components;
- Checklist QA trước submit;
- Chỉ escalate exception.

Nếu mỗi post đều phải qua 5 người, quy trình không phù hợp risk level.

## Khi nào nên thêm Legal hoặc Leadership Review?

Không phải mọi asset đều cần CEO xem.

Nên thêm lớp duyệt khi có rủi ro như:

- Claim sức khỏe/tài chính;
- Thông tin pháp lý;
- Crisis communication;
- Partnership lớn;
- Brand repositioning;
- PR có tác động danh tiếng;
- Khuyến mãi có điều kiện phức tạp.

Còn các asset vận hành thường ngày nên được **ủy quyền bằng guideline** thay vì kéo lãnh đạo vào micro-approval.

## 7 lỗi thường gặp khi thiết kế Approval Workflow

### Quá nhiều Approver

Nhiều người tham gia nhưng không ai có final say.

### Không có due date cho review

Deadline chỉ nằm ở creator, không nằm ở reviewer.

### Submit asset chưa QA

Reviewer phải sửa lỗi chính tả, link, kích thước — những thứ creator có thể tự kiểm.

### Feedback không được consolidate

Creator nhận 20 comment rời rạc và tự đoán priority.

### Brief và approval criteria không liên kết

Reviewer yêu cầu thêm thứ ngoài scope.

### Approve bằng chat nhưng không cập nhật system

Board vẫn “In Review”, publisher không biết có thể launch chưa.

### Không có escalation

Asset trễ nhưng team chỉ tiếp tục nhắc trong im lặng.

## Mẫu Approval Workflow cho Marketing

**Bước 1 — Creator self-QA**

Dùng checklist trước submit.

**Bước 2 — Specialist review**

Chỉ reviewer thật sự cần thiết tham gia.

**Bước 3 — Consolidate feedback**

Một owner gom feedback và loại trùng/mâu thuẫn.

**Bước 4 — Revision**

Creator sửa theo priority.

**Bước 5 — Final approval**

Approver chốt version.

**Bước 6 — Publish handoff**

Link approved asset, caption, tracking, schedule được bàn giao.

**Bước 7 — Archive decision**

Lưu version và approval log để audit khi cần.

## Checklist trước khi triển khai Approval Workflow

- Asset nào cần duyệt?
- Ai là reviewer chuyên môn?
- Ai là final approver?
- Criteria duyệt là gì?
- SLA review bao lâu?
- Feedback nằm ở đâu?
- Ai consolidate?
- Version nào là canonical?
- Khi quá SLA escalate tới ai?
- Approved status có tự kích hoạt handoff tiếp theo không?

Approval Workflow tốt làm team **duyệt ít vòng hơn nhưng quyết định rõ hơn**. Nó không loại bỏ feedback; nó làm feedback có cấu trúc và có trách nhiệm.

### Nguồn tham khảo chính

- [Asana — Approval process guidance](https://asana.com/resources/approval-process)
- [Atlassian — Workflows and workflow management](https://www.atlassian.com/software/jira/guides/workflows/overview)
- [Adobe Workfront — Review and approval workflows](https://experienceleague.adobe.com/en/docs/workfront/using/review-and-approve-work)
