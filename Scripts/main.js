function time() {
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();

    minutes = checkTime(minutes);
    seconds = checkTime(seconds);

    document.getElementById("time").innerHTML = hours + ":" + minutes + ":" + seconds;
    setTimeout(time, 1000);
    /*changeBackground(hours);*/
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

/*function changeBackground(x) {
    if (x >= 12 && x < 24) {
        document.querySelector(".background").style.background = "url(../programmingAssignment2/Images/eyenebula.jpg)";
            document.querySelector(".background").style.backgroundSize = "cover";
            document.querySelector(".background").style.marginTop = "460px";
            document.querySelector(".background").style.marginLeft = "100px";
    } 
}*/

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
    /*var correctMoon = new TimelineMax({repeat:0});*/

    var today = new Date();
    var correction = today.getMinutes() * 6;
    var correctSeconds = today.getSeconds() * 0.1;
    var correctHours = makeAnalog(today.getHours()) * 30;
    var correctMinutes = today.getMinutes() * 0.5;

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
    
    /*correctMoon.to('#moonBox', 0,0001, {
        ease: Power0.easeNone,
        rotation: -correction 
    });*/

    tl3.to('#moonBox', 60, {
        ease: Power0.easeNone,
        rotation: 360
    });

}());
