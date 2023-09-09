const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const shortBt = document.querySelector('.app__card-button--curto');
const longBt = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');

focoBt.addEventListener('click', () => {
    alterContent('foco');
});

shortBt.addEventListener('click', () => {
    alterContent('descanso-curto');

});

longBt.addEventListener('click', () => {
    alterContent('descanso-longo');
});

function alterContent(content) {
    html.setAttribute('data-contexto', content);
    banner.setAttribute('src', `/images/${content}.png`);
}
