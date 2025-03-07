const fs = require('fs-extra');
const { execSync } = require('child_process');
const { minify } = require('terser');
const path = require('path');

// Create dist directory if it doesn't exist
fs.ensureDirSync('dist');
fs.ensureDirSync('dist/resources');
fs.ensureDirSync('dist/resources/js');
fs.ensureDirSync('dist/resources/styles');
fs.ensureDirSync('dist/resources/image');

// Copy HTML file
fs.copySync('index.html', 'dist/index.html');

// Copy images
fs.copySync('resources/image', 'dist/resources/image');

// Process CSS with PostCSS
console.log('Processing CSS...');
execSync('npx postcss resources/styles/style.css -o dist/resources/styles/style.min.css');
console.log('CSS processed successfully!');

// Process JavaScript files
async function minifyJS() {
  console.log('Processing JavaScript...');
  
  // List of JS files to minify
  const jsFiles = [
    'resources/js/script.js',
    'resources/js/components/Image.js',
    'resources/js/components/data.js'
  ];
  
  // Process each file
  for (const file of jsFiles) {
    const fileName = path.basename(file);
    const destPath = `dist/${file.replace('.js', '.min.js')}`;
    
    // Ensure directory exists
    fs.ensureDirSync(path.dirname(destPath));
    
    // Read file content
    const code = fs.readFileSync(file, 'utf8');
    
    // Minify
    const minified = await minify(code, {
      compress: true,
      mangle: true
    });
    
    // Write minified file
    fs.writeFileSync(destPath, minified.code);
    console.log(`Minified ${fileName}`);
  }
  
  console.log('JavaScript processed successfully!');
}

// Update HTML to reference minified files
function updateHTML() {
  console.log('Updating HTML references...');
  
  let html = fs.readFileSync('dist/index.html', 'utf8');
  
  // Update CSS reference
  html = html.replace(
    '<link rel="stylesheet" href="resources/styles/style.css">',
    '<link rel="stylesheet" href="resources/styles/style.min.css">'
  );
  
  // Update JS references
  html = html.replace(
    'src="resources/js/script.js"',
    'src="resources/js/script.min.js"'
  );
  
  html = html.replace(
    'src="resources/js/components/Image.js"',
    'src="resources/js/components/Image.min.js"'
  );
  
  html = html.replace(
    'src="resources/js/components/data.js"',
    'src="resources/js/components/data.min.js"'
  );
  
  fs.writeFileSync('dist/index.html', html);
  console.log('HTML updated successfully!');
}

// Run the build process
async function build() {
  try {
    await minifyJS();
    updateHTML();
    console.log('Build completed successfully!');
  } catch (error) {
    console.error('Build failed:', error);
  }
}

build(); 