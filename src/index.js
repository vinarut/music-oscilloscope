const audio = document.querySelector('.music-oscilloscope__player');
const canvas = document.querySelector('.music-oscilloscope__area');
const play = document.querySelector('.music-oscilloscope__play');
const pause = document.querySelector('.music-oscilloscope__pause');
const stop = document.querySelector('.music-oscilloscope__stop');
const mute = document.querySelector('.music-oscilloscope__sound-mute');
const up = document.querySelector('.music-oscilloscope__sound-up');
const rewind = document.querySelector('.music-oscilloscope__rewind-input');
const sound = document.querySelector('.music-oscilloscope__sound-input');
const downPlaybackRate = document.querySelector('.music-oscilloscope__angle-down');
const upPlaybackRate = document.querySelector('.music-oscilloscope__angle-up');
const playbackRate = document.querySelector('.music-oscilloscope__playback-rate');

// let audioContext = new (window.AudioContext || window.webkitAudioContext)();
// let analyser = audioContext.createAnalyser();
// source = audioContext.createMediaStreamSource();
// source.connect(analyser);
// analyser.connect(distortion);
// distortion.connect(audioContext.destination);
// analyser.fftSize = 2048;
// let bufferLength = analyser.frequencyBinCount;
// let dataArray = new Uint8Array(bufferLength);

// console.log(canvas);

// canvas.clearRect(0, 0, canvas.width, canvas.height);

pause.style.display = 'none';
rewind.setAttribute('max', audio.duration);
rewind.value = audio.currentTime;
let volumeValueBeforeMute;

play.onclick = function(){
    audio.play();
    play.style.display = 'none';
    pause.style.display = 'inline';
}

pause.onclick = function(){
    audio.pause();
    pause.style.display = 'none';
    play.style.display = 'inline';
}

stop.onclick = function(){
    audio.currentTime = 0;
    audio.playbackRate = 1;
    audio.volume = 0.5;
    sound.value = 0.5;
    audio.pause();
    pause.style.display = 'none';
    play.style.display = 'inline';
}

sound.oninput = function(){
    audio.volume = sound.value;
}

rewind.oninput = function(){
    audio.currentTime = rewind.value;
}

audio.ontimeupdate = function(){
    rewind.value = audio.currentTime;
}

downPlaybackRate.onclick = function(){
    if (audio.playbackRate !== 0)
        audio.playbackRate -= 0.25;
}

upPlaybackRate.onclick = function(){
    if (audio.playbackRate !== 2)
        audio.playbackRate += 0.25;
}

mute.onclick = function(){
    audio.volume = volumeValueBeforeMute;
    sound.value = volumeValueBeforeMute;
    up.style.display = 'inline';
    mute.style.display = 'none';
}

up.onclick = function(){
    volumeValueBeforeMute = audio.volume;
    audio.volume = 0;
    sound.value = 0;
    mute.style.display = 'inline';
    up.style.display = 'none';
}