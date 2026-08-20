# PoB Content Master Roadmap — 18 batch × 10 bài — 20/08/2026

Mục tiêu: mở rộng thư viện ProOptiBusiness thành hệ kiến thức A–Z theo 9 chuyên mục hiện có. Kế hoạch gồm **18 batch × 10 bài = 180 bài mới**, chia đều mỗi chuyên mục 2 batch để dễ viết, QA, đăng và đo hiệu quả.

## Nguyên tắc kiến trúc

- Mỗi URL giữ một primary intent; không tạo bài đổi vài chữ rồi cạnh tranh với nhau.
- Batch đầu của mỗi chuyên mục ưu tiên nền tảng → trung cấp; batch sau ưu tiên execution → nâng cao.
- `answer_summary` trả lời trực tiếp trong 40–75 từ đầu.
- Mỗi bài có ít nhất 5 H2, 4 FAQ, 3 nguồn tham khảo đáng tin, internal link hai chiều và ngày cập nhật.
- Không bịa benchmark, khách hàng, doanh thu, case study hoặc trải nghiệm cá nhân.
- Thumbnail giữ hệ 2D graph/diagram sáng; không người thật AI/3D, không quốc kỳ, bản đồ, biên giới hoặc biểu tượng địa chính trị.
- CMS tiếp tục là editor lâu dài; mọi bài nằm trong `_posts` và có frontmatter tương thích Pages CMS.
- Demand priority dùng head-term, intent phổ biến và SERP hiện tại; không ghi search volume/KD giả khi Semrush chưa trả API units.
- 180 bài được triển khai theo batch, không merge một khối quá lớn để tránh khó QA và khó rollback.

---

## B01 — Chiến lược: Chẩn đoán thị trường & khách hàng

1. PESTEL là gì? Cách phân tích môi trường vĩ mô — `pestel-la-gi`
2. Porter 5 Forces là gì? Cách phân tích sức ép cạnh tranh — `porter-5-forces-la-gi`
3. Value Proposition là gì? Cách thiết kế lời hứa giá trị — `value-proposition-la-gi`
4. USP là gì? Cách tìm lợi thế khác biệt có thể truyền thông — `usp-la-gi`
5. Buyer Persona là gì? Cách xây chân dung khách hàng từ dữ liệu — `buyer-persona-la-gi`
6. Ideal Customer Profile là gì? Cách xác định khách hàng phù hợp nhất — `ideal-customer-profile-la-gi`
7. Phân tích đối thủ cạnh tranh như thế nào? — `phan-tich-doi-thu-canh-tranh`
8. Market Research là gì? Quy trình nghiên cứu thị trường cho SME — `market-research-la-gi`
9. Jobs to Be Done là gì? Hiểu nhu cầu thật phía sau hành vi mua — `jobs-to-be-done-la-gi`
10. Business Model Canvas là gì? Cách đọc 9 khối mô hình kinh doanh — `business-model-canvas-la-gi`

## B02 — Chiến lược: Tăng trưởng, định giá & ưu tiên

1. Ansoff Matrix là gì? 4 hướng tăng trưởng cho doanh nghiệp — `ansoff-matrix-la-gi`
2. BCG Matrix là gì? Cách quản trị danh mục sản phẩm — `bcg-matrix-la-gi`
3. Blue Ocean Strategy là gì? Khi nào nên tạo thị trường mới — `blue-ocean-strategy-la-gi`
4. Chiến lược định giá là gì? 7 mô hình pricing phổ biến — `chien-luoc-dinh-gia`
5. Value-Based Pricing là gì? Định giá theo giá trị cảm nhận — `value-based-pricing-la-gi`
6. Market Entry Strategy là gì? Cách vào thị trường mới có kiểm soát — `market-entry-strategy-la-gi`
7. Channel Strategy là gì? Cách chọn kênh phân phối và tăng trưởng — `channel-strategy-la-gi`
8. Competitive Moat là gì? Cách xây lợi thế khó sao chép — `competitive-moat-la-gi`
9. RICE và ICE là gì? Cách ưu tiên sáng kiến tăng trưởng — `rice-ice-prioritization-la-gi`
10. Scenario Planning là gì? Cách lập kịch bản khi thị trường biến động — `scenario-planning-la-gi`

## B03 — Performance: Metric & cơ chế quảng cáo nền tảng

