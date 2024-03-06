var timer = 60;
var score = 0;
var hitrn = 0;
//jispe click wo element par event raise hoga , aur event listener na milne par event element ke parent par listener search and waha bhi na milne par , parent->parent->parent par listener dundega

function incScore() {
    score += 10;
    document.querySelector("#sVal").textContent = score;
}

function getNewHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn;
}

function makeBubble() {
    var clutter = "";
    for (var i = 1; i <= 102; i++) {
      clutter += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
    }

    document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimmer() {
    var timeR = setInterval(function () { 
        if (timer > 0)
        {
            timer--;
            document.querySelector("#timerVal").textContent = timer; 
        }
        else
        {
            clearInterval(timeR);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
        }
        
    }, 1000);
}

document.querySelector("#pbtm").addEventListener("click", function (dets) {
    var clickedNum = Number(dets.target.textContent);
    if (clickedNum === hitrn)
    {
        incScore();
        makeBubble();
        getNewHit();
    }
})

makeBubble();
runTimmer();
getNewHit();
