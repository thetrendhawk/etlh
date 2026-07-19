from reportlab.lib.pagesizes import letter
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor, white
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.lib.units import inch

OUT = "small-apartment-eco-step-starter-sheet-v1.pdf"
PAGE_W, PAGE_H = letter
M = 0.55 * inch
CREAM = HexColor("#F7F3EA")
SAGE_DARK = HexColor("#566451")
EARTH = HexColor("#2F332D")
MUTED = HexColor("#666B62")
LINE = HexColor("#C9CEC4")
PALE = HexColor("#EEF1EB")

c = canvas.Canvas(OUT, pagesize=letter)
c.setTitle("Small-Apartment Eco Step Starter Sheet")
c.setAuthor("Eco Tiny Living Hub")
c.setSubject("A practical worksheet for choosing one small, reversible, renter-aware Eco Step.")


def wrap(text, font="Helvetica", size=10, width=400):
    words = text.split()
    lines, current = [], ""
    for word in words:
        trial = word if not current else current + " " + word
        if stringWidth(trial, font, size) <= width:
            current = trial
        else:
            if current:
                lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines


def text_block(x, y, text, width, font="Helvetica", size=10, leading=13, color=EARTH):
    c.setFont(font, size)
    c.setFillColor(color)
    for line in wrap(text, font, size, width):
        c.drawString(x, y, line)
        y -= leading
    return y


def line_field(x, y, width, count=1, gap=18):
    c.setStrokeColor(LINE)
    c.setLineWidth(0.7)
    for index in range(count):
        line_y = y - index * gap
        c.line(x, line_y, x + width, line_y)
    return y - count * gap


def checkbox(x, y, label, width=450, size=9.3):
    c.setStrokeColor(SAGE_DARK)
    c.setLineWidth(0.8)
    c.rect(x, y - 8, 9, 9, fill=0, stroke=1)
    return text_block(x + 15, y, label, width - 15, size=size, leading=11)


def section_header(number, title, y):
    c.setFillColor(SAGE_DARK)
    c.circle(M + 10, y - 2, 10, fill=1, stroke=0)
    c.setFillColor(white)
    c.setFont("Helvetica-Bold", 10)
    c.drawCentredString(M + 10, y - 5, str(number))
    c.setFillColor(EARTH)
    c.setFont("Helvetica-Bold", 13)
    c.drawString(M + 28, y - 6, title)
    return y - 22


def footer(page):
    c.setStrokeColor(LINE)
    c.line(M, 0.45 * inch, PAGE_W - M, 0.45 * inch)
    c.setFont("Helvetica", 7.8)
    c.setFillColor(MUTED)
    c.drawString(M, 0.28 * inch, "Eco Tiny Living Hub | Version 1.0 | July 2026")
    c.drawRightString(PAGE_W - M, 0.28 * inch, f"Page {page} of 2")


c.setFillColor(CREAM)
c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)
c.setFillColor(SAGE_DARK)
c.rect(0, PAGE_H - 0.22 * inch, PAGE_W, 0.22 * inch, fill=1, stroke=0)
y = PAGE_H - 0.68 * inch
c.setFillColor(EARTH)
c.setFont("Helvetica-Bold", 22)
c.drawString(M, y, "Small-Apartment Eco Step Starter Sheet")
y -= 24
y = text_block(M, y, "Choose one small, reversible action that fits your real space, control, energy, and routine. Progress here means a clear next experiment - not perfection, a purchase, or a guaranteed result.", PAGE_W - 2 * M, size=10.5, leading=14, color=MUTED)
y -= 10
c.setFillColor(PALE)
c.roundRect(M, y - 42, PAGE_W - 2 * M, 42, 6, fill=1, stroke=0)
c.setFillColor(EARTH)
c.setFont("Helvetica-Bold", 9.4)
c.drawString(M + 12, y - 15, "Use this sheet as a planning aid.")
text_block(M + 12, y - 29, "Check local rules, product instructions, household needs, accessibility, and safety before acting.", PAGE_W - 2 * M - 24, size=8.8, leading=11, color=MUTED)
y -= 62

y = section_header(1, "Notice one recurring friction point", y)
for label, lines in [("Room or routine:", 1), ("What keeps happening?", 2), ("When and where does it happen?", 1), ("What feels like the extra step?", 2)]:
    y = text_block(M, y, label, PAGE_W - 2 * M, font="Helvetica-Bold", size=9.5, leading=12)
    y = line_field(M, y - 2, PAGE_W - 2 * M, lines)
    y -= 8 if lines == 1 else 6

c.setFont("Helvetica-Oblique", 8.5)
c.setFillColor(MUTED)
c.drawString(M, y, "Example: Reusable bags are stored far from the door, so they are easy to forget.")
y -= 26

