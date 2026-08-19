# PoB Search-led Content Map — 19/08/2026

Mục tiêu: đưa 5 hạng mục Marketing còn thiếu lên khoảng 10 bài/hạng mục, tạo đường đọc từ kiến thức nền tảng → thực hành → nâng cao, đồng thời tránh cannibalization với 25 bài Marketing và cụm AI đã có.

> Lưu ý dữ liệu demand: ưu tiên bên dưới dựa trên head-term/intent phổ biến và kiểm tra SERP hiện tại. Không ghi search volume hoặc KD giả khi Semrush chưa trả dữ liệu vào runtime; có thể bổ sung số volume/KD khi connector trả được mà không cần đổi kiến trúc cluster.

## Trạng thái triển khai

- Đã viết đủ 24 bài mới: 5 Chiến lược, 5 Performance, 5 Operations, 5 Analytics, 4 Content & SEO.
- Đã tạo 10 thumbnail sáng riêng cho các head-term thuộc Chiến lược và Performance; các bài còn lại đang dùng asset PoB sáng có sẵn để tránh đường dẫn ảnh lỗi trong vòng review nội dung.
- Sitemap tự động lấy toàn bộ `site.posts`; `llms.txt` được nâng giới hạn từ 50 lên 100 bài.
- Chưa merge vào `main`; đây là branch review.

## 1. Chiến lược — thêm 5 bài

| Ưu tiên | Target query | Vai trò trong cluster | Internal link chính |
|---|---|---|---|
| P1 | Marketing là gì? | Pillar nhập môn | Chiến lược Marketing; STP |
| P1 | Marketing Mix 4P là gì? | Nền tảng offer/market | STP; Go-to-market |
| P1 | SWOT là gì? | Công cụ chẩn đoán | Chiến lược Marketing; TAM-SAM-SOM |
| P1 | Mục tiêu SMART là gì? | Mục tiêu hóa chiến lược | North Star Metric, KPI & OKR |
| P2 | Customer Journey là gì? | Nối chiến lược với trải nghiệm/kênh | STP; Go-to-market |

## 2. Performance — thêm 5 bài

| Ưu tiên | Target query | Vai trò trong cluster | Internal link chính |
|---|---|---|---|
| P1 | Performance Marketing là gì? | Pillar nhập môn | Meta Ads; Google PMax; TikTok Smart+ |
| P1 | Facebook Ads là gì? | Head term nền tảng | Meta Ads 2026; Quy trình test quảng cáo |
| P1 | Google Ads là gì? | Head term nền tảng | Google Performance Max 2026 |
| P1 | TikTok Ads là gì? | Head term nền tảng | TikTok Ads Smart+ 2026 |
| P1 | ROAS là gì? | Metric nền tảng | Break-even ROAS; Attribution |

## 3. Operations — thêm 5 bài

| Ưu tiên | Target query | Vai trò trong cluster | Internal link chính |
|---|---|---|---|
| P2 | Marketing Operations là gì? | Pillar nhập môn MarOps | Marketing Operating System; SOP |
| P1 | Quy trình Marketing gồm những bước nào? | Nền tảng vận hành | SOP; RACI |
| P2 | Content Calendar là gì? | Workflow nội dung | Creative Operations; SOP |
| P1 | Ngân sách Marketing là gì và cách lập? | Planning + governance | Marketing OS; Dashboard/KPI |
| P1 | CRM là gì trong Marketing? | Data/process handoff | Marketing Automation; RACI |

## 4. Analytics — thêm 5 bài

| Ưu tiên | Target query | Vai trò trong cluster | Internal link chính |
|---|---|---|---|
| P2 | Marketing Analytics là gì? | Pillar nhập môn | Dashboard/KPI; Attribution |
| P1 | GA4 là gì? | Head term đo lường | Tracking plan GA4; UTM |
| P1 | Google Tag Manager là gì? | Head term triển khai tracking | Tracking plan GA4; Data Quality Audit |
| P1 | Conversion Rate là gì? | Metric nền tảng | Dashboard/KPI; Attribution |
| P2 | CAC và LTV là gì? | Unit economics nâng cao | Attribution; Break-even ROAS |

## 5. Content & SEO — thêm 4 bài

Hạng mục này đã có 6 bài gồm SEO/AEO/GEO, Search Intent, E-E-A-T, Technical SEO, Topic Cluster/Internal Link và Content Refresh; vì vậy chỉ bổ sung 4 bài nền tảng để đủ 10.

| Ưu tiên | Target query | Vai trò trong cluster | Internal link chính |
|---|---|---|---|
| P1 | SEO là gì? | Pillar nhập môn | SEO/AEO/GEO; Technical SEO |
| P1 | Nghiên cứu từ khóa là gì? | Research foundation | Search Intent; Topic Cluster |
| P1 | SEO Onpage là gì? | Optimization foundation | Technical SEO; E-E-A-T |
| P1 | SEO Offpage là gì? | Authority foundation | E-E-A-T; Content Refresh |

## Chuẩn bắt buộc cho 24 bài mới

- Answer-first: trả lời target query trong 40–75 từ đầu bài.
- Search intent rõ; một URL giữ một primary intent, không tạo bài gần giống nhau.
- Title và description tự nhiên, không nhồi từ khóa.
- Ít nhất 5 H2; có bảng/checklist/công thức khi phù hợp.
- Ít nhất 4 FAQ cho câu hỏi phụ; FAQ phục vụ người đọc/AEO, không hứa hẹn rich result.
- Ít nhất 3 nguồn đáng tin; với tính năng nền tảng ưu tiên tài liệu chính thức gần thời điểm xuất bản.
- Internal link từ bài nền tảng sang bài nâng cao và ngược lại theo topic cluster.
- Ảnh thumbnail sáng; không dùng quốc kỳ, bản đồ, hình quốc gia, biên giới hay biểu tượng địa chính trị. Thumbnail riêng cho toàn bộ bài là tiêu chí visual QA trước khi xuất bản chính thức.
- Mọi bullet/numbered item bắt đầu bằng chữ hoa.
- Không bịa benchmark, case study, doanh thu, khách hàng hoặc trải nghiệm cá nhân.
- Ghi ngày cập nhật và giữ author/entity nhất quán với PoB.
