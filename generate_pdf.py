#!/usr/bin/env python3
"""
Generate a well-formatted PDF from the AppSignal blog post.
Features:
- A4 page size with margins
- Orphan and widow control
- Embedded images with alt text
- Working hyperlinks (internal and external)
- Bookmarks from headings
"""

import markdown2
import re
from pathlib import Path
from xhtml2pdf import pisa
from io import BytesIO

# Read the markdown file
md_file = Path('blog/posts/Implementing_APM_withAppSignal.md')
with open(md_file, 'r', encoding='utf-8') as f:
    md_content = f.read()

# Convert markdown to HTML with extras
html_content = markdown2.markdown(
    md_content,
    extras=[
        'fenced-code-blocks',
        'tables',
        'header-ids',
        'break-on-newline',
        'code-friendly',
        'target-blank-links'
    ]
)

# Update image paths to use file:// protocol with absolute paths
base_path = Path('C:/Users/lenovo/Codefiles/portfolio-website')
def fix_image_path(match):
    img_src = match.group(1)
    img_alt = match.group(2) if len(match.groups()) > 1 else ""

    if not img_src.startswith('http'):
        # Extract just the filename from markdown
        filename = Path(img_src).name
        full_path = base_path / 'assets/images/blog/final-appsignal-impl-blog' / filename
        return f'<img src="file:///{full_path.as_posix()}" alt="{img_alt}" style="max-width: 100%; page-break-inside: avoid;"'
    return match.group(0)

# Fix image tags with alt text
html_content = re.sub(r'<img src="([^"]+)"\s+alt="([^"]*)"', fix_image_path, html_content)
html_content = re.sub(r'<img src="([^"]+)"', lambda m: fix_image_path(m) + ' alt=""', html_content)

# Create full HTML document with styling
html_template = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>How I Added Performance Monitoring to My MCP Server with AppSignal</title>
    <style>
        @page {{
            size: a4;
            margin: 2.5cm 2cm 2.5cm 2cm;
        }}

        /* Prevent widows and orphans */
        * {{
            orphans: 3;
            widows: 3;
        }}

        body {{
            font-family: 'Segoe UI', 'Calibri', Arial, sans-serif;
            font-size: 11pt;
            line-height: 1.6;
            color: #333;
        }}

        /* Headings */
        h1 {{
            font-size: 24pt;
            font-weight: 600;
            color: #2c3e50;
            margin-top: 0;
            margin-bottom: 12pt;
            page-break-after: avoid;
            -pdf-outline-level: 0;
            -pdf-outline-open: true;
        }}

        h2 {{
            font-size: 18pt;
            font-weight: 600;
            color: #34495e;
            margin-top: 24pt;
            margin-bottom: 10pt;
            page-break-after: avoid;
            border-bottom: 1px solid #ddd;
            padding-bottom: 6pt;
            -pdf-outline-level: 1;
            -pdf-outline-open: false;
        }}

        h3 {{
            font-size: 14pt;
            font-weight: 600;
            color: #34495e;
            margin-top: 18pt;
            margin-bottom: 8pt;
            page-break-after: avoid;
            -pdf-outline-level: 2;
        }}

        /* Paragraphs */
        p {{
            margin-bottom: 10pt;
            text-align: justify;
        }}

        em {{
            font-style: italic;
            color: #555;
        }}

        strong {{
            font-weight: 600;
            color: #2c3e50;
        }}

        /* Links */
        a {{
            color: #3498db;
            text-decoration: none;
        }}

        /* Code blocks */
        pre {{
            background-color: #f8f9fa;
            border: 1px solid #e1e4e8;
            border-left: 4px solid #3498db;
            padding: 12pt;
            margin: 10pt 0;
            page-break-inside: avoid;
            font-family: 'Consolas', 'Courier New', monospace;
            font-size: 9pt;
            line-height: 1.4;
            white-space: pre-wrap;
            word-wrap: break-word;
        }}

        code {{
            font-family: 'Consolas', 'Courier New', monospace;
            font-size: 9.5pt;
            background-color: #f8f9fa;
            padding: 2pt 4pt;
            color: #e83e8c;
        }}

        pre code {{
            background-color: transparent;
            padding: 0;
            color: #333;
        }}

        /* Lists */
        ul, ol {{
            margin-bottom: 10pt;
            padding-left: 20pt;
        }}

        li {{
            margin-bottom: 6pt;
        }}

        ul ul, ol ul, ul ol, ol ol {{
            margin-top: 6pt;
            margin-bottom: 0;
        }}

        /* Tables */
        table {{
            width: 100%;
            border-collapse: collapse;
            margin: 12pt 0;
            page-break-inside: avoid;
            font-size: 10pt;
        }}

        th {{
            background-color: #f8f9fa;
            font-weight: 600;
            text-align: left;
            padding: 8pt;
            border: 1px solid #ddd;
        }}

        td {{
            padding: 8pt;
            border: 1px solid #ddd;
        }}

        tr:nth-child(even) {{
            background-color: #fafafa;
        }}

        /* Images */
        img {{
            max-width: 100%;
            height: auto;
            display: block;
            margin: 12pt auto;
            page-break-inside: avoid;
            border: 1px solid #ddd;
        }}

        /* Horizontal rule */
        hr {{
            border: none;
            border-top: 2px solid #e1e4e8;
            margin: 20pt 0;
        }}

        /* Keep headings with following content */
        h1, h2, h3, h4, h5, h6 {{
            page-break-inside: avoid;
            page-break-after: avoid;
        }}

        h1 + *, h2 + *, h3 + *, h4 + *, h5 + *, h6 + * {{
            page-break-before: avoid;
        }}
    </style>
</head>
<body>
    <article>
        {html_content}
    </article>
</body>
</html>"""

# Generate PDF
output_file = Path('blog/How_I_Added_Performance_Monitoring_to_My_MCP_Server_with_AppSignal.pdf')

print("Generating PDF...")
print(f"Output file: {output_file.absolute()}")

# Create PDF with xhtml2pdf
with open(output_file, 'wb') as pdf_file:
    # Convert HTML to PDF
    pisa_status = pisa.CreatePDF(
        html_template,
        dest=pdf_file,
        encoding='utf-8'
    )

if pisa_status.err:
    print(f"❌ Error generating PDF: {pisa_status.err}")
else:
    print(f"✅ PDF generated successfully: {output_file.absolute()}")
    print(f"   File size: {output_file.stat().st_size / 1024:.2f} KB")
