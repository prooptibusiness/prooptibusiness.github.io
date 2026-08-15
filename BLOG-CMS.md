# Quản trị bài viết ProOptiBusiness

Trang quản trị: https://prooptibusiness.github.io/admin/

## Thiết lập một lần

1. Mở trang quản trị và chọn **Mở trang quản trị**.
2. Đăng nhập Pages CMS bằng tài khoản GitHub quản lý repository `prooptibusiness/prooptibusiness.github.io`.
3. Cài đặt/ủy quyền GitHub App của Pages CMS cho repository trên.
4. Chọn **Bài viết** để tạo, sửa hoặc xuất bản nội dung.

Pages CMS lưu nội dung trực tiếp thành tệp Markdown trong `_posts/`. GitHub Pages tự dựng lại website sau mỗi lần lưu.

## Quy trình đăng bài

1. Điền tiêu đề, slug, mô tả SEO và câu trả lời ngắn AEO/GEO.
2. Chọn chuyên mục, gắn thẻ, ảnh đại diện và alt text mô tả ảnh.
3. Viết nội dung theo thứ tự H2/H3, thêm nguồn chính thống và FAQ khi thực sự hữu ích.
4. Đặt `published: false` để lưu nháp hoặc `published: true` để đăng.
5. Lưu bài và chờ GitHub Pages triển khai trong vài phút.

## Quy ước kỹ thuật

- Slug chỉ dùng chữ thường không dấu, số và dấu gạch ngang.
- Mô tả SEO nên dài 80–170 ký tự và mô tả đúng nội dung trang.
- Câu trả lời ngắn nên tự trả lời được câu hỏi chính trong khoảng 40–60 từ.
- Tên tệp bài viết có dạng `YYYY-MM-DD-slug.md`.
- Không hứa hẹn rich result. Structured data phải khớp với nội dung người đọc nhìn thấy.
- Chữ cái đầu tiên có thể nhìn thấy trong mỗi bullet hoặc mục đánh số phải viết hoa.

## Quy chuẩn ảnh đại diện bài viết

- Dùng ảnh WebP 1200×675, phong cách editorial/futuristic có chiều sâu, chủ thể và bối cảnh bám sát nội dung bài.
- Không dùng thumbnail hình học phẳng, icon placeholder, chữ, logo, nhãn hiệu hoặc watermark trong ảnh.
- Tuyệt đối không dùng quốc kỳ, quốc huy, bản đồ, mảng lục địa, đường biên, hình dáng quốc gia hoặc biểu tượng chính trị–địa chính trị.
- Kiểm tra trực quan toàn ảnh để phát hiện chữ rác, chi tiết méo, biểu tượng nhạy cảm hoặc nội dung ngoài brief trước khi xuất bản.
- Viết alt text mô tả nội dung ảnh; không nhồi từ khóa.

Với bộ bài Marketing ngày 15/08/2026, chạy `node scripts/validate-marketing-library.mjs` trước khi commit để kiểm tra số bài, viết hoa đầu danh sách, kích thước/khả năng đọc ảnh và ảnh trùng.
