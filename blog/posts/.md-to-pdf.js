module.exports = {
  stylesheet: [
    'https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.1.0/github-markdown.min.css'
  ],
  body_class: ['markdown-body'],
  css: `
    .markdown-body {
      max-width: 800px;
      margin: 40px auto;
      padding: 20px;
    }
    img {
      max-width: 100%;
      height: auto;
      display: block;
      margin: 20px 0;
    }
    h1, h2, h3, h4 {
      page-break-after: avoid;
    }
    pre {
      page-break-inside: avoid;
    }
  `,
  pdf_options: {
    format: 'A4',
    margin: {
      top: '20mm',
      right: '20mm',
      bottom: '20mm',
      left: '20mm'
    },
    printBackground: true,
    displayHeaderFooter: false
  },
  marked_options: {
    headerIds: true,
    headerPrefix: ''
  }
}
