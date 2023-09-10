const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const shortBt = document.querySelector('.app__card-button--curto');
const longBt = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');
const title = document.querySelector('.app__title');
const buttons = document.querySelectorAll('.app__card-button');
const btnPlayPause = document.querySelector('#start-pause');
const musicFocoInput = document.querySelector('#alter-music');
const music = new Audio('/sounds/luna-rise-part-one.mp3');
const playTimer = new Audio('/sounds/play.wav');
const pauseTimer = new Audio('/sounds/pause.mp3');
const finishTimer = new Audio('/sounds/beep.mp3');



music.loop = true;

let timer = 5;
let intervalId;

musicFocoInput.addEventListener('change', () => {
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
});

focoBt.addEventListener('click', () => {
    alterContent('foco');
    focoBt.classList.add('active');
});

shortBt.addEventListener('click', () => {
    alterContent('descanso-curto');
    shortBt.classList.add('active');
});

longBt.addEventListener('click', () => {
    alterContent('descanso-longo');
    longBt.classList.add('active');
});

function alterContent(content) {
    buttons.forEach(function (content) {
        content.classList.remove('active');
    });
    html.setAttribute('data-contexto', content);
    banner.setAttribute('src', `/images/${content}.png`);
    switch (content) {
        case "foco":
            title.innerHTML = `
            Otimize sua produtividade, <br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>
            `
            break;
        case "descanso-curto":
            title.innerHTML = `
            Que tal dar uma respirada? <br>
                <strong class="app__title-strong">faça uma pausa curta!</strong>
            `
            break;
        case "descanso-longo":
            title.innerHTML = `
            Hora de voltar à superficie. <br>
                <strong class="app__title-strong">faça uma pausa longa!</strong>
            `
            break;
        default:
            break;
    }
}

const countdownTimer = () => {
    if (timer <= 0) {
        finishTimer.play();
        clearTimer();
        return
    }
    timer -= 1;
    console.log('My timer ' + timer);
}

btnPlayPause.addEventListener('click', playOrPauseTimer);

function playOrPauseTimer() {

    if (intervalId) {
        pauseTimer.play();
        clearTimer();
        return
    }
    playTimer.play();
    intervalId = setInterval(countdownTimer, 1000);
}

function clearTimer() {
    clearInterval(intervalId);
    intervalId = null;
    timer = 5;
}


