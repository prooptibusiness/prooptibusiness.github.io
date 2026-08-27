---
layout: post
title: "Capacity Planning là gì? Cách biết team Marketing có đang quá tải"
slug: capacity-planning-la-gi
description: "Capacity Planning là gì, cách tính thời gian khả dụng, workload, buffer và WIP để biết team Marketing có đủ năng lực nhận thêm campaign hay đang quá tải."
answer_summary: "Capacity Planning là quá trình ước tính năng lực thực tế của team trong một khoảng thời gian rồi so với khối lượng công việc đã cam kết. Với Marketing, capacity không chỉ là số giờ làm việc; cần trừ họp, BAU, nghỉ phép, context switching và giữ buffer cho việc phát sinh. Mục tiêu là nhận việc theo năng lực thật thay vì theo lịch trống trên giấy."
target_query: "Capacity Planning là gì?"
date: 2026-08-27T10:10:00+07:00
date_modified: 2026-08-27T10:10:00+07:00
category: van-hanh
category_label: "Operations"
tags: ["Capacity Planning","Marketing Operations","Workload","Resource Planning","Team Management"]
image: /assets/blog/capacity-planning-2026.svg
image_alt: "Minh họa 2D Capacity Planning với available hours, workload, buffer và overload threshold"
author: Hoàng Nguyễn Quốc Khánh
author_role: Digital Performance Marketing & Growth Lead · Founder PoB
read_time: 12
featured: false
published: true
faq:
  - question: "Capacity Planning khác Resource Planning thế nào?"
    answer: "Capacity Planning hỏi team có bao nhiêu năng lực khả dụng; Resource Planning hỏi nên phân người, kỹ năng, thời gian và ngân sách đó vào việc nào. Capacity là giới hạn, resource plan là cách phân bổ trong giới hạn đó."
  - question: "Có nên tính 8 giờ/ngày là capacity không?"
    answer: "Không nên. Giờ làm việc danh nghĩa còn bị trừ bởi họp, BAU, nghỉ phép, admin, support và context switching. Capacity hữu dụng phải phản ánh thời gian thực có thể dành cho project."
  - question: "Team luôn dùng 100% capacity có tốt không?"
    answer: "Không. Nếu không có buffer, chỉ một thay đổi nhỏ hoặc việc gấp cũng gây domino trễ hạn. Team tri thức thường cần vùng đệm để xử lý bất định và deep work."
  - question: "Làm sao biết team đang overload?"
    answer: "Dấu hiệu gồm WIP tăng, deadline trượt, vòng sửa kéo dài, meeting nhiều, làm ngoài giờ, việc khẩn liên tục chen vào và quality issue tăng. Nên xác nhận bằng workload data thay vì chỉ cảm giác bận."
---

## Capacity Planning là gì?

**Capacity Planning là quá trình xác định team thực sự có bao nhiêu năng lực để nhận và hoàn thành công việc trong một khoảng thời gian.**

Trong Marketing, capacity có thể được đo bằng:

- Giờ khả dụng;
- Story points hoặc effort points;
- Số deliverables theo loại;
- Số campaign có thể vận hành đồng thời;
- Năng lực theo skill như Design, Copy, Media, Data.

Điểm khó là **capacity không bằng tổng giờ hợp đồng lao động**.

Một người làm 40 giờ/tuần không có nghĩa có 40 giờ project capacity.

## Capacity khả dụng nên tính thế nào?

Một công thức đơn giản:

**Available Capacity = Working Time − BAU − Meetings − Admin − Leave − Buffer**

Ví dụ một specialist có 40 giờ/tuần:

- 8 giờ BAU và monitoring;
- 5 giờ meeting;
- 3 giờ admin/support;
- 4 giờ buffer.

Project capacity thực còn khoảng 20 giờ.

Nếu manager lên plan dựa trên 40 giờ, team đã overload ngay từ lúc lập kế hoạch.

## Vì sao Marketing đặc biệt dễ sai Capacity Planning?

### Công việc có nhiều dependency

Designer chờ copy, Media chờ creative, Content chờ approval.

Thời gian chờ không phải lúc nào cũng biến thành thời gian productive khác.

### Context switching cao

Một người chạy 7 campaign nhỏ không nhất thiết hiệu quả hơn chạy 2 campaign lớn, dù tổng giờ task nhìn tương đương.

### BAU bị xem nhẹ

BAU (Business as Usual - Công việc vận hành thường xuyên) như monitoring, comment, report, CRM hygiene và update stakeholder vẫn tiêu tốn capacity.

### Việc gấp chen liên tục

Flash sale, crisis, price update, lỗi tracking hoặc yêu cầu lãnh đạo có thể phá kế hoạch nếu không có buffer.

## Capacity Planning nên làm theo skill, không chỉ theo headcount

Ba người không đồng nghĩa ba đơn vị capacity giống nhau.

Ví dụ team có:

- 1 Designer;
- 2 Content;
- 1 Performance;
- 1 Data Analyst.

Nếu roadmap tháng tới cần 40 video ads, bottleneck có thể là design/video chứ không phải tổng headcount.

Hãy lập capacity theo **skill pool**:

| Skill | Capacity | Demand | Gap |
|---|---:|---:|---:|
| Copy | 80h | 65h | +15h |
| Design | 70h | 110h | -40h |
| Media | 90h | 80h | +10h |
| Analytics | 50h | 55h | -5h |

Bảng này giúp biết cần cắt scope, đổi priority, thuê vendor hay dời deadline ở đâu.

## Utilization có nên càng cao càng tốt?

Không.

Utilization quá thấp lâu dài có thể là lãng phí. Nhưng utilization 100% cũng tạo rủi ro lớn.

Khi mọi người được book kín 100%:

- Không còn chỗ cho incident;
- Không có thời gian học/QA;
- Delay nhỏ lan thành delay lớn;
- Context switching tăng;
- Quality dễ giảm.

Capacity Planning nên giữ **buffer có chủ đích**, đặc biệt ở team có nhiều công việc bất định.

## WIP ảnh hưởng Capacity như thế nào?

WIP (Work in Progress - Công việc đang thực hiện) quá cao làm nhiều việc cùng mở nhưng ít việc hoàn thành.

Ví dụ một designer có 12 task đang Doing:

- Mỗi task chờ feedback;
- File/context khác nhau;
- Priority đổi liên tục.

Dù tổng effort không đổi, throughput có thể giảm vì switching và queue.

Đây là lý do Kanban thường dùng WIP limits để khuyến khích **finish before start**.

## Cách forecast capacity cho tháng tới

### Bước 1 — Xác định calendar capacity

Số ngày làm việc thực tế theo từng người/skill.

### Bước 2 — Trừ fixed load

BAU, meeting, report, support, recurring tasks.

### Bước 3 — Trừ leave và known events

Nghỉ phép, training, company event.

### Bước 4 — Giữ buffer

Theo mức biến động của team.

### Bước 5 — Ước tính demand

Project/campaign nào đã committed, effort bao nhiêu.

### Bước 6 — So gap

Nếu demand > capacity, phải ra quyết định trước khi tháng bắt đầu.

## Khi demand vượt capacity, có 6 lựa chọn

Không phải lúc nào cũng “cố thêm”.

1. **Giảm scope:** Bỏ deliverable ít impact.
2. **Dời deadline:** Nếu business cho phép.
3. **Đổi priority:** Tạm dừng initiative khác.
4. **Tăng resource ngắn hạn:** Freelancer/agency.
5. **Tự động hóa/chuẩn hóa:** Giảm effort lặp lại.
6. **Chấp nhận trade-off chất lượng có kiểm soát:** Chỉ khi rủi ro phù hợp.

Quyết định nên được ghi rõ thay vì để team tự absorb bằng overtime.

## Capacity Planning và Project Management nối nhau thế nào?

[Project Management trong Marketing](/blog/project-management-marketing-la-gi/) cho biết **việc gì cần làm và khi nào**.

Capacity Planning cho biết **team có đủ khả năng làm không**.

Nếu hai hệ không nối nhau, roadmap luôn đẹp nhưng execution luôn trễ.

Một project chỉ nên được committed khi:

- Scope rõ;
- Effort ước tính;
- Skill capacity đủ;
- Dependency có owner;
- Buffer hợp lý.

## Dấu hiệu capacity model đang sai

- Plan tháng nào cũng full nhưng thực tế luôn overtime;
- Designer/Analyst luôn là bottleneck;
- Task carry-over tăng liên tục;
- Urgent work chiếm phần lớn tuần;
- Meeting load không được tính;
- Estimate chỉ do manager đặt;
- Không đo actual effort để recalibrate.

Capacity model tốt cần học từ dữ liệu actual.

## Checklist Capacity Planning hàng tháng

- Working days thực tế là bao nhiêu?
- BAU chiếm bao nhiêu?
- Meeting load bao nhiêu?
- Leave đã trừ chưa?
- Buffer có đủ không?
- Demand theo từng skill là bao nhiêu?
- Bottleneck nằm ở đâu?
- WIP có quá cao không?
- Project nào cần defer/cut scope?
- Actual tháng trước lệch forecast bao nhiêu?

Capacity Planning không nhằm ép team sản xuất tối đa. Nó giúp doanh nghiệp **cam kết trong giới hạn thật và chủ động trade-off trước khi quá tải biến thành lỗi chất lượng**.

### Nguồn tham khảo chính

- [Atlassian — Capacity planning](https://www.atlassian.com/agile/project-management/capacity-planning)
- [Asana — Capacity planning](https://asana.com/resources/capacity-planning)
- [Project Management Institute — Resource management standards](https://www.pmi.org/pmbok-guide-standards)
