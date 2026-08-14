---
title: "Claude Code Playbook thực chiến: từ yêu cầu đến pull request an toàn"
slug: claude-code-playbook-thuc-chien
description: "Playbook dùng Claude Code theo vòng lặp plan, sửa nhỏ, test, review và bàn giao; tập trung context, sandbox, MCP, bảo mật và tiêu chí hoàn tất."
answer_summary: "Claude Code hiệu quả nhất khi được giao một task contract rõ, đọc context tối thiểu, lập kế hoạch, tạo diff nhỏ, chạy kiểm thử và tự giải thích bằng chứng. Sandbox và quyền công cụ giúp giảm rủi ro; review của con người vẫn cần cho thay đổi quan trọng."
target_query: "Dùng Claude Code như thế nào để vừa nhanh vừa an toàn?"
date: 2026-08-14 00:08:00 +0700
date_modified: 2026-08-14 00:08:00 +0700
category: ai-marketing
category_label: AI & Automation
tags: ["Claude Code","AI Coding","Agentic Coding","Software Engineering"]
image: /pob-learning-lab.webp
image_alt: "Sơ đồ hệ thống AI, dữ liệu và quy trình vận hành dành cho doanh nghiệp"
author: Hoàng Nguyễn Quốc Khánh
author_role: Digital Performance Marketing & Growth Lead · Founder PoB
read_time: 11
featured: false
published: true
faq:
  - question: "Claude Code có thay thế code review không?"
    answer: "Không. Nó có thể tự rà soát và chạy test, nhưng người chịu trách nhiệm vẫn cần review logic, bảo mật, dữ liệu và tác động sản phẩm."
  - question: "Có nên cấp toàn quyền terminal ngay từ đầu?"
    answer: "Không. Bắt đầu với workspace giới hạn, network allowlist và lệnh an toàn; mở thêm quyền theo nhu cầu và bằng chứng."
  - question: "MCP có an toàn mặc định không?"
    answer: "Không. MCP giúp kết nối tool và dữ liệu, nhưng mỗi server vẫn cần đánh giá nguồn, quyền, dữ liệu trả về và khả năng prompt injection."
---

## Claude Code nên được dùng theo vòng lặp nào?

**Vòng lặp thực dụng là: hiểu → lập kế hoạch → sửa nhỏ → kiểm thử → review → bàn giao.** Bỏ một bước thường tạo cảm giác nhanh trong phiên nhưng đẩy chi phí sang lúc debug hoặc production.

[Claude Code quickstart](https://docs.anthropic.com/en/docs/claude-code/getting-started) hướng dẫn cách làm việc trực tiếp với codebase. Phần quan trọng hơn lệnh cài đặt là cách chuẩn bị context và quyền để agent có thể hành động mà không làm phạm vi phình ra.

## Bước 1 — Viết task contract thay vì prompt mơ hồ

Một task contract nên có:

- outcome người dùng cần;
- file hoặc module liên quan;
- hành vi hiện tại và mong muốn;
- điều không được thay đổi;
- lệnh test/lint/build;
- tiêu chí hoàn tất có thể quan sát.

“Fix mobile” chưa đủ. “Ở viewport 390px, bảng trong bài cuộn ngang bên trong, body không tràn; desktop không đổi; chạy test X” rõ hơn nhiều.

## Bước 2 — Cho agent đọc bản đồ, không đọc cả thế giới

Đưa README, hướng dẫn repo, cấu trúc thư mục và file gần lỗi. Yêu cầu tìm bằng chứng trước khi sửa. Với monorepo, giới hạn package hoặc workspace.

File hướng dẫn dự án nên ghi lệnh chuẩn, quy ước code, vùng cấm và cách test. Nhưng đừng để file thành tiểu thuyết; thông tin hết hạn cũng là context xấu.

## Bước 3 — Plan trước với task có nhiều phụ thuộc

Plan tốt nêu file sẽ chạm, giả định, rủi ro và test. Không cần plan dài cho sửa typo; cần plan cho migration, auth, dữ liệu hoặc luồng nhiều hệ thống.

## Bước 4 — Chia diff nhỏ và giữ quyền tối thiểu

[Anthropic mô tả sandboxing](https://www.anthropic.com/engineering/claude-code-sandboxing) bằng cách cô lập filesystem và network, giúp giảm prompt xin quyền trong khi vẫn giữ ranh giới. Thực hành nên gồm:

1. workspace hoặc container riêng;
2. secret không xuất hiện trong prompt/log;
3. network allowlist;
4. không chạy lệnh xóa rộng;
5. xác nhận trước thao tác publish, migration hoặc chi phí.

## Bước 5 — Test là bằng chứng, không phải nghi thức

Yêu cầu agent chạy test liên quan trước, rồi test rộng hơn. Nếu không có test, thêm reproduction hoặc check tạm có thể lặp. Bàn giao phải ghi lệnh đã chạy và kết quả — không chỉ “đã fix”.

| Loại thay đổi | Bằng chứng tối thiểu |
|---|---|
| UI responsive | Screenshot/viewport + không overflow |
| API | Unit/integration test + schema response |
| Data migration | Dry run, count trước/sau, rollback |
| Auth/permission | Test vai trò được phép và bị cấm |
| Performance | Baseline và kết quả sau thay đổi |

## Bước 6 — Review diff theo rủi ro

Review bốn lớp: đúng yêu cầu, đúng logic, an toàn dữ liệu/quyền và dễ bảo trì. Yêu cầu Claude tự chỉ ra giả định và phần chưa test; sau đó người review kiểm tra độc lập.

## MCP: thêm năng lực nhưng cũng mở bề mặt tấn công

[Tài liệu MCP của Claude Code](https://docs.anthropic.com/en/docs/claude-code/mcp) cho phép kết nối dịch vụ và dữ liệu ngoài. Chỉ cài server từ nguồn tin cậy, khóa phiên bản, giới hạn credential và coi dữ liệu trả về là không đáng tin cho tới khi được kiểm tra.

Một server đọc issue không nên tự có quyền merge. Một server đọc database không cần quyền ghi. Tách tool theo hành động giúp log và thu hồi dễ hơn.

## Checklist bàn giao một phiên agentic coding

- Tóm tắt thay đổi theo outcome.
- Liệt kê file đã sửa.
- Ghi test/build đã chạy và kết quả.
- Nêu phần chưa kiểm thử.
- Chụp hoặc mô tả hành vi trước/sau khi là UI.
- Gắn rủi ro migration, secret, quyền hoặc dependency.
- Để working tree sạch phần thuộc task; không chạm thay đổi của người khác.

## Kết luận: Claude Code khuếch đại quy trình đang có

Repo có task rõ, test tốt, permission hẹp và review nghiêm sẽ nhận lợi ích lớn. Repo mơ hồ cũng được khuếch đại — nhưng thành diff lớn và khó tin. Playbook không nhằm làm agent chậm; nó giúp tốc độ trong terminal chuyển thành tốc độ giao hàng thật.

### Nguồn chính

- [Anthropic Docs — Claude Code quickstart](https://docs.anthropic.com/en/docs/claude-code/getting-started)
- [Anthropic Engineering — Claude Code sandboxing](https://www.anthropic.com/engineering/claude-code-sandboxing)
- [Anthropic Docs — Connect Claude Code to tools via MCP](https://docs.anthropic.com/en/docs/claude-code/mcp)
- [Anthropic — How we contain Claude](https://www.anthropic.com/engineering/how-we-contain-claude)