1. CPM là gì? Khi nào CPM cao chưa chắc là xấu — `cpm-la-gi`
2. CPC là gì? Cách đọc chi phí mỗi lượt nhấp đúng ngữ cảnh — `cpc-la-gi`
3. CPA là gì? Cách tính và dùng CPA để kiểm soát hiệu quả — `cpa-la-gi`
4. CTR là gì? Cách đọc CTR mà không tối ưu sai mục tiêu — `ctr-la-gi`
5. Conversion Rate trong quảng cáo là gì? — `conversion-rate-quang-cao-la-gi`
6. Reach và Impressions khác nhau thế nào? — `reach-va-impressions-khac-nhau-the-nao`
7. Frequency là gì? Khi nào tần suất quảng cáo bắt đầu gây mệt mỏi — `frequency-quang-cao-la-gi`
8. Learning Phase là gì? Vì sao campaign cần đủ dữ liệu để ổn định — `learning-phase-quang-cao-la-gi`
9. Ad Relevance là gì? Cách đọc chất lượng quảng cáo đa nền tảng — `ad-relevance-la-gi`
10. Chọn mục tiêu campaign như thế nào theo funnel? — `chon-muc-tieu-campaign-theo-funnel`

## B04 — Performance: Scale, creative & kiểm soát hiệu quả

1. Creative Strategy cho Paid Ads là gì? — `creative-strategy-paid-ads`
2. Creative Fatigue là gì? Cách phát hiện và xử lý mỏi quảng cáo — `creative-fatigue-la-gi`
3. Scale quảng cáo ngang và dọc khác nhau thế nào? — `scale-quang-cao-ngang-va-doc`
4. Bid Strategy là gì? Cách chọn bidding theo mục tiêu — `bid-strategy-la-gi`
5. Retargeting là gì? Cách xây remarketing không lãng phí ngân sách — `retargeting-la-gi`
6. Audience Exclusion là gì? Vì sao loại trừ đối tượng giúp Ads sạch hơn — `audience-exclusion-la-gi`
7. Landing Page Optimization cho Paid Ads — `landing-page-optimization-paid-ads`
8. Product Feed Optimization là gì? Tối ưu feed cho quảng cáo thương mại — `product-feed-optimization-la-gi`
9. Attribution Window là gì? Đọc cửa sổ quy đổi quảng cáo đúng cách — `attribution-window-la-gi`
10. Brand Safety trong quảng cáo là gì? Cách kiểm soát vị trí hiển thị — `brand-safety-quang-cao-la-gi`

## B05 — Operations: Quy trình, phối hợp & quản trị công việc

1. Project Management trong Marketing là gì? — `project-management-marketing-la-gi`
2. Marketing Brief là gì? Cách viết brief giúp đội ngũ làm đúng ngay từ đầu — `marketing-brief-la-gi`
3. Approval Workflow là gì? Thiết kế luồng duyệt không gây nghẽn — `approval-workflow-la-gi`
4. SLA là gì trong Marketing và Sales? — `sla-marketing-sales-la-gi`
5. Meeting Cadence là gì? Xây nhịp họp giúp đội ngũ ra quyết định nhanh — `meeting-cadence-la-gi`
6. Capacity Planning là gì? Cách biết team có đang quá tải — `capacity-planning-la-gi`
7. Resource Planning là gì? Phân bổ người, giờ và ngân sách — `resource-planning-marketing`
8. Vendor Management là gì? Quản lý agency, freelancer và nhà cung cấp — `vendor-management-marketing`
9. Marketing QA Checklist gồm những gì? — `marketing-qa-checklist`
10. Change Management là gì? Cách triển khai thay đổi quy trình trong team — `change-management-marketing`

## B06 — Operations: Governance, tài liệu & vận hành nâng cao

1. Marketing Governance là gì? — `marketing-governance-la-gi`
2. Risk Register là gì? Cách quản trị rủi ro campaign và dự án — `risk-register-marketing`
3. Incident Response cho Marketing là gì? — `incident-response-marketing`
4. Knowledge Management là gì? Xây kho tri thức cho team Marketing — `knowledge-management-marketing`
5. Documentation System là gì? Cách chuẩn hóa tài liệu vận hành — `documentation-system-marketing`
6. Cross-functional Handoff là gì? Cách bàn giao Marketing–Sales–Ops — `cross-functional-handoff-la-gi`
7. Marketing Prioritization là gì? Cách xếp thứ tự công việc theo impact — `marketing-prioritization-la-gi`
8. Operating Cadence là gì? Nhịp vận hành tuần–tháng–quý — `operating-cadence-la-gi`
9. Campaign Retrospective là gì? Cách review sau chiến dịch — `campaign-retrospective-la-gi`
10. Workload Forecast là gì? Dự báo khối lượng công việc Marketing — `workload-forecast-marketing`

