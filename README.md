# ANIMEXA Studio

ANIMEXA is a browser-based creative editor with a searchable vector element library.

## Included features

- 54 built-in vector elements with Arabic, French and English names.
- Search and category filters for shapes, nature, characters, objects, symbols, space and animals.
- Original, item-specific color palettes instead of reusing arbitrary colors by category.
- Change the main color of selected artwork and restore its original color with one action.
- Four detailed seasonal tree appearances: spring, summer, autumn and winter.
- Drag-and-drop or click-to-add elements on the canvas.
- Edit element name, color, size, position, rotation and opacity.
- Text, rectangle, circle and line tools; layer selection and ordering.
- Local project saving in the browser and SVG export that preserves the artwork colors and seasonal appearance.
- PWA manifest and service worker for offline use after the first successful online load.

## Run

Enable GitHub Pages for the repository (Settings → Pages → deploy from the `main` branch and `/` folder), then open the published site once while online. The service worker caches the app shell so it can reopen offline. Project data is saved locally in the same browser and device.

## Notes

This is the current foundational editor release (0.6). It is still being expanded; advanced video rendering, physics simulation, audio editing and visual programming are not yet included.
