const timeOnClock = document.querySelector('.myh2');
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;


function start(){
    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10); 
        isRunning = true;
    }
}

function stop(){ 
    if(isRunning){
        clearInterval(timer);
        elapsedTime =  Date.now() - startTime ;
        isRunning = false;
    }
}

function reset(){
    startTime = 0;
    elapsedTime = 0;
    clearInterval(timer);
    isRunning = false;
    timeOnClock.innerHTML = '00:00:00:00'
}

function update(){
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hrs = Math.floor(elapsedTime / (1000 * 60 * 60));
    let min = Math.floor(elapsedTime / (1000 * 60) % 60);
    let sec = Math.floor(elapsedTime / 1000 % 60);
    let milsec = Math.floor(elapsedTime % 1000 / 10);

    hrs = String(hrs).padStart(2, '0')
    min = String(min).padStart(2, '0')
    sec = String(sec).padStart(2, '0')
    milsec = String(milsec).padStart(2, '0')

    timeOnClock.innerHTML = `${hrs}:${min}:${sec}:${milsec}`
}