## B07 — Analytics: Data literacy & phân tích hành vi

1. Metric và Dimension khác nhau thế nào? — `metric-va-dimension-khac-nhau`
2. Event và Parameter trong GA4 là gì? — `event-parameter-ga4-la-gi`
3. Conversion Tracking là gì? — `conversion-tracking-la-gi`
4. Funnel Analysis là gì? Cách tìm điểm rơi trong hành trình — `funnel-analysis-la-gi`
5. Cohort Analysis là gì? — `cohort-analysis-la-gi`
6. Customer Segmentation bằng dữ liệu là gì? — `customer-segmentation-data-la-gi`
7. Data Visualization là gì? Chọn biểu đồ theo câu hỏi kinh doanh — `data-visualization-marketing`
8. Sampling trong Analytics là gì? — `sampling-analytics-la-gi`
9. SQL cho Marketing dùng để làm gì? — `sql-cho-marketing`
10. Marketing Data Dictionary là gì? — `marketing-data-dictionary-la-gi`

## B08 — Analytics: Experimentation, causal & forecasting

1. A/B Testing là gì? Cách thiết kế thử nghiệm đúng — `ab-testing-la-gi`
2. Statistical Significance là gì? — `statistical-significance-la-gi`
3. Confidence Interval là gì? — `confidence-interval-la-gi`
4. Incrementality là gì trong Marketing? — `incrementality-marketing-la-gi`
5. Marketing Mix Modeling là gì? — `marketing-mix-modeling-la-gi`
6. LTV Modeling là gì? — `ltv-modeling-la-gi`
7. Marketing Forecasting là gì? — `marketing-forecasting-la-gi`
8. Anomaly Detection là gì? Phát hiện bất thường trong dữ liệu Marketing — `anomaly-detection-marketing`
9. Causal Inference là gì trong Marketing Analytics? — `causal-inference-marketing`
10. Dashboard Alerting là gì? Thiết kế cảnh báo thay vì chỉ xem báo cáo — `dashboard-alerting-la-gi`

## B09 — Content & SEO: Content system & SEO nền tảng mở rộng

1. Content Marketing là gì? — `content-marketing-la-gi`
2. Content Strategy là gì? — `content-strategy-la-gi`
3. Content Brief là gì? — `content-brief-la-gi`
4. Pillar Page là gì? — `pillar-page-la-gi`
5. Keyword Mapping là gì? — `keyword-mapping-la-gi`
6. Title Tag và Meta Description là gì? — `title-tag-meta-description-la-gi`
7. Heading Structure H1 H2 H3 trong SEO — `heading-structure-seo`
8. Image SEO là gì? Tối ưu ảnh cho Search và trải nghiệm — `image-seo-la-gi`
9. URL Structure chuẩn SEO là gì? — `url-structure-seo`
10. Schema Markup là gì? — `schema-markup-la-gi`

## B10 — Content & SEO: Topical authority, technical & AI Search

1. Topical Authority là gì? — `topical-authority-la-gi`
2. Entity SEO là gì? — `entity-seo-la-gi`
3. Semantic SEO là gì? — `semantic-seo-la-gi`
4. Programmatic SEO là gì? — `programmatic-seo-la-gi`
5. Crawl Budget là gì? — `crawl-budget-la-gi`
6. Core Web Vitals là gì? — `core-web-vitals-la-gi`
7. Structured Data nâng cao: khi nào dùng loại schema nào? — `structured-data-nang-cao`
8. SEO cho AI Overviews và AI Mode nên làm gì? — `seo-ai-overviews-ai-mode`
9. GEO cho LLM là gì? Cách tăng khả năng được AI trích dẫn — `geo-cho-llm-la-gi`
10. Content Decay là gì? Cách phát hiện bài mất traffic — `content-decay-la-gi`

## B11 — AI Marketing: AI fundamentals cho người làm Marketing

