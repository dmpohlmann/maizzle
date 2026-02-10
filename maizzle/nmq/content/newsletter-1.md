<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# Comprehensive Markdown Syntax Guide

This document demonstrates all standard markdown syntax elements with practical examples.

## Text Formatting

You can make text **bold** using double asterisks, or *italic* using single asterisks. For ***bold and italic*** combined, use triple asterisks. You can also use ~~strikethrough~~ with double tildes.

## Headers

Headers use hash symbols, from level 1 through level 6. This document demonstrates levels 1-3, which are most commonly used for organizing content effectively.

### Subsection Example

Subsections help organize complex topics into digestible parts without overwhelming readers with too many top-level sections.

## Lists

### Unordered Lists

- First item in the list
- Second item with important details
- Third item demonstrating consistency
- Fourth item showing proper structure
- Fifth item completing the example


### Ordered Lists

1. Primary step in the process
2. Secondary step building on the first
3. Third step adding complexity
4. Fourth step approaching completion
5. Final step wrapping up the sequence

### Task Lists

- [x] Completed task showing progress
- [x] Another finished item
- [ ] Pending task requiring attention
- [ ] Future task for planning


## Links and References

Here's an [example link](https://example.com) demonstrating standard hyperlink syntax. You can also use [links with titles](https://example.com) for additional context.

## Code

### Inline Code

Use `inline code` for commands, variables like `variableName`, or short snippets like `function()`.

### Code Blocks

```python
def example_function(parameter):
    """Demonstrates code block syntax."""
    result = parameter * 2
    return result

# Function call
output = example_function(42)
print(f"Result: {output}")
```

```javascript
const exampleObject = {
  name: "Demonstration",
  value: 123,
  active: true
};

console.log(exampleObject.name);
```


## Mathematical Expressions

### Inline Mathematics

The quadratic formula is $x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$ and Euler's identity states that $e^{i\pi} + 1 = 0$.

### Block Mathematics

$$
\int_{0}^{\infty} e^{-x^2} dx = \frac{\sqrt{\pi}}{2}
$$

The Pythagorean theorem:

$$
a^2 + b^2 = c^2 \quad
$$

Einstein's mass-energy equivalence:

$$
E = mc^2 \quad
$$

## Blockquotes

> This is a blockquote demonstrating how to format quoted text or emphasize important information.
>
> Multiple paragraphs work within blockquotes by continuing the angle bracket notation on new lines.

## Tables

| Header One | Header Two | Header Three |
| :-- | :-- | :-- |
| Row 1 Col 1 | Row 1 Col 2 | Row 1 Col 3 |
| Row 2 Col 1 | Row 2 Col 2 | Row 2 Col 3 |
| Row 3 Col 1 | Row 3 Col 2 | Row 3 Col 3 |

### Aligned Tables

| Left Aligned | Center Aligned | Right Aligned |
| :-- | :--: | --: |
| Text | Text | Text |
| More text | More text | More text |
| Final row | Final row | Final row |

## Horizontal Rules

Use horizontal rules to separate major sections or distinct pieces of content.

***

## Images

While I cannot display images directly, the syntax would be: `![Alt text](image-url.jpg "Optional title")`

## Escape Characters

You can escape special characters with backslashes: \* \_ \# $$

$$ $$

## Combined Elements

### Complex List with Multiple Elements

1. **First major point** - This demonstrates combining bold text with list items
    - Nested consideration about the first point
    - Additional nested detail with `inline code`
2. **Second major point** - Including [a hyperlink](https://example.com) within the list
    - Mathematical expression: $f(x) = x^2 + 3x + 2$
    - Reference to equation  from earlier
3. **Third major point** - Showing blockquote integration
> Important note within a list item that requires emphasis and careful attention

Would you like me to demonstrate any specific markdown syntax in more detail or show examples for a particular use case?

