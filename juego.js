let juego = false;

let puntuacion = 0;
let difficulty;

// Elementos
const clase1 = document.getElementById("clase1");
const clase2 = document.getElementById("clase2");
const clase3 = document.getElementById("clase3");
const bomb = document.getElementById("bomb");
const bomb2 = document.getElementById("bomb2");
const botonIniciar = document.getElementById("empezar");
const volver = document.getElementById("volver");
const contador = document.getElementById("contador");
const estudiante = document.getElementById("estudiante");
// dificultades
const botonDifFacil = document.getElementById("difBaja");
const botonDifMedia = document.getElementById("difMedia");
const botonDifDificil = document.getElementById("difDificil");
const botonDifMuyDificil = document.getElementById("difMuyDificil");
const botonDifInfierno = document.getElementById("difInfierno");

const imagenesProgramacion = [
    "url('img/php.png')", 
    "url('img/javascript.png')", 
    "url('img/cplus.png')", 
    "url('img/css.png')", 
    "url('img/html.png')", 
    "url('img/java.png')", 
    "url('img/bash.png')"
];

const imagenesMarketing = [

];

const IMAGENES = [...imagenesProgramacion, ...imagenesMarketing];

// variables movimineto teclado 
let teclaApretadas = [];

//velociddades en las que se mueven los divs
const velocitat = 25;


document.addEventListener("keydown", function ({key}){
    teclaApretadas[key] = true;
});
document.addEventListener("keyup", function ({key}) {
    teclaApretadas[key] = false;
});

const onArrowUp = () => {
    const posicionTopEstudiante = parseInt(window.getComputedStyle(estudiante).getPropertyValue("top"));
    console.log(posicionTopEstudiante);
    if (posicionTopEstudiante >=1) {
        if (posicionTopEstudiante <= 55) {
            estudiante.style.top = 20 + 'px';
        } else{
            const posicionNueva = posicionTopEstudiante - velocitat;
            estudiante.style.top = posicionNueva + 'px';
        }
    }
}

const onArrowDown = () => {
    const posicionTopEstudiante = parseInt(window.getComputedStyle(estudiante).getPropertyValue("top"));
    console.log(posicionTopEstudiante);
    if (posicionTopEstudiante <= 405) {
        if (posicionTopEstudiante < 55) {
            estudiante.style.top = 55 + 'px';
        } else {
            const posicionNueva = posicionTopEstudiante + velocitat;
            estudiante.style.top = posicionNueva + 'px';
        }
    }
}

const onArrowRight = () => {
    const posicionestudiante = parseInt(window.getComputedStyle(estudiante).getPropertyValue("left"));
    console.log(posicionestudiante);
    if (posicionestudiante < 720) {
        if (posicionestudiante > 690) {
            estudiante.style.left = 708 + 'px';
        } else {
            const posicionNueva = posicionestudiante + velocitat;
            estudiante.style.left = posicionNueva + 'px';
        }
    }
}

const onArrowLeft = () => {
    const posicionestudiante = parseInt(window.getComputedStyle(estudiante).getPropertyValue("left"));
    console.log(posicionestudiante);
    if (posicionestudiante >= 22) {
        if (posicionestudiante >= 700) {
            estudiante.style.left = 695 + 'px';
        } else {
            const posicionNueva = posicionestudiante - velocitat;
            estudiante.style.left = posicionNueva + 'px';
        }
    }
}

setInterval(function () {
    if (juego) { 
        if (teclaApretadas["ArrowUp"] === true) {
            onArrowUp()
        };
        if (teclaApretadas["ArrowDown"] === true) {
            onArrowDown();
        };
        if (teclaApretadas["ArrowRight"] === true) {
            onArrowRight();
        };
        if (teclaApretadas["ArrowLeft"] === true) {
            onArrowLeft();
        }
    }
}, 100);


