---
title: Image module
sidebar_position: 3
---

![image](@site/static/img/modulos_ficheros/image.JPG)

A simple component has been created that allows users to modify an image uploaded to the system. This component enables users to upload an image and apply a series of transformations and modifications, such as resizing, applying color filters, changing opacity, and more.


```jsx title="clepnid.json"
[
	{
    "Web": {
        "Title": "editor imagenes",
        "Extensions": ["jpg", "jpeg", "png", "gif"],
        "BotonText": "editar Qr",
        "HtmlBodyReplace": "no hay imagen",
		"Group": "",
		"Html": "./index.html",
		"rutaHttp": "/editor-imagenes",
	"rutaImagen": "/editor-imagenes/muestra.jpg"
        }
    }
]
```