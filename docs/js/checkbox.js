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

function baixarPDF() {
  const { jsPDF } = window.jspdf;

  const doc = new jsPDF();

  const checkboxes = document.querySelectorAll("#checklist input[type=checkbox]");
  const itens = document.querySelectorAll("#checklist li");

  const hoje = new Date();
  const dataFormatada = hoje.toLocaleDateString("pt-BR") + " " + hoje.toLocaleTimeString("pt-BR");

  doc.setFontSize(16);
  doc.text("Checklist de Instalação", 10, 15);

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

  const nomeArquivo = `checklist-instalacao-${hoje.toISOString().slice(0,10)}.pdf`;

  doc.save(nomeArquivo);

  // 🔄 Resetar checklist
  checkboxes.forEach((checkbox, index) => {
    checkbox.checked = false;
    localStorage.setItem("checkbox-" + index, false);
  });
}