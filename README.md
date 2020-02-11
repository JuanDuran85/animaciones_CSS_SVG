# CSS Animaciones

Una animación es un cambio de un estado inical a un estado final. Cuando no se declara el estado incial, igual esta presente por el navegador.

Existen dos tipos de animaciones para CSS:

1. Transiciones: son animaciones de un estado inicial a un estado final, de una propiedad a otra. Por lo que permiten que las propiedades CSS cambien suavemente en un periodo de tiempo determinado. Se pueden definir multiples transiciones separadas por coma. Estas requieren un evento para ejecutarse (siempre).
2. Animaciones: tienen momentos intermedios llamados keyframe. Pueden lanzarse automaticamente, detenerse, reanudarse.

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

Nota importante: Existen propiedes animables y no animables. Como por ejemplo, la propiedad order de flexbox en teoria es animable, pero en la practica no lo es. Al igual que text-aling. En otras palabras, cada vez que el tipo de animacion de una propiedad indique que es como un entero (as integer), no se puede animar por estados. Igualmente, los elementos inline no se pueden transformar porque no tienen dimension.

## Propiedes importantes de CSS para animaciones

1. Transition: posee distintas propiedades, como:
   * transition-property: all | none | propiedad [, propiedad]
   * transition-duration: 0s | time[, time]. No se permiten valores negativos
   * transition-timing-function (easing functions): indica la aceleracion de existir. Como se calculará cada valor intermedio mientras dura la transición. 
        - Keyword: ease | linear | ease-in | ease-out | ease-in-out | step-start | step-end.
        - Functions: steps(), cubic-bezier().
   * transition-delay: Indica cuando la transición iniciará (defecto "*default*" 0s)
   * transition (shorthand): transition-property transition-duration transition-delay transition-time-function.

2. keyframes: determina los puntos claves o paradas donde algo cambia.

Para mas información, visita:

* [TutorialRepublic](https://www.tutorialrepublic.com/css-reference/css-animatable-properties.php).
* [CSS Referece](https://cssreference.io/).
* [Codrops](https://tympanus.net/codrops/css_reference/).
* [Animatable CSS properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties).
* [Referencias de CSS - MDN](https://developer.mozilla.org/es/docs/Web/CSS/Referencia_CSS).
* [Referencias de CSS - W3Schools](https://www.w3schools.com/cssref/)
