---
title: "Workspace đa người dùng cho AI agent: quyền hạn, bộ nhớ và audit log"
slug: workspace-da-nguoi-dung-cho-ai-agent
description: "Kiến trúc workspace đa người dùng cho AI agent với tenant, vai trò, context, memory, tool permission, approval, budget và audit log."
answer_summary: "Workspace đa người dùng cho agent phải tách tenant, danh tính, vai trò, context và memory; mọi tool call cần chạy dưới quyền có nguồn gốc, có budget, approval và audit log. Không dùng một agent account toàn quyền cho cả nhóm."
target_query: "Workspace đa người dùng cho AI agent cần thiết kế những gì?"
date: 2026-08-14 00:15:00 +0700
date_modified: 2026-08-14 00:15:00 +0700
category: ai-marketing
category_label: AI & Automation
tags: ["Multi User AI","Agent Workspace","RBAC","AI Audit Log"]
image: /pob-learning-lab.webp
image_alt: "Sơ đồ hệ thống AI, dữ liệu và quy trình vận hành dành cho doanh nghiệp"
author: Hoàng Nguyễn Quốc Khánh
author_role: Digital Performance Marketing & Growth Lead · Founder PoB
read_time: 10
featured: false
published: true
faq:
  - question: "Có thể dùng chung một API key cho cả đội không?"
    answer: "Không nên. Dùng danh tính dịch vụ và token theo môi trường/role để truy vết, giới hạn và thu hồi; tránh để key trong prompt hoặc client."
  - question: "Memory nên dùng chung hay riêng?"
    answer: "Cần ít nhất ba scope: cá nhân, dự án/nhóm và tổ chức. Mỗi memory có owner, nguồn, quyền đọc, thời hạn và cách xóa."
  - question: "Audit log có cần lưu toàn bộ prompt không?"
    answer: "Không mặc định. Cần cân bằng điều tra và riêng tư; có thể lưu metadata, hash, tool call và bản đã redaction theo chính sách retention."
---

## Workspace đa người dùng cho AI agent là gì?

**Đó là môi trường nơi nhiều người và nhiều agent cùng dùng tài nguyên nhưng không chia sẻ quyền một cách mù quáng.** Mỗi yêu cầu phải gắn với tenant, user, role, nguồn context, tool permission và trace.

[Microsoft Agent 365](https://www.microsoft.com/en-us/microsoft-365/blog/2026/03/09/powering-frontier-transformation-with-copilot-and-agents/) cho thấy agent đang được quản lý như thực thể trong tổ chức. [Google Managed Agents](https://blog.google/innovation-and-ai/technology/developers-tools/managed-agents-gemini-api/) bổ sung runtime/state. Dù dùng platform nào, kiến trúc quyền vẫn phải do doanh nghiệp định nghĩa.

## Chín thành phần tối thiểu

| Thành phần | Mục đích |
|---|---|
| Tenant | Cô lập tổ chức/khách hàng |
| Identity | Biết người hoặc agent nào hành động |
| RBAC/ABAC | Cấp quyền theo vai trò và thuộc tính |
| Context registry | Quản lý nguồn, owner, độ mới |
| Memory scopes | Tách cá nhân, nhóm, tổ chức |
| Tool gateway | Kiểm schema, policy, rate limit |
| Approval | Duyệt hành động rủi ro |
| Budget | Giới hạn token, thời gian, tool cost |
| Audit log | Replay, điều tra, đo và cải tiến |

## Quyền phải chảy theo người giao việc

Agent không nên có “siêu quyền” riêng. Khi user yêu cầu đọc tài liệu, agent chỉ được thấy những gì user và task có quyền. Với job chạy nền, dùng service identity có scope cụ thể và owner chịu trách nhiệm.

Nguyên tắc **delegation, not impersonation**: log cho biết người nào giao, agent nào thực thi và credential nào được dùng.

## Memory đa tầng để tránh rò chéo

### Memory cá nhân

Sở thích và công việc riêng; không tự hiển thị cho đồng nghiệp.

### Memory dự án

Quyết định đã xác nhận, glossary, constraint; chỉ thành viên dự án truy cập.

### Memory tổ chức

Policy, chuẩn thương hiệu, SOP; có owner và quy trình xuất bản.

Không tự nâng một correction cá nhân thành memory tổ chức. Cần review và nguồn.

## Tool gateway là điểm kiểm soát trung tâm

Thay vì để model gọi thẳng mọi API, gateway có thể:

- xác thực user/agent/tenant;
- validate schema;
- chặn hành động ngoài scope;
- yêu cầu approval;
- che secret;
- ghi log và rate limit;
- chuyển dry-run thành commit sau duyệt.

## Audit log nên trả lời bảy câu hỏi

1. Ai khởi tạo?
2. Agent/version nào chạy?
3. Context nguồn nào được lấy?
4. Tool và tham số nào được gọi?
5. Ai duyệt?
6. Artefact nào thay đổi?
7. Có thể rollback không?

Không nhất thiết lưu chain-of-thought riêng tư. Lưu bằng chứng vận hành: input đã redaction, nguồn, tool, output, quyết định và mã lỗi.

## Hai anti-pattern nguy hiểm

### Một bot toàn quyền cho cả công ty

Không truy vết được nguồn quyền, dễ rò dữ liệu và khó thu hồi. Tách identity và tool scope.

### Một vector database cho mọi tài liệu

Retrieval không phải access control. Lọc quyền phải xảy ra trước hoặc trong truy vấn, không sau khi model đã thấy dữ liệu.

## Kết luận: multi-user là bài toán identity trước khi là bài toán AI

Model chỉ là thành phần suy luận. Workspace đáng tin cần tenant isolation, permission propagation, memory scopes, tool gateway và audit. Xây các lớp này trước khi cho agent chạy nền hoặc phối hợp nhiều người — nếu không, năng suất tăng nhanh hơn khả năng giải thích sự cố.

### Nguồn chính

- [Microsoft — Copilot and agents for frontier transformation](https://www.microsoft.com/en-us/microsoft-365/blog/2026/03/09/powering-frontier-transformation-with-copilot-and-agents/)
- [Google — Managed Agents in the Gemini API](https://blog.google/innovation-and-ai/technology/developers-tools/managed-agents-gemini-api/)
- [OpenAI — New tools for building agents](https://openai.com/index/new-tools-for-building-agents/)
- [NIST — AI RMF Playbook](https://www.nist.gov/itl/ai-risk-management-framework/nist-ai-rmf-playbook)
