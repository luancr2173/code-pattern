import './style.css'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `

  <div id="card">
    
    <h1>code pattern</h1>

    <p>latitude</p> 
    <input type="number" id="lat" />

    <p>longitude</p> 
    <input type="number" id="lgn" /> 
    <br/>

    <button id="btn">ok</button>
    

  </div>
`;document.querySelector('#btn').addEventListener('click', ()=>{
  const lat = document.querySelector('#lat').value
  const lgn = document.querySelector('#lgn').value
  console.log(`latitude: ${lat}, longitude: ${lgn}`)
})