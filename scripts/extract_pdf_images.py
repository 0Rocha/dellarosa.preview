import io
from pathlib import Path

import pymupdf
from PIL import Image

pdf_path = Path(
    r"c:\Users\Denis Bohrer\.cursor\projects\c-Users-Denis-Bohrer-Desktop-teste\attachments\32420358-2c00-4fab-aea8-2477e8f7117f\fotos_recortadas.pdf"
)
out_dir = Path(r"c:\Users\Denis Bohrer\Desktop\teste\public\images\_raw")
out_dir.mkdir(parents=True, exist_ok=True)

doc = pymupdf.open(pdf_path)
print("pages", doc.page_count)

for i, page in enumerate(doc, start=1):
    images = page.get_images(full=True)
    print(f"page {i}: {len(images)} images")
    for j, img in enumerate(images):
        xref = img[0]
        raw = doc.extract_image(xref)
        ext = raw["ext"]
        data = raw["image"]
        target = out_dir / f"page-{i:02d}-{j:02d}.{ext}"
        target.write_bytes(data)
        im = Image.open(io.BytesIO(data)).convert("RGB")
        print(target.name, im.size)

print("done")
