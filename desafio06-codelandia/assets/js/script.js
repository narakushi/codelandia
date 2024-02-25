let stars = document.querySelectorAll('.star-icon');

document.addEventListener('click', function(e){
    let classStar = e.target.classList; /**ao realizar o click pego a lista de classes do elemento que foi clicado*/
    if(!classStar.contains('ativo')){ /**verifico se na lista de classes não há a classe ativo */
        stars.forEach(function(star){ /*se não houver eu removo a classe de todos para realocá-la*/
            star.classList.remove('ativo');
        });

        classStar.add('ativo'); /**adiciono a classe ativo ao elemento clicado */
    }
});