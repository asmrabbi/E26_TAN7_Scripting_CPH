from pathlib import Path

from PIL import Image, ImageDraw, ImageFont


OUTPUT = Path(__file__).with_name("python-keywords.png")
W, H = 1200, 690

image = Image.new("RGB", (W, H), "#f6f8f5")
draw = ImageDraw.Draw(image)

georgia = "/System/Library/Fonts/Supplemental/Georgia.ttf"
arial = "/System/Library/Fonts/Supplemental/Arial.ttf"
menlo = "/System/Library/Fonts/Menlo.ttc"

title_font = ImageFont.truetype(georgia, 46)
subtitle_font = ImageFont.truetype(arial, 20)
group_font = ImageFont.truetype(arial, 18)
word_font = ImageFont.truetype(menlo, 20)
note_font = ImageFont.truetype(arial, 15)

draw.rounded_rectangle((1, 1, W - 2, H - 2), radius=24, outline="#cad9d4", width=2)
draw.text((55, 38), "Python keywords", font=title_font, fill="#173d49")
draw.text((55, 94), "Reserved words that give Python its structure", font=subtitle_font, fill="#52656d")

core = {
    "False", "None", "True", "and", "or", "not", "in", "is",
    "if", "elif", "else", "for", "while", "break", "continue",
    "def", "return", "import", "try", "except",
}

groups = [
    ("Values and logical relationships", ["False", "None", "True", "and", "or", "not", "in", "is"], "#e8f3ef", "#c6ddd5"),
    ("Decisions and repetition", ["if", "elif", "else", "for", "while", "break", "continue"], "#fff4e7", "#e6c7a9"),
    ("Defining reusable code", ["def", "return", "yield", "lambda", "class", "del", "pass"], "#edf1f5", "#cbd7df"),
    ("Modules, names and context", ["import", "from", "as", "global", "nonlocal", "with"], "#f1edf7", "#d8cbe6"),
    ("Checking and handling errors", ["assert", "try", "except", "finally", "raise"], "#f9eeee", "#e4cccc"),
    ("Asynchronous code and pattern matching", ["async", "await", "match", "case"], "#edf5f7", "#c9dce1"),
]

boxes = [
    (55, 145, 575, 280), (625, 145, 1145, 280),
    (55, 305, 575, 440), (625, 305, 1145, 440),
    (55, 465, 575, 600), (625, 465, 1145, 600),
]


def draw_group(box, group):
    x1, y1, x2, y2 = box
    label, words, fill, outline = group
    draw.rounded_rectangle(box, radius=14, fill=fill, outline=outline, width=2)
    draw.text((x1 + 22, y1 + 18), label, font=group_font, fill="#173d49")
    x, y = x1 + 22, y1 + 64
    for word in words:
        width = draw.textbbox((0, 0), word, font=word_font)[2]
        if x + width > x2 - 22:
            x = x1 + 22
            y += 36
        draw.text((x, y), word, font=word_font, fill="#0c6b5d" if word in core else "#294a52")
        x += width + 24


for group_box, keyword_group in zip(boxes, groups):
    draw_group(group_box, keyword_group)

draw.ellipse((57, 628, 73, 644), fill="#0c6b5d")
draw.text((86, 626), "Green words are the most useful starting set. Recognition is more important than memorisation.", font=note_font, fill="#53656c")
draw.text((86, 652), "The official Python documentation treats match and case as context-sensitive soft keywords.", font=note_font, fill="#53656c")

image.save(OUTPUT, "PNG", optimize=True)
