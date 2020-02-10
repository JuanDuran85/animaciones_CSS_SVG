# CSS Animaciones

Una animación es un cambio de un estado inical a un estado final. Cuando no se declara el estado incial, igual esta presente por el navegador.

## Trigger

Cuando se cambia una propiedad CSS, el navegador necesita reaccionar a ese cambio. Por lo tanto, los tipos de cambios son de mayor a menor costo de recursos del CPU. Es decir, el navegador interpreta todos los estados e interpolaciones de las animaciones. Trabajando por etapas, como:

* Layout (geometria y posicion de elementos).
* Paint (pintar los pixeles de los elementos).
* Composite (combina y dibuja las capas en la pantalla).

## Propiedades de CSS de algunos alementos

1. initial: Establece el valor de la propiedad en su valor por defecto de la especificacion.

2. inherit: fuerza al elemento a heredar la propiedad de su padre, incluso aquellas que no se heredan por especificacion.

3. unset: borra los valores declarados y los regresa a sus valores inciales. Es decir, a los heredados por su padres o a los inciales.

4. revert: regresa la propiedad a los estilos del usuario o del user agent.

5. currentColor (camelCase): usa el color definido en el contexto.

## Propiedes importantes de CSS para animaciones

1. keyframes: determina los puntos claves o paradas donde algo cambia.

Nota importante: Existen propiedes animables y no animables. Como por ejemplo, la propiedad order de flexbox en teoria es animable, pero en la practica no lo es. Al igual que text-aling. En otras palabras, cada vez que el tipo de animacion de una propiedad indique que es como un entero (as integer), no se puede animar por estados. Igualmente, los elementos inline no se pueden transformar porque no tienen dimension.

Para mas informacion, visita:

* [TutorialRepublic](https://www.tutorialrepublic.com/css-reference/css-animatable-properties.php).
* [CSS Referece](https://cssreference.io/).
*[Codrops](https://tympanus.net/codrops/css_reference/).
[Animatable CSS properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties).
[Referencias de CSS - MDN](https://developer.mozilla.org/es/docs/Web/CSS/Referencia_CSS).
[Referencias de CSS - W3Schools](https://www.w3schools.com/cssref/)
