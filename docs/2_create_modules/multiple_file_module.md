---
title: Multiple Files Module
sidebar_position: 2
---

```json title="clepnid.json example:"
[
	{
        "Web": {
            "Title": "Music Player",
            "Extensions": ["mp3", "ogg", "wav", "flac", "aac"],
            "ButtonText": "Player",
            "HtmlBodyReplace": "no music",
            "Group": "yes",
            "Html": "./index.html",
            "httpRoute": "/js-music-player",
            "imageRoute": "/js-music-player/sample.jpg"
        }
    }
]
```

### Details:  
- **Extensions:** List of supported file extensions.
- **Group:** Indicates whether a list of files is passed to the index.
- **HtmlBodyReplace:** If the value of "Group" is "yes", the list of files and an element representing the file from which the module was accessed are passed to the index.
