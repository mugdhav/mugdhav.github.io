const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  
  // Load the HTML file
  const htmlPath = path.resolve(__dirname, '../appsignal-mcp-monitoring.html');
  await page.goto('file://' + htmlPath, { 
    waitUntil: 'networkidle0',
    timeout: 60000
  });
  
  // Generate PDF with options
  await page.pdf({
    path: 'Implementing_APM_withAppSignal.pdf',
    format: 'A4',
    printBackground: true,
    margin: {
      top: '20mm',
      right: '15mm',
      bottom: '20mm',
      left: '15mm'
    },
    displayHeaderFooter: false,
    preferCSSPageSize: false
  });
  
  await browser.close();
  console.log('PDF generated successfully with images!');
})();
