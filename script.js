const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const shortBt = document.querySelector('.app__card-button--curto');
const longBt = document.querySelector('.app__card-button--longo');

focoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'foco')
});

shortBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-curto');
});

longBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-longo');
});