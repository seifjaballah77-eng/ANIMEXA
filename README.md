# ANIMEXA Studio

ANIMEXA is a browser-based Arabic-first vector and motion editor.

## Main features

- 74 built-in vector assets across shapes, nature, characters, objects, symbols, space, animals and motion effects.
- Full-body animal illustrations with detailed faces, limbs, wings, fins and tails; decorative face shine is disabled on animal artwork.
- Seasonal tree variants: spring, summer, autumn and winter.
- Animated motion presets with adjustable speed, density and direction.
- Curved motion paths with draggable waypoint nodes, a blue dashed guide, direction arrow and automatic object rotation along the path.
- Elements / Animations mode switcher and a 0–4 second timeline with playhead, keyframes and grouping controls.
- Shift-click multi-selection, grouping and ungrouping, alignment and distribution.
- Mouse rotation and resizing handles.
- Freehand brush presets (pencil, watercolor-style translucent stroke, airbrush-style soft-opacity stroke, blend-style translucent stroke and white-overlay eraser), quick brush sizes, opacity controls and weighted stroke smoothing with distance/delay controls.
- Quick color palette and a scene overview navigator.
- Per-object layer visibility, lock, opacity and blend mode controls (Normal, Multiply, Screen, Overlay and Add).
- Fill and stroke controls, opacity and gradients in the asset library.
- SVG import with basic script/external-reference sanitization.
- Animated SVG export uses SVG `<animateMotion>` for motion paths and `<animateTransform>` for keyframes.
- Local project saving and PWA offline cache after the first successful online load.

## Science learning space

- Seven concise science chapters with 14 lessons, including short explanations, key takeaways, classroom activities and quick checks.
- Lesson progress is saved locally in the browser.
- 100 ready-made science project templates connected to the lessons.
- Templates open as separate editable vector layers in the main ANIMEXA editor.
- The learning materials and templates are bundled with the site and cached by the service worker for offline use after the first successful load.

## Usage

Open the published GitHub Pages site once online. Select Elements to build the scene, or Animations to set the playhead, move an object and add keyframes. Shift-click multiple objects before using Group +, Ungroup, Align or Distribute. Select an object with a motion path to move its blue waypoint nodes.

SVG import is available in the left Tools panel. Export SVG creates an SVG file; it does not render an MP4 video.

## Known limitations

- Boolean path operations (true union, subtraction and intersection) are not yet implemented as geometry operations; grouping is available.
- Imported SVG content is retained as vector markup, but arbitrary third-party filters, fonts and external linked resources may not render identically in every browser.
- The brush engine currently creates editable vector strokes with stylized opacity/width presets; it is not yet a raster pigment simulation. The eraser is a white overlay stroke, not destructive alpha erasing, and blend mode is applied per object.
- Timeline playback is a lightweight 0–4 second editor timeline, not a full audio/video compositor.
