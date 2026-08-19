from PIL import Image, ImageDraw, ImageFont
from io import BytesIO
import requests, os

W,H=2160,2700
PORTRAIT_URL='https://media.canva.com/v2/image-resize/format:PNG/height:200/quality:100/uri:ifs%3A%2F%2FM%2F34dbdb1d-f7a4-4353-95ac-d0b690498eed/watermark:F/width:200?csig=AAAAAAAAAAAAAAAAAAAAAHL_qbqjGwWMYupBIVM2VYgVq5dlf1_TgvkcC8jg81sM&exp=1787130633&osig=AAAAAAAAAAAAAAAAAAAAAKNkRKpsAaVo_79x8WsJ7jetcWw8UOgM9bkhAm5Cssnr&signer=media-rpc&x-canva-quality=thumbnail'
OUT='media/neptech/2026-08-19'
os.makedirs(OUT,exist_ok=True)
BOLD='/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf'
REG='/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf'

def F(n,b=True): return ImageFont.truetype(BOLD if b else REG,n)

def portrait():
    r=requests.get(PORTRAIT_URL,timeout=30); r.raise_for_status()
    im=Image.open(BytesIO(r.content)).convert('RGBA').resize((390,390),Image.Resampling.LANCZOS)
    m=Image.new('L',(390,390),0); ImageDraw.Draw(m).ellipse((0,0,389,389),fill=255)
    o=Image.new('RGBA',(390,390),(0,0,0,0)); o.paste(im,(0,0),m); return o
P=portrait()

def rounded(d,box,r,fill,outline=None,w=1): d.rounded_rectangle(box,radius=r,fill=fill,outline=outline,width=w)

def device_icon(d,kind,cx,cy,accent):
    if kind=='laptop':
        d.rounded_rectangle((cx-260,cy-170,cx+260,cy+140),radius=30,outline=accent,width=12)
        d.rectangle((cx-320,cy+150,cx+320,cy+185),fill=accent)
    elif kind=='cam':
        d.rounded_rectangle((cx-240,cy-175,cx+240,cy+175),radius=55,outline=accent,width=12)
        d.ellipse((cx-95,cy-95,cx+95,cy+95),outline=accent,width=16)
        d.rectangle((cx-190,cy-120,cx-70,cy-20),outline=accent,width=8)
    else:
        d.rounded_rectangle((cx-220,cy-300,cx-8,cy+300),radius=35,outline=accent,width=12)
        d.rounded_rectangle((cx+8,cy-300,cx+220,cy+300),radius=35,outline=accent,width=12)
        d.line((cx,cy-285,cx,cy+285),fill=accent,width=8)

def poster(fn,accent,kicker,title1,title2,left,right,leftsub,rightsub,verdict,question,kind):
    bg=(5,16,35); img=Image.new('RGBA',(W,H),bg+(255,)); d=ImageDraw.Draw(img)
    # subtle grid
    for x in range(0,W,180): d.line((x,0,x,H),fill=accent+(18,),width=2)
    for y in range(0,H,180): d.line((0,y,W,y),fill=accent+(18,),width=2)
    d.text((110,90),'NẾP',font=F(122),fill='white'); d.text((425,90),'TECH',font=F(122),fill=accent)
    d.text((115,235),'Góc nhìn công nghệ của Chú Nếp',font=F(42,False),fill=(220,230,240)); d.line((110,310,2050,310),fill=accent,width=4)
    rounded(d,(110,370,780,470),44,accent+(255,)); d.text((150,394),kicker,font=F(46),fill=bg)
    d.text((110,545),title1,font=F(112),fill='white'); d.text((110,680),title2,font=F(106),fill=accent)
    # portrait with ring
    ring=Image.new('RGBA',(430,430),(0,0,0,0)); rd=ImageDraw.Draw(ring); rd.ellipse((8,8,422,422),outline=accent,width=14); ring.alpha_composite(P,(20,20)); img.alpha_composite(ring,(1600,390))
    # cards
    cy=1450
    for x,label,sub in [(110,left,leftsub),(1125,right,rightsub)]:
        rounded(d,(x,1020,x+925,1780),48,(12,29,53,245),accent,5)
        d.text((x+55,1080),label,font=F(70),fill='white')
        d.text((x+55,1185),sub,font=F(40,False),fill=(213,224,238))
        device_icon(d,kind,x+462,1490,accent)
    d.ellipse((1000,1300,1170,1470),fill=bg,outline=accent,width=7); d.text((1032,1342),'VS',font=F(62),fill='white')
    rounded(d,(110,1870,2050,2310),48,(12,29,53,245),accent,5); d.text((160,1920),'CHÚ NẾP CHỐT',font=F(58),fill=accent)
    # simple wrap
    words=verdict.split(); lines=[]; cur=''
    for word in words:
        test=(cur+' '+word).strip()
        if d.textlength(test,font=F(46,False))<1760: cur=test
        else: lines.append(cur); cur=word
    if cur: lines.append(cur)
    yy=2020
    for line in lines[:4]: d.text((160,yy),line,font=F(46,False),fill='white'); yy+=70
    rounded(d,(110,2390,2050,2575),48,accent+(255,)); d.text((160,2440),question,font=F(54),fill=bg)
    d.text((110,2618),'TIN CẬY • RÕ RÀNG • KHÔNG ĐOÁN THÔNG SỐ',font=F(36),fill=(210,220,235)); d.text((1810,2618),'#NepTech',font=F(36),fill=accent)
    img.convert('RGB').save(os.path.join(OUT,fn),'PNG',optimize=True)

poster('m5-vs-m4.png',(0,220,235),'SO SÁNH LAPTOP','MACBOOK AIR M5 vs M4','CÓ ĐÁNG NÂNG CẤP?','MacBook Air M5','MacBook Air M4','AI • băng thông • SSD/kết nối','M4 vẫn rất mạnh cho nhu cầu phổ thông','M4 chưa hề lỗi thời. M5 đáng cân nhắc hơn nếu bạn làm AI local, 3D, video nặng hoặc đang mua máy mới.','M4 vẫn đủ dùng hay M5 đã đáng lên đời?','laptop')
poster('action6-vs-action5pro.png',(0,232,160),'SO SÁNH ACTION CAM','OSMO ACTION 6 vs 5 PRO','NÂNG CẤP CÓ ĐÁNG?','Osmo Action 6','Osmo Action 5 Pro','Khẩu độ biến thiên • cảm biến mới','Vẫn rất mạnh cho POV & du lịch','Action 5 Pro vẫn ổn nếu chủ yếu quay ban ngày và POV. Action 6 đáng lên hơn khi quay đêm nhiều hoặc cần hậu kỳ linh hoạt.','Bạn đang dùng Action đời nào?','cam')
poster('fold8-vs-fold7.png',(182,96,255),'SO SÁNH MOBILE','Z FOLD8 ULTRA vs Z FOLD7','ĐỜI MỚI HƠN Ở ĐÂU?','Galaxy Z Fold8 Ultra','Galaxy Z Fold7','Pin • sạc • camera phụ • chip mới','Vẫn mạnh, chưa bắt buộc đổi','Nếu Fold7 đang dùng ngon thì chưa cần chạy theo đời mới. Fold8 Ultra đáng cân nhắc hơn nếu pin và camera là ưu tiên.','Máy gập: pin, camera hay trọng lượng?','fold')
