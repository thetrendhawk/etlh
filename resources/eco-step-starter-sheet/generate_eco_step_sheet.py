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
MUTED = HexColor("#60655E")
LINE = HexColor("#BFC6BB")
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


def line_field(x, y, width, count=1, gap=22):
    c.setStrokeColor(LINE)
    c.setLineWidth(0.8)
    for index in range(count):
        line_y = y - index * gap
        c.line(x, line_y, x + width, line_y)
    return y - count * gap


def checkbox(x, y, label, width=450, size=10.2):
    c.setStrokeColor(SAGE_DARK)
    c.setLineWidth(0.9)
    c.rect(x, y - 9, 11, 11, fill=0, stroke=1)
    return text_block(x + 18, y, label, width - 18, size=size, leading=12.5)


def section_header(number, title, y):
    c.setFillColor(SAGE_DARK)
    c.circle(M + 11, y - 2, 11, fill=1, stroke=0)
    c.setFillColor(white)
    c.setFont("Helvetica-Bold", 10.5)
    c.drawCentredString(M + 11, y - 5.5, str(number))
    c.setFillColor(EARTH)
    c.setFont("Helvetica-Bold", 14)
    c.drawString(M + 31, y - 7, title)
    return y - 27


def page_header(title, subtitle=None):
    c.setFillColor(SAGE_DARK)
    c.rect(0, PAGE_H - 0.22 * inch, PAGE_W, 0.22 * inch, fill=1, stroke=0)
    y = PAGE_H - 0.62 * inch
    c.setFillColor(EARTH)
    c.setFont("Helvetica-Bold", 20 if subtitle else 17)
    c.drawString(M, y, title)
    if subtitle:
        y -= 22
        y = text_block(M, y, subtitle, PAGE_W - 2 * M, size=10.8, leading=14, color=MUTED)
    return y - 12


def footer(page):
    c.setStrokeColor(LINE)
    c.line(M, 0.45 * inch, PAGE_W - M, 0.45 * inch)
    c.setFont("Helvetica", 8.2)
    c.setFillColor(MUTED)
    c.drawString(M, 0.27 * inch, "Eco Tiny Living Hub | Version 1.0 | July 2026")
    c.drawRightString(PAGE_W - M, 0.27 * inch, f"Page {page} of 2")


def option_row(y, labels, start_x=None, spacing=110):
    if start_x is None:
        start_x = M
    for index, label in enumerate(labels):
        x = start_x + index * spacing
        c.setStrokeColor(SAGE_DARK)
        c.setLineWidth(0.9)
        c.rect(x, y - 9, 11, 11, fill=0, stroke=1)
        c.setFillColor(EARTH)
        c.setFont("Helvetica", 10.2)
        c.drawString(x + 18, y - 6, label)
    return y - 25


# Page 1 - Notice and choose
c.setFillColor(CREAM)
c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)
y = page_header(
    "Small-Apartment Eco Step Starter Sheet",
    "Choose one small, reversible action that fits your real space, control, energy, and routine. Progress means a clear next experiment - not perfection, a purchase, or a guaranteed result.",
)

c.setFillColor(PALE)
c.roundRect(M, y - 48, PAGE_W - 2 * M, 48, 7, fill=1, stroke=0)
c.setFillColor(EARTH)
c.setFont("Helvetica-Bold", 9.8)
c.drawString(M + 13, y - 17, "Planning note")
text_block(
    M + 13,
    y - 32,
    "Pause and check household needs, accessibility, safety, product instructions, and local or building rules before acting.",
    PAGE_W - 2 * M - 26,
    size=9.1,
    leading=11,
    color=MUTED,
)
y -= 66

y = section_header(1, "Notice one recurring friction point", y)
for label, lines in [
    ("Room or routine:", 1),
    ("What keeps happening?", 2),
    ("When and where does it happen?", 1),
    ("What feels like the extra step?", 1),
]:
    y = text_block(M, y, label, PAGE_W - 2 * M, font="Helvetica-Bold", size=10.2, leading=13)
    y = line_field(M, y - 2, PAGE_W - 2 * M, lines)
    y -= 7 if lines == 1 else 6

