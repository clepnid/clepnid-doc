---
title: Functionality  
sidebar_position: 1  
---

# Functionality: Share and Paste Content on the Network  

This feature allows users to easily share content between different PCs on the same network using keyboard shortcuts and the **Clepnid** application. Additionally, integration with Android devices extends its usefulness.  

## Basic Usage  

1. **Select content to share**: From any application, select the content you want to share.  
2. **Shortcut to share**: Press `Ctrl + Shift + 1`. This will:  
   - Detect the types of selected content.  
   - Display a summary of the selected file types on the screen.  
   - Automatically share the content with **Clepnid** windows on other PCs in the same network.  
3. **Shortcut to paste content**: On a networked PC with **Clepnid**:  
   - Press `Ctrl + Shift + 2` to automatically paste the shared files in the designated location.  

---

## Functional Sections  

### 1. View Shared Content Types  

When you share content using `Ctrl + Shift + 1`, a pop-up window will display information about the selected file types.  
For example:  
- Documents: `.pdf`, `.docx`, `.txt`.  
- Images: `.jpg`, `.png`, `.gif`.  
- Others: `.zip`, `.exe`.  

![files](@site/static/img/captures_local/archivos.png)  

It detects when the shared content is text:
![text](@site/static/img/captures_local/window.png)  

It detects when the shared content is HTML:
![html](@site/static/img/captures_local/html.png)

This helps you see what is being shared on the network.  


---

### 2. Parts of the Window  

![empty_window](@site/static/img/captures_local/window_vacio.png)  

The **Clepnid** window is divided into the following sections:  
- **Options**: Various options for handling different parts of the application.
- **Receiving Area**: Lists the received content in real time.  
- **Settings**: Allows you to adjust preferences and system options.  
![settings](@site/static/img/captures_local/Configure.png)  

- **History**: Displays pasted files, their existence in the system, and whether they can be recovered.  
![history](@site/static/img/captures_local/History.png)  

- **Server**: Indicates if this computer is the server in the network.
![server_window](@site/static/img/captures_local/window_server_on.png)  

- **Circle**: If it's blue, there is a computer sharing data on the network from this application.
![shared_window](@site/static/img/captures_local/window_shared_on.png)  

- **Minimize**: On Windows, when the application is minimized, it will be in the task bar.  
![task_bar](@site/static/img/captures_local/task_bar.png)  

---

### 3. Integration with Android App  

The **Clepnid** functionality extends to Android devices:  
- **Scan QR**: In the app, it will open the camera to scan the PC application's QR code.  
![web_server_menu](@site/static/img/captures_local/window_web_server_menu.png)  
![app_qr](@site/static/img/captures_local/window_qr.png)  

- **Synchronization**: In the app, to sync, it must be on the same network and contain the code displayed in the "Scanner App Code" option.  
![app_code](@site/static/img/captures_local/windows_app_code.png)  

---

### 4. Additional Utilities    
- **Drag and Drop Support**: Drag files to the **Clepnid** window for quick sharing.    
- **Configuration Persistence**: Settings can be saved for different sessions:  
![web_menu](@site/static/img/captures_local/window_web_menu.png)  
  - Configuration settings.  
  - Shared files.  

---

## Notes  
- Ensure that all PCs are connected to the same local network for sharing functionality to work correctly.  
- The application requires network and file system access permissions.  
