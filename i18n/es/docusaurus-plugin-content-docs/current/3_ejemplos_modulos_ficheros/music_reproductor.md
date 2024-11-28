---
title: music reproductor
sidebar_position: 5
---

![music_reproductor_3](@site/static/img/modulos_ficheros/music_3.JPG)
![music_reproductor_4](@site/static/img/modulos_ficheros/music_4.JPG)

Se ha creado un **reproductor de audio** que permite acceder y reproducir todos los audios subidos al sistema. Este reproductor facilita la escucha de los archivos de audio cargados, brindando una experiencia de usuario fluida y funcional.

## Características del Reproductor de Audio:
- **Acceso a Archivos de Audio**: El reproductor permite acceder a todos los archivos de audio que han sido subidos al sistema.
![music_reproductor_1](@site/static/img/modulos_ficheros/music.JPG)
![music_reproductor_2](@site/static/img/modulos_ficheros/music_2.JPG)

- **Controles de Reproducción**: Incluye controles básicos como play, pausa, avanzar, retroceder y control de volumen.
- **Interfaz Intuitiva**: El reproductor cuenta con una interfaz fácil de usar, mostrando el título del audio y el progreso de la reproducción.
- **Compatibilidad de Formatos**: Es compatible con varios formatos de audio estándar (MP3, WAV, etc.), asegurando que todos los archivos cargados puedan ser reproducidos sin problemas.

Este reproductor de audio ha sido diseñado para ofrecer una manera sencilla y eficiente de gestionar y escuchar los archivos de audio almacenados en el sistema, mejorando la interacción del usuario con los contenidos multimedia.

```jsx title="clepnid.json"
[
	{
    "Web": {
        "Title": "Music Reproductor",
        "Extensions": ["mp3", "ogg","wav", "flac", "aac"],
        "BotonText": "Reproductor",
        "HtmlBodyReplace": "no hay musica",
		"Group": "si",
		"Html": "./index.html",
		"rutaHttp": "/js-music-player",
		"rutaImagen": "/js-music-player/muestra.jpg"
        }
	
    }
]
```