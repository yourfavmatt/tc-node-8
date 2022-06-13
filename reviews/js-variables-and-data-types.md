# Reviews: JS Variables and Data Types

## JavaScript

Used in the browser to add functionality and interactivity to webpages.

An _interpreted_ language (_not compiled_\*)

Dynamically and loosely typed language, meaning the data type that a variable holds is taken by the value that it is assigned, not defined on the variable itself. Also, this means that the data type that a variable holds can change throughout the execution of a program.

Executed by a runtime environment _in the browser_ (for frontend traditionally)

Many uses on the web, including:

- Form validation
- Animations\*
- Dropdown menus
- Responsive web design
- Video and audio controls
- Loading dynamic content
- Etc

## Declaration

Keywords

- `var`: can be reassigned
- `let`: can be reassigned
- `const`: cannot be reassigned

## Variable Names

Rules

- Can only start with:
  - letters
  - underscores
  - dollar signs
- Can include letters, underscores, hyphens, dollar signs, or numbers
- Conventionally _camelCase_
  - Example: `thisIsCamelCased`, `myName`, etc

## Data Types

### Primitive Types

Cannot change primitive data types directly, but we reassign variable to new primitive values.

- Strings
  - Used to represent displayed data
  - Literal values delimited by: "", ``, ''
  - Single or double quotes are the same. Just be universal or congruent with your choice of delimiter
  - Example: `"Your order is $19.99"`
- Number
  - Integers, decimals, scientific notation
  - Example: `3`, `3.14`, `3.14e8`
- Boolean
  - Logical data type
  - Either `true` or `false`
- Undefined
  - A value that has not been defined
  - Most often seen when you declare a variable, but do not initialize it with a value
  - Example: `let name; // undefined`
- Null
  - A value that is empty or invalid
  - Example: `let answer = null;`
- Symbol
  - String-like value that is used for unique key values on objects, specifically maps and sets
  - Example: `Symbol("someValue")`
- BigInt
  - Represents number arbitrary precision format
  - Example: `1234567890n`

### Structured Types

- Objects
- Functions\*

## Console

You can print values to the browser console by passing values to the `console.log` method

```js
let name = "Ben";

console.log(name); // Prints "Ben" to the browser console
```

## Concatenation and Interpolation

Concatenation combines two strings into one string

```js
let firstName = "Ben";
let lastName = "Bryant";

let fullName = firstName + " " + lastName; // "Ben Bryant"
```

String interpolation uses template strings (denoted by backticks) to _interpolate_ values at specified placeholders in a template.

```js
let firstName = "Ben";
let lastName = "Bryant";

let fullName = `${firstName} ${lastName}`; // "Ben Bryant"
```
