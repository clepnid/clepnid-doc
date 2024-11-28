---
title: Light reproductor
sidebar_position: 4
---

![light_reproductor](@site/static/img/modulos_ficheros/light_reproductor.JPG)

:::caution  
**No funciona con todos los formatos de video:**  
Este módulo es compatible con mp4.  
:::

```jsx title="clepnid.json"
[
	{
		"Web": {
			"Title": "Reproductor Light",
			"Extensions": ["RM", "ram", "MP4", "AVI", "WMV", "MOV", "FLV", "OGG", "WEBM", "MKV"],
			"BotonText": "ReproductorLight",
			"HtmlBodyReplace": "no hay video",
			"Group": "",
			"Html": "index.html",
			"rutaHttp": "/lightVideoReproductor/program",
			"rutaImagen": "/chromecast/muestra.jpg"
		}
	}
]
```