---
title: Server module
sidebar_position: 4
---

```json title="clepnid_backend.json example:"
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
- **ComandOpen:** Series of commands separated by "|". In this case, the program receives as a parameter the utility file that will be displayed in the activity. 
- **ComandClose:** To stop the program's execution.
- **ListaRutas:** List to link the route that opens the module's program with a clepnid route.
