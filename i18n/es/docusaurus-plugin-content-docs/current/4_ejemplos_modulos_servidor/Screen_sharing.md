---
title: Screen Sharing  
sidebar_position: 2  
---

:::caution  
**No funciona en Firefox:**  
Este módulo solo es compatible con Google Chrome.  
:::

:::danger  
**Requisito de HTTPS:**  
Para que la funcionalidad de compartir pantalla funcione, el servidor debe estar alojado en un entorno HTTPS. Utilizaremos **ngrok** en este tutorial para cumplir con este requisito.  
:::

---

### Tutorial: Compartir y controlar pantalla usando ngrok

Este tutorial te guiará paso a paso para configurar y utilizar la funcionalidad de compartir y controlar pantalla de forma segura a través de **ngrok**.

---

#### **Pasos a seguir:**

1. **Descarga ngrok:**  
   - Ve al sitio oficial de ngrok ([ngrok.com](https://ngrok.com/download)) y descarga el script correspondiente a tu sistema operativo.

2. **Crea una cuenta en ngrok:**  
   - Regístrate en [ngrok.com](https://ngrok.com/signup) y obtén tu **token de autenticación**.

3. **Configura el token en ngrok:**  
   - Abre la terminal o consola y ejecuta el siguiente comando para configurar el token:  
![ngrok_1](@site/static/img/modulos_servidor/ngrok_1.JPG) 
     ngrok config add-authtoken TU_TOKEN
    

4. **Abre el puerto del servidor:**  
   - Para este tutorial, utilizaremos el puerto **3000** (puedes ajustarlo según tu configuración):  
![ngrok_2](@site/static/img/modulos_servidor/ngrok_http_3000.JPG)
ngrok http 3000
     

5. **Accede al módulo en el sistema:**  
   - Dirígete a **`/menu`** → **`/menutools`** y selecciona la funcionalidad de pantalla.

6. **Opciones de pantalla disponibles:**  
   Dentro del módulo, encontrarás tres opciones:
   - **Ver pantalla:** Permite visualizar la pantalla del servidor.  
   - **Controlar pantalla:** Proporciona control remoto sobre la pantalla compartida.  
   - **Compartir pantalla:** Inicia el proceso de compartir la pantalla del servidor.
   ![screen_sharing](@site/static/img/modulos_servidor/screen_sharing.JPG) 

7. **Configuración en el ordenador servidor:**  
   - En el ordenador servidor, abre Google Chrome y selecciona la opción **Compartir pantalla**.
![screen_sharing_1](@site/static/img/modulos_servidor/screen_sharing_1.JPG) 

8. **Accede desde otro dispositivo:**  
   - Desde cualquier otro ordenador conectado a la red, abre el enlace proporcionado por ngrok y selecciona las opciones de **Ver pantalla** o **Controlar pantalla** para interactuar con el servidor remoto.
![screen_sharing_2](@site/static/img/modulos_servidor/screen_sharing_2.JPG) 
![screen_sharing_3](@site/static/img/modulos_servidor/screen_sharing_3.JPG) 

---

¡Listo! Con esta configuración, podrás compartir y controlar la pantalla del servidor de forma segura mediante ngrok, asegurando la compatibilidad con HTTPS y utilizando Google Chrome como navegador.