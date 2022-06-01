# Reviews: CSS Review

_Cascading Style Sheets_, or CSS

_Cascading_ refers to the inheritence nature of css selections and styles

Property/value pairs

## Adding Styles to Webpages

You must apply/link css for webpages on the _html_ document

1. Inline styles defined in `style="property: value;"` attribute for each element
2. Internal/Embedded styles defined in the `<style></style>` element
3. External StyleSheet via a seperate `.css` file

## Selectors

You can select elements to apply styles to. Selectors have pre-defined syntax

### Simple Selectors

1. Universal `*`
2. Tag name `tagname`
3. Class `.classname`
4. Id `#id`

### Child and Descendent Selectors

1. Child `ul > .link`
2. Descendent `.nav-bar .nav-links`

## Specificity

Multiple styles can be applied to one html element. Only one property style is ultimately applied to an element. Specificity rules that one ruleset is prioritized over another.

For simple selectors, here is least to greatest specificity:

1. Universal `*`
2. Tag name `tagname`
3. Class `.classname`
4. Id `#id`

## Ruleset Syntax

```css
selector {
  property: value;
  property: value;
}
```

## Box Model

Elements are represented as boxes, or rectangles (4 sides). Each box (element), has properties that affect it's size, position, and spacing on the webpage.

These are:

- Size: width and height
- Spacing: margin and padding
- Position: position, top, right, bottom, left