setInterval(function () { // funcio per a que els productes caiguin en un interval de temps 
    if (juego) {//condicion para que se pare el juego 
        const clase1top = parseInt(window.getComputedStyle(clase1).getPropertyValue("top"));
        const clase2top = parseInt(window.getComputedStyle(clase2).getPropertyValue("top"));
        const clase3top = parseInt(window.getComputedStyle(clase3).getPropertyValue("top"));
        const bombtop = parseInt(window.getComputedStyle(bomb).getPropertyValue("top"));
        const bomb2top = parseInt(window.getComputedStyle(bomb2).getPropertyValue("top"));
        let posiciontopnueva1;
        let posiciontopnueva2;
        let posiciontopnueva3;
        let posiciontopbomb;
        let posiciontopbomb2;
        let move;

        if (clase1top < 450) {
            posiciontopnueva1 = clase1top + randomSpeed();
            clase1.style.top = posiciontopnueva1 + 'px';

        } else if (clase1top >= 450) {
            clase1.style.top = '0px';
            move = getRandomNumber();
            clase1.style.left = move + 'px';
            clase1.style.backgroundImage = getRandomImage();//recoremos la funcion para cambio de imagenes 
        }
        if (clase2top < 450) {
            posiciontopnueva2 = clase2top + randomSpeed();
            clase2.style.top = posiciontopnueva2 + 'px';

        } else if (clase2top >= 450) {
            clase2.style.top = '0px';
            move = getRandomNumber();
            clase2.style.left = move + 'px';
            clase2.style.backgroundImage = getRandomImage();//recoremos la funcion para cambio de imagenes 
        }
        if (clase3top < 450) {
            posiciontopnueva3 = clase3top + randomSpeed();
            clase3.style.top = posiciontopnueva3 + 'px';
        } else if (clase3top >= 450) {
            clase3.style.top = '0px';
            move = getRandomNumber();
            clase3.style.left = move + 'px';
            clase3.style.left = getRandomNumber() + 'px';
            clase3.style.backgroundImage = getRandomImage();//recoremos la funcion para cambio de imagenes 
        }

        if (bombtop < 450) {
            posiciontopbomb = bombtop + randomSpeed();
            bomb.style.top = posiciontopbomb + 'px';
        } else if (bombtop >= 450) {
            bomb.style.top = '0px';
            move = getRandomNumber();
            bomb.style.left = move  + 'px';
        }
        if (bomb2top < 450) {
            posiciontopbomb2 = bomb2top + randomSpeed();
            bomb2.style.top = posiciontopbomb2 + 'px';
        } else if (bomb2top >= 450) {
            bomb2.style.top = '0px';
            move = getRandomNumber();
            bomb2.style.left = move + 'px';
        }
    }
}, 50);

function randomSpeed() {
    if (difficulty === 1) {
        min = 5;
        max = 10;
    } else if (difficulty === 2) {
        min = 8;
        max = 15;
    } else if (difficulty === 3) {
        min = 15;
        max = 20;
    } else if (difficulty === 4) {
        min = 20;
        max = 25;
    } else if (difficulty === 5) {
        min = 25;
        max = 50;
    }
    let randomSpeed = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomSpeed;
}

function getRandomNumber() { // funcio per que els productes es moguin aleatoriament
    const min = 100;
    const max = 600;
    return Math.floor(Math.random() * max) + min;
}

function getRandomImage() {// funcio per imatges aleatorias 
    const numAleatorioImg = Math.floor(Math.random() * IMAGENES.length);
    return IMAGENES[numAleatorioImg];
/*     const numAleatorioImg = Math.floor(Math.random() * 7);

    switch (numAleatorioImg) {
        case 0: var imagen = "url('img/php.png')";
            break;
        case 1: var imagen = "url('img/javascript.png')";
            break;
        case 2: var imagen = "url('img/cplus.png')";
            break;
        case 3: var imagen = "url('img/css.png')";
            break;
        case 4: var imagen = "url('img/html.png')";
            break;
        case 5: var imagen = "url('img/java.png')";
            break;
        case 6: var imagen = "url('img/bash.png')";
            break;
    }
    return imagen; */
}

