
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

const fontSlider = document.getElementById("fontranger");
const borderSlider = document.getElementById("borderranger");
const textColor = document.getElementById("textcolor");
const bgColor = document.getElementById("bgcolor");


let modifiedStyle = document.createElement("style");

modifiedStyle.innerHTML = `
    #fontranger::after{width: ${fontSlider.value}%;} 
    #borderranger::after{width: ${borderSlider.value}%;}
    #textcolor::after{background-color: ${textColor.value};}
    #bgcolor::after{background-color: ${bgColor.value};}
`;

document.head.appendChild(modifiedStyle);

// function silderFunc( val ){
//     let silderValue = val.value;
//     console.log(silderValue);
//     console.log(this);
// }
function makeUpdate(){
    const sfx = this.dataset.pixels || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + sfx)
    modifiedStyle.innerHTML = `
    #fontranger::after{width: ${(fontSlider.value - 30) * 10}%;} 
    #borderranger::after{width: ${borderSlider.value * 6.666}%;}
    #textcolor::after{background-color: ${textColor.value};}
    #bgcolor::after{background-color: ${bgColor.value};}
`;
console.log(borderSlider.value)
}


fontSlider.addEventListener('change', makeUpdate);
borderSlider.addEventListener("change", makeUpdate);
textColor.addEventListener("change", makeUpdate);
bgColor.addEventListener("change", makeUpdate);