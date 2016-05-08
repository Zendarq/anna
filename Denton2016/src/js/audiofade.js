/**
 * Created by slouie on 5/7/2016.
 */
function audioVolumeIn(q){
    if(q.volume){
        var InT = 0;
        var setVolume = 1;
        var speed = 0.002;
        q.volume = InT;
        var eAudio = setInterval(function() {
            InT += speed;
            q.volume = InT.toFixed(1);
            if(InT.toFixed(1) >= setVolume){
                clearInterval(eAudio);
                //alert('clearInterval eAudio'+ InT.toFixed(1));
            };
        },10);
    };
};

function audioVolumeOut(q){
    if(q.volume){
        var InT = 1;
        var setVolume = 0;
        var speed = 0.001;
        q.volume = InT;
        var fAudio = setInterval(function(){
            InT -= speed;
            q.volume = InT.toFixed(1);
            if(InT.toFixed(1) <= setVolume){
                clearInterval(fAudio);
                //alert('clearInterval fAudio'+ InT.toFixed(1));
            };
        },4);
    };
};