setInterval(function deteccioncolision() { // deteccion de los productos con la estudiante 
    const estudiantew = estudiante.offsetWidth;
    const estudianteh = estudiante.offsetHeight;
    const estudiantex = estudiante.offsetLeft;
    const estudiantey = estudiante.offsetTop;

    const clase1w = clase1.offsetWidth;
    const clase1h = clase1.offsetHeight;
    const clase1x = clase1.offsetLeft;
    const clase1y = clase1.offsetTop;

    const clase2w = clase2.offsetWidth;
    const clase2h = clase2.offsetHeight;
    const clase2x = clase2.offsetLeft;
    const clase2y = clase2.offsetTop;

    const clase3w = clase3.offsetWidth;
    const clase3h = clase3.offsetHeight;
    const clase3x = clase3.offsetLeft;
    const clase3y = clase3.offsetTop;

    const bombw = bomb.offsetWidth;
    const bombh = bomb.offsetHeight;
    const bombx = bomb.offsetLeft;
    const bomby = bomb.offsetTop;

    const bomb2w = bomb2.offsetWidth;
    const bomb2h = bomb2.offsetHeight;
    const bomb2x = bomb2.offsetLeft;
    const bomb2y = bomb2.offsetTop;

    if (juego == true) {// condicio para iniciar 
        // comprobamos que alla colision prducto1
        if ((estudiantex + estudiantew) > clase1x && estudiantex < (clase1x + clase1w)
            && (estudiantey + estudianteh) > clase1y && estudiantey < (clase1y + clase1h)) {
            // hacemos que al hacer colision desaparezca
            if (puntuacion < 100) {
                puntuacion = puntuacion + 5;
            }
            clase1.style.top = '0px';
            clase1.style.left = getRandomNumber() + 'px';
            clase1.style.backgroundImage = getRandomImage();//recoremos la funcion para cambio de imagenes 
        }

        // comprobamos que alla colision clase2
        if ((estudiantex + estudiantew) > clase2x && estudiantex < (clase2x + clase2w)
            && (estudiantey + estudianteh) > clase2y && estudiantey < (clase2y + clase2h)) {
            // hacemos que al hacer colision desaparezca
            if (puntuacion < 100) {
                puntuacion = puntuacion + 5;
            }
            clase2.style.top = '0px';
            clase2.style.left = getRandomNumber() + 'px';
            clase2.style.backgroundImage = getRandomImage();//recoremos la funcion para cambio de imagenes 
        }

        // comprobamos que alla colision clase3
        if ((estudiantex + estudiantew) > clase3x && estudiantex < (clase3x + clase3w)
            && (estudiantey + estudianteh) > clase3y && estudiantey < (clase3y + clase3h)) {
            // hacemos que al hacer colision desaparezca
            if (puntuacion < 100) {
                puntuacion = puntuacion + 5;
            }
            clase3.style.top = '0px';
            clase3.style.left = getRandomNumber() + 'px';
            clase3.style.backgroundImage = getRandomImage();//recoremos la funcion para cambio de imagenes 
        }
        if ((estudiantex + estudiantew) > bombx && estudiantex < (bombx + bombw)
            && (estudiantey + estudianteh) > bomby && estudiantey < (bomby + bombh)) {
            // hacemos que al hacer colision desaparezca
            if (puntuacion < 100 && puntuacion >= 5) {
                puntuacion = puntuacion - 5;
            }
            bomb.style.top = '0px';
            bomb.style.left = getRandomNumber() + 'px';
        }
        if ((estudiantex + estudiantew) > bomb2x && estudiantex < (bomb2x + bomb2w)
            && (estudiantey + estudianteh) > bomb2y && estudiantey < (bomb2y + bomb2h)) {
            // hacemos que al hacer colision desaparezca
            if (puntuacion < 100 && puntuacion >= 5) {
                puntuacion = puntuacion - 5;
            }
            bomb2.style.top = '0px';
            bomb2.style.left = getRandomNumber() + 'px';
        }
    }
});

//contador para que el jugador tenga un minuto ,repetimos la funcion en un intervalo de (1 segundo)
const tiempojuego = setInterval(function () {
    if (juego) {
        tiempo--;
        contador.innerHTML = "<p> Tiempo <br>" + tiempo + "</p>";
        if (tiempo <= 0) {
            clearInterval(tiempojuego);
            final();
        }
    } else{
        contador.innerHTML = "<p> Tiempo <br>  </p>";
    }
}, 950);


intervalpuntuacion = setInterval(function () {//funcio per a la puntuacio 
    document.getElementById("puntuacion").innerHTML = "<p> puntuacion <br>" + puntuacion + "</p>";
    if (puntuacion >= 100) {
        // alert("fin de juego");
        clearInterval(intervalpuntuacion);
        final();
    }
}, 100);

function final() { //funcion para terminar juego 
    clase1.style.display = "none";
    clase2.style.display = "none";
    clase3.style.display = "none";
    bomb.style.display = "none";
    bomb2.style.display = "none";
    estudiante.style.display = "none";
    alert("juego finalizado");
    juego = false;
    ajax_mandar();
}

botonIniciar.addEventListener("click", function () {//funcion para empezar juego 
    juego = true;
    botonIniciar.style.visibility = "hidden";
    clase1.style.display = "block";
    clase2.style.display = "block";
    clase3.style.display = "block";
    bomb.style.display = "block";
    estudiante.style.display = "block";
    if (difficulty >= 4) {
        bomb2.style.display = "block";
    };
})

botonDifFacil.addEventListener("click", function () {
    dificultad();
    difficulty = 1;
    tiempo = 60;
});

botonDifMedia.addEventListener("click", function () {
    dificultad();
    difficulty = 2;
    tiempo = 55;
});
botonDifDificil.addEventListener("click", function () {
    dificultad();
    difficulty = 3;
    tiempo = 50;
});
botonDifMuyDificil.addEventListener("click", function () {
    dificultad();
    difficulty = 4;
    tiempo = 40;
});

botonDifInfierno.addEventListener("click", function () {
    dificultad();
    difficulty = 5;
    tiempo = 30;
});

function dificultad() {
    botonIniciar.style.visibility = "visible";
    botonDifFacil.style.visibility = "hidden";
    botonDifMedia.style.visibility = "hidden";
    botonDifDificil.style.visibility = "hidden";
    botonDifMuyDificil.style.visibility = "hidden";
    botonDifInfierno.style.visibility = "hidden";
}