---
title: Unique Files Module
sidebar_position: 1
---

```json title="clepnid.json example:"
[
    {
        "Web": {
            "Title": "Chromecast Player",
            "Extensions": ["RM", "ram", "MP4", "AVI", "WMV", "MOV", "FLV", "OGG", "WEBM", "MKV"],
            "ButtonText": "Player",
            "HtmlBodyReplace": "no video",
            "Group": "",
            "Html": "index.html",
            "rutaHttp": "/chromecast",
            "rutaImagen": "/chromecast/sample.jpg"
        }
    }
]
```

### Details:  
- **Extensions:** List of supported file extensions.
- **HtmlBodyReplace:** Replaces the text content in `index.html`. It receives information from the file that called the module.  
- **rutaHttp:** HTTP route of the module.
- **rutaImagen:** Representative image of the module.  