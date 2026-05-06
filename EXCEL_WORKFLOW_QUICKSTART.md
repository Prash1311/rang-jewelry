# 🚀 QUICK START: Excel-Based Product Management

## The New Workflow (Super Simple!)

```
1. Edit Excel File          (Products_Template.csv)
   ↓
2. Run One Command          (node scripts/generate-products.js ...)
   ↓
3. Website Updates!         (Automatically)
```

---

## 📝 Step 1: Edit the Excel File

**File**: `Products_Template.csv` (in Rang folder)

**Open with**: Excel, Google Sheets, or any spreadsheet app

**Columns you'll fill**:
- Product Name (e.g., "Gold Rajputana Bangle")
- Category (e.g., "Bangles")
- Price (e.g., 2499)
- Colors (e.g., "Gold;Silver" - use semicolon to separate)
- Description (e.g., "Traditional design...")
- Rating (e.g., 4.8)
- Reviews (e.g., 24)
- Image File (e.g., "product_01.jpeg")

**Example Row**:
```
Gold Rajputana Bangle | Bangles | 2499 | Gold | Traditional design... | 4.8 | 24 | product_01.jpeg
```

---

## 🖥️ Step 2: Run the Conversion Script

**Open Terminal/Command Prompt** and type:

```bash
cd website-nextjs
node scripts/generate-products.js ../Products_Template.csv
```

**You'll see**:
```
📖 Reading CSV file...
✅ Parsed 20 products
✅ Written to: app/data/products.json

📊 Products Summary:
   Bangles: 4 products
   Necklaces: 4 products
   ...

✨ Done! Refresh your website to see changes.
```

---

## 🌐 Step 3: Website Updates

**Your website automatically updates!**

- If dev server is running: Just refresh the browser
- If dev server is stopped: Run `npm run dev`

**Products are live!** ✨

---

## 📋 CSV Format Rules

| Do ✅ | Don't ❌ |
|-------|---------|
| Use commas to separate columns | Use commas inside cells |
| Use semicolons for multiple values | Use line breaks in cells |
| Use .jpeg or .png for images | Use spaces in filenames |
| Keep filenames simple | Use special characters in filenames |
| Save as CSV format | Save as Excel .xlsx format |

---

## 🎯 Common Tasks

### Add a New Product

1. Open `Products_Template.csv`
2. Add new row at bottom
3. Fill all columns
4. Run: `node scripts/generate-products.js ../Products_Template.csv`
5. Done!

### Change Product Price

1. Open Excel file
2. Find product row
3. Change price value
4. Run the script
5. Done!

### Update Ratings/Reviews

1. Open Excel file
2. Edit Rating or Reviews column
3. Run the script
4. Done!

### Delete a Product

1. Delete the entire row from Excel
2. Run the script
3. Product removed from website

---

## 📂 File Locations

```
Rang/
├── Products_Template.csv           ← EDIT THIS
└── website-nextjs/
    ├── scripts/
    │   └── generate-products.js    ← RUN THIS
    ├── public/images/
    │   ├── bangles/
    │   │   ├── product_01.jpeg     ← Images here
    │   │   └── product_02.jpeg
    │   ├── necklaces/
    │   ├── rings/
    │   └── ...
    └── app/data/
        └── products.json           ← Auto-generated
```

---

## 🔧 Troubleshooting

### "Command not found"
- Make sure you're in `website-nextjs` folder
- Type: `cd website-nextjs` first

### "File not found"
- Check that `Products_Template.csv` is in parent folder
- Make sure filename is spelled correctly

### Images not showing
- Check image exists in `/public/images/{category}/`
- Check filename matches exactly (case-sensitive!)
- Verify category name matches folder name

### Website not updating
- Run script again
- Refresh browser (Ctrl+R)
- Restart dev server (Ctrl+C, then `npm run dev`)

---

## 📊 Sample CSV Data

```csv
Product Name,Category,Price,Colors,Description,Rating,Reviews,Image File
Gold Rajputana Bangle,Bangles,2499,Gold,Traditional design,4.8,24,product_01.jpeg
Silver Bridal Set,Bangles,3499,Silver,Elegant collection,4.9,18,product_02.jpeg
Kundan Necklace,Necklaces,4999,Gold;Multicolor,Pearl drops,5.0,32,product_03.jpeg
Meenakari Necklace,Necklaces,5499,Multicolor,Traditional patterns,4.7,21,product_04.jpeg
```

---

## 💡 Pro Tips

1. **Batch Edit**: Change multiple products at once in Excel, then run script once
2. **Backup**: Keep a copy of your CSV file safe
3. **Test First**: Add a test product first to verify workflow
4. **Use Descriptions**: Better descriptions = higher sales
5. **Update Regularly**: Keep ratings/reviews current

---

## ✨ You're All Set!

**From now on**:
- ✅ Edit Excel file
- ✅ Run one command
- ✅ Website updates instantly!

No more JSON editing! 🎉

---

## 📞 Need Help?

Read the full guide: `PRODUCT_MANAGEMENT_GUIDE.md`

---

*Last Updated: May 6, 2026*
