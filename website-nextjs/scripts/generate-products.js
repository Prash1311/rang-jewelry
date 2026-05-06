#!/usr/bin/env node

/**
 * Generate products.json from CSV file
 *
 * Usage: node scripts/generate-products.js ../Products_Template.csv
 *
 * CSV Format:
 * Product Name, Category, Price, Colors, Description, Rating, Reviews, Image File
 */

const fs = require('fs');
const path = require('path');

// Parse CSV file
function parseCSV(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.trim().split('\n');
  const headers = lines[0].split(',').map(h => h.trim());

  const products = [];
  let id = 1;

  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(',').map(v => v.trim());

    if (values.length < 2 || !values[0]) continue; // Skip empty lines

    const product = {
      id: id++,
    };

    // Map CSV columns to product object
    headers.forEach((header, index) => {
      const value = values[index] || '';

      switch (header) {
        case 'Product Name':
          product.name = value;
          break;
        case 'Category':
          product.category = value;
          break;
        case 'Price':
          product.price = parseInt(value) || 0;
          break;
        case 'Colors':
          // Split by semicolon for multiple colors
          product.colors = value.split(';').map(c => c.trim()).filter(c => c);
          break;
        case 'Description':
          product.description = value;
          break;
        case 'Rating':
          product.rating = parseFloat(value) || 4.5;
          break;
        case 'Reviews':
          product.reviews = parseInt(value) || 0;
          break;
        case 'Image File':
          // Extract category from Category column for folder
          const category = product.category.toLowerCase();
          product.image = `/images/${category}/${value}`;
          break;
      }
    });

    // Validate product
    if (product.name && product.category && product.price) {
      products.push(product);
    }
  }

  return products;
}

// Main execution
const csvPath = process.argv[2];

if (!csvPath) {
  console.error('❌ Error: Please provide CSV file path');
  console.error('Usage: node scripts/generate-products.js <path-to-csv>');
  console.error('Example: node scripts/generate-products.js ../Products_Template.csv');
  process.exit(1);
}

if (!fs.existsSync(csvPath)) {
  console.error(`❌ Error: File not found: ${csvPath}`);
  process.exit(1);
}

try {
  console.log('📖 Reading CSV file...');
  const products = parseCSV(csvPath);

  console.log(`✅ Parsed ${products.length} products`);

  // Generate products.json
  const outputPath = path.join(__dirname, '../app/data/products.json');
  const outputData = { products };

  fs.writeFileSync(outputPath, JSON.stringify(outputData, null, 2));

  console.log(`✅ Written to: ${outputPath}`);
  console.log('\n📊 Products Summary:');

  // Group by category
  const byCategory = {};
  products.forEach(p => {
    if (!byCategory[p.category]) byCategory[p.category] = 0;
    byCategory[p.category]++;
  });

  Object.entries(byCategory).forEach(([cat, count]) => {
    console.log(`   ${cat}: ${count} products`);
  });

  console.log('\n✨ Done! Refresh your website to see changes.');

} catch (error) {
  console.error('❌ Error:', error.message);
  process.exit(1);
}
