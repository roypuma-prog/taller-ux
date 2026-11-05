# taller-ux
Formulario de inscripcion redisenado con principios de UX/UI
# Laboratorio 11: Fundamentos de UX/UI — Taller UX

Este repositorio contiene la auditoría heurística y el rediseño accesible del formulario de inscripción para participantes del taller.

---

## 📋 Ejercicio 2: Auditoría Heurística de la Interfaz Original (Jakob Nielsen)

A continuación se detallan los problemas de usabilidad identificados en la interfaz inicial, categorizados según las heurísticas de Nielsen y su nivel de gravedad.

| Heurística | Problema Detectado | Gravedad | Justificación / Explicación UX |
| :--- | :--- | :--- | :--- |
| **Visibilidad del estado del sistema** | Al pulsar el botón «ok», no aparece ningún mensaje de confirmación ni indicador de proceso. | **Alta** | No existe retroalimentación (*feedback*) tras realizar la acción. El usuario desconoce si la solicitud fue enviada o procesada con éxito. |
| **Coincidencia con el mundo real** | El botón de envío usa el texto ambiguo «ok». Además, se usan `placeholder` que desaparecen al escribir en lugar de etiquetas claras. | **Media** | No se utiliza un lenguaje estándar de formularios (*Call to Action* descriptivo como "Registrarse"). Carece de etiquetas explicativas (`<label>`). |
| **Control y libertad del usuario** | El enlace de «BORRAR TODO» elimina todos los campos al instante sin solicitar confirmación. | **Alta** | Es una acción destructiva e irreversible muy prominente que puede causar la pérdida accidental de datos ingresados por el usuario sin opción a deshacer. |
| **Prevención de errores** | Permite pulsar «ok» dejando campos vacíos o con formatos inválidos (ej. un correo sin `@`). | **Alta** | La interfaz carece de validación de campos obligatorios e ingreso de formato en tiempo real antes de procesar los datos. |
| **Reconocer, no recordar** | Al utilizar solo `placeholder`, la pista desaparece apenas se empieza a escribir. Tampoco hay indicador visual al navegar con `Tab`. | **Media** | Incrementa la carga cognitiva obligando a recordar qué campo se está llenando y dificulta la navegación por teclado al eliminar el contorno de foco (`outline: none`). |

---

### 💡 Criterios de Gravedad Aplicados
* **Alta:** Impide completar la tarea correctamente o causa la pérdida irreversible de información.
* **Media:** Vuelve la experiencia confusa, lenta o requiere un esfuerzo cognitivo innecesario.
* **Baja:** Detalle estético o de diseño menor que no bloquea la interacción.   
### 📋 Ejercicio 2: Auditoría Heurística de la Interfaz Original

| Heurística / Criterio | Problema Encontrado | Gravedad |
| :--- | :--- | :--- |
| **Visibilidad del estado** | Al pulsar el botón «ok», no aparece ningún mensaje ni indicador de confirmación: el usuario desconoce si el registro fue procesado o falló. | **Alta** |
| **Coincidencia con el mundo real** | El botón tiene el texto ambiguo «ok» en lugar de un término claro. Además, no se usan etiquetas `<label>` y los `placeholder` desaparecen al escribir. | **Media** |
| **Control y libertad** | El enlace de «BORRAR TODO» elimina todos los datos al instante sin pedir confirmación previa ni ofrecer la posibilidad de deshacer. | **Alta** |
| **Prevención de errores** | Permite hacer clic en «ok» dejando campos obligatorios vacíos o ingresando un formato de correo inválido (ej. `correo-sin-arroba`). | **Alta** |
| **Reconocer, no recordar** | Al no tener `<label>`, la pista desaparece cuando comienzas a escribir, obligando a recordar qué información solicitaba la caja de texto. | **Media** |
| **Accesibilidad** | Los campos no tienen un indicador visual de foco (`outline: none`), lo que hace imposible saber dónde estás ubicado al navegar con la tecla `Tab`. | **Alta** |
| **Principios visuales** | El texto tiene poco contraste (gris claro `#b5b5b5` sobre fondo blanco), la fuente es diminuta (11px/12px) y el enlace «BORRAR TODO» es rojo y gigante, generando una jerarquía visual invertida. | **Media** |
### 📋 Ejercicio 3: Justificación de Cambios en la Estructura HTML

| Cambio | Principio | Por qué ayuda |
| :--- | :--- | :--- |
| **`<label>` en lugar de `placeholder`** | Reconocer, no recordar | La etiqueta no desaparece al escribir; la persona no tiene que recordar qué iba en cada campo. |
| **«Inscribirme» en lugar de «ok» y un título que habla de tú** | Coincidencia con el mundo real | Se usa el lenguaje de quien se inscribe, no el del sistema («procesar la solicitud»). |
| **`<optgroup>` con 3 categorías** | Ley de Hick | Más opciones a la vez significan más tiempo para decidir. Agrupadas, primero eliges la categoría y después el taller. |
| **Dos `<fieldset>` numerados** | Ley de Miller | Recordamos unos 7 elementos a la vez. Dividir el formulario en bloques cortos reduce la carga de memoria. |
| **`type="email"`, `required` y ejemplo de formato** | Prevención de errores | El navegador ya sabe qué es un correo válido y la persona ve el formato esperado antes de escribir. |
| **`alt` en la imagen** | Accesibilidad | Un lector de pantalla lee el texto alternativo a quien no puede ver la imagen. |
### 📋 Ejercicio 5: Justificación del CSS y Accesibilidad Visual

| Propiedad / Estilo | Principio Aplicado | Explicación / Impacto UX |
| :--- | :--- | :--- |
| **`min-height: 44px`** | Ley de Fitts | Garantiza una superficie táctil amplia para pulsar fácilmente con el dedo o mouse sin fallar. |
| **`:focus-visible` amarillo** | Accesibilidad (WCAG) | Muestra un contorno claro cuando se navega con la tecla `Tab`, permitiendo saber qué elemento tiene el foco. |
| **`--color-primario: #0b5cad`** | Contraste de Color | Cumple con la relación de contraste mínima de 4.5:1 para ser leído sin cansancio visual. |
| **`flex: 1` en `.boton-principal`** | Jerarquía Visual | Hace que el botón de envío sea visualmente más grande que el secundario de limpieza. |