# Entrega 1

Puede descargar este programa
al ordenador local, como un fichero ZIP. El programa puede clonarse también con `git clone ..` (si
git está instalado).

Una vez descargado, se debe entrar en el directorio `PRACTICA_TMPL` (descargado) y
completar el programa pedido en el fichero `PRACTICA_TMPL.js` (este fichero esta ya vacío
en dicho directorio). El fichero `PRACTICA_TMPL.js` debe editarse o sustituirse por otro con
la solución. La ejecución del programa-de-test indica que partes del código del fichero
`PRACTICA_TMPL.js` se han realizado correctamente y cuales no.

El programa-de-test se copia, instala y ejecuta con los siguientes comandos:

```bash
$ ## El .zip del programa-de-test puede descargarse o copiarse con el siguiente comando:
$ git clone https://github.com/practicas-ging/PRACTICA_TMPL
$
$ cd PRACTICA_TMPL ## El directorio de trabajo pasa a ser el del proyecto copiado: entrega_
$
$ npm install ## Instala el programa-de-test, que es un paquete npm
$
$ npm run checks ## Pasa los tests indicando que partes de PRACTICA_TMPL.js
……..………………… ## están correctamente implementadas y cuales no.
...(realimentación)....
$
```

Los tests pueden pasarse tantas veces como sea necesario; incluso con el ejercicio incompleto.
El programa-de-test incluye además un comando para generar el fichero ZIP

```bash
$
$ npm run zip ## Este comando comprime los ficheros a entregar como un fichero xx.zip
$             ## El directorio de trabajo contiene ahora el fichero: PRACTICA_TMPL.zip
```

El fichero `PRACTICA_TMPL.zip` contiene los ficheros de la practica comprimidos y puede subirse a la plataforma para su evaluación.
