function start_clk(obj){
    setInterval(function(){
        var d = new Date();
        var sec = d.getSeconds();
        var min = d.getMinutes();
        var hr = d.getHours();
        obj.innerHTML = formatTime(hr) + ":" + formatTime(min) + ":" + formatTime(sec);
    }, 1000);
}

function formatTime(time){
    return time < 10 ? "0" + time : time;
}
