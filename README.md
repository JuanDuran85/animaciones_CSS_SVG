# CSS Animaciones.
 
## Trigger: 
Cuando se cambia una propiedad CSS, el navegador necesita reaccionar a ese cambio. Por lo tanto, los tipos de cambios son de mayor a menor costo de recursos del CPU. Es decir, el navegador interpreta todos los estados e interpolaciones de las animaciones. Trabajando por etapas, como:

* Layout (geometria y posicion de elementos).
* Paint (pintar los pixeles de los elementos).
* Composite (combina y dibuja las capas en la pantalla).

## Propiedes importantes de CSS para animaciones: 
1. keyframes: determina los puntos claves o paradas donde algo cambia.

Nota importante: Existen propiedes animables y no animables. Como por ejemplo, la propiedad order de flexbox en teoria es animable, pero en la practica no lo es. Al igual que text-aling. En otras palabras, cada vez que el tipo de animacion de una propiedad indique que es como un entero (as integer), no se puede animar por estados. Para mas informacion, visita: [TutorialRepublic](https://www.tutorialrepublic.com/css-reference/css-animatable-properties.php).
