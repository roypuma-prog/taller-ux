const form = document.getElementById('form-notas');
const tituloInput = document.getElementById('titulo-nota');
const contenidoInput = document.getElementById('contenido-nota');
const listaNotas = document.getElementById('lista-notas');
const notificacion = document.getElementById('notificacion');

function mostrarNotificacion(mensaje, tipo) {
  notificacion.textContent = mensaje;
  notificacion.className = 'notificacion ' + tipo;
  setTimeout(() => { notificacion.textContent = ''; }, 3000);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const titulo = tituloInput.value.trim();
  const contenido = contenidoInput.value.trim();

  if (!titulo || !contenido) {
    mostrarNotificacion('Por favor completa todos los campos de la nota.', 'error');
    return;
  }

  const li = document.createElement('li');
  li.className = 'item-nota';
  li.innerHTML = `
    <div>
      <strong>${titulo}</strong>
      <p style="margin:4px 0 0; font-size:14px; color:#52606d;">${contenido}</p>
    </div>
    <button class="btn-eliminar">Eliminar</button>
  `;

  li.querySelector('.btn-eliminar').addEventListener('click', () => {
    if (confirm(`¿Seguro que deseas eliminar la nota "${titulo}"?`)) {
      li.remove();
      mostrarNotificacion('Nota eliminada con éxito.', 'exito');
    }
  });

  listaNotas.appendChild(li);
  mostrarNotificacion('¡Nota agregada con éxito!', 'exito');

  form.reset();
  tituloInput.focus();
});