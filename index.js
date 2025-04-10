const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://webscraper.io/test-sites/e-commerce/static/computers/laptops', {
    waitUntil: 'networkidle2',
  });

  const products = await page.evaluate(() => {
    const items = document.querySelectorAll('.thumbnail');
    let data = [];

    items.forEach(item => {
      const name = item.querySelector('.title')?.innerText || 'No name';
      const price = item.querySelector('.price')?.innerText || 'No price';
      const description = item.querySelector('.description')?.innerText || 'No description';
      const ratingLength = item.querySelectorAll('.ratings .glyphicon-star').length;
      const availability = 'In stock';

      data.push({
        name,
        price,
        availability,
        rating: `${ratingLength} stars`,
        description,
      });
    });

    return data;
  });

  // 🧾 Convert to CSV
  const csvRows = [
    ['Product Name', 'Price', 'Availability', 'Rating', 'Description'],
    ...products.map(p => [p.name, p.price, p.availability, p.rating, p.description])
  ].map(row => row.join(',')).join('\n');

  // 💾 Save as CSV
  fs.writeFileSync('laptops.csv', csvRows, 'utf8');
  console.log('✅ CSV file created successfully!');

  await browser.close();
})();
