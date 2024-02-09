
let video = document.querySelector("#miVideo");
let tiempo = document.querySelector(".tiempo");
let tiempoActual;
let videoTexto = document.querySelector(".texto");
let tiempoTotal = document.querySelector(".tiempoTotal");

video.addEventListener("loadeddata", () => {
    tiempo.textContent = transformacion(video.duration);
});

const transformacion = (tiempo) => {
    let min = Math.floor(tiempo / 60);
    let seg = Math.floor(tiempo % 60);
    seg = seg < 10 ? '0' + seg : seg;

    return min + ":" + seg;
}

document.getElementById('video_playBtn').addEventListener('click', () => {
    if (isFinite(video.duration)) {
        video.play();
        videoTexto.innerHTML = "Duracion";
        tiempoTotal.innerHTML = " / 4:41";
        tiempoActual = setInterval(() => {
            tiempo.textContent = transformacion(video.currentTime);
        }, 1000);
    }
});

document.getElementById('video_pauseBtn').addEventListener('click', () => {
    video.pause();
    clearInterval(tiempoActual);
});