# 📊 PRODUCT MANAGEMENT GUIDE
## Managing Rang Products via Excel

This guide explains how to manage all your products using an Excel file instead of editing JSON manually.

---

## 🎯 HOW IT WORKS

```
You Edit Excel File
        ↓
Run Conversion Script
        ↓
Script Reads Excel
        ↓
Script Finds Images
        ↓
Script Generates products.json
        ↓
Website Updates Automatically
```

---

## 📁 FILE STRUCTURE

```
Rang/
├── Products_Template.csv          ← EDIT THIS (Excel file)
└── website-nextjs/
    ├── public/images/
    │   ├── bangles/
    │   │   ├── product_01.jpeg
    │   │   ├── product_02.jpeg
    │   │   └── ...
    │   ├── necklaces/
    │   ├── rings/
    │   └── ... (other categories)
    ├── scripts/
    │   └── generate-products.js   ← Conversion script
    └── app/data/
        └── products.json          ← Auto-generated (DO NOT EDIT)
```

---

## ✅ STEP-BY-STEP GUIDE

### Step 1: Edit the Excel File

**Open**: `Products_Template.csv` (in Rang folder)

Use Excel, Google Sheets, or any spreadsheet app.

**Columns to fill:**

| Column | Example | Required |
|--------|---------|----------|
| **Product Name** | Gold Rajputana Bangle | ✅ Yes |
| **Category** | Bangles | ✅ Yes |
| **Price** | 2499 | ✅ Yes |
| **Colors** | Gold;Silver | No |
| **Description** | Beautiful design... | No |
| **Rating** | 4.8 | No |
| **Reviews** | 24 | No |
| **Image File** | product_01.jpeg | ✅ Yes |

### Step 2: Save the File

Make sure to save as `.csv` (Comma Separated Values):
- Excel: Save As → CSV (Comma delimited) → Save
- Google Sheets: Download as CSV
- Keep the filename as `Products_Template.csv`

### Step 3: Run the Conversion Script

```bash
cd website-nextjs

# Run the script
node scripts/generate-products.js ../Products_Template.csv
```

You should see:
```
📖 Reading CSV file...
✅ Parsed 20 products
✅ Written to: app/data/products.json

📊 Products Summary:
   Bangles: 8 products
   Necklaces: 4 products
   Rings: 3 products
   ...

✨ Done! Refresh your website to see changes.
```

### Step 4: Refresh Your Website

```bash
# If dev server is running, just refresh browser
# Or restart if needed:
npm run dev
```

**Your website updates with new products!** ✨

---

## 📋 CSV COLUMN DETAILS

### Product Name
- **What it is**: The name of the product
- **Example**: "Gold Rajputana Bangle"
- **Required**: YES
- **Notes**: Must be unique

### Category
- **What it is**: Product category
- **Examples**: 
  - Bangles
  - Necklaces
  - Rings
  - Sheeshpatti
  - Baju
  - Rakhdi
  - Bangadi
  - Boreband
- **Required**: YES
- **Notes**: Must match a folder in `/public/images/`

### Price
- **What it is**: Product price in rupees
- **Example**: 2499
- **Required**: YES
- **Notes**: Numbers only, no symbols (₹ will be added automatically)

### Colors
- **What it is**: Available colors
- **Example**: Gold;Silver;Multicolor
- **Required**: NO
- **Notes**: Separate multiple colors with semicolon (;)

### Description
- **What it is**: Short product description
- **Example**: "Traditional Rajputana design with intricate gold plating"
- **Required**: NO
- **Notes**: Appears on product cards and detail pages

### Rating
- **What it is**: Star rating (0-5)
- **Example**: 4.8
- **Required**: NO
- **Default**: 4.5 if not specified
- **Notes**: Shown as stars on website

### Reviews
- **What it is**: Number of customer reviews
- **Example**: 24
- **Required**: NO
- **Default**: 0 if not specified
- **Notes**: Appears next to rating

### Image File
- **What it is**: Filename of the product image
- **Example**: product_01.jpeg
- **Required**: YES
- **Notes**: 
  - File must exist in the category folder
  - Script will look in `/public/images/{Category}/{ImageFile}`
  - Example: `/public/images/bangles/product_01.jpeg`

---

## 🖼️ IMAGE ORGANIZATION

### Current Structure (By Number)
```
public/images/
├── bangles/
│   ├── product_01.jpeg
│   ├── product_02.jpeg
│   └── ...
├── necklaces/
│   ├── product_03.jpeg
│   └── ...
└── rings/
    ├── product_05.jpeg
    └── ...
```

**Use in Excel**: `product_01.jpeg`, `product_02.jpeg`, etc.

### Optional: Rename by Product Name
For better organization, you can rename images:

```
public/images/
├── bangles/
│   ├── Gold-Rajputana-Bangle.jpeg
│   ├── Silver-Bridal-Bangle.jpeg
│   └── ...
└── ...
```

**Use in Excel**: `Gold-Rajputana-Bangle.jpeg`, etc.

**Command to rename:**
```bash
# Example: rename product_01.jpeg to match product name
mv product_01.jpeg "Gold-Rajputana-Bangle.jpeg"
```

---

## 📝 COMPLETE EXAMPLE

### Excel File (Products_Template.csv):
```
Product Name,Category,Price,Colors,Description,Rating,Reviews,Image File
Gold Rajputana Bangle,Bangles,2499,Gold,Traditional design,4.8,24,product_01.jpeg
Silver Bridal Set,Bangles,3499,Silver,Elegant collection,4.9,18,product_02.jpeg
Kundan Necklace,Necklaces,4999,Gold;Multicolor,Pearl drops,5.0,32,product_03.jpeg
```