y = section_header(2, "Check fit and control", y)
for label in [
    "I control this change.",
    "I may need household agreement.",
    "I may need landlord or property approval.",
    "It depends on a local service, building rule, or program.",
    "It may affect accessibility, safety, pets, children, food, utilities, or shared space.",
    "Not sure - research before acting.",
]:
    y = checkbox(M, y, label, PAGE_W - 2 * M)
    y -= 4

y -= 3
y = text_block(M, y, "What permission, guidance, or research is needed?", PAGE_W - 2 * M, font="Helvetica-Bold", size=9.5, leading=12)
line_field(M, y - 2, PAGE_W - 2 * M, 2)
footer(1)
c.showPage()

c.setFillColor(CREAM)
c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)
c.setFillColor(SAGE_DARK)
c.rect(0, PAGE_H - 0.22 * inch, PAGE_W, 0.22 * inch, fill=1, stroke=0)
y = PAGE_H - 0.52 * inch
c.setFont("Helvetica-Bold", 15)
c.setFillColor(EARTH)
c.drawString(M, y, "Plan one Eco Step")
y -= 28

y = section_header(3, "Use what already exists", y)
y = text_block(M, y, "What item, location, or routine is already available?", PAGE_W - 2 * M, font="Helvetica-Bold", size=9.5, leading=12)
y = line_field(M, y - 2, PAGE_W - 2 * M, 1)
y -= 8
for label in ["Move it closer or make it more visible.", "Repair or simplify it.", "Give it one clear home.", "Use it differently before buying something new."]:
    y = checkbox(M, y, label, PAGE_W - 2 * M)
    y -= 3

y -= 2
y = text_block(M, y, "Is a purchase necessary now?", 180, font="Helvetica-Bold", size=9.5, leading=12)
for index, label in enumerate(["Yes", "No", "Not sure"]):
    x = M + 150 + index * 95
    c.setStrokeColor(SAGE_DARK)
    c.rect(x, y - 8, 9, 9, fill=0, stroke=1)
    c.setFillColor(EARTH)
    c.setFont("Helvetica", 9.3)
    c.drawString(x + 15, y - 6, label)
y -= 28

y = section_header(4, "Define one Eco Step", y)
y = text_block(M, y, "I will make this moment easier by...", PAGE_W - 2 * M, font="Helvetica-Bold", size=9.5, leading=12)
y = line_field(M, y - 2, PAGE_W - 2 * M, 2)
y -= 7
for label in ["Where will the setup live?", "When will I try it?", "Maximum time or effort I want to spend:", "Permission or research needed first:"]:
    y = text_block(M, y, label, PAGE_W - 2 * M, font="Helvetica-Bold", size=9.2, leading=11)
    y = line_field(M, y - 2, PAGE_W - 2 * M, 1)
    y -= 5

y = section_header(5, "Observe without scoring yourself", y)
for label in ["The action was easier to notice.", "Something became harder, unsafe, inaccessible, or inconvenient.", "I need more information before continuing."]:
    y = checkbox(M, y, label, PAGE_W - 2 * M)
    y -= 3
c.setFont("Helvetica-Bold", 9.3)
c.setFillColor(EARTH)
c.drawString(M, y, "Decision:")
for index, label in enumerate(["Keep", "Adjust", "Stop", "Research"]):
    x = M + 62 + index * 90
    c.setStrokeColor(SAGE_DARK)
    c.rect(x, y - 8, 9, 9, fill=0, stroke=1)
    c.setFillColor(EARTH)
    c.setFont("Helvetica", 9.1)
    c.drawString(x + 15, y - 6, label)
y -= 24
y = text_block(M, y, "One note for the next attempt:", PAGE_W - 2 * M, font="Helvetica-Bold", size=9.2, leading=11)
y = line_field(M, y - 2, PAGE_W - 2 * M, 2)
y -= 8

y = section_header(6, "Optional next step", y)
for label in ["Repeat the same setup.", "Adjust one part.", "Choose a different problem.", "Stop here - no next action is required."]:
    y = checkbox(M, y, label, PAGE_W - 2 * M)
    y -= 2

c.setFillColor(PALE)
c.roundRect(M, 0.72 * inch, PAGE_W - 2 * M, 0.64 * inch, 6, fill=1, stroke=0)
c.setFillColor(EARTH)
c.setFont("Helvetica-Bold", 8.8)
c.drawString(M + 12, 1.12 * inch, "Eco Step note")
text_block(M + 12, 0.98 * inch, "An Eco Step is an ETLH planning concept, not a scientific score or certification. Choose what fits your home and stop when it does not.", PAGE_W - 2 * M - 24, size=8.2, leading=10, color=MUTED)
footer(2)
c.save()
print(OUT)