1. Generative AI là gì trong Marketing? — `generative-ai-trong-marketing-la-gi`
2. Prompt Engineering là gì? — `prompt-engineering-la-gi`
3. Context Engineering là gì? — `context-engineering-la-gi`
4. RAG là gì? Cách dùng Retrieval-Augmented Generation cho doanh nghiệp — `rag-la-gi`
5. AI Agent là gì trong Marketing? — `ai-agent-trong-marketing-la-gi`
6. Chọn AI Model theo bài toán Marketing như thế nào? — `chon-ai-model-cho-marketing`
7. AI Content Workflow là gì? — `ai-content-workflow-la-gi`
8. Human-in-the-loop là gì? — `human-in-the-loop-ai-la-gi`
9. AI Evaluation là gì? Cách đánh giá output trước khi dùng thật — `ai-evaluation-la-gi`
10. AI ROI là gì? Cách đo hiệu quả đầu tư AI trong Marketing — `ai-roi-marketing-la-gi`

## B12 — AI Marketing: Governance, agent & automation nâng cao

1. AI Governance là gì? — `ai-governance-la-gi`
2. AI Guardrails là gì? — `ai-guardrails-la-gi`
3. Prompt Injection là gì? Rủi ro khi AI đọc dữ liệu bên ngoài — `prompt-injection-la-gi`
4. Tool Calling là gì trong AI Agent? — `tool-calling-ai-agent-la-gi`
5. MCP là gì? Model Context Protocol dùng trong doanh nghiệp ra sao — `mcp-la-gi`
6. Vector Database là gì? — `vector-database-la-gi`
7. AI Agent Memory là gì? — `ai-agent-memory-la-gi`
8. Multi-agent System là gì? — `multi-agent-system-la-gi`
9. AI Search Optimization là gì? — `ai-search-optimization-la-gi`
10. AI Automation QA là gì? Cách kiểm thử workflow trước khi scale — `ai-automation-qa-la-gi`

## B13 — Growth & Revenue: Activation, retention & lifecycle

1. Activation Rate là gì? — `activation-rate-la-gi`
2. Time to Value là gì? — `time-to-value-la-gi`
3. Churn Rate là gì? — `churn-rate-la-gi`
4. Retention Curve là gì? — `retention-curve-la-gi`
5. Payback Period là gì? — `payback-period-la-gi`
6. Referral Marketing là gì? — `referral-marketing-la-gi`
7. Viral Coefficient là gì? — `viral-coefficient-la-gi`
8. Product-Led Growth là gì? — `product-led-growth-la-gi`
9. Customer Onboarding là gì? — `customer-onboarding-la-gi`
10. Lifecycle Marketing là gì? — `lifecycle-marketing-la-gi`

## B14 — Growth & Revenue: Monetization & growth economics nâng cao

1. Net Revenue Retention là gì? — `net-revenue-retention-la-gi`
2. Gross Revenue Retention là gì? — `gross-revenue-retention-la-gi`
3. Expansion Revenue là gì? — `expansion-revenue-la-gi`
4. Growth Accounting là gì? — `growth-accounting-la-gi`
5. Monetization Strategy là gì? — `monetization-strategy-la-gi`
6. Pricing Experiment là gì? — `pricing-experiment-la-gi`
7. Experiment Velocity là gì? — `experiment-velocity-la-gi`
8. ICE Scoring cho Growth Experiment — `ice-scoring-growth-experiment`
9. Growth Model là gì? Cách nối acquisition, retention và revenue — `growth-model-la-gi`
10. Growth Forecast là gì? — `growth-forecast-la-gi`

## B15 — E-commerce & Social Commerce: Conversion, merchandising & shop operations

1. Product Detail Page là gì? Cách tối ưu trang sản phẩm — `product-detail-page-la-gi`
2. E-commerce Merchandising là gì? — `ecommerce-merchandising-la-gi`
3. Checkout Optimization là gì? — `checkout-optimization-la-gi`
4. Free Shipping Threshold là gì? — `free-shipping-threshold-la-gi`
5. Discount Strategy cho E-commerce — `discount-strategy-ecommerce`
6. Bundle, Upsell và Cross-sell khác nhau thế nào? — `bundle-upsell-cross-sell`
7. Marketplace SEO là gì? — `marketplace-seo-la-gi`
8. Inventory Turnover là gì? — `inventory-turnover-la-gi`
9. Return Rate là gì? Cách giảm hoàn trả trong E-commerce — `return-rate-ecommerce-la-gi`
10. Customer Service E-commerce nên đo gì? — `customer-service-ecommerce-kpi`

