---
title: Screen Sharing  
sidebar_position: 2  
---

:::caution  
**Does not work on Firefox:**  
This module is only compatible with Google Chrome.  
:::

:::danger  
**HTTPS Requirement:**  
For the screen sharing functionality to work, the server must be hosted in an HTTPS environment. We will use **ngrok** in this tutorial to meet this requirement.  
:::

---

### Tutorial: Share and Control Screen Using ngrok

This tutorial will guide you step by step to set up and use the screen sharing and control functionality securely through **ngrok**.

---

#### **Steps to Follow:**

1. **Download ngrok:**  
   - Go to the official ngrok website ([ngrok.com](https://ngrok.com/download)) and download the script for your operating system.

2. **Create an ngrok Account:**  
   - Sign up at [ngrok.com](https://ngrok.com/signup) and get your **authentication token**.

3. **Configure the Token in ngrok:**  
   - Open the terminal or command prompt and run the following command to configure the token:  
![ngrok_1](@site/static/img/modulos_servidor/ngrok_1.JPG)  
     ngrok config add-authtoken YOUR_TOKEN
    

4. **Open the Server Port:**  
   - For this tutorial, we will use port **3000** (you can adjust it according to your configuration):  
![ngrok_2](@site/static/img/modulos_servidor/ngrok_http_3000.JPG)  
ngrok http 3000
     

5. **Access the Module in the System:**  
   - Go to **`/menu`** → **`/menutools`** and select the screen functionality.

6. **Available Screen Options:**  
   Inside the module, you will find three options:
   - **View Screen:** Allows you to view the server's screen.  
   - **Control Screen:** Provides remote control over the shared screen.  
   - **Share Screen:** Starts the process of sharing the server's screen.  
   ![screen_sharing](@site/static/img/modulos_servidor/screen_sharing.JPG) 

7. **Configuration on the Server Computer:**  
   - On the server computer, open Google Chrome and select the **Share Screen** option.  
![screen_sharing_1](@site/static/img/modulos_servidor/screen_sharing_1.JPG) 

8. **Access from Another Device:**  
   - From any other computer connected to the network, open the link provided by ngrok and select the options **View Screen** or **Control Screen** to interact with the remote server.  
![screen_sharing_2](@site/static/img/modulos_servidor/screen_sharing_2.JPG)  
![screen_sharing_3](@site/static/img/modulos_servidor/screen_sharing_3.JPG) 

---

Done! With this setup, you will be able to share and control the server's screen securely via ngrok, ensuring HTTPS compatibility and using Google Chrome as the browser.
