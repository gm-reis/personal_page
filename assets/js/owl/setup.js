$('.owl-carousel').owlCarousel({
    loop:true,      //navegar de forma infinita
    margin:10,      //margem entre um elemento (poster) e outro
    nav:true,       //botões de navegação (setinhas)
    responsive:{
        0:{             //tela muito próxima de 0px, só mostra uma imagem
            items:1
        },
        600:{           //600px ou mais na tela - 3 itens mostrados
            items:3
        },
        1000:{          //1000px ou mais - 5 posters na tela
            items:5
        }
    }
})