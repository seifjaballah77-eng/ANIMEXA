# ANIMEXA Studio

ANIMEXA is a browser-based creative editor with a searchable built-in vector element library.

## Included in this first GitHub build

- 53 built-in vector elements with Arabic, French and English names and category labels.
- Search across element names in all three languages.
- Categories: shapes, nature, characters, objects, symbols, space and animals.
- Drag-and-drop or click-to-add elements on the canvas.
- Edit element name, color, size, position, rotation and opacity.
- Text, rectangle, circle and line tools; layer selection and ordering.
- Local project saving in the browser and SVG export.
- PWA manifest and service worker for offline use after the first successful online load.

## Run

Enable GitHub Pages for the repository (Settings → Pages → deploy from the `main` branch and `/` folder), then open the published site once while online. The service worker caches the app shell so it can reopen offline. Project data is saved locally in the same browser and device.

## Notes

This is the initial public foundation (0.3). It does not yet include full video rendering, advanced physics simulation, audio editing or visual programming.