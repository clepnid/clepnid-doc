---
title: Audio Player
sidebar_position: 5
---

![music_reproductor_3](@site/static/img/modulos_ficheros/music_3.JPG)
![music_reproductor_4](@site/static/img/modulos_ficheros/music_4.JPG)

An **audio player** has been created to allow access and playback of all audio files uploaded to the system. This player facilitates listening to the uploaded audio files, providing a smooth and functional user experience.

## Audio Player Features:
- **Access to Audio Files**: The player allows access to all audio files that have been uploaded to the system.
![music_reproductor_1](@site/static/img/modulos_ficheros/music.JPG)
![music_reproductor_2](@site/static/img/modulos_ficheros/music_2.JPG)

- **Playback Controls**: Includes basic controls such as play, pause, skip forward, skip backward, and volume control.
- **Intuitive Interface**: The player features an easy-to-use interface, displaying the audio title and playback progress.
- **Format Compatibility**: It supports several standard audio formats (MP3, WAV, etc.), ensuring all uploaded files can be played without issues.

This audio player has been designed to offer a simple and efficient way to manage and listen to the audio files stored in the system, enhancing user interaction with multimedia content.


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