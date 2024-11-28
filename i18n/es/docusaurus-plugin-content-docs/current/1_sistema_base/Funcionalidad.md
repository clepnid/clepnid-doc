---
title: Funcionalidad  
sidebar_position: 1  
---

# Funcionalidad: Compartir y Pegar Contenido en la Red  

Esta funcionalidad permite a los usuarios compartir fácilmente contenido entre diferentes PCs en la misma red mediante combinaciones de teclas y la aplicación **Clepnid**. Además, la integración con dispositivos Android amplía su utilidad.  

## Uso Básico  

1. **Seleccionar contenido para compartir**: Desde cualquier aplicación, selecciona el contenido que deseas compartir.  
2. **Atajo para compartir**: Presiona `Ctrl + Shift + 1`. Esto:  
   - Detecta los tipos de contenido seleccionados.  
   - Muestra un resumen de los tipos de archivos seleccionados en la pantalla.  
   - Comparte automáticamente el contenido con las ventanas de la aplicación **Clepnid** en otras PCs de la misma red.  
3. **Atajo para pegar contenido**: En una computadora de la red con **Clepnid**:  
   - Presiona `Ctrl + Shift + 2` para pegar automáticamente los archivos compartidos en la ubicación designada.  

---

## Secciones de Funcionalidad  

### 1. Ver Tipos de Contenidos compartidos  

Cuando compartes contenido usando `Ctrl + Shift + 1`, se mostrará una ventana emergente con información sobre los tipos de archivos seleccionados.  
Por ejemplo:  
- Documentos: `.pdf`, `.docx`, `.txt`.  
- Imágenes: `.jpg`, `.png`, `.gif`.  
- Otros: `.zip`, `.exe`.  

![archivos](@site/static/img/captures_local/archivos.png)  

Se controla cuando el contenido compartido es texto:
![texto](@site/static/img/captures_local/window.png)  

Se controla cuando el contenido compartido es html:
![html](@site/static/img/captures_local/html.png)

Esto ayuda a ver lo que se esta compartiendo en la red.  


---

### 2. Partes de la Ventana  

![ventana_vacía](@site/static/img/captures_local/window_vacio.png)  

La ventana de **Clepnid** se divide en las siguientes secciones:  
- **Opciones**: Hay diferentes opciones para manejar varias partes de la aplicación
- **Área de recepción**: Lista el contenido recibido en tiempo real.  
- **Configuración**: Permite ajustar preferencias y opciones del sistema.  
![configuración](@site/static/img/captures_local/Configure.png)  

- **Historial**: Muestra los archivos pegados, su existencia en el sistema y si se pueden recuperar.  
![historial](@site/static/img/captures_local/History.png) 

- **Server**: Indica si este ordenador es el servidor dentro de la red.
![ventana_servidor](@site/static/img/captures_local/window_server_on.png)  

- **Circulo**: Si esta en azul existe un ordenador compartiendo datos en la red desde esta aplicación
![ventana_compartida](@site/static/img/captures_local/window_shared_on.png)  

- **Minimizar**: En windows al minimizar la aplicacion se encontrará en la zona task bar
![barra_tareas](@site/static/img/captures_local/task_bar.png)  

---

### 3. Integración con Aplicación Android  

La funcionalidad de **Clepnid** se extiende a dispositivos Android:  
- **Escanear QR**: En la app abrirá la cámara para escanear el qr de la aplicación en PC.
![window_web_server_menu](@site/static/img/captures_local/window_web_server_menu.png)
![app_qr](@site/static/img/captures_local/window_qr.png)  

- **Sincronización**: En la app para sincronizar deberá estar en la misma red y contener el código mostrado en la opción Código escaner app
![app_codigo](@site/static/img/captures_local/windows_app_code.png) 

---

### 4. Utilidades Adicionales    
- **Soporte de arrastrar y soltar**: Arrastra archivos a la ventana de **Clepnid** para compartir rápidamente.    
- **Persistencia de configuración**: Se puede guardar para diferentes sesiones:
![window_web_menu](@site/static/img/captures_local/window_web_menu.png) 
  - La configuración.
  - Los archivos compartidos.
---

## Notas  
- Asegúrate de que todas las PCs estén conectadas a la misma red local para que la funcionalidad de compartición funcione correctamente.  
- La aplicación requiere permisos de acceso a la red y al sistema de archivos.  
