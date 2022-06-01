# Reviews: HTML Intro

HTML stands for _Hyper-Text Markup Language_

A _mark up_ language gives semantic meaning to plain text.

Used for structuring content on a web page

Elements give content _semantic meaning_

HTML files have `.html` or `.htm` extensions

A web page is considered a _document_.

More for content than design or style

## Anatomy of an HTML Element

Opening and closing tags

```html
<tagname attribute1="value1">some content</tagname>
```

### Attributes

Additional name/value pairs, written in the opening tags, that give elements characteristics or behaviors

Examples:

- Images should have `src="link/to/image.jpg"` and `alt="description of image"` attributes
- Links should have a `href="link/to/navigate/to"` attribute
- All elements can have `id="unique1"` and `class="group-name"` attributes

## Elements Types

### Block Level

Take up an entire line

Do not share lines with any other elements

| Name     | Desc                                                    |
| -------- | ------------------------------------------------------- |
| `html`   | root element                                            |
| `head`   | contains meta page information; info about the document |
| `body`   | contains the body, or rendered content of a page        |
| `div`    | generic container                                       |
| `nav`    | navigation container                                    |
| `footer` | footer container                                        |
| `p`      | paragraph text                                          |
| `ul`     | unordered list                                          |
| `ol`     | ordered list                                            |
| `li`     | list items                                              |
| `h1`     | heading 1                                               |
| `h2`     | heading 2                                               |
| `h3`     | heading 3                                               |
| `h4`     | heading 4                                               |
| `h5`     | heading 5                                               |
| `h6`     | heading 6                                               |

### Inline Level

Only take up as much space as the content within the element

Can share a line with another inline element

| Name     | Desc                 |
| -------- | -------------------- |
| `span`   | generic container    |
| `strong` | important text       |
| `em`     | emphasized text      |
| `a`      | hyperlink            |
| `img`    | image (self-closing) |
