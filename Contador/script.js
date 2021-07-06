function startTimer(duration, display){
    var timer = duration, minutes, seconds;
    setInterval(function(){  
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        if (minutes && seconds >= 0){
            display.textContent = minutes + ":" + seconds;
            timer--;
        }
    }, 1000)
}
window.onload = function(){
    var entrada=0;
    entrada= document.getElementById('entrada').value;
    console.log(entrada);
    if (entrada > 0){
        var duration = 60*entrada;
        display= document.querySelector('#cont');
        startTimer(duration, display);
    }
    else alert("Insira um número maior que 0")
}