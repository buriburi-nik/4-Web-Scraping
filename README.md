# 🕸️ Web Scraping E-Commerce Products using Puppeteer

This project scrapes product data from a sample e-commerce website and saves the information into a structured Excel or CSV file.

## 📌 Project Overview

- **Website Used:** [WebScraper.io - Laptops Section](https://webscraper.io/test-sites/e-commerce/static/computers/laptops)
- **Data Extracted:**
  - Product Name
  - Price
  - Availability (defaulted to "In stock")
  - Product Rating (based on star icons)
  - Description

## 🚀 Technologies Used

- [Puppeteer](https://pptr.dev/) – For headless browser automation
- [xlsx](https://www.npmjs.com/package/xlsx) – For Excel file creation
- [fs](https://nodejs.org/api/fs.html) – For file system operations (CSV export)

## 📁 Output

You will get either:
- `laptops.xlsx` (Excel file)  
**or**
- `laptops.csv` (CSV file that can be opened in Excel/Google Sheets)

## 📦 How to Run

### 1. Clone the Repository

```bash


git clone https://github.com/buriburi-nik/4-Web-Scraping.git
cd 4-Web-Scraping


📚 Folder Structure
cpp
Copy
Edit
├── index.js        // Main scraping script
├── laptops.xlsx    // Excel output
├── laptops.csv     // CSV output (alternative)
├── README.md       // This file
