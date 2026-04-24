<div id="checklist">

<ul>
  <li>
    <span>Qual será o cenario principal?</span>
    <select id="cenario" onchange="atualizarPerguntas()">
      <option>Entrega/delivery</option>
      <option>Limpeza</option>
      <option>Logistica</option>
    </select>
  </li>
  <div id="perguntas-dinamicas"></div>
</ul>
</div>

<button onclick="gerarAnaliseModelo()" style="
  background-color: #2e7d32;
  color: white;
  border: none;
  padding: 10px 16px;
  font-size: 14px;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 10px;
">
  🤖 Análise de Modelo
</button>

<div id="resultado-analise" style="margin-top:20px;"></div>

</div>