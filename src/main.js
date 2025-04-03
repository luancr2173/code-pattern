import './style.css'

document.querySelector('#app').innerHTML = `

  <div id="card">
    
    <h1>corde pattern</h1>

    <p>latitude</p> 
    <input type="number" id="lat" />

    <p>longitude</p> 
    <input type="number" id="lon" /> 
    <br/>

    <button id="btn">ok</button>

    <!-- Div para exibir alertas -->
    <div id="alertbox" class="hidden"></div>

  </div>

`;

/**
 * Adiciona um evento de clique ao botão para validar as coordenadas
 */
document.querySelector('#btn').addEventListener('click', () => {
  /**
   * Obtém os valores dos campos de entrada e os converte para números de ponto flutuante
   * @type {number}
   */
  const lat = parseFloat(document.querySelector('#lat').value);
  
  /** @type {number} */
  const lon = parseFloat(document.querySelector('#lon').value);
  
  /** @type {HTMLElement | null} */
  const alertbox = document.querySelector('#alertbox');

  console.log(`Latitude: ${lat}, Longitude: ${lon}`);

  /**
   * Exibe um alerta estilizado no topo da tela.
   * @param {string} message - Mensagem a ser exibida.
   * @param {string} type - Tipo de alerta (ex: 'success' ou 'error').
   */
  function showAlert(message, type) {
    if (!alertbox) return; // Garante que o elemento existe antes de manipulá-lo
    alertbox.textContent = message;
    alertbox.className = `alert ${type}`;
    setTimeout(() => {
      alertbox.className = 'hidden';
    }, 3000);
  }

  // Validação de entrada: verifica se os valores são números válidos
  if (isNaN(lat) || isNaN(lon)) {
    showAlert('Latitude ou longitude inválida!', 'error');
    return;
  }

  // Validação de latitude: deve estar entre -90 e 90
  if (lat < -90 || lat > 90) {
    showAlert('Latitude inválida! Deve estar entre -90 e 90.', 'error');
    return;
  }

  // Validação de longitude: deve estar entre -180 e 180
  if (lon < -180 || lon > 180) {
    showAlert('❌ Longitude inválida! Deve estar entre -180 e 180.', 'error');
    return;
  }

  // Se todas as validações passarem, exibe um alerta de sucesso
  showAlert('✅ Latitude e longitude válidas!', 'success');
});
