const volume = document.getElementById('volume-slider');
const audioctl = document.querySelector('.master');
    
    
volume.addEventListener('input', ()=> {
        audioctl.volume = volume.value;
});