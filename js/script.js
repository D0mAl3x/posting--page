// Seletores da entrada de dados:
const txtTituloPost = document.getElementById('titulo-post');
const txtConteudoPost = document.getElementById("conteudo-post");
const formularioBlog = document.getElementById('frm-blog');

// Seletores da saída de dados:
const divSaidaDados = document.getElementById('saida-dados');
const renderizadorTitulo = document.getElementById('titulo-renderizar');
const renderizadorConteudo = document.getElementById('conteudo-renderizar');

// Evento criado no "document" para adicionar a classe ".hide", ocultando  saída de dados
document.addEventListener('DOMContentLoaded', (e) => {
    divSaidaDados.classList.add('hide');
})

formularioBlog.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = {
        title: txtTituloPost.value,
        body: txtConteudoPost.value,
        userId: 11
    };

    divSaidaDados.classList.remove('hide');

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(post => {
            // Renderizando o retorno
            renderizadorTitulo.innerHTML = post.title;
            renderizadorConteudo.innerHTML = post.body;
        })
        .catch(error => {
            console.error('Erro ao enviar post:', error);
            renderizadorTitulo.innerHTML = 'Erro';
            renderizadorConteudo.innerHTML = 'Não foi possível postar.';
        });
});
