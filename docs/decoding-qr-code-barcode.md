---
displayed_sidebar: docSidebar
sidebar_position: 7
---

# Decoding QR Code and Barcode Images

Certain payment methods necessitate the use of a QR code or barcode image by the payer. These images are compressed and encoded in base64 format. To retrieve the image, follow these steps:

1. Decode the <code>base64</code> string into a byte array.

2. Decompress the byte array.