y -= 5
c.setFillColor(PALE)
c.roundRect(M, y - 31, PAGE_W - 2 * M, 31, 5, fill=1, stroke=0)
c.setFont("Helvetica-Oblique", 9.1)
c.setFillColor(MUTED)
c.drawString(M + 11, y - 19, "Example: Reusable bags are stored far from the door, so they are easy to forget.")
y -= 47

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
    y -= 3

y -= 3
y = section_header(3, "Use what already exists", y)
for label in [
    "Move it closer or make it easier to see.",
    "Repair or simplify it.",
    "Give it one clear home.",
    "Use it differently before buying something new.",
]:
    y = checkbox(M, y, label, PAGE_W - 2 * M)
    y -= 2
c.setFont("Helvetica-Bold", 10.2)
c.setFillColor(EARTH)
c.drawString(M, y, "Is a purchase necessary now?")
y = option_row(y, ["Yes", "No", "Not sure"], start_x=M + 220, spacing=92)

y = section_header(4, "Define one Eco Step", y)
y = text_block(M, y, "I will make this moment easier by...", PAGE_W - 2 * M, font="Helvetica-Bold", size=10.2, leading=13)
line_field(M, y - 2, PAGE_W - 2 * M, 2)
footer(1)
c.showPage()

# Page 2 - Try and review
c.setFillColor(CREAM)
c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)
y = page_header("Small-Apartment Eco Step Starter Sheet")
c.setFont("Helvetica-Bold", 12)
c.setFillColor(SAGE_DARK)
c.drawString(M, y, "Try and review your Eco Step")
y -= 27

y = section_header(5, "Before you try it", y)
for label, lines in [
    ("Where will the setup live?", 1),
    ("When will you try it?", 1),
    ("Maximum time or effort you want to spend:", 1),
    ("Permission, guidance, or research needed first:", 2),
]:
    y = text_block(M, y, label, PAGE_W - 2 * M, font="Helvetica-Bold", size=10.2, leading=13)
    y = line_field(M, y - 2, PAGE_W - 2 * M, lines)
    y -= 7

y = section_header(6, "Observe without scoring yourself", y)
for label in [
    "The action was easier to notice or begin.",
    "Something became harder, unsafe, inaccessible, or inconvenient.",
    "I need more information before continuing.",
]:
    y = checkbox(M, y, label, PAGE_W - 2 * M)
    y -= 4

y -= 10
c.setFont("Helvetica-Bold", 10.2)
c.setFillColor(EARTH)
c.drawString(M, y, "What will you do next?")
y = option_row(y - 2, ["Keep", "Adjust", "Stop", "Research"], start_x=M, spacing=116)
y = text_block(M, y, "One note for the next attempt:", PAGE_W - 2 * M, font="Helvetica-Bold", size=10.2, leading=13)
y = line_field(M, y - 2, PAGE_W - 2 * M, 3)
y -= 10

y = section_header(7, "Optional next step", y)
for label in [
    "Repeat the same setup.",
    "Adjust one part.",
    "Choose a different problem.",
    "Stop here - no next action is required.",
]:
    y = checkbox(M, y, label, PAGE_W - 2 * M)
    y -= 3

c.setFillColor(PALE)
c.roundRect(M, 0.75 * inch, PAGE_W - 2 * M, 0.66 * inch, 7, fill=1, stroke=0)
c.setFillColor(EARTH)
c.setFont("Helvetica-Bold", 9.2)
c.drawString(M + 13, 1.16 * inch, "Eco Step note")
text_block(
    M + 13,
    1.00 * inch,
    "An Eco Step is an ETLH planning concept, not a scientific score or certification. Choose what fits your home, and stop when it does not.",
    PAGE_W - 2 * M - 26,
    size=8.8,
    leading=10.5,
    color=MUTED,
)
footer(2)
c.save()
print(OUT)
