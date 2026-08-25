from PIL import Image, ImageDraw, ImageFont
import os

W, H = 2160, 2700
OUT = 'media/neptech/2026-08-25'
os.makedirs(OUT, exist_ok=True)
BOLD = '/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf'
REG = '/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf'
APPROVED_POST = 'media/neptech/2026-08-19/m5-vs-m4.png'


def F(n, bold=True):
    return ImageFont.truetype(BOLD if bold else REG, n)


def approved_portrait():
    # Reuse the exact approved Chú Nếp portrait already embedded in the approved 2026-08-19 asset.
    # The original canonical source link has expired, so this crop preserves the exact approved visual
    # instead of inventing or regenerating a character.
    src = Image.open(APPROVED_POST).convert('RGBA')
    im = src.crop((1620, 410, 2010, 800)).resize((390, 390), Image.Resampling.LANCZOS)
    mask = Image.new('L', (390, 390), 0)
    ImageDraw.Draw(mask).ellipse((0, 0, 389, 389), fill=255)
    out = Image.new('RGBA', (390, 390), (0, 0, 0, 0))
    out.paste(im, (0, 0), mask)
    return out


P = approved_portrait()


def rounded(d, box, radius, fill, outline=None, width=1):
    d.rounded_rectangle(box, radius=radius, fill=fill, outline=outline, width=width)


def wrap(draw, text, font, max_width):
    words = text.split()
    lines, cur = [], ''
    for word in words:
        test = (cur + ' ' + word).strip()
        if draw.textlength(test, font=font) <= max_width:
            cur = test
        else:
            if cur:
                lines.append(cur)
            cur = word
    if cur:
        lines.append(cur)
    return lines


def icon(draw, kind, cx, cy, accent):
    if kind == 'ssd':
        draw.rounded_rectangle((cx-330, cy-150, cx+330, cy+150), radius=70, outline=accent, width=18)
        draw.rounded_rectangle((cx-250, cy-80, cx+120, cy+80), radius=38, outline=accent, width=14)
        for i in range(6):
            x = cx + 170 + i*28
            draw.line((x, cy-95, x, cy+95), fill=accent, width=10)
    elif kind == 'laptop':
        draw.rounded_rectangle((cx-360, cy-220, cx+360, cy+180), radius=38, outline=accent, width=18)
        draw.line((cx-440, cy+215, cx+440, cy+215), fill=accent, width=32)
        draw.line((cx-220, cy+215, cx+220, cy+215), fill=(235, 242, 250), width=10)
    elif kind == 'chip':
        draw.rounded_rectangle((cx-220, cy-220, cx+220, cy+220), radius=48, outline=accent, width=18)
        draw.rounded_rectangle((cx-105, cy-105, cx+105, cy+105), radius=28, outline=(235,242,250), width=12)
        for off in range(-150, 151, 75):
            draw.line((cx-270, cy+off, cx-220, cy+off), fill=accent, width=12)
            draw.line((cx+220, cy+off, cx+270, cy+off), fill=accent, width=12)
            draw.line((cx+off, cy-270, cx+off, cy-220), fill=accent, width=12)
            draw.line((cx+off, cy+220, cx+off, cy+270), fill=accent, width=12)
    elif kind == 'phone':
        draw.rounded_rectangle((cx-190, cy-330, cx+190, cy+330), radius=65, outline=accent, width=18)
        draw.ellipse((cx-72, cy-170, cx+72, cy-26), outline=(235,242,250), width=14)
        draw.line((cx+80, cy-120, cx+330, cy-230), fill=accent, width=18)
        draw.ellipse((cx+285, cy-275, cx+395, cy-165), outline=accent, width=16)


