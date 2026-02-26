const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  const filePath = 'file:///' + path.resolve(__dirname, 'crowe-pdf-template.html').replace(/\\/g, '/');
  await page.goto(filePath, { waitUntil: 'networkidle0' });
  await page.pdf({
    path: 'LendingPoint-Reconciliation-Guide.pdf',
    format: 'A4',
    printBackground: true,
    margin: { top: '0', bottom: '0', left: '0', right: '0' }
  });
  await browser.close();
  console.log('✅ PDF saved: LendingPoint-Reconciliation-Guide.pdf');
})().catch(console.error);
