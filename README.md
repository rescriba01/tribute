# Roberto Clemente Tribute Page

A tribute page for Roberto Clemente, a Puerto Rican baseball legend, featuring a timeline of his life and career highlights.

## Project Structure

- `index.html` - Main HTML file
- `resources/styles/style.css` - CSS styles
- `resources/js/` - JavaScript files
- `resources/image/` - Image assets

## Development

This project uses vanilla HTML, CSS, and JavaScript.

## Build Process

This project uses npm scripts to build and minify assets:

### Prerequisites

- Node.js (v16+)
- npm

### Installation

```bash
npm install
```

### Build Commands

- `npm run build` - Build the project (minify CSS and JS, copy assets to dist folder)
- `npm run clean` - Remove the dist folder

### Build Output

The build process:

1. Minifies CSS using PostCSS and cssnano
2. Minifies JavaScript using Terser
3. Copies all necessary assets to the `dist` folder
4. Updates HTML references to point to minified files

The output is placed in the `dist` directory, ready for deployment.

## File Size Comparison

| File Type | Original Size | Minified Size | Reduction |
|-----------|---------------|---------------|-----------|
| CSS       | 7.8 KB        | 5.3 KB        | 32%       |
| JavaScript| 4.7 KB        | 2.5 KB        | 47%       |

## Deployment

The contents of the `dist` directory can be deployed to any static hosting service.

## Credits

- Timeline concept credit to [@cjl750](https://codepen.io/cjl750) on Codepen
- Build system created with Node.js, PostCSS, and Terser
