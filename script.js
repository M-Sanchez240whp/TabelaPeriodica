const tabela = document.getElementById("tabela");

// criar tabela vazia
for (let linha = 1; linha <= 10; linha++) {

  const tr = document.createElement("tr");

  for (let coluna = 1; coluna <= 18; coluna++) {

    const td = document.createElement("td");

    tr.appendChild(td);

  }

  tabela.appendChild(tr);

}

// colocar elementos usando seus dados

colecaoElementos.forEach(e => {

  const tr = tabela.rows[e.linha - 1];

  const td = tr.cells[e.coluna - 1];

  td.innerHTML = `
<span class="simbolo"><strong>${e.simbolo}</strong></span><br>
<span class="massaAtomica">${e.massaAtomica}</span>
  `;

  td.style.backgroundColor = e.corGrupo;

});


addEventListener("mouseover", (event) => {

  if (event.target.tagName === "TD" && event.target.innerHTML !== "") {

    const simbolo = event.target.querySelector("strong").textContent;
    const elemento = colecaoElementos.find(el => el.simbolo === simbolo);

    if (elemento) {
      const tooltip = document.createElement("div");
      tooltip.className = "tooltip";
      tooltip.style.padding = "10px"
      tooltip.style.minWidth = "200px"
      tooltip.style.textAlign = "center"
      tooltip.style.backgroundColor = "#1C1C1C";
      tooltip.style.color = "#DEDEDE";
      tooltip.innerHTML = `
      <div><strong>Nome:</strong> ${elemento.nome}<div>
        <div><strong>Número Atômico:</strong> ${elemento.numeroAtomico}</div>
          <div><strong>Massa Atômica:</strong> ${elemento.massaAtomica}</div>
          <div><strong>Grupo:</strong> ${elemento.grupo}</div>
        <div><strong>Descoberta:</strong> ${elemento.anoDeDescoberta}</div>
      `;
      document.body.appendChild(tooltip);

      const rect = event.target.getBoundingClientRect();
      tooltip.style.left = `${rect.right + 5}px`;
      tooltip.style.top = `${rect.top}px`;
    }
  }
});

addEventListener("mouseout", (event) => {

  if (event.target.tagName === "TD") {
    const tooltip = document.querySelector(".tooltip");
    if (tooltip) {
      tooltip.remove();
    }
  }
});