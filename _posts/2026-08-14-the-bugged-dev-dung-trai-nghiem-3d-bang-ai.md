---
title: "The Bugged Dev: dựng trải nghiệm 3D bằng AI mà không bỏ qua kỹ nghệ"
slug: the-bugged-dev-dung-trai-nghiem-3d-bang-ai
description: "Phân tích workflow của The Bugged Dev khi dựng portfolio 3D với Gemini, React và Three.js; rút ra quy trình prompt theo lát cắt, kiểm chứng toán và tối ưu mobile."
answer_summary: "Case The Bugged Dev cho thấy AI có thể hỗ trợ viết shader, hình học và UI 3D, nhưng kết quả đến từ quy trình chia theo từng section, chỉ dẫn kỹ thuật cụ thể, kiểm tra trực quan và tối ưu hiệu năng. AI tăng tốc kỹ nghệ; nó không thay thế tiêu chí thiết kế và QA."
target_query: "Có thể dựng ứng dụng 3D bằng AI theo quy trình nào?"
date: 2026-08-14 00:14:00 +0700
date_modified: 2026-08-14 00:14:00 +0700
category: ai-marketing
category_label: AI & Automation
tags: ["The Bugged Dev","AI Coding","Three.js","Gemini"]
image: /assets/blog/the-bugged-dev-dung-trai-nghiem-3d-bang-ai.webp
image_alt: "Nhà phát triển biến bản phác thảo thành thành phố 3D tương tác bằng AI"
author: Hoàng Nguyễn Quốc Khánh
author_role: Digital Performance Marketing & Growth Lead · Founder PoB
read_time: 9
featured: false
published: true
faq:
  - question: "AI có thể tự tạo toàn bộ website 3D không?"
    answer: "AI có thể tạo phần lớn code cho prototype, nhưng con người vẫn cần cung cấp thiết kế, kiểm tra toán/hành vi, bản quyền asset, accessibility và hiệu năng trên thiết bị thật."
  - question: "Bài này có phải case study được The Bugged Dev xác nhận không?"
    answer: "Không. Đây là phân tích biên tập dựa trên bài viết và kho mã công khai của tác giả."
  - question: "Người không biết Three.js có nên bắt đầu bằng dự án lớn không?"
    answer: "Không. Nên bắt đầu một scene, một interaction và một chỉ số hiệu năng; học cách đọc code AI tạo trước khi mở rộng."
---

## Case The Bugged Dev cho thấy điều gì về AI và 3D?

**AI có thể hạ thấp rào cản viết code 3D, nhưng workflow tốt vẫn cần thiết kế theo lát cắt và kiểm chứng kỹ thuật.** Trong bài [I Vibe Coded a 3D Portfolio with Gemini](https://dev.to/the_buggeddev_6c7955c6ff/i-vibe-coded-a-3d-portfolio-with-gemini-2m32), The Bugged Dev mô tả dùng React, Three.js và Gemini, đưa hình tham chiếu rồi xây từng section thay vì yêu cầu một lần cho toàn site.

Kho mã được tác giả liên kết tại [GitHub thebuggeddev/devfolio](https://github.com/thebuggeddev/devfolio), giúp người đọc kiểm tra artefact thay vì chỉ xem video demo.

## Năm bước đáng học từ workflow

### 1. Bắt đầu bằng art direction, không bắt đầu bằng framework

Xác định cảm giác, nhịp cuộn, ánh sáng, vật liệu và điểm tương tác. Hình tham chiếu nên dùng để phân tích bố cục, không sao chép tài sản hoặc nhận diện của bên khác.

### 2. Nhờ AI giúp viết instruction kỹ thuật

Một prompt “làm giống ảnh này” thường tạo code ngẫu hứng. Prompt tốt hơn nêu camera, geometry, shader, ánh sáng, easing, input và giới hạn hiệu năng. The Bugged Dev mô tả dùng AI để giúp tạo instruction chi tiết cho AI — một vòng lặp meta nhưng có mục tiêu rõ.

### 3. Xây theo vertical slice

Hoàn tất một section từ hình ảnh đến interaction và responsive trước khi thêm section kế. Cách này giữ design system và giảm context overload.

### 4. Kiểm tra hành vi, không tin lời giải thích

AI có thể nói “đã dùng object pooling” hoặc “đã tối ưu GPU” nhưng code thực tế chưa chắc. Dùng DevTools, performance trace, FPS và memory để xác nhận.

### 5. Công khai demo và code khi có thể

Demo cho thấy trải nghiệm; code cho thấy kỹ nghệ. Với GEO/AEO, artefact có thể kiểm tra tạo độ tin cậy hơn một claim “AI làm trong vài phút”.

## Task contract mẫu cho một scene 3D

| Thành phần | Yêu cầu mẫu |
|---|---|
| Outcome | Hero có vật thể 3D phản ứng nhẹ theo con trỏ |
| Stack | React + Three.js, không thêm engine khác |
| Performance | 60 FPS desktop, degrade hợp lý trên mobile |
| Accessibility | Nội dung chính vẫn đọc được khi WebGL tắt |
| Assets | Chỉ asset có giấy phép hoặc geometry tự tạo |
| Done | Test 390px, 768px, 1440px; không tràn ngang |

## Các bài test AI thường bỏ sót

- Mobile GPU yếu và chế độ tiết kiệm pin.
- Resize/orientation change.
- Tab chạy nền rồi quay lại.
- prefers-reduced-motion.
- Keyboard và screen reader.
- Mất WebGL context.
- Texture chậm hoặc CDN lỗi.
- Màn hình DPI cao làm render quá nặng.

## Progressive enhancement cho 3D

Nội dung, CTA và điều hướng phải tồn tại trong HTML. 3D là lớp nâng cao; nếu lỗi, người dùng vẫn hiểu trang và thao tác được. Trên mobile, có thể giảm particle, resolution, shadow hoặc thay animation bằng ảnh tĩnh.

## Kết luận: “vibe” tốt đến từ constraints tốt

Case này thú vị không phải vì AI viết shader, mà vì tác giả có vòng lặp: tham chiếu → instruction → một section → kiểm tra → mở rộng. Người mới có thể học nhanh hơn, nhưng phải học luôn cách đo hiệu năng, kiểm code và thiết kế fallback. Đó là điểm biến demo thành sản phẩm.

### Nguồn chính

- [The Bugged Dev — I Vibe Coded a 3D Portfolio with Gemini](https://dev.to/the_buggeddev_6c7955c6ff/i-vibe-coded-a-3d-portfolio-with-gemini-2m32)
- [GitHub — thebuggeddev/devfolio](https://github.com/thebuggeddev/devfolio)
- [Google AI for Developers — Gemini API](https://ai.google.dev/api)
