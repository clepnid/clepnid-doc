---
title: Módulo de ficheros únicos
sidebar_position: 1
---

```json title="clepnid.json ejemplo:"
[
    {
        "Web": {
            "Title": "Reproductor Chromecast",
            "Extensions": ["RM", "ram", "MP4", "AVI", "WMV", "MOV", "FLV", "OGG", "WEBM", "MKV"],
            "BotonText": "Reproductor",
            "HtmlBodyReplace": "no hay video",
            "Group": "",
            "Html": "index.html",
            "rutaHttp": "/chromecast",
            "rutaImagen": "/chromecast/muestra.jpg"
        }
    }
]
```

### Detalles:  
- **Extensions:** Lista de extensiones de archivo compatibles.  
- **HtmlBodyReplace:** Reemplaza el contenido de texto en `index.html`. Recibe información del archivo desde el cual se llamó al módulo.  
- **rutaHttp:** Ruta HTTP del módulo.  
- **rutaImagen:** Imagen representativa del módulo.  