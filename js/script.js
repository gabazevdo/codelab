import desafios from './desafios.js';

export function toggleTheme() {
  // Alterna a classe 'light' no elemento <html>
  document.documentElement.classList.toggle("light");

  // Seleciona o elemento de logo no cabeçalho
  const logo = document.querySelector("#container img");
  const logoFotter = document.querySelector("footer img");

  // Verifica se o elemento logo existe
  if (logo && logoFotter) {
    // Altera o atributo 'src' do logo dependendo do tema
    if (document.documentElement.classList.contains("light")) {
      logo.setAttribute("src", "./images/logoCodelab_black.svg");
      logoFotter.setAttribute("src", "./images/logo_black.svg")
      } else {
        logo.setAttribute("src", "./images/logoCodelab_white.svg");
        logoFotter.setAttribute("src", "./images/logo_white.svg")
    }
  }
}


// Função para criar e renderizar os cards usando template literals
function renderCards() {
  const boxCard = document.getElementById('box-card');

  desafios.forEach(desafio => {
    const card = document.createElement('div');
    card.className = 'card';
    if (desafio.inProgress) {
      card.classList.add('in-progress'); // Adicione a classe 'in-progress' se for o card "in-progress"
    }

    if (!desafio.inProgress) { // Se não for o card "in-progress", crie o conteúdo normal do card
      card.innerHTML = `
        <div class="box-imagem-desafio">
          <img src="${desafio.imgSrc}" alt="${desafio.imgAlt}" />
        </div>
        <div class="box-titulo-desafio"><h3>${desafio.title}</h3> <h3>#${desafio.numero} </h3></div>
        <div class="box-link-desafios">
          ${desafio.links.map(link => `
            <a href="${link.href}" target="_blank" rel="noopener noreferrer">
              <ion-icon name="${link.iconName}"></ion-icon>
              ${link.text}
            </a>
          `).join('')}
        </div>
      `;
    } else { // Se for o card "in-progress", crie seu conteúdo específico
      card.innerHTML = `
        <div class="in-progress">
          <ion-icon name="eye-off-outline"></ion-icon>
          <p>${desafio.title}</p>
        </div>
      `;
    }

    boxCard.appendChild(card);
  });
}

// Chama a função para renderizar os cards na inicialização da página
document.addEventListener('DOMContentLoaded', renderCards);


