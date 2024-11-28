---
title: Chromecast
sidebar_position: 1
---

![chromecast](@site/static/img/modulos_ficheros/chromecast.JPG) 

:::caution  
**No funciona con todos los formatos de video:**  
Este módulo es compatible con mp4.  
:::

```jsx title="clepnid.json"
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