def poster(filename, accent, kicker, title, subline, note, kind):
    bg = (8, 18, 37)
    img = Image.new('RGBA', (W, H), bg + (255,))
    d = ImageDraw.Draw(img)

    # subtle background geometry
    for x in range(-300, W+500, 260):
        d.line((x, 0, x-700, H), fill=accent + (18,), width=3)
    d.ellipse((1450, -240, 2350, 660), outline=accent + (50,), width=7)

    # brand header
    d.text((120, 100), 'NẾP', font=F(118), fill='white')
    d.text((430, 100), 'TECH', font=F(118), fill=accent)
    d.text((125, 240), 'Góc nhìn công nghệ của Chú Nếp', font=F(40, False), fill=(210, 222, 238))
    d.line((120, 330, 2040, 330), fill=accent, width=5)

    rounded(d, (120, 405, 1060, 515), 52, accent + (255,))
    d.text((170, 432), kicker, font=F(43), fill=bg)

    title_font = F(112)
    title_lines = wrap(d, title, title_font, 1680)
    y = 610
    for line in title_lines[:2]:
        d.text((120, y), line, font=title_font, fill='white')
        y += 135

    sub_font = F(67)
    sub_lines = wrap(d, subline, sub_font, 1700)
    y += 30
    for line in sub_lines[:3]:
        d.text((120, y), line, font=sub_font, fill=accent)
        y += 90

    # product/category icon only; no misleading product render
    icon(d, kind, 1050, 1590, accent)

    rounded(d, (120, 2050, 1420, 2295), 58, (15, 34, 61, 245), accent, 5)
    note_font = F(48, False)
    note_lines = wrap(d, note, note_font, 1190)
    yy = 2110
    for line in note_lines[:2]:
        d.text((175, yy), line, font=note_font, fill=(238, 244, 251))
        yy += 67

    # Exact approved Chú Nếp portrait reused from existing approved asset
    ring = Image.new('RGBA', (450, 450), (0, 0, 0, 0))
    rd = ImageDraw.Draw(ring)
    rd.ellipse((10, 10, 440, 440), fill=(8,18,37,255), outline=accent, width=16)
    ring.alpha_composite(P, (30, 30))
    img.alpha_composite(ring, (1585, 1980))
    d.text((1645, 2440), 'CHÚ NẾP', font=F(48), fill='white')

    d.text((120, 2588), 'NẾP TECH • KHÔNG ĐOÁN THÔNG SỐ', font=F(34), fill=(200, 214, 232))
    img.convert('RGB').save(os.path.join(OUT, filename), 'PNG', optimize=True)


poster(
    '9100pro-vs-990pro.png',
    (0, 225, 205),
    'SSD • PCIe 5.0 vs 4.0',
    '9100 PRO vs 990 PRO',
    'GEN5 GẤP ĐÔI MB/s — CÓ ĐÁNG?',
    'Số tuần tự tối đa theo Samsung, không đồng nghĩa game nhanh gấp đôi.',
    'ssd'
)

poster(
    'rog-scar18-2026.png',
    (255, 90, 95),
    'GAMING LAPTOP • 2026',
    'ROG STRIX SCAR 18',
    '4K 240Hz • 320W — LAPTOP HAY DESKTOP?',
    'Máy rất mạnh, nhưng trọng lượng, nhiệt và giá mới là câu hỏi thực tế.',
    'laptop'
)

poster(
    'snapdragon-ai-pc-80tops.png',
    (96, 165, 255),
    'AI PC • ON-DEVICE',
    'NPU 80 TOPS',
    'AI LOCAL: HỮU DỤNG HAY CHỈ LÀ TEM?',
    'TOPS là năng lực phần cứng; trải nghiệm còn phụ thuộc app và model hỗ trợ.',
    'chip'
)

poster(
    'honor-robot-phone.png',
    (190, 105, 255),
    'PHONE • CAMERA • GIMBAL',
    'HONOR ROBOT PHONE',
    'ĐIỆN THOẠI + GIMBAL CƠ?',
    'Một thiết bị lai thú vị: phone, camera và cơ cấu gimbal trong cùng thân máy.',
    'phone'
)
