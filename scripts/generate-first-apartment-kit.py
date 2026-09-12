"""Build ETLH's original four-page printable companion (requires ReportLab).
Run from the repository root: python scripts/generate-first-apartment-kit.py
No third-party text, prices, graphics, or personal information are included.
"""
from pathlib import Path
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor, Color
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import Paragraph, Table, TableStyle
from reportlab.lib.enums import TA_LEFT

ROOT = Path(__file__).resolve().parents[1]
DEST = ROOT / 'public/downloads/first-apartment-less-waste-v1.pdf'
DEST.parent.mkdir(parents=True, exist_ok=True)
W,H = 612,792
LEFT,RIGHT=44,568
WIDTH=RIGHT-LEFT
INK=HexColor('#24392e'); MUTED=HexColor('#4b594f'); LINE=HexColor('#bcc4b7'); PALE=HexColor('#edf1e7')
BODY=ParagraphStyle('body',fontName='Helvetica',fontSize=10,leading=14,textColor=INK,spaceAfter=0)
SMALL=ParagraphStyle('small',parent=BODY,fontSize=8.2,leading=11.2)
SUB=ParagraphStyle('sub',parent=BODY,fontName='Helvetica-Bold',fontSize=11,leading=15)
URL='https://ecotinylivinghub.com/tools/first-apartment-kit.html'
c=canvas.Canvas(str(DEST),pagesize=(W,H),pageCompression=1,invariant=1)
c.setTitle('First Apartment, Less Waste | Free ETLH Printable Kit')
c.setAuthor('Eco Tiny Living Hub')
c.setSubject('Four practical worksheets: decisions, setup budget, measurements, and move-in checklist')

def paragraph(txt,x,y,width=WIDTH,style=BODY):
 p=Paragraph(txt,style); _,height=p.wrap(width,1000);p.drawOn(c,x,y-height);return y-height

def header(num,kicker,title,subtitle):
 c.setFillColor(INK);c.setFont('Helvetica-Bold',8);c.drawString(LEFT,H-41,'ECO TINY LIVING HUB  /  FREE MOVE-IN KIT')
 c.setFont('Helvetica',8);c.drawRightString(RIGHT,H-41,f'{num:02d} / 04')
 c.setStrokeColor(LINE);c.line(LEFT,H-51,RIGHT,H-51)
 c.setFont('Helvetica-Bold',9);c.drawString(LEFT,H-81,kicker.upper())
 c.setFont('Times-Roman',32);c.drawString(LEFT,H-120,title)
 return paragraph(subtitle,LEFT,H-137,WIDTH)

def footer(num):
 c.setStrokeColor(LINE);c.line(LEFT,49,RIGHT,49)
 c.setFont('Helvetica',7.4);c.setFillColor(MUTED);c.drawString(LEFT,34,'Small steps. No guilt.  |  Free resource, version 1.0, September 2026')
 c.drawRightString(RIGHT,34,f'{num} / 4')
 c.linkURL(URL,(LEFT,25,RIGHT,46),relative=0,thickness=0)
 c.showPage()

def box(text,y,height=54):
 c.setFillColor(PALE);c.roundRect(LEFT,y-height,WIDTH,height,9,fill=1,stroke=0)
 paragraph(text,LEFT+14,y-12,WIDTH-28,BODY)
 return y-height-20

def line(label,y,label_width=None):
 c.setFillColor(INK);c.setFont('Helvetica',10);c.drawString(LEFT,y,label)
 start=LEFT+(label_width if label_width else c.stringWidth(label,'Helvetica',10)+10)
 c.setStrokeColor(LINE);c.line(start,y-3,RIGHT,y-3)
 return y-29

def blank_table(headers,widths,y,rows=6,row_height=34):
 data=[[Paragraph(h,SMALL) for h in headers]]+[['']*len(headers) for _ in range(rows)]
 t=Table(data,colWidths=widths,rowHeights=[31]+[row_height]*rows)
 t.setStyle(TableStyle([('BACKGROUND',(0,0),(-1,0),PALE),('VALIGN',(0,0),(-1,-1),'MIDDLE'),('LINEBELOW',(0,0),(-1,0),.7,LINE),('LINEBELOW',(0,1),(-1,-1),.5,LINE),('LINEAFTER',(0,0),(-2,-1),.35,LINE),('LEFTPADDING',(0,0),(-1,-1),8),('RIGHTPADDING',(0,0),(-1,-1),8)]))
 _,h=t.wrap(WIDTH,1000);t.drawOn(c,LEFT,y-h);return y-h-20

def check(text,y,width=WIDTH):
 c.setLineWidth(.7);c.setStrokeColor(MUTED);c.rect(LEFT,y-9,8,8,fill=0,stroke=1)
 bottom=paragraph(text,LEFT+18,y+1,width-18,SMALL)
 return min(bottom-9,y-23)

# 1. A decisions worksheet, not a list of things to buy.
y=header(1,'First apartment. Less waste.','A home, not a shopping haul.','Use what you have. Plan the few things you really need. Leave room to discover how you actually live in the space.')
y-=18
y=box('<b>Start here:</b> Circle one choice per item: <b>H</b> = already have, <b>B</b> = share or borrow, <b>N</b> = buy now, <b>L</b> = buy later, <b>S</b> = skip. Blank is a valid choice while you decide.',y,65)
y=line('Move-in date (optional):',y)
y=line('Three things that would make day one easier:',y)
y-=2
y=blank_table(['<b>Item or need</b>','<b>What job will it do?</b>','<b>My choice</b><br/>H / B / N / L / S'],[167,240,117],y,rows=6,row_height=35)
y=paragraph('<b>Before anything goes in the cart</b>',LEFT,y,WIDTH,SUB)-13
for txt in ['Could something I already own do the same job?','Where will it live, and have I measured that space?','Will I use it soon, or am I buying it to complete a room?','Could I try a borrowed or shared option before committing?']:
 y=check(txt,y)
