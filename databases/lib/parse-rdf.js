const cheerio = require('cheerio');

module.exports = rdf => {
  const book = {};
  const $ = cheerio.load(rdf);
  book.id = +$('pgterms\\:ebook').attr('rdf:about').replace('ebooks/', '');
  book.title = $('dcterms\\:title').text();
  book.authors = $('pgterms\\:agent pgterms\\:name').toArray().map(elem => $(elem).text());
  book.subjects = $('[rdf\\:resource$="/LCSH"]')
    .parent().find('rdf\\:value')
    .toArray().map(elem => $(elem).text());
  book.lcc = $('[rdf\\:resource$="/LCC"]')
    .parent().find('rdf\\:value').text();
  book.fuentes = $('dcterms\\:hasFormat pgterms\\:file').toArray().map(elem => $(elem).attr('rdf:about'));
  return book;
};