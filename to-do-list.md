# To-Do List

# &#x20;Padronização de Coordenadas Geográficas

## 👤 Autor

**Luan Carvalho**

📌 Objetivo do Projeto

Criar uma aplicação para validar e padronizar coordenadas geográficas (latitude e longitude) no formato **graus decimais**.

## ✅ Funcionalidades Implementadas

- ✅ Padronização de coordenadas geográficas no formato graus decimais 

```js
if (lon < -180 || lon > 180) {
    showAlert('❌ Longitude inválida! Deve estar entre -180 e 180.', 'error');
    return;
}
```

- ✅ Alerta para coordenadas que forem inseridas incorretamente

## 🚀 Melhorias Futuras

- Máscara para as coordenadas 

## 🔄 Como Usar

1. Digite um valor de **latitude** (-90 a 90) e **longitude** (-180 a 180).
2. Clique no botão "OK".
3. Veja a mensagem de validação aparecer no topo da tela.
4. Caso insira valores errados, um alerta vermelho será exibido.

## 🛠 Tecnologias Utilizadas

- **HTML, CSS, JavaScript**
- **JSDoc** para documentação do código
- **Git & GitHub** para controle de versão

