---
title: Web Server  
sidebar_position: 2  
---

# 1. Functionality: Share Selection with the Server  

Our application allows you to share selected data with the server quickly and efficiently. Follow these steps to use this functionality:  

1. **Select the desired data** from the system.  
   You can choose any type of data compatible with the application, such as text, images, or files.  

2. **Press the keyboard shortcut `Ctrl + Shift + 1`.**  
   This action will automatically send the selected data to the server.  

3. **Check on the local server.**  
   The application will add specific features to handle the selected data types on the server (by default located at `http://localhost:3000`).  

---

## 2. Integrated Base Modules  

The application includes several pre-configured modules that ensure its proper functioning:  
![files_web](@site/static/img/captures_web/archivos_integrados.png)  

**Local Web Server:** A server at `http://localhost:3000` where you will find a main menu:  
![main_menu](@site/static/img/captures_web/menu_principal.png)

This menu includes different entries:  
- **Text:** Displays the text currently shared by the server:  
![text_web](@site/static/img/captures_web/texto_web.png)

- **HTML:** Displays the HTML currently shared by the server:  
![html_web](@site/static/img/captures_web/html_web.png)

- **Files:** Displays an entry to manage the files shared by the server:  
![menu_files_web](@site/static/img/captures_web/menu_files_web.png)

   - By default, within a file item, you will find the option to download the file.  
![menu_files_web_download](@site/static/img/captures_web/menu_files_web_download.png)

---

## 3. User Management  
![users_menu](@site/static/img/captures_local/window_users_menu.png)  

**Clepnid** supports multiple users within each web:  

- **Groups**: Configure permissions to share and receive content.  
![groups_menu](@site/static/img/captures_local/window_menu_groups.png)  

- **Identification**: Each user is identified by a unique network name visible in the application's windows.  
![edit_users_menu](@site/static/img/captures_local/window_menu_users.png)  
![edit_access](@site/static/img/captures_local/window_menu_users_edit.png)  

- **Block**: Restrict access to unwanted users or those outside the authorized network.  
![edit_access](@site/static/img/captures_local/window_menu_acess_edit.png)  

---

## 4. Component: Dynamic Navigation Bar  

The application's window has a dynamic navigation bar that makes it easy to access the main sections.  
![menu_bar](@site/static/img/captures_web/menu_bar.png)  

### Features:  
- You can manage the elements from the server window:  
![menu_bar_elements](@site/static/img/captures_local/window_menubar.png)  

- You can change the logo from the server window:  
![menu_bar_logo](@site/static/img/captures_local/window_menubar_logo.png)  

---

## 5. Menu Page: Registration and Login  
![login](@site/static/img/captures_web/login.png) 

On this page, users can:  
- **Register:** Create a new account by providing their email and password.  
- **Log in:** Access the system using their credentials.  

This functionality ensures that only authenticated users can perform certain actions.  

---

## 6. Menu Page: Upload Files  
![upload](@site/static/img/captures_web/upload_web.png)  

This page allows any user to upload files to the server.  
### Functionality:  
- Select a file from the local system.  
- Optionally attach a description to the file.  
- View the upload status (progress, success, or failure).  

---

## 7. Menu Page: System Logs  
![activity_web](@site/static/img/captures_web/actividad_web.png)  

In this section, you can view the system logs or logs from the server modules.  
### Features:  
- **System:** The system shows actions performed, such as which files have been shared.  
- **Module logs:** Different server modules display their logs and errors in this system.  

---

### Notes  

- Ensure that the server is running on `localhost` before performing any actions in the system.  
- The interface is fully responsive and optimized for different devices.  

With this modular structure, the application provides a comprehensive, secure, and easy-to-use experience.  