y=paragraph('Use the interactive planner, including 24 optional starter prompts:<br/><link href="'+URL+'">ecotinylivinghub.com/tools/first-apartment-kit.html</link>',LEFT,y-3,WIDTH,SMALL)
footer(1)

# 2. Explicit estimates, no invented prices or default spending target.
y=header(2,'Set a limit, not a target','Give your money a boundary.','One-time setup planning only. Keep ongoing rent, bills, and other commitments separate. Enter your own totals, including tax and delivery.')
y-=20
for label in ['A. My available setup budget (USD):','B. Keep-aside buffer (USD):','C. Other one-time costs not listed below (USD):']:
 y=line(label,y)
y=paragraph('What other costs cover: __________________________________________________________',LEFT,y+3,WIDTH,SMALL)-23
y=blank_table(['<b>Buy-now item</b>','<b>Estimated total (USD)</b>','<b>Price checked?</b>'],[290,145,89],y,rows=5,row_height=31)
y=line('D. Total of the priced buy-now items:',y)
y=box('<b>Room after your plan = A - B - C - D</b><br/>My remaining amount: ____________________ USD<br/>A negative result means the priced plan plus buffer is over your budget.',y+2,70)
y=paragraph('<b>Check before trusting the total</b>',LEFT,y,WIDTH,SUB)-14
for txt in ['Every buy-now item has a price, or I have marked the estimate incomplete.','Nothing is counted both as an item and under other one-time costs.','Buy-later items are excluded. I have not mistaken this for an actual spending ledger.']:
 y=check(txt,y)
y=paragraph('<b>What can wait?</b> ______________________________________________________________',LEFT,y-4,WIDTH,SMALL)
footer(2)

# 3. Two measurement cards with explicit limits.
y=header(3,'Measure before bringing it home','Fit the item to your life.','Use one unit throughout each check. Measure usable space, with room to walk, open doors, and operate the item. A measurement match is not a fit guarantee.')
y-=20
for index in [1,2]:
 c.setFillColor(PALE);c.roundRect(LEFT,y-22,WIDTH,24,5,fill=1,stroke=0)
 paragraph(f'<b>MEASUREMENT CHECK {index}</b>',LEFT+10,y-3,WIDTH-20,SMALL);y-=42
 y=line('Item / room:',y)
 y=line('Unit (circle one): inches / centimeters',y,258)
 y=blank_table(['','<b>Width</b>','<b>Depth</b>','<b>Height</b>'],[200,108,108,108],y+4,rows=2,row_height=28)
 # Row labels, aligned within the blank data rows.
 c.setFillColor(INK);c.setFont('Helvetica',9)
 c.drawString(LEFT+8,y+20+28+10,'Item dimensions')
 c.drawString(LEFT+8,y+20+10,'Usable space dimensions')
 y=check('I checked the delivery route, packaging, assembly space, and required clearances.',y+1)
 y=line('Route / clearance notes:',y)
 y-=12
 y= max(y,80)
y=paragraph('<b>Also check:</b> doorways, corners, stairs, elevators, door swings, installation instructions, ventilation, and access needs. This worksheet does not calculate rotations or assess building or product safety.',LEFT,y+3,WIDTH,SMALL)
footer(3)

# 4. Human-sized checklist; real requirements always take precedence.
y=header(4,'Make the move','One useful step at a time.','Adapt these prompts to your lease, building, providers, household, and access needs. Timing is a suggestion, not an official deadline.')
y-=20
sections=[('BEFORE MOVING DAY',[
 'Confirm key pickup, building access, parking, lift bookings, transport, and help.',
 'Check what is already provided or shared before choosing what to bring.',
 'Arrange the services you are responsible for through your lease and providers.',
 'Plan important address updates through official channels and their deadlines.',
 'Pack an easy-to-reach bag for your own first-night and next-morning needs.']),
 ('MOVING DAY',[
 'Document existing condition issues before unpacking. Follow the property reporting process.',
 'Confirm keys, access instructions, and contacts for maintenance or urgent property issues.',
 'Check what arrived, and make a usable sleep, bathroom, and simple-meal setup first.']),
 ('FIRST WEEK AND BEYOND',[
 'Unpack before buying organizers. Try the layout using what you already own.',
 'Discuss shared items and routines with your household as relevant.',
 'Pass on reusable packing materials where practical; check local and building disposal rules.',
 'Review actual quotes and the buy-later list. Choose one change that solves a real problem.'])]
for heading,items in sections:
 y=paragraph('<b>'+heading+'</b>',LEFT,y,WIDTH,SUB)-14
 for txt in items:y=check(txt,y)
 y-=10
y=line('My next small step:',y+2)
y=paragraph('<b>Need a flexible version?</b> The free online kit adds suggested dates, optional browser saving, budget calculations, item-list export, and a restorable backup. No signup or paywall.<br/><link href="'+URL+'">ecotinylivinghub.com/tools/first-apartment-kit.html</link>',LEFT,y,WIDTH,SMALL)
y=paragraph('General organization prompts, not legal, financial, building-safety, or accessibility advice. Keep actual requirements and your household\'s needs ahead of any checklist.',LEFT,y-13,WIDTH,SMALL)
footer(4)
c.save()
print(DEST)
