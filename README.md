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
- Freehand pen, path node editing, hand/pan tool, zoom controls and basic shapes.
- Fill and stroke controls, opacity and gradients in the asset library.
- SVG import with basic script/external-reference sanitization.
- Animated SVG export uses SVG `<animateMotion>` for motion paths and `<animateTransform>` for keyframes.
- Local project saving and PWA offline cache after the first successful online load.

## Usage

Open the published GitHub Pages site once online. Select Elements to build the scene, or Animations to set the playhead, move an object and add keyframes. Shift-click multiple objects before using Group +, Ungroup, Align or Distribute. Select an object with a motion path to move its blue waypoint nodes.

SVG import is available in the left Tools panel. Export SVG creates an SVG file; it does not render an MP4 video.

## Known limitations

- Boolean path operations (true union, subtraction and intersection) are not yet implemented as geometry operations; grouping is available.
- Imported SVG content is retained as vector markup, but arbitrary third-party filters, fonts and external linked resources may not render identically in every browser.
- Timeline playback is a lightweight 0–4 second editor timeline, not a full audio/video compositor.
