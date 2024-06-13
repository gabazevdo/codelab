const tenisArray = [
    {
        imagem: './images/jordan-1.png',
        nome: 'Air Jordan 1 Mid Dutch Green',
        descricao: 'Tênis Air Jordan',
        preco: 'R$ 1.199,99'
    },
    {
        imagem: './images/jordan-2.png',
        nome: 'Air Jordan 1 High Zoom CMFT Tropical Twist',
        descricao: 'Tênis Air Jordan',
        preco: 'R$ 1.049,00'
    },
    {
        imagem: './images/jordan-3.png',
        nome: 'Air Jordan 1 Mid Dutch Green',
        descricao: 'Tênis Air Jordan',
        preco: 'R$ 1.350,00'
    },    {
        imagem: './images/jordan-4.png',
        nome: 'Air Jordan 1 Mid GS "Light Smoke Grey"',
        descricao: 'Tênis Air Jordan',
        preco: 'R$ 1.585,00'
    },
    {
        imagem: './images/jordan-5.png',
        nome: 'Air Jordan 1 Mid SE Bright Citrus',
        descricao: 'Tênis Air Jordan',
        preco: 'R$ 949,99'
    },
    {
        imagem: './images/jordan-6.png',
        nome: 'Air Jordan 1 Mid Grey Camo',
        descricao: 'Tênis Air Jordan',
        preco: 'R$ 999,99'
    }
];

function renderTenis(tenis) {
    return `
        <div class="card">
            <div class="img-card">
                <img src="${tenis.imagem}" alt="${tenis.descricao}" />
            </div>
            <div class="nome-tenis">
                <p>${tenis.nome}</p>
                <span>${tenis.descricao}</span>
            </div>
            <div class="preco">${tenis.preco}</div>
        </div>
    `;
}

const container = document.getElementById('tenis-container');
tenisArray.forEach(tenis => {
    container.innerHTML += renderTenis(tenis);
});
