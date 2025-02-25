# HTML Tools
Tools for HTML webpages.
## Table of Contents
- [Importing](#importing)
- [Page Switching](#page-switching)
- [Example](#example)

### Importing
To use this, you must import it from the CDN:
```html
<script src="https://cdn.jsdelivr.net/gh/pfcarnahan/html-tools@main/tools.js"></script>
```
### Page Switching
#### Concept
Pages are any element with a 'page' attribute. The page switcher will show the elements with the matching 'page' attribute, and hide those that do not match.
#### Usage
- `switchPage(page)` - Switches to the given page.
- `bindButton(id, page)` - Makes the element with the given ID switch to the given page when clicked.
- `bindButtons(className)` - Makes all elements with the given class name switch to the page with the id of the 'to' attribute on that element.

### Example
Go to this link for an example: [Example](https://www.khanacademy.org/computer-programming/page-switching-example/4692881205805056)