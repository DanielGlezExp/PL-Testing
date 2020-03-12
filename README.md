# P2-t1 Testing
**Autor**: Daniel González Expósito

**Asignatura**: Procesadores de Lenguajes

**Universidad**: Universidad de la Laguna ([ULL](https://www.ull.es/))

**Profesor**: Casiano Rodríguez León

# Node.js the Right Way chapter 5
## **Procuring external data**
RDF es un formato basado en XML.
Queremos pasar de los ficheros RDF descargados a un formato JSON

## **Behavior-Driven Development with Mocha and Chai**
TDD es definir las pruebas que debe pasar nuestro software antes de realizar el mismo. EL libro nos comenta que no en todos los casos se puede usar TDD, pero que para el tratamiento de datos en este caso es idóneo, pues tenemos bien definida la entrada y la salida que debe tener el software.

Usaremos Mocha como test framework y Chai una librería para 'asserts'

Nos enseña a instalar mocha usando npm y a realizar nuestro primer test.

Instalacion mocha:

![Instalacion Mocha]()

Primer fallo test:

![Primer fallo test]()

¡Primer test superado!:

![Primer test superado]()

Además nos enseña a como crear un pequeño módulo, exportando una función desde un archivo lib/ a un archivo en test/

Finalmente aprendemos y usamos Mocha junto a npm para poder hacer continuos testing. Es decir comprobar automáticamente si los tests se ejecutan correctamente al hacer cambios a los ficheros.

Test continuo cuando todo está bien (muestra información mínima):

![Mocha todo bien]()

Test continuo nate un fallo:

![Mocha fallo]()

## **Extracting Data from XML with Cheerio**
En el comienzo se nos habla de diferentes maneras de obtener información a partir de documentos XML (por tanto RDF) / HTML. Para ello se nos habla de herramientas basadas en DOM y herramientas SAX (Simple API for XML) La ventaja de SAX es que es más rápida y consume menos memoria, pero analiza un elemento cada vez y no mantiene la estructura general del fichero original. SAX nos comenta que es una buena opción para ficheros XML grandes.

Por otro lado JSON-LD es un formato similar a JSON pero que permite, además, almacenar relaciones entre los diferentes componentes de un JSON.

Nosotros para acceder información de un fichero RDF relativamente pequeño vamos a usar Cheerio. Cheerio es una APi jQuerry para trabajar con documentos HTML y XML

Usando TDD con chai realizamos las pruebas que deseamos que nuestro código supere, para posteriormente usando cheerio escribimos el código necesario para acceder a la información deseada de los ficheros para superar las mismas

Pruebas:

![Pruebas acceder informacion]()

![Código acceder información]()

Finalmente realizamos un pequeño programa para obtener la información de un libro en formato JSON y mostrarla

![Mostrar Json]()

## **Procesando ficheros de datos secuencialmente**

En este capítulo lo que hacemos es usar node-dir para ejecutar parseRDF en todos los ficheros que acaben en .rdf Para cada archivos mostramos su "index" con el que lo guardaríamos seguido de el objeto JSON del libro en si.

Captura de la ejecución:

![rdf to bulk]()

Finalmente esta salida, una vez hemos comprobado que el programa funciona correctaente, la almacenamos en data/bulk_pg.ldj 

Aqui puede ver el inicio del fichero

![bulk_pglj]()

## **Debug con Chrome DevTools**

## **Ejercicios**

### *Primer ejercicio**
Primero especificamos las pruebas que debe superar nuestro código. Como se puede observar en la siguiente imágen, la prueba falla:

![primer ejercicio fallo]()

Pero añadiendo el siguiente código conseguimos superar las pruebas:

`book.lcc = $('[rdf\\:resource$="/LCC"]')
    .parent().find('rdf\\:value').text();`


### **Segundo ejercicio**
Para el segundo ejercicio he realizado esta prueba:

`expect(book).to.have.a.property('fuentes')
    .that.is.an('array')
    .and.contains('http://www.gutenberg.org/files/132/132-0.txt');`

Y el código que cumple dicha prueba es el siguiente:

`book.fuentes = $('dcterms\\:hasFormat pgterms\\:file').toArray().map(elem => $(elem).attr('rdf:about'));`


 [![Build Status](https://travis-ci.org/<DanielGlezExp>/<repo name>.svg?branch=master)](https://travis-ci.org/<github username>/<repo name>) [![Coverage Status](https://coveralls.io/repos/github/<github username>/<repo name>/badge.svg?branch=master)](https://coveralls.io/github/<github username>/<repo name>?branch=master)