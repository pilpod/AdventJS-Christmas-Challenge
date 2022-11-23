# AdventJS

Advent JS challenge

## Pre-requirement

- node.js & npm

## Dependencies

- jest
- @babel/core
- @babel/preset-env

## Installation

```
$ npm install
```


## Run tests

```
$ npx jest
or
$ npm run test
```
You can filter test with ...
```
$ npx jest -t '<test-name>'
or
$ npm run filter '<test-name>'
```

### Challenges

> Challenge 01 - Counting sheeps to sleep
> Considera una lista/array de ovejas. Cada oveja tiene un nombre y un color. Haz una función que devuelva una lista con todas las ovejas que sean de color rojo y que además su nombre contenga tanto las letras n Y a, sin importar el orden, las mayúsculas o espacios.
> Recuerda. Debe contener las dos letras 'a' y 'n' en el nombre. No cuentes ovejas que sólo tenga una de las letras, debe tener ambas.
-----------------------------------
> Challenge 02 - 
> ¡Ayuda al elfo a listar los regalos!
¡Menudo lío 😵! Un elfo está ayudando a Santa Claus. Pensaba que le vendría ya ordenado de cada regalo cuantas unidades debe conseguir... ¡y le ha llegado una carta ✉️! ¡Ayúdale!

> Te ha llegado una carta ✉️ con todos los regalos que debes preparar. El tema es que es una cadena de texto y es muy difícil de leer 😱. ¡Menos mal que han puesto cada regalo separado por espacio! (aunque ten cuidado, porque al ser niños, igual han colado más espacios de la cuenta)

> Encima nos hemos dado cuenta que algunas palabras vienen con un _ delante de la palabra, por ejemplo _playstation, que significa que está tachado y no se tiene que contar.

> Transforma el texto a un objeto que contenga el nombre de cada regalo y las veces que aparece.

> Ten en cuenta que los tests pueden ser más exhaustivos... 😝 ¡Cuidado con contar espacios vacíos!
------------------------------------
> Challenge 03 -
> El Grinch quiere fastidiar la Navidad
¡El Grinch anda suelto y quiere fastidiar la Navidad! 😱 Vamos a arreglar el lío que ha montado en la fábrica de regalos de Santa Claus

> El Grinch está abriendo las cartas que iban a Santa Claus y las está dejando hechas un lío. 😱

> Las cartas son una cadena de texto que incluyen regalos y paréntesis ().

> Para saber si una carta es válida ✅, debes comprobar que los paréntesis cierran correctamente y que, además, no vayan vacíos.

> ¡Pero ojo! Porque el Grinch ha dejado llaves { y corchetes [ dentro de los paréntesis que hacen que no sean válidas. Por suerte sólo los ha dejado en medio de los paréntesis...

Ejemplo:
```
"bici coche (balón) bici coche peluche" // -> ✅
"(muñeca) consola bici" // ✅

"bici coche (balón bici coche" // -> ❌
"peluche (bici [coche) bici coche balón" // -> ❌
"(peluche {) bici" // -> ❌
"() bici" // ❌
```

> Crea una función que pasándole el texto de la carta, devuelva true si es válida y false si no lo es. ¡Y acaba con la travesura del Grinch!
------------------------------------------

### Source
- https://adventjs.dev/challenges