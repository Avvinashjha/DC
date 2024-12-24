## SCSS Overview

## 1. **Variables**
Variables in SCSS make it easy to store reusable values like colors, font sizes, and spacing.

**Example:**
```scss
// Define variables
$primary-color: #3498db;
$secondary-color: #2ecc71;
$font-size-large: 20px;

// Use variables
body {
  color: $primary-color;
  font-size: $font-size-large;
}

h1 {
  background-color: $secondary-color;
}
```

---

## 2. **Nesting**
SCSS lets you nest your CSS selectors in a way that follows the HTML structure, making your code more organized and maintainable.

**Example:**
```scss
nav {
  background: #333;

  ul {
    list-style: none;

    li {
      display: inline-block;

      a {
        color: white;
        text-decoration: none;

        &:hover {
          color: yellow;
        }
      }
    }
  }
}
```

**Compiles to:**
```css
nav {
  background: #333;
}
nav ul {
  list-style: none;
}
nav ul li {
  display: inline-block;
}
nav ul li a {
  color: white;
  text-decoration: none;
}
nav ul li a:hover {
  color: yellow;
}
```

---

## 3. **Partials and Imports**
SCSS allows you to break your styles into smaller, reusable files (partials). These partial files are imported into the main SCSS file.

- **Define partials**:
  Create a file with `_` as a prefix (e.g., `_header.scss`). The prefix tells SCSS not to compile this file independently.

  ```scss
  // _header.scss
  header {
    background: $primary-color;
    padding: 20px;
  }
  ```

- **Import partials**:
  Import the partial into your main SCSS file using the `@import` keyword:

  ```scss
  // main.scss
  @import 'header';

  body {
    font-family: 'Arial';
  }
  ```

---

## 4. **Mixins**
Mixins allow you to define reusable chunks of CSS and include them wherever needed. You can even pass arguments to them.

**Example:**
```scss
// Define a mixin for reusable styles
@mixin box-shadow($color, $blur: 10px) {
  box-shadow: 0 2px $blur $color;
}

// Use the mixin
.card {
  @include box-shadow(#333, 5px);
}

.button {
  @include box-shadow(#555);
}
```

**Compiles to:**
```css
.card {
  box-shadow: 0 2px 5px #333;
}
.button {
  box-shadow: 0 2px 10px #555;
}
```

---

## 5. **Extends (Inheritance)**
The `@extend` directive allows you to inherit styles from another selector. It avoids repetition and makes your CSS DRY (Don't Repeat Yourself).

**Example:**
```scss
// Reusable style
%base-button {
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
}

// Extend the base style
.button-primary {
  @extend %base-button;
  background: blue;
  color: white;
}

.button-secondary {
  @extend %base-button;
  background: gray;
  color: black;
}
```

**Compiles to:**
```css
.button-primary, .button-secondary {
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
}
.button-primary {
  background: blue;
  color: white;
}
.button-secondary {
  background: gray;
  color: black;
}
```

---

## 6. **Operators**
SCSS allows you to perform mathematical operations with CSS values.

**Example:**
```scss
$base-font-size: 16px;
$spacing-unit: 10px;

h1 {
  font-size: $base-font-size * 2; // 32px
  margin-bottom: $spacing-unit + 5px; // 15px
}

.container {
  width: 100% - 20px; // Operator example
}
```

---

## 7. **Parent Selector (`&`)**
The `&` represents the current parent selector and is especially useful for pseudo-classes and when building BEM-style selectors.

**Example:**
```scss
.button {
  color: white;

  &:hover {
    color: yellow;
  }

  &--primary {
    background: blue;
  }
}
```

**Compiles to:**
```css
.button {
  color: white;
}
.button:hover {
  color: yellow;
}
.button--primary {
  background: blue;
}
```

---

## 8. **Loops**
SCSS supports loops (e.g., `@for`, `@each`, `@while`), which is useful for generating repetitive CSS.

### `@for` Example:
```scss
@for $i from 1 through 5 {
  .box-#{$i} {
    width: 10px * $i;
    height: 10px * $i;
  }
}
```

**Compiles to:**
```css
.box-1 {
  width: 10px;
  height: 10px;
}
.box-2 {
  width: 20px;
  height: 20px;
}
.box-3 {
  width: 30px;
  height: 30px;
}
.box-4 {
  width: 40px;
  height: 40px;
}
.box-5 {
  width: 50px;
  height: 50px;
}
```

### `@each` Example:
```scss
$colors: (blue, green, red);

@each $color in $colors {
  .text-#{$color} {
    color: $color;
  }
}
```

**Compiles to:**
```css
.text-blue {
  color: blue;
}
.text-green {
  color: green;
}
.text-red {
  color: red;
}
```

---

## 9. **Conditionals (`@if`, `@else`)**
SCSS allows you to write conditional logic for dynamic styles.

**Example:**
```scss
$is-dark-theme: true;

body {
  @if $is-dark-theme {
    background: black;
    color: white;
  } @else {
    background: white;
    color: black;
  }
}
```

---

## 10. **Using Functions**
SCSS comes with several built-in functions, such as `lighten()`, `darken()`, `rgba()`, and more. You can also define your own custom functions.

**Example (Built-in Function):**
```scss
$primary-color: #3498db;

.button {
  background: lighten($primary-color, 10%); // Make the color lighter
  color: darken($primary-color, 10%); // Make the color darker
}
```

**Example (Custom Function):**
```scss
@function square($num) {
  @return $num * $num;
}

.box {
  width: square(3) * 1px; // 9px
}
```

---

## 11. **Custom Utilities**
You can create your own utility classes for repetitive tasks like grids or spacing.

**Example:**
```scss
@mixin margin($top, $right, $bottom, $left) {
  margin: $top $right $bottom $left;
}

.container {
  @include margin(10px, 15px, 10px, 15px);
}
```

---

## 12. Using SCSS in a Next.js Project
Follow this step-by-step guide to integrate SCSS into a Next.js app, which we discussed earlier:
- Install `sass` via `npm install sass`
- Use `.module.scss` files for scoped styling
- Import styles in React components using `import styles from './filename.module.scss'`

---

## Conclusion
SCSS takes CSS development to the next level by adding features like variables, nesting, mixins, imports, and more. Mastering SCSS will greatly improve your ability to write clean, efficient, and maintainable styles for your projects.

Start small by using features like variables and nesting, and slowly incorporate advanced tools like mixins and loops in your projects. If you have any specific SCSS questions (or need more examples), feel free to ask! Happy coding! 😊