# ANIMEXA Studio

ANIMEXA is a browser-based creative editor with a searchable vector library and motion effects.

## Included features

- 74 built-in vector elements with Arabic, French and English names.
- Categories for shapes, nature, characters, objects, symbols, space, animals and motion effects.
- 19 animated motion presets covering air, wind, dust, leaves, grass, smoke, water, waves, streams, splashes, bubbles, waterfalls, reflections, embers, rain, snow, light rays and moving shadows.
- Motion-effect controls for speed, particle density and direction.
- Draw a freehand curved motion path with the mouse; selected objects follow the saved path in a continuous back-and-forth loop.
- Direct mouse rotation using the top rotation handle and resizing using the lower corner handle.
- Item-specific original color palettes, editable main colors and a restore-original-color action.
- Four detailed tree appearances: spring, summer, autumn and winter.
- Drag-and-drop or click-to-add elements on the canvas.
- Edit element name, color, size, position, rotation and opacity.
- Text, rectangle, circle and line tools; layer selection and ordering.
- Local project saving in the browser and SVG export.
- PWA manifest and service worker for offline use after the first successful online load.

## Run

Enable GitHub Pages for the repository (Settings → Pages → deploy from the `main` branch and `/` folder), then open the published site once while online. The service worker caches the app shell so it can reopen offline. Project data, including effect settings and motion paths, is saved locally in the same browser and device.

## Notes

The motion effects animate inside the editor preview. SVG export preserves the artwork appearance, but does not currently export a rendered video or GIF timeline.
