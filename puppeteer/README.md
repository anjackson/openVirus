Puppeteer
=========

This is an example scraper using Puppeteer. It performs the basic task well, and was easy to develop on https://try-puppeteer.appspot.com/

However, the actual PDF downloads only work if the cookie is set (because the site auto-logs-you-in). And it seems getting Puppeteer to download the PDFs is difficult (it's not intended for that kind of thing).

It probably makes more sense to take the same parsing and paging logic and move it to Scrapy.
