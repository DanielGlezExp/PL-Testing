'use strict';

const cheerio = require('cheerio');

module.exports = rdf => {
  const book = {};
  const $ = cheerio.load(rdf);
  book.id = +$('pgterms\\:ebook').attr('rdf:about').replace('ebooks/', '');
  return book;
};