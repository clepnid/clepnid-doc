---
title: Módulo de servidor
sidebar_position: 4
---

```json title="clepnid_backend.json ejemplo:"
[
	{
		"Web": {
			"TypeModule": "Sistema",
			"Title": "url_apk",
			"ComandOpen": "pip install pipreqs | pip install -r requirements.txt | python main.py [LOG=archivo_salida_url2apk.txt]",
			"ComandClose": "taskkill /f /im python.exe",
			"ChangePath": "yes",
			"ListaRutas": [				
				{
					"RutaEjecutable": "localhost:7171/url_apk",
					"RutaClepnid": "/url_apk",
					"Tipo":"post"
				}
			]
		}
	}
]
```

### Detalles:  
- **ComandOpen:** Serie de comandos separados por “|”. En este caso, el programa recibe como parámetro el archivo de utilidad que se mostrará en la actividad.  
- **ComandClose:** Para detener la ejecución del programa.  
- **ListaRutas:** Lista para enlazar entre la ruta que abre el programa del módulo y una ruta de clepnid.  