## B16 — E-commerce & Social Commerce: Marketplace, live & profitability nâng cao

1. TikTok Shop Operations gồm những gì? — `tiktok-shop-operations`
2. Shopee Operations gồm những gì? — `shopee-operations`
3. Livestream Funnel là gì? — `livestream-funnel-la-gi`
4. Creator Affiliate Economics là gì? — `creator-affiliate-economics-la-gi`
5. Repeat Purchase Rate là gì? — `repeat-purchase-rate-la-gi`
6. E-commerce CRM là gì? — `ecommerce-crm-la-gi`
7. Contribution Margin E-commerce là gì? — `contribution-margin-ecommerce-la-gi`
8. Cohort Profitability là gì? — `cohort-profitability-la-gi`
9. Demand Forecasting cho E-commerce — `demand-forecasting-ecommerce`
10. Marketplace Portfolio Strategy là gì? — `marketplace-portfolio-strategy`

## B17 — MarTech & Automation: Architecture, CRM & integration

1. CRM Architecture là gì? — `crm-architecture-la-gi`
2. ETL và ELT khác nhau thế nào? — `etl-elt-khac-nhau`
3. Data Warehouse là gì trong Marketing? — `data-warehouse-marketing-la-gi`
4. Reverse ETL là gì? — `reverse-etl-la-gi`
5. Identity Resolution là gì? — `identity-resolution-la-gi`
6. Server-side Tagging là gì? — `server-side-tagging-la-gi`
7. Consent Management Platform là gì? — `consent-management-platform-la-gi`
8. Marketing Data Governance là gì? — `marketing-data-governance-la-gi`
9. iPaaS là gì? — `ipaas-la-gi`
10. Integration Pattern là gì? Batch, realtime và event-driven khác nhau thế nào — `integration-pattern-la-gi`

## B18 — MarTech & Automation: Reliability, security & ROI

1. Event-driven Architecture là gì trong MarTech? — `event-driven-architecture-martech`
2. Customer 360 là gì? — `customer-360-la-gi`
3. Lead Scoring là gì? — `lead-scoring-la-gi`
4. Workflow Orchestration là gì? — `workflow-orchestration-la-gi`
5. API Rate Limit và Retry Strategy là gì? — `api-rate-limit-retry-strategy`
6. Automation Observability là gì? — `automation-observability-la-gi`
7. Automation QA Checklist gồm những gì? — `automation-qa-checklist`
8. Secrets Management là gì cho Automation? — `secrets-management-automation`
9. Build vs Buy MarTech: khi nào nên tự xây, khi nào nên mua — `build-vs-buy-martech`
10. MarTech ROI và Total Cost of Ownership tính thế nào? — `martech-roi-tco`

---

## Thứ tự triển khai đề xuất

`B01 → B03 → B07 → B09 → B11 → B13 → B15 → B17 → B02 → B04 → B05 → B06 → B08 → B10 → B12 → B14 → B16 → B18`

Lý do: đưa các head-term và nền tảng có search intent rộng lên trước, sau đó mới tăng mật độ chủ đề nâng cao để xây topical authority mà không làm site trông như thư viện chỉ dành cho chuyên gia.

## Chuẩn QA theo batch

- 10 bài/batch, mỗi bài có slug duy nhất.
- Không trùng title, target query hoặc search intent với thư viện hiện hữu.
- 10 thumbnail riêng/batch; ảnh 1200×675, 2D graph sáng và XML hợp lệ nếu dùng SVG.
- Mọi bullet/list mở đầu bằng chữ hoa.
- FAQ tối thiểu 4 mục; nguồn tối thiểu 3 nguồn phù hợp.
- Internal link tối thiểu 3 liên kết đến bài liên quan đang live.
- Responsive card và hero không vỡ ở desktop/tablet/mobile.
- Merge từng batch riêng để rollback được nếu có lỗi.

## Hạ tầng cần theo dõi khi tổng bài vượt 200

- `llms.txt` nên nâng coverage lên khoảng 400 bài.
- Blog card tiếp tục `loading="lazy"`; nên bổ sung `content-visibility:auto` hoặc progressive rendering khi thư viện vượt 200 card để giảm chi phí render.
- Sitemap hiện tự lấy toàn bộ `site.posts`, không cần thêm URL thủ công.
- Search/filter Blog phải tiếp tục hoạt động với toàn bộ 9 category hiện tại.
