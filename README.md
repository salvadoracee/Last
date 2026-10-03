# You Were Once My Home — a quiet night, a small letter

Static site: open `index.html` (or upload the folder to any static host: Netlify, GitHub Pages, Vercel…).

```
index.html
style.css
script.js          <- everything you may want to edit is at the TOP of this file
assets/music.mp3   <- your song (swap the file or change MUSIC_SRC)
```

## What to edit (top of `script.js`)
| Thing            | Where                         |
|------------------|-------------------------------|
| Password         | `const PASSWORD`              |
| Music file       | `const MUSIC_SRC`             |
| Song title/artist| `SONG_TITLE`, `SONG_ARTIST`   |
| The letter       | `const MESSAGE` (one string per paragraph) |
| Lyrics + timing  | `const LYRICS` (`{ time: seconds, text: "..." }`) |

## Getting the lyric timing exact
The timestamps that ship with the site are **estimates**. To lock them to the real song:

1. Open `index.html#sync` (works from a local server or a host; some browsers also allow it from a file).
2. Play the song. Press **Space** (or tap the big button) the moment each line starts being sung.
3. Press **Copy timestamps**, then paste the result over `const LYRICS = [...]` in `script.js`.

(Tapping Undo removes the last tap; Restart starts over. When all lines are tapped, the lyrics panel previews your timing immediately.)

## Notes
- Browsers often block autoplay with sound. If so, a small hint appears and the music starts on the visitor's first tap/keypress.
- The password is only an experience gate (it lives in `script.js`), not real security.
- Fonts (Cormorant Garamond, EB Garamond) load from Google Fonts; offline it falls back to Georgia/serif.
- `prefers-reduced-motion` is respected (calmer grass/stars, shorter envelope animation, rarer shooting stars).
