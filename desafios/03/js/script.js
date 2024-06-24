const container = document.getElementById('card-section');


const postsArray = [

    {
        image: './images/image-2.png',
        alt:'imagem de um computador acessando o software sobre o tema da reportagem',
        title: 'Python: por que a linguagem é tão usada para Data Science e finanças?',
        content: "O mundo da programação conta com algumas opções de linguagem para..."
    },
    {
        image: './images/image-3.png',
        alt:'imagem de um computador acessando o software sobre o tema da reportagem',
        title: 'GitHub tem receita de US$ 1 bilhão e 90 milhões de usuários',
        content: "O popular serviço de repositório de código GitHub foi adquirido pela...t"
    },    {
        image: './images/image-4.png',
        alt:'imagem de um computador acessando o software sobre o tema da reportagem',
        title: '15 comandos no GIT que os desenvolvedores precisam saber',
        content: "Dominar os comandos GIT é uma habilidade que se conquista com..."
    },
    {
        image: './images/image-5.png',
        alt:'imagem de um computador acessando o software sobre o tema da reportagem',
        title: 'GIT e GitHub: o que são e quais as diferenças entre eles?',
        content: "Git e GibHub são dois softwares de controle de versão essenciais para..."
    },
    {
        image: './images/image-6.png',
        alt:'imagem de um computador acessando o software sobre o tema da reportagem',
        title: 'GitHub Copilot ganha integração com GPT-4 e interface conversacional',
        content: "O GitHub Copilot, ferramenta de desenvolvimento baseada em IA..."
    }
];


function renderPostsBlog(post){
    return`
    <div class="card">
     <div class="image-card">
      <img src="${post.image}" alt="${post.alt}" loading="lazy"/>
     </div>
    <div class="content-card">
      <h3>${post.title}</h3>
      <p>${post.content}</p>
    </div>    
    `
}

postsArray.forEach(post =>{
    container.innerHTML += renderPostsBlog(post)
})