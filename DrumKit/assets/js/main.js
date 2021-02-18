
const keys = document.querySelectorAll(`div[data-key]`);
function audioPlay(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    key.classList.add("playing");
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
}
window.addEventListener('keydown', audioPlay);

function removePlaying(){
    this.classList.remove("playing");
}

keys.forEach( singleKey => {
    singleKey.addEventListener('click', (e)=> {
        e.preventDefault;
        const audioKey = e.path[1].dataset.key;
        singleKey.classList.add("playing");
        const clickAudio = document.querySelector(`audio[data-key="${audioKey}"]`);
        clickAudio.currentTime = 0;
        clickAudio.play();
    });
    singleKey.addEventListener('animationend', removePlaying);
})