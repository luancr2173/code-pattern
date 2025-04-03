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
    

  </div>

`; document.querySelector('#btn').addEventListener('click', () => {
  const lat = parseFloat(document.querySelector('#lat').value);
  const lon = parseFloat(document.querySelector('#lon').value);
  const alertbox = document.querySelector('#alertbox');

  console.log(`latitude: ${lat}, longitude: ${lon}`)

  function showAlert (message, type){
    alertbox.textContent = message;
    alertbox.className = `alert ${type}`;
    setTimeout(() => {
      alertbox.className = 'hidden';
    }, 4000);
  }

  if (isNaN(lat) || isNaN(lon)){
    showAlert('❌latitude ou longitude inválida');
  }

  if(lat<=-90 || lat>=90){
    showAlert('❌latitude inválida');
    console.log('latitude inválida');
  }

  if(lon<=-180 || lon>=180){
    showAlert('❌longitude inválida');
    console.log('longitude inválida');
  }

})
