---
title: Light Player
sidebar_position: 4
---

![light_reproductor](@site/static/img/modulos_ficheros/light_reproductor.JPG)

:::caution  
**Does not work with all video formats:**  
This module is compatible with mp4.  
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