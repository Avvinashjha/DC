# Class Name Convention

## **1. BEM (Block Element Modifier)**
**BEM** stands for **Block, Element, Modifier**. It’s one of the most popular and widely used class naming conventions for CSS, as it makes code modular, reusable, and easy to understand.

### Structure:
- **Block**: Represents a standalone entity/component (e.g., `card`, `button`).
- **Element**: Represents a component part of the block (e.g., `card__header`, `button__icon`).
- **Modifier**: Represents a variation or state of a block/element (e.g., `card--highlighted`, `button--disabled`).

### Syntax:
```plaintext
.block           // Block name
.block__element  // Element within the block
.block--modifier // Modifier for a block or an element
```

### Example:
#### Example: HTML + SCSS:
```html
<div class="card card--highlighted">
  <h2 class="card__header">Card Title</h2>
  <p class="card__description">This is a card description.</p>
</div>
```

```scss
.card {
  padding: 16px;
  background: #f4f4f4;

  &__header {
    font-size: 1.5rem;
    font-weight: bold;
  }

  &__description {
    font-size: 1rem;
    color: #666;
  }

  &--highlighted {
    background: yellow;
    border: 2px solid gold;
  }
}
```

### Advantages:
- Classes are **self-descriptive**, making the code easier to read and maintain.
- Modular and reusable, because each block is independent of others.

---

## **6. Functional Naming Convention**
Use class names that directly describe the **functionality** or **purpose** of the element.

### Example:
```
.class-name__purpose
```

For example:
```scss
.btn__primary {
  background: blue;
}

.text__warning {
  color: red;
}
```


## **Class Naming Best Practices:**
1. **Avoid Generic Names**: Never use classes like `.container`, `.header`, or `.button` without qualifying their purpose or scope (use `.button--primary`, `.card__header`, etc.).

2. **Descriptive and Meaningful Names**: Your class names should describe their **purpose** in a readable way.
    - Bad: `.cl-rd`
    - Good: `.btn--danger`

3. **Avoid IDs for Styling**: IDs have higher specificity than classes, making them harder to override.

4. **Focus on Reusability**: Write classes in a way they can be reused or extended easily.

5. **Keep It Semantic**: Use class names that reflect the role or structure of the element.

6. **Keep Naming Consistent**: Decide on a convention (e.g., BEM, SMACSS) and stick to it throughout the project.

---

## **Conclusion**

For most React/Next.js projects:
- **BEM with SCSS Modules** is a great option for building scalable, component-based architectures.
- You can also mix in some **utility classes** for state or spacing adjustments.
- Use global SCSS for variables, mixins, and reset styles, and keep everything else scoped to components.

Let me know if you have any specific questions or need a deeper dive into any naming convention! 😊