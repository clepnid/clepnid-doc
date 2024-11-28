---
title: Módulo de ficheros múltiples
sidebar_position: 2
---

```json title="clepnid.json ejemplo:"
[
	{
        "Web": {
            "Title": "Music Reproductor",
            "Extensions": ["mp3", "ogg","wav", "flac", "aac"],
            "BotonText": "Reproductor",
            "HtmlBodyReplace": "no hay musica",
            "Group": "si",
            "Html": "./index.html",
            "rutaHttp": "/js-music-player",
            "rutaImagen": "/js-music-player/muestra.jpg"
        }
    }
]
```

### Detalles:  
- **Extensions:** Lista de extensiones de archivo compatibles.  
- **Group:** Indica si se pasa una lista de archivos al índice.  
- **HtmlBodyReplace:** Si el valor de "Group" es "si", se pasa al índice la lista de archivos y un elemento que representa el archivo desde el cual se ha accedido al módulo.  
