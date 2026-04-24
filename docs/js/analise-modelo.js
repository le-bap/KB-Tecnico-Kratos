    function gerarAnaliseModelo() {
    const itens = document.querySelectorAll("#checklist li");

    let dados = {};

    itens.forEach(item => {
    const label = item.querySelector("span")?.textContent.trim();
    const input = item.querySelector("input");
    const select = item.querySelector("select");

    if (input) dados[label] = input.value;
    if (select) dados[label] = select.value;
    });

    // 🔽 normalização básica
    const cenario = dados["Qual será o cenario principal?"];
    const tamanho = parseFloat(dados["Tamanho do local"]) || 0;
    const mesas = parseInt(dados["Número de mesas"]) || 0;
    const espacamento = parseFloat(dados["Menor espaçamento entre as mesas"]) || 0;
    const publicidade = dados["Publicidade é uma requisição obrigatória?"];
    const conexao = dados["Permissão para conexão Wi-FI"];
    const automaticCharge = dados["Espaço livre para charging pile (mín 0.5m lateralmente e 1.5m frontalmente)"];

    let recomendados = [];
    let justificativa = [];

    // 🔽 regras principais
    if (cenario === "Limpeza") {
    recomendados = ["C40"];
    justificativa.push("Cenário de limpeza utiliza o modelo C40.");

    if (tamanho > 500) {
        justificativa.push("Espaço grande → recomendado mais de um C40.");
    }
    }

    if (cenario === "Entrega/delivery") {
    recomendados = ["T8", "T9", "T10", "T11"];
    justificativa.push("Entrega permite modelos T8, T9, T10 e T11.");

    if (tamanho > 500 && mesas > 40) {
        justificativa.push("Espaço grande + muitas mesas → recomendado mais de 1 robô.");
    }
    }

    if (cenario === "Logistica") {
    const tipoCarga = dados["Tipo de carga"];

    if (tipoCarga === "Pesada") {
        recomendados = ["S100"];
        justificativa.push("Carga pesada → S100 suporta até 100kg.");
    } else {
        recomendados = ["T9"];
        justificativa.push("Carga leve/média → T9 é mais ágil e possui prateleiras.");
    }

    if (tamanho > 500) {
        justificativa.push("Espaço grande → considerar mais de um robô.");
    }
    }

    // 🔽 filtros por espaço pequeno
    if (cenario === "Entrega/delivery" && (tamanho < 150 || espacamento < 1)) {
    recomendados = recomendados.filter(r => ["T8", "T11"].includes(r));
    justificativa.push("Espaço reduzido → preferência por T8 e T11.");
    }

    // 🔽 publicidade
    if (cenario === "Entrega/delivery" && publicidade === "Sim") {
    recomendados = recomendados.filter(r => ["T10", "T11"].includes(r));
    justificativa.push("Publicidade necessária → modelos com tela (T10, T11).");

    if (tamanho > 300 && espacamento > 1.2) {
        recomendados = ["T10"];
        justificativa.push("Espaço grande + boa circulação → T10 é o mais indicado.");
    }
    }

    // 🔽 filtro por conexao
    if (conexao === "Sim") {
        justificativa.push("Haverá possibilidade de monitorar o robô no dia a dia");
    }
    else {
        justificativa.push("Não haverá possibilidade de monitorar o robô no dia a dia");
    }

    // 🔽 analise charging pile
    if (automaticCharge === "Sim") {
        justificativa.push("Haverá possibilidade de carregamento automático");
    }
    else {
        justificativa.push("Robô deve ser carregado manualmente");
    }

    // 🔽 fallback (evita lista vazia)
    if (recomendados.length === 0) {
    recomendados = ["T8"];
    justificativa.push("Nenhuma condição específica → fallback para T8.");
    }

    // 🔽 gerar tabela
    const container = document.getElementById("resultado-analise");

    container.innerHTML = `
    <h3>Resultado da Análise</h3>

    <table style="border-collapse: collapse; width: 100%;">
        <tr style="background:#1976d2; color:white;">
        <th style="padding:8px; border:1px solid #ccc;">Modelos Recomendados</th>
        </tr>
        ${recomendados.map(m => `
        <tr>
            <td style="padding:8px; border:1px solid #ccc;">${m}</td>
        </tr>
        `).join("")}
    </table>

    <h4 style="margin-top:15px;">Justificativa e análise </h4>
    <ul>
        ${justificativa.map(j => `<li>${j}</li>`).join("")}
    </ul>
    `;
    }

    function atualizarPerguntas() {
    const cenario = document.getElementById("cenario").value;
    const container = document.getElementById("perguntas-dinamicas");

    if (cenario === "Entrega/delivery") {
    container.innerHTML = `
        <ul>
        <li>
            <span>Tamanho do local</span>
            <input type="text" placeholder="Ex: 200 m²">
        </li>

        <li>
            <span>Menor espaçamento entre as mesas</span>
            <input type="text" placeholder="Ex: 1.5 m">
        </li>

        <li>
            <span>Pé direito</span>
            <input type="text" placeholder="Ex: 3 m">
        </li>

        <li>
            <span>Número de mesas</span>
            <input type="text" placeholder="Ex: 25">
        </li>

        <li>
            <span>Publicidade é uma requisição obrigatória?</span>
            <select>
            <option>Sim</option>
            <option>Não</option>
            </select>
        </li>

        <li>
        <span>Permissão para conexão Wi-FI</span>
        <select>
            <option>Sim</option>
            <option>Não</option>
        </select>
        </li>

        <li>
        <span>Espaço livre para charging pile (mín 0.5m lateralmente e 1.5m frontalmente)</span>
        <select>
            <option>Sim</option>
            <option>Não</option>
        </select>
        </li>

        <button onclick="gerarPDFComercial('Análise Comercial')" 
        style=" background-color: #1976d2; color: white; border: none; padding: 10px 16px; 
        font-size: 14px; border-radius: 6px; cursor: pointer; margin-top: 15px; 
        transition: background-color 0.3s ease; "> 📄 Baixar PDF </button>
    `;
    }

    if (cenario === "Limpeza") {
    container.innerHTML = `
        <ul>
        <li>
            <span>Tamanho do local</span>
            <input type="text" placeholder="Ex: 200 m²">
        </li>

        <li>
            <span>Tipo de chão</span>
            <select>
            <option>Porcelanato</option>
            <option>Madeira</option>
            <option>Concreto</option>
            <option>Outro</option>
            </select>
        </li>

        <li>
            <span>Permissão para conexão Wi-FI</span>
            <select>
                <option>Sim</option>
                <option>Não</option>
            </select>
        </li>

        <li>
            <span>Espaço livre para charging pile (mín 0.5m lateralmente e 1.5m frontalmente)</span>
            <select>
                <option>Sim</option>
                <option>Não</option>
            </select>
        </li>
        </ul>

        <button onclick="gerarPDFComercial('Análise Comercial')" 
        style=" background-color: #1976d2; color: white; border: none; padding: 10px 16px; 
        font-size: 14px; border-radius: 6px; cursor: pointer; margin-top: 15px; 
        transition: background-color 0.3s ease; "> 📄 Baixar PDF </button>
    `;
    }

    if (cenario === "Logistica") {
    container.innerHTML = `
        <ul>
        <li>
            <span>Tamanho do local</span>
            <input type="text" placeholder="Ex: 500 m²">
        </li>

        <li>
            <span>Tipo de carga</span>
            <select>
            <option>Leve</option>
            <option>Média</option>
            <option>Pesada</option>
            </select>
        </li>

        <li>
        <span>Permissão para conexão Wi-FI</span>
        <select>
            <option>Sim</option>
            <option>Não</option>
        </select>
        </li>

        <li>
        <span>Espaço livre para charging pile (mín 0.5m lateralmente e 1.5m frontalmente)</span>
        <select>
            <option>Sim</option>
            <option>Não</option>
        </select>
        </li>
        </ul>


        <button onclick="gerarPDFComercial('Análise Comercial')" 
        style=" background-color: #1976d2; color: white; border: none; padding: 10px 16px; 
        font-size: 14px; border-radius: 6px; cursor: pointer; margin-top: 15px; 
        transition: background-color 0.3s ease; "> 📄 Baixar PDF </button>
    `;
    }
    }

    document.addEventListener("DOMContentLoaded", () => {
    atualizarPerguntas();
    });