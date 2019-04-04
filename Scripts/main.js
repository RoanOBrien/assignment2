function time() {
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();

    minutes = checkTime(minutes);
    seconds = checkTime(seconds);

    document.getElementById("time").innerHTML = hours + ":" + minutes + ":" + seconds;
    setTimeout(time, 1000);
    
}

time();

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function makeAnalog(i) {
    if (i > 12) {
        i = i - 12;
    }
    return i;
}

(function () {
    var tl1 = new TimelineMax({
        repeat: -1
    });
    var tl2 = new TimelineMax({
        repeat: -1
    });
    var tl3 = new TimelineMax({
        repeat: -1
    });
    var preSolar = new TimelineMax({
        repeat: 1
    });
    var preMars = new TimelineMax({
        repeat: 1
    });
    var Mars = new TimelineMax({
        repeat: -1
    });
    var preMoon = new TimelineMax({
        repeat: 0
    });

    var today = new Date();
    var correction = today.getMinutes() * 6;
    var correctSeconds = today.getSeconds() * 0.1;
    var correctHours = makeAnalog(today.getHours()) * 30;
    var correctMinutes = today.getMinutes() * 0.5;
    var moonCorrection = 40;
    

    preSolar.set('#preset', {
        rotation: correction + correctSeconds
    });

    preMars.set('#mars-box', {
        rotation: correctHours + correctMinutes
    });

    Mars.to('#mars-box', 21600, {
        ease: Power0.easeNone,
        rotation: 360
    });

    tl1.to('#solarSystem-box', 3600, {
        ease: Power0.easeNone,
        rotation: 360
    });

    tl2.to('#earth-moon-box', 3600, {
        ease: Power0.easeNone,
        rotation: -360
    });

    tl3.to('#moonBox', 60, {
        ease: Power0.easeNone,
        rotation: 360
    });

}());
