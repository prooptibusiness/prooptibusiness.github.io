# PoB Expansion Map — Growth, Commerce & MarTech — 19/08/2026

Mục tiêu: mở rộng ProOptiBusiness từ hệ kiến thức Marketing cốt lõi sang 3 cụm mới có quan hệ trực tiếp với tăng trưởng, doanh thu, thương mại và hạ tầng vận hành. Mỗi cụm có 10 bài theo thứ tự nền tảng → framework/metric → execution → nâng cao.

> Demand note: Semrush đã kết nối nhưng tài khoản hiện không đủ API units để trả volume/KD. Không ghi số giả. Ưu tiên P1/P2 dưới đây dựa trên head-term phổ biến, search intent rõ, khả năng tạo topic authority và mức độ phù hợp với định vị PoB.

## 1. Growth & Revenue — 10 bài

| Ưu tiên | Target query | Vai trò |
|---|---|---|
| P1 | Growth Marketing là gì? | Pillar nhập môn |
| P1 | Marketing Funnel là gì? | Mô hình hành trình chuyển đổi |
| P1 | AARRR Funnel là gì? | Framework tăng trưởng |
| P1 | Customer Acquisition là gì? | Acquisition economics |
| P1 | Retention là gì? | Giữ chân và tăng LTV |
| P2 | Growth Loop là gì? | Mô hình tăng trưởng tích lũy |
| P1 | Product-Market Fit là gì? | Điều kiện trước khi scale |
| P1 | Unit Economics là gì? | Kinh tế đơn vị |
| P1 | LTV/CAC là gì? | Metric hiệu quả tăng trưởng |
| P2 | Growth Experiment là gì? | Hệ thống thử nghiệm |

Internal linking chính: Marketing Strategy, Customer Journey, CAC/LTV, Attribution, Dashboard/KPI, Break-even ROAS, North Star Metric.

## 2. E-commerce & Social Commerce — 10 bài

| Ưu tiên | Target query | Vai trò |
|---|---|---|
| P1 | E-commerce là gì? | Pillar nhập môn |
| P1 | Social Commerce là gì? | Pillar social selling |
| P1 | Conversion Rate E-commerce là gì? | Metric chuyển đổi |
| P1 | AOV là gì? | Giá trị đơn hàng trung bình |
| P1 | GMV là gì? | Quy mô giao dịch |
| P1 | Cart Abandonment là gì? | Tối ưu checkout |
| P2 | Livestream Commerce là gì? | Bán hàng qua livestream |
| P1 | Affiliate Marketing trong E-commerce là gì? | Kênh phân phối hiệu suất |
| P2 | Omnichannel Commerce là gì? | Kiến trúc đa kênh |
| P2 | E-commerce Unit Economics là gì? | Profitability sau doanh thu |

Internal linking chính: Performance Marketing, ROAS, Conversion Rate, CRM, Attribution, Content Calendar, Marketing Automation.

## 3. MarTech & Automation — 10 bài

| Ưu tiên | Target query | Vai trò |
|---|---|---|
| P1 | MarTech là gì? | Pillar nhập môn |
| P1 | MarTech Stack là gì? | Kiến trúc công cụ |
| P1 | Marketing Automation là gì? | Nền tảng tự động hóa |
| P2 | Customer Data Platform là gì? | Lớp dữ liệu khách hàng |
| P1 | API là gì trong Marketing? | Kết nối hệ thống |
| P1 | Webhook là gì? | Event-driven automation |
| P2 | No-code Automation là gì? | Tự động hóa cho SME |
| P1 | BigQuery cho Marketing là gì? | Data warehouse và analytics |
| P2 | Marketing Data Pipeline là gì? | Luồng dữ liệu từ source đến dashboard |
| P2 | AI Agent trong Marketing Automation là gì? | Lớp agent có kiểm soát |

Internal linking chính: Marketing Operations, CRM, Tracking Plan, GA4, GTM, Marketing Analytics, Data Quality Audit, AI Marketing.

## Chuẩn nội dung bắt buộc

- Mỗi bài giữ một primary intent và một URL rõ ràng.
- `answer_summary` trả lời trực tiếp trong 40–75 từ.
- Ít nhất 5 H2, 4 FAQ và 3 nguồn tham khảo phù hợp.
- Nội dung ưu tiên quyết định, công thức, checklist, bảng hoặc workflow thay vì định nghĩa dài dòng.
- Internal link hai chiều giữa bài pillar và bài chuyên sâu khi phù hợp.
- Không bịa benchmark, case study, doanh thu, khách hàng hoặc trải nghiệm cá nhân.
- Mọi bullet/list item bắt đầu bằng chữ hoa.
- Thumbnail 2D graph/diagram sáng, sạch, chuyên môn; không người thật AI/3D, không quốc kỳ, bản đồ, biên giới hoặc biểu tượng địa chính trị.
- Ảnh 1200×675, nhẹ và dùng trực tiếp trong Pages CMS.
- CMS cho phép tự sửa title, slug, description, answer_summary, query, category, tags, image, FAQ và body.

## Trạng thái triển khai

- Đã viết đủ 30/30 bài: 10 Growth & Revenue, 10 E-commerce & Social Commerce, 10 MarTech & Automation.
- Đã tạo đủ 30/30 thumbnail riêng theo style 2D graph/diagram sáng.
- Đã thêm 3 category vào Pages CMS và 3 filter tương ứng trên thư viện Blog.
- Bộ lọc Blog dùng `data-blog-filter` động nên không cần hard-code JavaScript cho category mới.
- `llms.txt` tăng coverage từ 100 lên 150 bài; sitemap vẫn tự lấy toàn bộ `site.posts`.
- Branch `codex/growth-commerce-martech-clusters` đang ahead `main`, behind 0.
- Semrush hiện không đủ API units nên batch không ghi volume/KD giả; có thể bổ sung sau mà không cần đổi topic architecture.
- Chưa merge vào `main`; sẵn sàng PR review.