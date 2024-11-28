---
title: Image module
sidebar_position: 3
---

![image](@site/static/img/modulos_ficheros/image.JPG)

Se ha creado un componente sencillo que permite modificar una imagen subida al sistema. Este componente permite a los usuarios cargar una imagen y aplicar una serie de transformaciones y modificaciones, como ajustar el tamaño, aplicar filtros de color, cambiar la opacidad y más.

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