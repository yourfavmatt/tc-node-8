# Reviews: HTML and CSS

## HTML

- Content of a webpage
- Content Organization
- Semantic Meaning of text
  - Improves accessibility (ex: `div` => `main`, `span` => `button`, etc)
  - Improves SEO (_Search Engine Optimization_)
- Start with `<!DOCTYPE html>`
- Attributes are listed in the opening tags of elements to add characteristics/values for an element
  - `id`
  - `class`
  - `title`
  - `for`
  - `type`
  - `href`
  - `src`

## CSS

- Style of a webpage
- Add style to a webpage by:
  1. Inline styling, `<p style="color: red; background-color: blue;">...</p>`
  2. Internal/Embedded styling, `<style> ...css rulesets... </style>`
  3. External styling, `<link rel="stylesheet" href="/path/to/file.css">`
- CSS Selectors are used to select one or more HTML elements to apply styles to
- Declared styles can be passed (_cascaded_) down from parent to child elements
- Specificity of styles; certain selectors are prioritized over others (most to least specific)
  1. id
  2. class
  3. element
  4. universal
- Responsive Web Design can be achieved with certain css tools
  - Flexbox and Grid
  - Relative Units
  - Media Queries
