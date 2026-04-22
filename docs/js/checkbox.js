document.addEventListener("DOMContentLoaded", function () {
  const checkboxes = document.querySelectorAll("input[type=checkbox]");

  checkboxes.forEach((checkbox, index) => {
    const id = "checkbox-" + index;

    checkbox.checked = localStorage.getItem(id) === "true";

    checkbox.addEventListener("change", () => {
      localStorage.setItem(id, checkbox.checked);
    });
  });
});

function baixarPDF(tipo) {
  const { jsPDF } = window.jspdf;

  const doc = new jsPDF();

  const checkboxes = document.querySelectorAll("#checklist input[type=checkbox]");
  const itens = document.querySelectorAll("#checklist li");

  const hoje = new Date();
  const dataFormatada = hoje.toLocaleDateString("pt-BR") + " " + hoje.toLocaleTimeString("pt-BR");

  doc.setFontSize(16);
  doc.text("Checklist de "+ tipo, 10, 15);

  doc.setFontSize(10);
  doc.text(`Data: ${dataFormatada}`, 10, 22);

  let y = 30;
  doc.setFontSize(12);

  itens.forEach((item, index) => {
  const texto = item.querySelector("span").textContent;

  const marcado = checkboxes[index].checked ? "X" : " ";

  const linha = `[${marcado}] ${texto}`;

  doc.text(linha, 10, y, { encoding: "WinAnsiEncoding" });

  y += 8;
});

  const nomeArquivo = `checklist-${hoje.toISOString().slice(0,10)}.pdf`;

  doc.save(nomeArquivo);

  // 🔄 Resetar checklist
  checkboxes.forEach((checkbox, index) => {
    checkbox.checked = false;
    localStorage.setItem("checkbox-" + index, false);
  });
}

function gerarPDFComercial(tipo) {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const itens = document.querySelectorAll("#checklist li");

  const hoje = new Date();
  const dataFormatada = hoje.toLocaleDateString("pt-BR") + " " + hoje.toLocaleTimeString("pt-BR");

  // Título
  doc.setFontSize(16);
  doc.text(`Checklist de ${tipo}`, 10, 15);

  // Data
  doc.setFontSize(10);
  doc.text(`Data: ${dataFormatada}`, 10, 22);

  let y = 30;
  doc.setFontSize(12);

  itens.forEach((item) => {
    const textoSpan = item.querySelector("span");
    const inputTexto = item.querySelector("input[type=text]");
    const select = item.querySelector("select");

    let campo = textoSpan ? textoSpan.textContent.trim() : "";
    let valor = "";

    // pega valor do input
    if (inputTexto && inputTexto.value) {
      valor = inputTexto.value;
    }

    // pega valor do select (sobrescreve se existir)
    if (select) {
      valor = select.options[select.selectedIndex].text;
    }

    // só adiciona no PDF se tiver algo relevante
    if (campo && valor) {
      const linha = `${campo}: ${valor}`;
      doc.text(linha, 10, y);
      y += 8;
    }

    // quebra de página
    if (y > 280) {
      doc.addPage();
      y = 20;
    }
  });

  const nomeArquivo = `checklist-${hoje.toISOString().slice(0,10)}.pdf`;
  doc.save(nomeArquivo);
}