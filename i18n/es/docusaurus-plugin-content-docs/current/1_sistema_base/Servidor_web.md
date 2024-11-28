---
title: Servidor Web  
sidebar_position: 2  
---

# 1. Funcionalidad: Compartir Selección con el Servidor  

Nuestra aplicación permite compartir datos seleccionados con el servidor de manera rápida y eficiente. Sigue estos pasos para utilizar esta funcionalidad:  

1. **Selecciona los datos deseados** del sistema.  
   Puedes elegir cualquier tipo de dato compatible con la aplicación, como texto, imágenes o archivos.  

2. **Presiona la combinación de teclas `Ctrl + Shift + 1`.**  
   Esta acción enviará automáticamente los datos seleccionados al servidor.  

3. **Verifica en el servidor local.**  
   La aplicación añadirá funciones específicas para manejar los tipos de datos seleccionados en el servidor (por defecto, ubicado en `http://localhost:3000`).  

---

## 2. Módulos Base Integrados  

La aplicación incluye varios módulos preconfigurados que garantizan su correcto funcionamiento:
![archivos_web](@site/static/img/captures_web/archivos_integrados.png)  

**Servidor Web Local:** Un servidor en `http://localhost:3000` donde encontramos un menú principal:
![menu_principal](@site/static/img/captures_web/menu_principal.png)

Nos encontramos con diferentes entradas en este menú:
- **Texto:** Se muestra el texto que comparte en ese instante el servidor:
![texto_web](@site/static/img/captures_web/texto_web.png)

- **Html:** Se muestra el html que comparte en ese instante el servidor:
![html_web](@site/static/img/captures_web/html_web.png)

- **Ficheros:** Se muestra una entrada para gestionar los ficheros que ha compartido el servidor:
![menu_files_web](@site/static/img/captures_web/menu_files_web.png)

   - Por defecto dentro de un elemento de fichero nos encontraremos la opción de descargar dicho fichero.
![menu_files_web_download](@site/static/img/captures_web/menu_files_web_download.png)

---

## 3. Gestión de Usuarios   
![menú_usuarios](@site/static/img/captures_local/window_users_menu.png)  

**Clepnid** admite múltiples usuarios dentro de cada web:  

- **Grupos**: Configura permisos para compartir y recibir contenido.  
![menú_grupos](@site/static/img/captures_local/window_menu_groups.png)  

- **Identificación**: Cada usuario es identificado por un nombre único de red visible en las ventanas de la aplicación.  
![menú_editar_usuarios](@site/static/img/captures_local/window_menu_users.png)  
![editar_acceso](@site/static/img/captures_local/window_menu_users_edit.png)  

- **Bloqueo**: Restringe el acceso a usuarios no deseados o fuera de la red autorizada.  
![editar_acceso](@site/static/img/captures_local/window_menu_acess_edit.png)  

---

## 4. Componente: Barra de Navegación Dinámica  

La ventana de la aplicación cuenta con una barra de navegación dinámica que facilita el acceso a las secciones principales. 
![menu_bar](@site/static/img/captures_web/menu_bar.png)  

### Características:  
- Se puede manegar los elementos desde la ventana del servidor:
![menu_bar_elementos](@site/static/img/captures_local/window_menubar.png)  

- Se puede cambiar el logo desde la ventana servidor:
![menu_bar_logo](@site/static/img/captures_local/window_menubar_logo.png)  

---

## 5. Página Menú: Registro e Inicio de Sesión  
![login](@site/static/img/captures_web/login.png) 

En esta página, los usuarios pueden:  
- **Registrarse:** Crear una cuenta nueva proporcionando su correo electrónico y contraseña.  
- **Iniciar sesión:** Acceder al sistema utilizando sus credenciales.  

Esta funcionalidad garantiza que solo los usuarios autenticados puedan realizar ciertas acciones.  

---

## 6. Página Menú: Subir Archivos 
![upload](@site/static/img/captures_web/upload_web.png)  

Esta página permite a cualquier usuario subir archivos al servidor.  
### Funcionalidad:  
- Seleccionar un archivo del sistema local.  
- Adjuntar una descripción opcional al archivo.  
- Ver el estado de la subida (progreso, éxito o fallo).  

---

## 7. Página Menú: Logs del Sistema  
![actividad_web](@site/static/img/captures_web/actividad_web.png)  

En esta sección, se pueden consultar los logs del sistema o de los módulos del servidor.  
### Funcionalidades:  
- **Sistema:** El sistema muestra aquí las acciones realizadas en este como que archivos se han compartido.  
- **Registros de módulos:** Los diferentes módulos de servidor muestran sus logs y sus errores en este sistema. 

---

### Notas  

- Asegúrate de que el servidor esté en ejecución en `localhost` antes de realizar acciones en el sistema.  
- La interfaz es completamente responsive y está optimizada para diferentes dispositivos.  

Con esta estructura modular, la aplicación proporciona una experiencia integral, segura y fácil de usar.  
