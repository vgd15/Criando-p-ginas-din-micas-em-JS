const listaDeTeclas = document.querySelectorAll('.tecla')


/*

const audio =  new Audio('./sounds/keya.wav')
const audio2 = new Audio('./sounds/keyc.wav')
const audio3 = new Audio('./sounds/keyd.wav')


listaDeTeclas.forEach((tecla, index) => {
    tecla.addEventListener('click', () => {

     if(tecla.classList.contains("tecla_pom")){
        audio.play()
     }
    })

})

for (let i = 0; i < listaDeTeclas.length; i++) {
    listaDeTeclas[i].addEventListener('click', () => {
        if (listaDeTeclas[i].classList.contains("tecla_clap")) {
            audio2.play();
        }
    });
}
*/

function tocaSom(idElementAudio){
    document.querySelector(idElementAudio).play();
}

let contador = 0;

// enquanto
while (contador < listaDeTeclas.length) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    // Template string 
    const idAudio = `#som_${instrumento}`;

    // console.log(idAudio); 
        
    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) { //tecla pressionada

        console.log(evento.code)                  

        if(evento.code === 'Space' || evento.code === 'Enter' ){
            tecla.classList.add('active');
        }
        
    }

    tecla.onkeyup = function (evento) { //tecla soltada 
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.remove('active');
        }
    }


    contador = contador + 1;

}

















