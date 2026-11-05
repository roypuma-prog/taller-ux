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