### After Running Script:
```json
{
  "products": [
    {
      "id": 1,
      "name": "Gold Rajputana Bangle",
      "category": "Bangles",
      "price": 2499,
      "colors": ["Gold"],
      "description": "Traditional design",
      "rating": 4.8,
      "reviews": 24,
      "image": "/images/bangles/product_01.jpeg"
    },
    {
      "id": 2,
      "name": "Silver Bridal Set",
      "category": "Bangles",
      "price": 3499,
      "colors": ["Silver"],
      "description": "Elegant collection",
      "rating": 4.9,
      "reviews": 18,
      "image": "/images/bangles/product_02.jpeg"
    },
    ...
  ]
}
```

---

## 🔄 WORKFLOW EXAMPLE

### Scenario: Update 3 Products

1. **Open Excel file** → `Products_Template.csv`
2. **Make changes:**
   - Row 2: Change price from 2499 → 2999
   - Row 3: Change rating from 4.9 → 5.0
   - Row 4: Add new product with all details
3. **Save the file** → Ctrl+S
4. **Run script:**
   ```bash
   node scripts/generate-products.js ../Products_Template.csv
   ```
5. **Refresh website** → Changes appear instantly ✨

---

## ⚠️ IMPORTANT NOTES

### CSV Format Rules
- ✅ DO use: Comma (,) to separate columns
- ✅ DO use: Semicolon (;) to separate multiple values in one cell
- ❌ DON'T use: Line breaks inside cells
- ❌ DON'T use: Special characters in filenames (only letters, numbers, hyphens)

### Image File Rules
- ✅ Supported formats: `.jpeg`, `.jpg`, `.png`, `.webp`
- ✅ File MUST exist in the correct folder
- ❌ File paths are case-sensitive on servers
- ❌ Spaces in filenames are risky (use hyphens instead)

### Valid Examples:
```
✅ product_01.jpeg
✅ gold-bangle.jpeg
✅ Gold-Rajputana-Bangle.jpeg
❌ product 01.jpeg (space - avoid!)
❌ Product 01.JPEG (inconsistent case)
```

---

## 🐛 TROUBLESHOOTING

### Error: File not found
```
❌ Error: File not found: ../Products_Template.csv
```
**Fix**: Make sure you're in the `website-nextjs` directory:
```bash
cd website-nextjs
node scripts/generate-products.js ../Products_Template.csv
```

### Error: Image file not found
The script found a product but can't locate its image file.

**Fix**: Check:
1. Image file exists in `/public/images/{category}/`
2. Filename matches exactly (case-sensitive)
3. Category name matches folder name (lowercase)

### Website doesn't update
**Fix**: 
1. Restart dev server: Press Ctrl+C, then `npm run dev`
2. Hard refresh browser: Ctrl+Shift+R (or Cmd+Shift+R on Mac)
3. Clear cache: Delete `.next` folder, run `npm run dev` again

### CSV won't open in Excel
**Fix**:
1. Double-click the `.csv` file
2. If it opens in notepad, right-click → Open With → Excel
3. Or open Excel → File → Open → select CSV file

---

## 📊 MANAGING YOUR INVENTORY

### Adding New Products
1. Add a new row to Excel
2. Fill all required columns
3. Ensure image file exists
4. Run script
5. Done!

### Editing Existing Products
1. Find the product row
2. Change any value
3. Run script
4. Done!

### Deleting Products
1. Delete the entire row
2. Run script
3. Product removed from website

### Bulk Changes
You can edit multiple products at once:
1. Select cells
2. Change values
3. Save
4. Run script

---

## 🎯 BEST PRACTICES

### Naming
- ✅ Use clear, descriptive names: "Gold Rajputana Bangle"
- ❌ Avoid vague names: "Bangle 1"

### Pricing
- ✅ Use consistent pricing: 2499 (always whole numbers)
- ❌ Don't use: ₹2,499.50

### Descriptions
- ✅ Keep short: "Traditional Rajputana design with gold plating"
- ❌ Don't write essays

### Images
- ✅ Use high-quality images (2000x2000px recommended)
- ✅ Optimize size (keep under 500KB per image)
- ❌ Don't use low-res images

### Organization
- ✅ Keep products organized by category
- ✅ Update ratings/reviews regularly
- ❌ Don't leave empty cells for required columns

---

## 📞 QUICK COMMANDS

```bash
# Generate products from CSV
node scripts/generate-products.js ../Products_Template.csv

# View the generated JSON (to verify)
cat app/data/products.json

# Count products by category
node scripts/generate-products.js ../Products_Template.csv 2>&1 | grep "products"

# Start dev server
npm run dev

# Build for production
npm run build
```

---

## 🚀 NEXT STEPS

1. ✅ Edit `Products_Template.csv` with your products
2. ✅ Ensure images are in `/public/images/{category}/`
3. ✅ Run the conversion script
4. ✅ Refresh your website
5. ✅ Products update instantly!

---

## 💡 TIPS

- **Backup**: Keep a copy of your CSV file safe
- **Template**: Use the provided template as reference
- **Testing**: Add a test product first to verify it works
- **Batch edits**: Update multiple products at once in Excel, then run script once
- **Version control**: If using git, commit the CSV file to track changes

---

## 📞 SUPPORT

If you need to:
- **Add a new category**: Create folder in `/public/images/` and add to CSV
- **Change image hosting**: Modify the script's image path logic
- **Automate updates**: Set up a scheduled task to run the script
- **Build an admin panel**: Let me know, I can create a UI for this

---

## ✨ SUMMARY

**Old way**: Edit products.json manually  
**New way**: Edit Excel file → Run script → Website updates ✅

Much easier and more organized! 🎉

---

*Last Updated: May 6, 2026*
